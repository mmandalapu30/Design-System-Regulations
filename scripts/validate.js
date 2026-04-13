const Ajv = require("ajv");
const addFormats = require("ajv-formats");
const fs = require("fs");
const path = require("path");

const SCHEMA_PATH = path.join(__dirname, "..", "schemas", "regulation-schema.json");
const DATA_DIR = path.join(__dirname, "..", "data");
const DOMAINS = ["android", "ios", "health", "automotive"];

function loadJSON(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(content);
}

function validateSchema() {
  const schema = loadJSON(SCHEMA_PATH);
  const ajv = new Ajv({ allErrors: true, strict: false });
  addFormats(ajv);

  const validate = ajv.compile(schema);
  let allValid = true;
  let totalRegulations = 0;
  let totalRules = 0;

  for (const domain of DOMAINS) {
    const filePath = path.join(DATA_DIR, domain, "design-regulations.json");

    if (!fs.existsSync(filePath)) {
      console.error(`FAIL: Missing data file: ${filePath}`);
      allValid = false;
      continue;
    }

    const data = loadJSON(filePath);
    const valid = validate(data);

    if (!valid) {
      console.error(`FAIL: ${domain}/design-regulations.json`);
      for (const err of validate.errors) {
        console.error(`  - ${err.instancePath} ${err.message}`);
      }
      allValid = false;
    } else {
      const regulationCount = data.regulations.length;
      const ruleCount = data.regulations.reduce(
        (sum, reg) => sum + reg.rules.length,
        0
      );
      totalRegulations += regulationCount;
      totalRules += ruleCount;
      console.log(
        `PASS: ${domain}/design-regulations.json (${regulationCount} regulations, ${ruleCount} rules)`
      );
    }

    // Additional validations beyond JSON Schema
    const domainErrors = validateDomainData(data, domain);
    if (domainErrors.length > 0) {
      allValid = false;
      for (const err of domainErrors) {
        console.error(`  WARN: ${err}`);
      }
    }
  }

  console.log(
    `\nSummary: ${totalRegulations} regulations, ${totalRules} rules across ${DOMAINS.length} domains`
  );

  if (allValid) {
    console.log("All validations passed.");
  } else {
    console.error("Some validations failed.");
    process.exit(1);
  }
}

function validateDomainData(data, expectedDomain) {
  const errors = [];

  // Check domain matches directory
  if (data.domain !== expectedDomain) {
    errors.push(
      `Domain field "${data.domain}" does not match directory "${expectedDomain}"`
    );
  }

  // Check for unique regulation IDs
  const regIds = new Set();
  for (const reg of data.regulations) {
    if (regIds.has(reg.id)) {
      errors.push(`Duplicate regulation ID: ${reg.id}`);
    }
    regIds.add(reg.id);

    // Check for unique rule IDs within each regulation
    const ruleIds = new Set();
    for (const rule of reg.rules) {
      if (ruleIds.has(rule.id)) {
        errors.push(`Duplicate rule ID: ${rule.id} in regulation ${reg.id}`);
      }
      ruleIds.add(rule.id);
    }
  }

  // Check that lastUpdated is a valid date
  const dateVal = new Date(data.lastUpdated);
  if (isNaN(dateVal.getTime())) {
    errors.push(`Invalid lastUpdated date: ${data.lastUpdated}`);
  }

  return errors;
}

validateSchema();
