# JSON Schema Documentation

This document explains the structure of the design regulation data schema defined in [`schemas/regulation-schema.json`](../schemas/regulation-schema.json). All data files in `data/{domain}/design-regulations.json` must conform to this schema.

The schema is based on [JSON Schema Draft-07](http://json-schema.org/draft-07/schema#).

---

## Top-Level Object

Every domain data file is a single JSON object with the following fields:

| Field | Type | Required | Description |
|---|---|---|---|
| `domain` | string (enum) | ✅ Yes | The platform or domain. Must be one of: `android`, `ios`, `health`, `automotive`. |
| `version` | string | ✅ Yes | Semantic version of this data file (e.g., `"1.0.0"`). Pattern: `^\d+\.\d+\.\d+$`. |
| `lastUpdated` | string | ✅ Yes | ISO 8601 date of last update (e.g., `"2026-04-13"`). Format: `date`. |
| `description` | string | No | A human-readable summary of what this regulation set covers. |
| `references` | array | No | List of domain-level external standards this regulation set is based on. See [Reference Object](#reference-object). |
| `regulations` | array | ✅ Yes | The list of regulations for this domain. Must contain at least 1 item. See [Regulation Object](#regulation-object). |

### Example

```json
{
  "domain": "android",
  "version": "1.0.0",
  "lastUpdated": "2026-04-13",
  "description": "Design system regulations for Android applications...",
  "references": [...],
  "regulations": [...]
}
```

---

## Reference Object

Used in both the top-level `references` array and within individual regulation `references` arrays.

| Field | Type | Required | Description |
|---|---|---|---|
| `name` | string | ✅ Yes | Short display name of the standard or resource (e.g., `"Material Design 3"`). |
| `url` | string (uri) | ✅ Yes (domain-level) / No (regulation-level) | The URL of the resource. Must be a valid URI. |
| `description` | string | No | A brief explanation of what the standard covers. |

### Example

```json
{
  "name": "Material Design 3",
  "url": "https://m3.material.io/",
  "description": "Google's open-source design system for building beautiful, usable products."
}
```

---

## Regulation Object

Each item in the top-level `regulations` array represents a single regulation area with the following fields:

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | string | ✅ Yes | Unique identifier. Pattern: `^[A-Z]+-\d{3}$` (e.g., `"AND-001"`, `"HLT-007"`). |
| `category` | string (enum) | ✅ Yes | The design category. See [Category Values](#category-values). |
| `title` | string | ✅ Yes | Short, human-readable title (e.g., `"Type Scale Compliance"`). |
| `description` | string | ✅ Yes | A detailed explanation of what the regulation covers and why it matters. |
| `severity` | string (enum) | ✅ Yes | How critical this regulation is. See [Severity Values](#severity-values). |
| `rules` | array | ✅ Yes | One or more specific rules that define this regulation. Must contain at least 1 item. See [Rule Object](#rule-object). |
| `tags` | array of strings | No | Keywords for searching and filtering (e.g., `["accessibility", "wcag"]`). |
| `references` | array | No | External references specific to this regulation. Uses the [Reference Object](#reference-object) format. |

### ID Naming Convention

Regulation IDs follow the pattern `[PREFIX]-[NNN]` where:
- `AND` = Android
- `IOS` = iOS
- `HLT` = Health
- `AUT` = Automotive
- `NNN` = zero-padded 3-digit sequence number (e.g., `001`, `010`)

### Category Values

| Value | Description |
|---|---|
| `typography` | Text rendering, font sizes, type scale, Dynamic Type |
| `color` | Color systems, contrast ratios, dark mode, color semantics |
| `spacing` | Layout grids, margins, padding, touch target sizes |
| `layout` | Screen layout structure, zones, responsive breakpoints |
| `accessibility` | Screen reader support, focus management, assistive technologies |
| `components` | UI component usage standards and patterns |
| `navigation` | Navigation architecture, back behavior, gestures |
| `iconography` | Icon sizing, labeling, symbol systems |
| `motion` | Animation, transitions, reduce motion |
| `feedback` | Errors, loading states, haptics, notifications |
| `compliance` | Legal and regulatory compliance (HIPAA, GDPR) |
| `safety` | Safety-critical design (clinical safety, driver safety) |
| `interaction` | Input patterns, gestures, voice control |
| `data-display` | Displaying structured data (clinical data, charts) |
| `privacy` | Data privacy, permissions, screen security |

### Severity Values

| Value | Meaning | Description |
|---|---|---|
| `mandatory` | Must implement | Required for safety, legal compliance, or platform certification. Failure creates significant risk. |
| `recommended` | Should implement | Best practice for quality user experience. Deviations should be justified. |
| `optional` | May implement | Enhancement that improves experience in some contexts but is not required. |

### Example

```json
{
  "id": "AND-001",
  "category": "typography",
  "title": "Type Scale Compliance",
  "description": "All text elements must follow the Material Design 3 type scale...",
  "severity": "mandatory",
  "rules": [...],
  "tags": ["material-design", "typography", "readability"],
  "references": [
    {
      "name": "Material Design 3 Typography",
      "url": "https://m3.material.io/styles/typography/overview"
    }
  ]
}
```

---

## Rule Object

Each item in a regulation's `rules` array defines a specific, testable requirement:

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | string | ✅ Yes | Unique identifier. Pattern: `^[A-Z]+-\d{3}-\d{2}$` (e.g., `"AND-001-01"`). |
| `description` | string | ✅ Yes | Short label describing what the rule checks (e.g., `"Minimum body text size"`). |
| `requirement` | string | ✅ Yes | The full, precise requirement statement. Should be actionable and unambiguous. |
| `value` | any | No | A concrete numeric or string value for the rule (e.g., `14`, `4.5`, `"200-500"`). |
| `unit` | string | No | The unit of measurement for `value` (e.g., `"sp"`, `"dp"`, `"ms"`, `"ratio"`, `"percent"`). |
| `rationale` | string | No | The reasoning or evidence behind this rule. Explains *why* it exists. |

### Rule ID Naming Convention

Rule IDs follow the pattern `[REGULATION-ID]-[NN]` where `NN` is a zero-padded 2-digit sequence:
- `AND-001-01` = Android, regulation 001, rule 01
- `HLT-002-05` = Health, regulation 002, rule 05

### Common Units

| Unit | Applies to |
|---|---|
| `sp` | Android scale-independent pixels (text sizes) |
| `dp` | Android density-independent pixels (layout) |
| `pt` | iOS points (text and layout sizes) |
| `mm` | Automotive physical measurement |
| `ratio` | Contrast ratios (e.g., 4.5) |
| `percent` | Scaling factors |
| `ms` | Milliseconds (animation duration) |
| `fps` | Frames per second (animation smoothness) |
| `seconds` | Time durations |
| `mph` | Speed for automotive motion lockout |
| `steps` | Number of interaction steps |
| `items` | Maximum list items |
| `characters` | Maximum text line length |
| `grade-level` | Reading level for health content |
| `data-points` | Information density |

### Example

```json
{
  "id": "AND-001-01",
  "description": "Minimum body text size",
  "requirement": "Body text must be at least 14sp to ensure readability on all device sizes.",
  "value": 14,
  "unit": "sp",
  "rationale": "Text below 14sp becomes difficult to read on standard mobile screens."
}
```

---

## Complete Schema Structure (Visual)

```
{domain data file}
├── domain          (string enum: android | ios | health | automotive)
├── version         (string: semver)
├── lastUpdated     (string: ISO date)
├── description     (string)
├── references[]    (array of Reference objects)
│   ├── name        (string, required)
│   ├── url         (string URI, required)
│   └── description (string)
└── regulations[]   (array of Regulation objects, min 1)
    ├── id          (string: [A-Z]+-\d{3})
    ├── category    (string enum: 15 values)
    ├── title       (string)
    ├── description (string)
    ├── severity    (string enum: mandatory | recommended | optional)
    ├── rules[]     (array of Rule objects, min 1)
    │   ├── id          (string: [A-Z]+-\d{3}-\d{2})
    │   ├── description (string)
    │   ├── requirement (string)
    │   ├── value       (any)
    │   ├── unit        (string)
    │   └── rationale   (string)
    ├── tags[]      (array of strings)
    └── references[](array of Reference objects)
        ├── name    (string, required)
        └── url     (string URI)
```

---

## Validation

Run the validation script to check all data files against this schema:

```bash
npm install
npm run validate
```

The validator (`scripts/validate.js`) performs two levels of checking:
1. **JSON Schema validation** — ensures every field has the correct type, format, and enumerated value.
2. **Domain-level validation** — checks for duplicate IDs, verifies the `domain` field matches the file's directory name, and validates the `lastUpdated` date.

### Expected output (all passing)

```
PASS: android/design-regulations.json (10 regulations, 35 rules)
PASS: ios/design-regulations.json (10 regulations, 37 rules)
PASS: health/design-regulations.json (10 regulations, 38 rules)
PASS: automotive/design-regulations.json (10 regulations, 39 rules)

Summary: 40 regulations, 149 rules across 4 domains
All validations passed.
```

---

*Schema source: [`schemas/regulation-schema.json`](../schemas/regulation-schema.json)*
