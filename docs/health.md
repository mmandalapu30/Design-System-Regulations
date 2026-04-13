# Health Design Regulations

**Domain:** `health` | **Version:** 1.0.0 | **Last Updated:** 2026-04-13

Design system regulations for health and medical applications, encompassing HIPAA compliance, FDA guidelines, clinical safety requirements, WCAG accessibility, and patient-centered design principles.

---

## Domain-Level Reference Links

| Standard | URL | Description |
|---|---|---|
| HIPAA Privacy Rule | https://www.hhs.gov/hipaa/for-professionals/privacy/index.html | Health Insurance Portability and Accountability Act requirements for protecting patient health information. |
| FDA Mobile Medical Applications Guidance | https://www.fda.gov/medical-devices/digital-health-center-excellence/device-software-functions-including-mobile-medical-applications | FDA guidance on the regulation of mobile medical applications. |
| WCAG 2.1 Level AA | https://www.w3.org/TR/WCAG21/ | Web Content Accessibility Guidelines, especially important for health applications serving diverse populations. |
| IEC 62366 Usability Engineering | https://www.iso.org/standard/63179.html | International standard for usability engineering of medical devices. |
| Section 508 | https://www.section508.gov/ | Federal accessibility requirements applicable to health IT systems. |

---

## Regulations Overview

