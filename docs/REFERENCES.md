# Complete Reference Links Catalog

A consolidated catalog of every external standard, guideline, and resource referenced across all four design regulation domains. Each link is annotated with the domain(s) that cite it and the regulations that use it.

---

## Table of Contents

- [Platform Design Systems](#platform-design-systems)
- [Accessibility Standards](#accessibility-standards)
- [Privacy & Legal Compliance](#privacy--legal-compliance)
- [Clinical & Medical Standards](#clinical--medical-standards)
- [Automotive Safety Standards](#automotive-safety-standards)
- [All Links by Domain](#all-links-by-domain)

---

## Platform Design Systems

### Material Design 3 (Android)
**URL:** https://m3.material.io/  
**Domain:** Android  
**Regulations:** AND-001, AND-002, AND-003, AND-005  
**Description:** Google's open-source design system for building beautiful, usable Android and cross-platform products. Defines the type scale, color system, 8dp spacing grid, component library, and motion principles used as the canonical Android design standard.

**Sub-pages cited:**

| Topic | URL | Used in |
|---|---|---|
| Typography | https://m3.material.io/styles/typography/overview | AND-001 |
| Color System | https://m3.material.io/styles/color/overview | AND-002 |
| Layout | https://m3.material.io/foundations/layout/understanding-layout/overview | AND-003 |
| Components | https://m3.material.io/components | AND-005 |

---

### Apple Human Interface Guidelines (iOS)
**URL:** https://developer.apple.com/design/human-interface-guidelines/  
**Domain:** iOS  
**Regulations:** IOS-001, IOS-002, IOS-003, IOS-004, IOS-005, IOS-006, IOS-007, IOS-008, IOS-010  
**Description:** Apple's comprehensive design guidance for iOS, iPadOS, macOS, watchOS, and tvOS. Covers Dynamic Type, Safe Area layout, system colors, SF Symbols, gestures, navigation patterns, and accessibility features.

**Sub-pages cited:**

| Topic | URL | Used in |
|---|---|---|
| Typography (HIG) | https://developer.apple.com/design/human-interface-guidelines/typography | IOS-001 |
| Color (HIG) | https://developer.apple.com/design/human-interface-guidelines/color | IOS-002 |
| Layout (HIG) | https://developer.apple.com/design/human-interface-guidelines/layout | IOS-003 |
| Components (HIG) | https://developer.apple.com/design/human-interface-guidelines/components | IOS-005 |
| Navigation (HIG) | https://developer.apple.com/design/human-interface-guidelines/navigation | IOS-006 |
| Feedback (HIG) | https://developer.apple.com/design/human-interface-guidelines/feedback | IOS-008 |

---

### Android Automotive OS Design Guidelines
**URL:** https://developer.android.com/training/cars  
**Domain:** Automotive  
**Regulations:** AUT-005  
**Description:** Google's guidelines for designing applications for Android Automotive OS and Android Auto, covering voice interaction, driver distraction requirements, media and navigation templates.

---

### Apple CarPlay Human Interface Guidelines
**URL:** https://developer.apple.com/carplay/documentation/CarPlay-App-Programming-Guide.pdf  
**Domain:** Automotive  
**Description:** Apple's design guidelines for building CarPlay-compatible applications. Covers the categories of apps permitted in CarPlay (audio, navigation, messaging, parking, EV charging, fueling, driving task, and quick food ordering apps).

---

### Google Play Design Guidelines
**URL:** https://developer.android.com/distribute/best-practices/develop/design-for-quality  
**Domain:** Android  
**Description:** Quality and design guidelines for apps distributed on the Google Play Store, including requirements for tablet support, notifications, accessibility, and performance.

---

## Accessibility Standards

### WCAG 2.1 (Web Content Accessibility Guidelines)
**URL:** https://www.w3.org/TR/WCAG21/  
**Domains:** Android, iOS, Health  
**Regulations:** AND-001, AND-002, AND-004, IOS-001, IOS-002, IOS-004, HLT-003  
**Description:** The W3C's internationally recognized standard for web and mobile accessibility. Defines three conformance levels: A, AA, and AAA. Android and iOS regulations require Level AA; Health regulations require Level AAA for clinical data displays.

**Key WCAG principles cited:**

| Principle | Requirement | Used in |
|---|---|---|
| Contrast ratio (AA) | 4.5:1 normal text, 3:1 large text | AND-002, IOS-002 |
| Contrast ratio (AAA) | 7:1 normal text, 4.5:1 large text | HLT-003 |
| Font scaling | Support up to 200% (mobile), 300% (clinical) | AND-001, HLT-003 |
| Non-text content | Alternative text for images/icons | AND-004, IOS-004 |
| Focus order | Logical sequential focus | AND-004 |

---

### Android Accessibility Developer Guide
**URL:** https://developer.android.com/guide/topics/ui/accessibility  
**Domain:** Android  
**Regulations:** AND-004  
**Description:** Android's official developer documentation on implementing TalkBack support, content descriptions, focus traversal, live regions, and accessibility testing tools (Accessibility Scanner).

---

### Apple Accessibility Guidelines
**URL:** https://developer.apple.com/accessibility/  
**Domain:** iOS  
**Regulations:** IOS-004  
**Description:** Apple's accessibility developer resources for VoiceOver, Switch Control, Dynamic Type, Voice Control, Guided Access, and other iOS/macOS/tvOS/watchOS assistive technologies.

---

### Android Navigation Principles
**URL:** https://developer.android.com/guide/navigation/navigation-principles  
**Domain:** Android  
**Regulations:** AND-006  
**Description:** Google's documentation on Android navigation architecture, including the Navigation component, back stack management, deep linking, and predictable navigation behavior.

---

### Section 508
**URL:** https://www.section508.gov/  
**Domain:** Health  
**Regulations:** HLT-003  
**Description:** US federal law (Section 508 of the Rehabilitation Act) requiring federal agencies and federally funded programs to make electronic and information technology accessible to people with disabilities. Applicable to health IT systems receiving federal funding.

---

### CDC Health Literacy Resources
**URL:** https://www.cdc.gov/healthliteracy/  
**Domain:** Health  
**Regulations:** HLT-003  
**Description:** The Centers for Disease Control and Prevention's resources on health literacy, plain language, and communicating health information to diverse audiences. Informs the requirement for patient-facing content to be written at a 6th-grade reading level.

---

## Privacy & Legal Compliance

### HIPAA Privacy Rule
**URL:** https://www.hhs.gov/hipaa/for-professionals/privacy/index.html  
**Domain:** Health  
**Regulations:** HLT-001, HLT-008  
**Description:** The US Department of Health and Human Services regulation establishing national standards for protecting individually identifiable health information (PHI). Defines requirements for access controls, minimum necessary standards, and patient rights.

---

### HIPAA Security Rule
**URL:** https://www.hhs.gov/hipaa/for-professionals/security/index.html  
**Domain:** Health  
**Regulations:** HLT-001  
**Description:** The companion security standard to the HIPAA Privacy Rule, requiring administrative, physical, and technical safeguards to protect electronic PHI (ePHI). Cited for session timeout, screen security, and audit trail requirements.

---

### FDA Mobile Medical Applications Guidance
**URL:** https://www.fda.gov/medical-devices/digital-health-center-excellence/device-software-functions-including-mobile-medical-applications  
**Domain:** Health  
**Regulations:** HLT-002  
**Description:** The US Food and Drug Administration's guidance on which mobile medical applications are subject to FDA oversight as medical devices, and what design and safety requirements apply. Informs the clinical safety regulations for medication and diagnostic data display.

---

### App Store Review Guidelines
**URL:** https://developer.apple.com/app-store/review/guidelines/  
**Domain:** iOS  
**Regulations:** IOS-009  
**Description:** Apple's rules governing what apps are permitted on the App Store, including privacy requirements (nutrition labels, permission descriptions), App Tracking Transparency, content policies, and safety requirements.

---

## Clinical & Medical Standards

### ISMP Tall Man Lettering List
**URL:** https://www.ismp.org/recommendations/tall-man-letters-list  
**Domain:** Health  
**Regulations:** HLT-002  
**Description:** The Institute for Safe Medication Practices' recommended list of look-alike/sound-alike drug name pairs using Tall Man lettering (mixed case) to visually differentiate them (e.g., DOBUTamine vs DOPamine, hydrALAZINE vs hydrOXYzine).

---

### Joint Commission National Patient Safety Goals
**URL:** https://www.jointcommission.org/standards/national-patient-safety-goals/  
**Domain:** Health  
**Regulations:** HLT-002  
**Description:** The Joint Commission's annually updated goals for improving patient safety in accredited healthcare organizations. NPSG.01.01.01 requires using at least two patient identifiers before providing care, which drives the two-identifier display requirement.

---

### HL7 FHIR (Fast Healthcare Interoperability Resources)
**URL:** https://www.hl7.org/fhir/  
**Domain:** Health  
**Regulations:** HLT-004  
**Description:** The international standard for exchanging healthcare information electronically. Defines the data models and formats for clinical resources (observations, medications, conditions) that inform how lab results, vital signs, and other clinical data should be structured and displayed.

---

### IEC 62366 — Usability Engineering for Medical Devices
**URL:** https://www.iso.org/standard/63179.html  
**Domain:** Health  
**Description:** The international standard specifying a process for analyzing, specifying, designing, verifying, and validating the usability of a medical device. Applies to both hardware and software (including health applications), requiring formative and summative usability studies.

---

## Automotive Safety Standards

### NHTSA Visual-Manual Driver Distraction Guidelines
**URL:** https://www.nhtsa.gov/technology-innovation/driver-distraction  
**Version:** Phase 2, 2013 (DOT HS 812 483)  
**Domain:** Automotive  
**Regulations:** AUT-001, AUT-006, AUT-007, AUT-010  
**Description:** The National Highway Traffic Safety Administration's Phase 1 (2012) and Phase 2 (2013, DOT HS 812 483) guidelines for limiting driver distraction caused by in-vehicle electronic devices. Establishes the foundational rules: maximum 2-second single glance (Section 4.1.1), maximum 12-second total task time (Section 4.1.2), motion lockout for high visual-manual demand tasks (Section 4.2), and limits on interaction steps (Section 4.3) and list length (Section 4.4).

---

### ISO 15005 — Dialogue Management in Transport Systems
**URL:** https://www.iso.org/standard/55741.html  
**Version:** ISO 15005:2002  
**Domain:** Automotive  
**Regulations:** AUT-004  
**Description:** International standard specifying ergonomic principles for the design of dialogue management systems in road vehicles. Covers how information is presented and how the driver interacts with in-vehicle systems to minimize cognitive and visual load.

---

### ISO 15008 — Specification for Road Vehicle Displays
**URL:** https://www.iso.org/standard/62794.html  
**Version:** ISO 15008:2017  
**Domain:** Automotive  
**Regulations:** AUT-002, AUT-003  
**Description:** International standard specifying requirements for the presentation of information on road vehicle secondary displays. Defines minimum character heights (6.4mm), contrast requirements, image quality criteria, and legibility conditions that underpin the typography regulations.

---

### ISO 2575 — Road Vehicles: Symbols for Controls, Indicators and Tell-tales
**URL:** https://www.iso.org/standard/72798.html  
**Version:** ISO 2575:2021 (4th edition; supersedes ISO 2575:2010, ISO 2575:2004, ISO 2575:1982)  
**Domain:** Automotive  
**Regulations:** AUT-003, AUT-011  
**Description:** International standard defining standardized symbols (icons) and colors for vehicle controls, warning lights, and telltale indicators. The color conventions (red = critical, amber = warning, green = normal, blue = informational) defined here form the basis for the automotive color semantics regulation and all telltale symbol requirements.

---

### FMVSS No. 101 — Controls and Displays
**URL:** https://www.ecfr.gov/current/title-49/part-571/section-571.101  
**Version:** 49 CFR § 571.101 (as codified 2024; originally issued 1967, substantively amended 1992, 2003, and subsequently)  
**Domain:** Automotive  
**Regulations:** AUT-011  
**Description:** U.S. Federal Motor Vehicle Safety Standard No. 101 specifying required controls, telltales, and indicators for all motor vehicles sold in the United States. Table 1 lists the mandatory telltale set with required activation conditions and permissible indicator colors. Section S5.1 specifies operability requirements; S5.2.1 specifies visibility requirements. The standard was amended in 2003 (68 FR 67966) to require TPMS telltales for model year 2007+ vehicles and references ISO 2575 for symbol conformance.

---

### ISO 26262 — Functional Safety for Road Vehicles
**URL:** https://www.iso.org/standard/68383.html  
**Version:** ISO 26262:2018 (2nd edition)  
**Domain:** Automotive  
**Description:** International standard for functional safety of electrical and electronic systems in road vehicles. Defines Automotive Safety Integrity Levels (ASIL A–D) for safety-critical software. Informs the overall safety posture of automotive HMI design.

---

## All Links by Domain

### Android — All Links

| Name | URL | Used in |
|---|---|---|
| Material Design 3 | https://m3.material.io/ | Domain reference |
| Material Design 3 Typography | https://m3.material.io/styles/typography/overview | AND-001 |
| Material Design 3 Color System | https://m3.material.io/styles/color/overview | AND-002 |
| Material Design 3 Layout | https://m3.material.io/foundations/layout/understanding-layout/overview | AND-003 |
| Android Accessibility Guidelines | https://developer.android.com/guide/topics/ui/accessibility | Domain reference, AND-004 |
| Material Design 3 Components | https://m3.material.io/components | AND-005 |
| Android Navigation Principles | https://developer.android.com/guide/navigation/navigation-principles | AND-006 |
| WCAG 2.1 | https://www.w3.org/TR/WCAG21/ | Domain reference |
| Google Play Design Guidelines | https://developer.android.com/distribute/best-practices/develop/design-for-quality | Domain reference |

### iOS — All Links

| Name | URL | Used in |
|---|---|---|
| Apple Human Interface Guidelines | https://developer.apple.com/design/human-interface-guidelines/ | Domain reference |
| HIG Typography | https://developer.apple.com/design/human-interface-guidelines/typography | IOS-001 |
| HIG Color | https://developer.apple.com/design/human-interface-guidelines/color | IOS-002 |
| HIG Layout | https://developer.apple.com/design/human-interface-guidelines/layout | IOS-003 |
| Apple Accessibility Guidelines | https://developer.apple.com/accessibility/ | Domain reference, IOS-004 |
| HIG Components | https://developer.apple.com/design/human-interface-guidelines/components | IOS-005 |
| HIG Navigation | https://developer.apple.com/design/human-interface-guidelines/navigation | IOS-006 |
| HIG Feedback | https://developer.apple.com/design/human-interface-guidelines/feedback | IOS-008 |
| WCAG 2.1 | https://www.w3.org/TR/WCAG21/ | Domain reference |
| App Store Review Guidelines | https://developer.apple.com/app-store/review/guidelines/ | Domain reference, IOS-009 |

### Health — All Links

| Name | URL | Used in |
|---|---|---|
| HIPAA Privacy Rule | https://www.hhs.gov/hipaa/for-professionals/privacy/index.html | Domain reference |
| HIPAA Security Rule | https://www.hhs.gov/hipaa/for-professionals/security/index.html | HLT-001 |
| FDA Mobile Medical Applications Guidance | https://www.fda.gov/medical-devices/digital-health-center-excellence/device-software-functions-including-mobile-medical-applications | Domain reference |
| ISMP Tall Man Lettering | https://www.ismp.org/recommendations/tall-man-letters-list | HLT-002 |
| Joint Commission Patient Safety Goals | https://www.jointcommission.org/standards/national-patient-safety-goals/ | HLT-002 |
| WCAG 2.1 Level AA | https://www.w3.org/TR/WCAG21/ | Domain reference, HLT-003 |
| Section 508 Standards | https://www.section508.gov/ | Domain reference, HLT-003 |
| CDC Health Literacy Resources | https://www.cdc.gov/healthliteracy/ | HLT-003 |
| HL7 FHIR Display Standards | https://www.hl7.org/fhir/ | HLT-004 |
| IEC 62366 Usability Engineering | https://www.iso.org/standard/63179.html | Domain reference |

### Automotive — All Links

| Name | URL | Used in |
|---|---|---|
| NHTSA Driver Distraction Guidelines | https://www.nhtsa.gov/technology-innovation/driver-distraction | Domain reference, AUT-001, AUT-006, AUT-007, AUT-010 |
| ISO 15005 Dialogue Management | https://www.iso.org/standard/55741.html | Domain reference, AUT-004 |
| ISO 15008 Road Vehicle Displays | https://www.iso.org/standard/62794.html | Domain reference, AUT-002, AUT-003 |
| ISO 2575 Vehicle Symbols | https://www.iso.org/standard/72798.html | AUT-003, AUT-011 |
| ISO 26262 Functional Safety | https://www.iso.org/standard/68383.html | Domain reference |
| Android Automotive OS Guidelines | https://developer.android.com/training/cars | Domain reference, AUT-005, AUT-006, AUT-008, AUT-010 |
| Apple CarPlay HIG | https://developer.apple.com/carplay/documentation/CarPlay-App-Programming-Guide.pdf | Domain reference |
| FMVSS No. 101 — Controls and Displays | https://www.ecfr.gov/current/title-49/part-571/section-571.101 | Domain reference, AUT-011 |
| WCAG 2.1 | https://www.w3.org/TR/WCAG21/ | AUT-009 |

---

## Summary: All Unique Links (37 total)

| # | Name | URL | Domains |
|---|---|---|---|
| 1 | Material Design 3 | https://m3.material.io/ | Android |
| 2 | Material Design 3 Typography | https://m3.material.io/styles/typography/overview | Android |
| 3 | Material Design 3 Color System | https://m3.material.io/styles/color/overview | Android |
| 4 | Material Design 3 Layout | https://m3.material.io/foundations/layout/understanding-layout/overview | Android |
| 5 | Material Design 3 Components | https://m3.material.io/components | Android |
| 6 | Android Accessibility Developer Guide | https://developer.android.com/guide/topics/ui/accessibility | Android |
| 7 | Android Navigation Principles | https://developer.android.com/guide/navigation/navigation-principles | Android |
| 8 | Google Play Design Guidelines | https://developer.android.com/distribute/best-practices/develop/design-for-quality | Android |
| 9 | Apple Human Interface Guidelines | https://developer.apple.com/design/human-interface-guidelines/ | iOS |
| 10 | HIG Typography | https://developer.apple.com/design/human-interface-guidelines/typography | iOS |
| 11 | HIG Color | https://developer.apple.com/design/human-interface-guidelines/color | iOS |
| 12 | HIG Layout | https://developer.apple.com/design/human-interface-guidelines/layout | iOS |
| 13 | HIG Components | https://developer.apple.com/design/human-interface-guidelines/components | iOS |
| 14 | HIG Navigation | https://developer.apple.com/design/human-interface-guidelines/navigation | iOS |
| 15 | HIG Feedback | https://developer.apple.com/design/human-interface-guidelines/feedback | iOS |
| 16 | Apple Accessibility Guidelines | https://developer.apple.com/accessibility/ | iOS |
| 17 | App Store Review Guidelines | https://developer.apple.com/app-store/review/guidelines/ | iOS |
| 18 | Apple CarPlay HIG | https://developer.apple.com/carplay/documentation/CarPlay-App-Programming-Guide.pdf | Automotive |
| 19 | WCAG 2.1 | https://www.w3.org/TR/WCAG21/ | Android, iOS, Health, Automotive |
| 20 | Section 508 | https://www.section508.gov/ | Health |
| 21 | CDC Health Literacy Resources | https://www.cdc.gov/healthliteracy/ | Health |
| 22 | HIPAA Privacy Rule | https://www.hhs.gov/hipaa/for-professionals/privacy/index.html | Health |
| 23 | HIPAA Security Rule | https://www.hhs.gov/hipaa/for-professionals/security/index.html | Health |
| 24 | FDA Mobile Medical Applications Guidance | https://www.fda.gov/medical-devices/digital-health-center-excellence/device-software-functions-including-mobile-medical-applications | Health |
| 25 | ISMP Tall Man Lettering | https://www.ismp.org/recommendations/tall-man-letters-list | Health |
| 26 | Joint Commission Patient Safety Goals | https://www.jointcommission.org/standards/national-patient-safety-goals/ | Health |
| 27 | HL7 FHIR Display Standards | https://www.hl7.org/fhir/ | Health |
| 28 | IEC 62366 Usability Engineering | https://www.iso.org/standard/63179.html | Health |
| 29 | NHTSA Driver Distraction Guidelines | https://www.nhtsa.gov/technology-innovation/driver-distraction | Automotive |
| 30 | ISO 15005 Dialogue Management | https://www.iso.org/standard/55741.html | Automotive |
| 31 | ISO 15008 Road Vehicle Displays | https://www.iso.org/standard/62794.html | Automotive |
| 32 | ISO 2575 Vehicle Symbols | https://www.iso.org/standard/72798.html | Automotive |
| 33 | ISO 26262 Functional Safety | https://www.iso.org/standard/68383.html | Automotive |
| 34 | Android Automotive OS Design Guidelines | https://developer.android.com/training/cars | Automotive |
| 35 | Android Navigation Principles | https://developer.android.com/guide/navigation/navigation-principles | Android |
| 36 | FMVSS No. 101 — Controls and Displays | https://www.ecfr.gov/current/title-49/part-571/section-571.101 | Automotive |
| 37 | WCAG 2.1 (Automotive) | https://www.w3.org/TR/WCAG21/ | Automotive (AUT-009) |
