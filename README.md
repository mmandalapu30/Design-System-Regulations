# Design System Regulations

A structured, machine-readable collection of design system regulation data for **Android**, **iOS**, **Health**, and **Automotive** domains. Each domain contains comprehensive regulations covering typography, color, spacing, accessibility, components, navigation, safety, privacy, and more.

## Repository Structure

```
├── data/
│   ├── android/
│   │   └── design-regulations.json   # Material Design 3 & Android platform rules
│   ├── ios/
│   │   └── design-regulations.json   # Human Interface Guidelines & iOS platform rules
│   ├── health/
│   │   └── design-regulations.json   # HIPAA, FDA, clinical safety & patient-centered design
│   └── automotive/
│       └── design-regulations.json   # NHTSA, ISO standards & driver distraction prevention
├── docs/
│   ├── android.md                    # Full documented catalog — Android regulations
│   ├── ios.md                        # Full documented catalog — iOS regulations
│   ├── health.md                     # Full documented catalog — Health regulations
│   ├── automotive.md                 # Full documented catalog — Automotive regulations
│   ├── REFERENCES.md                 # Master list of all 35 external reference links
│   └── SCHEMA.md                     # Complete schema field reference and validation guide
├── schemas/
│   └── regulation-schema.json        # JSON Schema for all regulation data
├── scripts/
│   └── validate.js                   # Validation script
├── package.json
└── README.md
```

## Domains

### Android
Design regulations based on **Material Design 3**, Google Play guidelines, and WCAG accessibility standards. Covers type scale, dynamic color, 8dp grid spacing, TalkBack accessibility, component patterns, navigation architecture, motion, iconography, feedback, and privacy.

📄 **[Full Android Documentation →](docs/android.md)**

### iOS
Design regulations based on **Apple Human Interface Guidelines**, App Store Review Guidelines, and WCAG accessibility. Covers Dynamic Type, dark mode, Safe Area layout, VoiceOver accessibility, SF Symbols, iOS navigation and gesture conventions, haptic feedback, and App Tracking Transparency.

📄 **[Full iOS Documentation →](docs/ios.md)**

### Health
Design regulations for medical and health applications based on **HIPAA**, **FDA** mobile medical app guidance, **IEC 62366**, and clinical safety standards. Covers PHI display controls, clinical safety (Tall Man lettering, dosage validation), enhanced accessibility (WCAG AAA), clinical data visualization, patient identification, and privacy workflows.

📄 **[Full Health Documentation →](docs/health.md)**

### Automotive
Design regulations for in-vehicle infotainment systems based on **NHTSA** driver distraction guidelines, **ISO 15005/15008/26262**, and automotive HMI best practices. Covers glance time limits, motion lockout, day/night color adaptation, touch target sizing for driving, voice control, alert tiering, and parking camera overlays.

📄 **[Full Automotive Documentation →](docs/automotive.md)**

## Documentation

Full human-readable documentation for every regulation, rule, and reference link is available in the `docs/` directory:

| Document | Description |
|---|---|
| [docs/android.md](docs/android.md) | All 10 Android regulations with full rule tables and reference links |
| [docs/ios.md](docs/ios.md) | All 10 iOS regulations with full rule tables and reference links |
| [docs/health.md](docs/health.md) | All 10 Health regulations with full rule tables and reference links |
| [docs/automotive.md](docs/automotive.md) | All 10 Automotive regulations with full rule tables and reference links |
| [docs/REFERENCES.md](docs/REFERENCES.md) | Master catalog of all 35 external reference links across all domains |
| [docs/SCHEMA.md](docs/SCHEMA.md) | Complete field-by-field schema reference with examples |

## Data Format

Each domain file follows the JSON Schema defined in `schemas/regulation-schema.json`. The structure is:

```json
{
  "domain": "android | ios | health | automotive",
  "version": "1.0.0",
  "lastUpdated": "2026-04-13",
  "description": "...",
  "references": [...],
  "regulations": [
    {
      "id": "AND-001",
      "category": "typography | color | spacing | layout | accessibility | ...",
      "title": "...",
      "description": "...",
      "severity": "mandatory | recommended | optional",
      "rules": [
        {
          "id": "AND-001-01",
          "description": "...",
          "requirement": "...",
          "value": 14,
          "unit": "sp",
          "rationale": "..."
        }
      ],
      "tags": ["..."],
      "references": [...]
    }
  ]
}
```

### Severity Levels
- **mandatory** — Must be implemented; failure creates compliance or safety risk
- **recommended** — Should be implemented for best user experience
- **optional** — Nice-to-have enhancement

## Validation

Install dependencies and run the validation script to verify all data files conform to the schema:

```bash
npm install
npm run validate
```

## Statistics

| Domain     | Regulations | Rules |
|------------|-------------|-------|
| Android    | 10          | 35    |
| iOS        | 10          | 37    |
| Health     | 10          | 38    |
| Automotive | 10          | 39    |
| **Total**  | **40**      | **149** |

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.