| ID | Category | Title | Severity |
|---|---|---|---|
| [HLT-001](#hlt-001-hipaa-ui-compliance) | compliance | HIPAA UI Compliance | 🔴 mandatory |
| [HLT-002](#hlt-002-clinical-safety-ui-standards) | safety | Clinical Safety UI Standards | 🔴 mandatory |
| [HLT-003](#hlt-003-health-application-accessibility) | accessibility | Health Application Accessibility | 🔴 mandatory |
| [HLT-004](#hlt-004-clinical-data-visualization) | data-display | Clinical Data Visualization | 🔴 mandatory |
| [HLT-005](#hlt-005-clinical-color-system) | color | Clinical Color System | 🔴 mandatory |
| [HLT-006](#hlt-006-health-typography-standards) | typography | Health Typography Standards | 🔴 mandatory |
| [HLT-007](#hlt-007-clinical-interaction-patterns) | interaction | Clinical Interaction Patterns | 🔴 mandatory |
| [HLT-008](#hlt-008-patient-data-privacy-ui) | privacy | Patient Data Privacy UI | 🔴 mandatory |
| [HLT-009](#hlt-009-clinical-component-standards) | components | Clinical Component Standards | 🔴 mandatory |
| [HLT-010](#hlt-010-clinical-layout-standards) | layout | Clinical Layout Standards | 🟡 recommended |

**Severity key:** 🔴 mandatory · 🟡 recommended · 🔵 optional

> ⚠️ The majority of Health regulations are **mandatory** due to patient safety, legal (HIPAA/FDA), and clinical accuracy requirements.

---

## HLT-001 — HIPAA UI Compliance

> User interfaces must enforce HIPAA requirements for the display, transmission, and storage of Protected Health Information (PHI).

**Category:** compliance | **Severity:** 🔴 mandatory  
**Tags:** `hipaa` `phi` `compliance` `security`

**References:**
- [HIPAA Security Rule](https://www.hhs.gov/hipaa/for-professionals/security/index.html)

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| HLT-001-01 | PHI display controls | PHI must be masked or hidden by default on screen. Users must perform an explicit action (tap to reveal, authentication) to view full PHI. Partial masking (showing last 4 digits of MRN) is acceptable for identification. | — | — | PHI displayed openly on screen can be exposed through shoulder surfing, screen sharing, or screenshots. |
| HLT-001-02 | Session timeout display | Applications must display a visible countdown or warning at least 30 seconds before an automatic session timeout occurs, giving users the option to extend their session. | 30 | seconds | Healthcare professionals need time to save work before HIPAA-mandated session expiration. |
| HLT-001-03 | Audit trail visibility | Applications must provide a user-accessible audit log showing who accessed a patient record and when, meeting HIPAA's minimum necessary standard. | — | — | HIPAA requires accounting of disclosures and access auditing for PHI. |
| HLT-001-04 | Screen capture prevention | Screens displaying PHI must prevent or warn about screen capture. On mobile, FLAG_SECURE (Android) or screen recording notifications (iOS) must be implemented. | — | — | Screen captures of PHI create unencrypted copies that violate HIPAA safeguards. |

---

## HLT-002 — Clinical Safety UI Standards

> User interfaces for clinical workflows must minimize the risk of patient harm through clear, unambiguous design.

**Category:** safety | **Severity:** 🔴 mandatory  
**Tags:** `clinical-safety` `patient-safety` `medications` `lasa`

**References:**
- [ISMP Tall Man Lettering](https://www.ismp.org/recommendations/tall-man-letters-list)
- [Joint Commission Patient Safety Goals](https://www.jointcommission.org/standards/national-patient-safety-goals/)

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| HLT-002-01 | Critical value highlighting | Abnormal or critical lab values, vital signs, and medication alerts must be visually distinct using both color and iconography (e.g., red background plus warning icon). Critical values must use a minimum text size of 18sp/pt. | 18 | sp | Missed critical values can lead to delayed treatment and patient harm. |
| HLT-002-02 | Medication name display | Medication names must use Tall Man lettering (e.g., DOBUTamine vs DOPamine) to differentiate look-alike/sound-alike (LASA) drug names. Generic and brand names must both be displayed. | — | — | ISMP and FDA recommend Tall Man lettering to reduce medication errors from name confusion. |
| HLT-002-03 | Dosage input validation | Dosage input fields must enforce range limits, display the unit of measurement alongside the input, and require explicit confirmation for values exceeding typical ranges. | — | — | Incorrect dosage entry is a leading cause of medication errors in health IT systems. |
| HLT-002-04 | Confirmation for irreversible actions | Irreversible clinical actions (medication administration, order signing, discharge) must require a two-step confirmation with a clear summary of the action being taken. | — | — | Single-tap irreversible actions in clinical contexts can result in patient safety incidents. |
| HLT-002-05 | Patient identification display | Every clinical screen must display at least two patient identifiers (name plus date of birth, or name plus MRN) in a fixed, prominent location to prevent wrong-patient errors. | — | — | The Joint Commission's National Patient Safety Goals require two-identifier verification. |

---

## HLT-003 — Health Application Accessibility

> Health applications must exceed standard accessibility requirements due to the critical nature of health information and the diverse needs of patient populations.

**Category:** accessibility | **Severity:** 🔴 mandatory  
**Tags:** `accessibility` `wcag-aaa` `health-literacy` `multilingual`

**References:**
- [Section 508 Standards](https://www.section508.gov/)
- [CDC Health Literacy Resources](https://www.cdc.gov/healthliteracy/)

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| HLT-003-01 | Enhanced contrast requirement | Text contrast must meet WCAG 2.1 Level AAA (7:1 for normal text, 4.5:1 for large text) for all clinical data displays. | 7 | ratio | Clinical environments often have suboptimal lighting, and users may have impaired vision. |
| HLT-003-02 | Minimum clinical text size | Clinical data text (vitals, lab results, medication names) must be at least 16sp/pt at default scale and must support user scaling up to 300%. | 16 | sp | Healthcare workers may read screens at a distance or under stress; larger text reduces errors. |
| HLT-003-03 | Screen reader optimization | All clinical data must be properly structured for screen readers with logical grouping, meaningful labels, and correct reading order. Tabular data must use proper table semantics. | — | — | Healthcare professionals and patients with visual impairments must be able to access health data. |
| HLT-003-04 | Multilingual support | Patient-facing health applications must support at minimum English and Spanish, with the ability to add additional languages. Medical terminology must be available in plain language. | — | — | Limited English proficiency is a significant barrier to healthcare access in the US. |
| HLT-003-05 | Cognitive accessibility | Health information must be presented at a maximum 6th-grade reading level for patient-facing content. Medical jargon must be supplemented with plain-language explanations. | 6 | grade-level | Average US health literacy is at the 7th–8th grade level; targeting 6th grade ensures broader comprehension. |

---

## HLT-004 — Clinical Data Visualization

> Clinical data must be presented in clear, accurate, and standardized formats to support safe clinical decision-making.

**Category:** data-display | **Severity:** 🔴 mandatory  
**Tags:** `data-display` `vitals` `lab-results` `clinical-data`

**References:**
- [HL7 FHIR Display Standards](https://www.hl7.org/fhir/)

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| HLT-004-01 | Vital signs display format | Vital signs must display the value, unit of measurement, timestamp, and reference range. Values outside the reference range must be visually flagged. | — | — | Complete vital sign context is essential for clinical decision-making. |
| HLT-004-02 | Lab result formatting | Lab results must include the test name, value, unit, reference range, and flag (high/low/critical). Historical trends must be accessible via a chart or table view. | — | — | Incomplete lab data can lead to misinterpretation and inappropriate clinical decisions. |
| HLT-004-03 | Date and time formatting | All clinical timestamps must display date, time, and timezone. The format must be unambiguous (e.g., 13 Apr 2026, 14:30 EDT). Relative times (e.g., '2 hours ago') must not be used for clinical data. | — | — | Ambiguous timestamps in clinical contexts can lead to timing errors in care delivery. |
| HLT-004-04 | Chart and graph standards | Clinical charts must include labeled axes with units, a legend when multiple data series are shown, and interactive data point inspection. Y-axis must start at a clinically meaningful zero or baseline. | — | — | Misleading charts can cause incorrect interpretation of patient trends. |

---

## HLT-005 — Clinical Color System

> Colors in health applications must follow clinical conventions and ensure safety-critical information is never conveyed by color alone.

**Category:** color | **Severity:** 🔴 mandatory  
**Tags:** `color` `clinical-safety` `color-blindness` `alerts`

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| HLT-005-01 | Clinical color semantics | Red must be reserved exclusively for critical/life-threatening alerts and abnormal-high values. Yellow/amber for warnings. Green for normal/within-range values. These color assignments must not be repurposed for branding. | — | — | Clinical staff associate red with emergencies; using red for branding causes alert confusion. |
| HLT-005-02 | Allergy alert color | Allergy alerts must use a distinct, high-contrast color scheme (e.g., red text on yellow/white background) that is unique within the application and not used for any other alert type. | — | — | Allergy alerts must stand out to prevent potentially fatal allergic reactions from missed alerts. |
| HLT-005-03 | Color-blind safe palettes | Clinical status colors must be distinguishable by users with protanopia, deuteranopia, and tritanopia. Simulated color-blind testing must be part of the design review process. | — | — | Approximately 8% of male healthcare workers may have color vision deficiency. |
| HLT-005-04 | Dual coding requirement | All color-coded clinical information must include a secondary visual indicator: icon, pattern, shape, or text label alongside the color. | — | — | Color-only coding fails for color-blind users and in poor lighting conditions common in clinical settings. |

---

## HLT-006 — Health Typography Standards

> Typography in health applications must prioritize legibility and error reduction in high-stakes reading conditions.

**Category:** typography | **Severity:** 🔴 mandatory  
**Tags:** `typography` `legibility` `clinical-data` `patient-safety`

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| HLT-006-01 | Numeric disambiguation | Fonts used for clinical data must clearly disambiguate easily confused characters: 0 (zero) vs O (letter), 1 (one) vs l (lowercase L) vs I (uppercase i). Tabular/monospaced numerals are required for data tables. | — | — | Character confusion in clinical data (e.g., dosage amounts) can cause patient harm. |
| HLT-006-02 | Font weight for emphasis | Critical information must use bold or semibold weight rather than color or italics alone for emphasis. Italic text must not be used for warnings or critical values. | — | — | Bold is more universally perceivable than color or italics across vision conditions. |
| HLT-006-03 | Line length for clinical notes | Clinical narrative text (physician notes, discharge summaries) must have a maximum line length of 80 characters to maintain readability. | 80 | characters | Long lines of medical text increase reading errors and decrease comprehension speed. |

---

## HLT-007 — Clinical Interaction Patterns

> Interaction patterns in health applications must prevent errors and support the high-pressure, time-constrained clinical workflow.

**Category:** interaction | **Severity:** 🔴 mandatory  
**Tags:** `interaction` `clinical-workflow` `patient-safety` `error-prevention`

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| HLT-007-01 | Destructive action safeguards | Destructive actions (delete records, cancel orders) must require a distinct gesture from standard navigation. A confirmation dialog must clearly state what will be affected and the action must be undoable for at least 30 seconds when possible. | 30 | seconds | In high-pressure clinical environments, accidental taps on destructive actions are common. |
| HLT-007-02 | Search behavior for clinical data | Patient search must support search by name, MRN, date of birth, and partial matching. Results must display enough identifying information to prevent wrong-patient selection. | — | — | Efficient, unambiguous patient search is critical to preventing wrong-patient errors. |
| HLT-007-03 | Auto-save for clinical documentation | Clinical documentation entry (notes, assessments, orders) must auto-save drafts at least every 60 seconds with visual indication of save status. | 60 | seconds | Healthcare workers are frequently interrupted; lost documentation wastes time and delays care. |
| HLT-007-04 | Barcode scanning interface | Barcode/QR code scanning for medication and patient identification must provide clear visual framing, real-time feedback on scan success or failure, and a manual entry fallback. | — | — | Barcode scanning is a critical safety verification step; failures must not block the workflow. |

---

## HLT-008 — Patient Data Privacy UI

> User interface design must enforce patient data privacy requirements beyond basic HIPAA compliance.

**Category:** privacy | **Severity:** 🔴 mandatory  
**Tags:** `privacy` `hipaa` `consent` `access-control`

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| HLT-008-01 | Break-the-glass access | Accessing restricted patient records must present a prominent 'break-the-glass' confirmation screen requiring reason documentation before granting access. | — | — | Break-the-glass auditing is a HIPAA requirement for access to restricted records. |
| HLT-008-02 | Consent status display | Patient consent status for data sharing, research participation, and advance directives must be clearly displayed with effective dates and source documentation links. | — | — | Clinical decisions depend on current consent status; unclear display leads to compliance violations. |
| HLT-008-03 | Minimum necessary display | Screens must display only the minimum PHI necessary for the user's role and current task. Role-based field-level visibility must be enforced in the UI. | — | — | HIPAA's minimum necessary standard requires limiting PHI exposure to what is needed. |

---

## HLT-009 — Clinical Component Standards

> Specialized UI components for health applications must follow clinical conventions and safety standards.

**Category:** components | **Severity:** 🔴 mandatory  
**Tags:** `components` `clinical` `medications` `alerts` `patient-header`

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| HLT-009-01 | Medication list component | Medication list components must display drug name (generic + brand), dose, route, frequency, prescriber, and status. Active medications must be visually separated from discontinued or historical medications. | — | — | Complete, organized medication lists reduce prescribing errors and drug interactions. |
| HLT-009-02 | Alert banner component | Clinical alert banners must be persistent (not auto-dismissing), color-coded by severity, and include an action button. Critical alerts must require explicit acknowledgment before dismissal. | — | — | Auto-dismissing clinical alerts can be missed, leading to patient safety events. |
| HLT-009-03 | Patient header component | A persistent patient header must be visible on all clinical screens showing: patient name, photo (if available), age, sex, MRN, and active allergy count with severity indicator. | — | — | Constant patient context prevents wrong-patient actions across screen transitions. |

---

## HLT-010 — Clinical Layout Standards

> Screen layouts in health applications must support efficient clinical workflows and rapid information retrieval.

**Category:** layout | **Severity:** 🟡 recommended  
**Tags:** `layout` `clinical-workflow` `information-architecture`

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| HLT-010-01 | Information density balance | Clinical screens must balance information density with readability. Summary views should display 5–7 key data points; detail views can show more but must use clear section grouping. | 5–7 | data-points | Cognitive overload from excessive data points increases clinical error rates. |
| HLT-010-02 | Consistent clinical layout zones | Clinical screens must use consistent layout zones: patient header (top), alerts/notifications (below header), primary content (center), and actions (bottom). This arrangement must remain consistent across all clinical screens. | — | — | Consistent layout zones reduce cognitive load and speed up information finding. |
| HLT-010-03 | Split-view support | Clinical applications on tablet devices must support split-view layouts allowing side-by-side display of patient lists and individual records. | — | — | Clinical workflows often require comparing data across views simultaneously. |

---

*Data source: [`data/health/design-regulations.json`](../data/health/design-regulations.json)*
