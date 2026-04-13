# Automotive Design Regulations

**Domain:** `automotive` | **Version:** 1.2.0 | **Last Updated:** 2026-04-13

Design system regulations for automotive in-vehicle infotainment (IVI) and head unit interfaces, based on NHTSA guidelines, ISO standards, and driver distraction research.

> **Schema version note:** As of v1.1.0, each rule now carries a `source_url` pointing to the exact standard page or document section the rule is derived from. The `images` field (optional) in the schema is reserved for verified, publicly accessible image URLs (e.g., regulatory diagram PDFs do not expose standalone image URLs). Standard versions are now tracked in each `references` entry.

---

## Domain-Level Reference Links

| Standard | Version | URL | Description |
|---|---|---|---|
| NHTSA Visual-Manual Driver Distraction Guidelines | Phase 2, 2013 (DOT HS 812 483) | https://www.nhtsa.gov/technology-innovation/driver-distraction | NHTSA guidelines for reducing driver distraction from in-vehicle electronic devices. |
| ISO 15005 - Dialogue Management | ISO 15005:2002 | https://www.iso.org/standard/55741.html | Ergonomic principles of dialogue management in transport information and control systems. |
| ISO 15008 - Road Vehicle Displays | ISO 15008:2017 | https://www.iso.org/standard/62794.html | Specifications for presentation of information on road vehicle displays. |
| Android Automotive OS Design Guidelines | Current (2024) | https://developer.android.com/training/cars | Google design guidelines for Android Automotive OS applications. |
| Apple CarPlay Human Interface Guidelines | Current | https://developer.apple.com/carplay/documentation/CarPlay-App-Programming-Guide.pdf | Apple guidelines for designing CarPlay applications. |
| ISO 26262 Functional Safety | ISO 26262:2018 (2nd edition) | https://www.iso.org/standard/68383.html | Functional safety standard for road vehicles. |
| FMVSS No. 101 - Controls and Displays | 49 CFR 571.101 (as codified 2024) | https://www.ecfr.gov/current/title-49/part-571/section-571.101 | U.S. Federal Motor Vehicle Safety Standard specifying required controls, indicators, and telltales. |
| ISO 2575 - Symbols for Controls, Indicators and Tell-tales | ISO 2575:2021 (4th edition) | https://www.iso.org/standard/72798.html | International standard for vehicle telltale, indicator, and control symbols and colors. |

---

## Regulations Overview

| ID | Category | Title | Severity |
|---|---|---|---|
| [AUT-001](#aut-001-driver-distraction-prevention) | safety | Driver Distraction Prevention | 🔴 mandatory |
| [AUT-002](#aut-002-in-vehicle-typography) | typography | In-Vehicle Typography | 🔴 mandatory |
| [AUT-003](#aut-003-automotive-color-system) | color | Automotive Color System | 🔴 mandatory |
| [AUT-004](#aut-004-in-vehicle-display-layout) | layout | In-Vehicle Display Layout | 🔴 mandatory |
| [AUT-005](#aut-005-driver-interaction-patterns) | interaction | Driver Interaction Patterns | 🔴 mandatory |
| [AUT-006](#aut-006-in-vehicle-navigation-ui) | navigation | In-Vehicle Navigation UI | 🔴 mandatory |
| [AUT-007](#aut-007-automotive-alerts-and-notifications) | feedback | Automotive Alerts and Notifications | 🔴 mandatory |
| [AUT-008](#aut-008-automotive-component-standards) | components | Automotive Component Standards | 🔴 mandatory |
| [AUT-009](#aut-009-automotive-accessibility) | accessibility | Automotive Accessibility | 🔴 mandatory |
| [AUT-010](#aut-010-automotive-motion-and-animation) | motion | Automotive Motion and Animation | 🔴 mandatory |
| [AUT-011](#aut-011-vehicle-telltale-display-regulations) | safety | Vehicle Telltale Display Regulations | 🔴 mandatory |
| [AUT-012](#aut-012-telltale-design-requirements-catalog) | safety | Telltale Design Requirements Catalog | 🔴 mandatory |

**Severity key:** 🔴 mandatory · 🟡 recommended · 🔵 optional

> ⚠️ All automotive regulations are **mandatory** — non-compliance directly increases crash risk and may violate federal safety standards.

---

## AUT-001 — Driver Distraction Prevention

> In-vehicle interfaces must minimize driver distraction in compliance with NHTSA guidelines and international driver distraction standards.

**Category:** safety | **Severity:** 🔴 mandatory  
**Tags:** `safety` `distraction` `nhtsa` `motion-lockout`

**References:**
- [NHTSA Phase 2 Distraction Guidelines](https://www.nhtsa.gov/technology-innovation/driver-distraction) *(version: Phase 2, 2013 (DOT HS 812 483))*

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale | Source |
|---|---|---|---|---|---|---|
| AUT-001-01 | Glance time limit | Any single glance at the display must not require more than 2 seconds of visual attention. Tasks requiring multiple glances must be completable within a total of 12 seconds. | 2 | seconds | NHTSA Phase 2 guidelines (DOT HS 812 483, Section 4.1.1) specify a 2-second single-glance criterion derived from occlusion testing. Glances exceeding 2 seconds significantly increase crash risk. | [source](https://www.nhtsa.gov/technology-innovation/driver-distraction) |
| AUT-001-02 | Task completion time | Any driver-initiated task must be completable within 12 seconds of total glance time or must be blocked while the vehicle is in motion. | 12 | seconds | NHTSA Phase 2 guidelines (DOT HS 812 483, Section 4.1.2) set the 12-second total task time criterion as the accepted upper limit for secondary in-vehicle tasks. | [source](https://www.nhtsa.gov/technology-innovation/driver-distraction) |
| AUT-001-03 | Motion lockout | Complex interactions (text input, browsing lists longer than 6 items, video playback) must be disabled when the vehicle speed exceeds 5 mph (8 km/h). A clear message must explain why the feature is unavailable. | 5 | mph | NHTSA Phase 2 guidelines (DOT HS 812 483, Section 4.2) require that tasks with high visual-manual demand be unavailable while the vehicle is in motion. Manufacturers implement the lockout at low speed (typically <=5 mph) to cover all moving conditions. | [source](https://www.nhtsa.gov/technology-innovation/driver-distraction) |
| AUT-001-04 | Interaction simplicity | Tasks must require no more than 3 steps (taps, swipes, or voice commands) to complete common actions while driving. Frequently used functions must be accessible in 1-2 interactions. | 3 | steps | NHTSA Phase 2 guidelines (DOT HS 812 483, Section 4.3) limit operational steps to reduce cumulative eyes-off-road time. | [source](https://www.nhtsa.gov/technology-innovation/driver-distraction) |
| AUT-001-05 | Scrolling list limits | Scrollable lists presented to the driver while the vehicle is in motion must not exceed 6 visible items per screen without paging or voice-assisted navigation. | 6 | items | NHTSA Phase 2 guidelines (DOT HS 812 483, Section 4.4) limit list-browsing complexity. Long scrollable lists require repeated glances and extended visual search time. | [source](https://www.nhtsa.gov/technology-innovation/driver-distraction) |

---

## AUT-002 — In-Vehicle Typography

> Text in automotive displays must be readable at a glance under all driving conditions.

**Category:** typography | **Severity:** 🔴 mandatory  
**Tags:** `typography` `iso-15008` `legibility` `glanceability`

**References:**
- [ISO 15008 Display Requirements](https://www.iso.org/standard/62794.html) *(version: ISO 15008:2017)*

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale | Source |
|---|---|---|---|---|---|---|
| AUT-002-01 | Minimum character height | Text on the center display must have a minimum character height of 6.4mm (approximately 18pt at standard viewing distance). Critical information (speed, warnings) must use at least 8mm character height. | 6.4 | mm | ISO 15008:2017 (Section 5.2) specifies minimum character heights based on driver viewing distance and legibility research. | [source](https://www.iso.org/standard/62794.html) |
| AUT-002-02 | Font selection | Fonts must be sans-serif with open apertures and generous x-height. Recommended fonts include Roboto, San Francisco, Noto Sans, or purpose-built automotive fonts. Decorative or condensed fonts are prohibited. | — | — | ISO 15008:2017 specifies legibility requirements for in-vehicle displays. Sans-serif fonts with clear letterforms are most legible during brief glances. | [source](https://www.iso.org/standard/62794.html) |
| AUT-002-03 | Text content brevity | On-screen text presented to the driver must be limited to essential information. Labels must not exceed 3 words. Notification messages must not exceed 2 lines of text. | 3 | words | ISO 15008:2017 requires minimizing textual content on driver-facing displays. Drivers cannot safely read long text. | [source](https://www.iso.org/standard/62794.html) |
| AUT-002-04 | Dynamic text restrictions | Scrolling, animated, or auto-updating text must not be displayed on screens visible to the driver while the vehicle is in motion. | — | — | ISO 15008:2017 prohibits moving text in driver-viewable areas. Moving text requires sustained visual attention incompatible with safe driving. | [source](https://www.iso.org/standard/62794.html) |

---

## AUT-003 — Automotive Color System

> Colors in automotive displays must ensure visibility under all ambient lighting conditions and convey safety-critical information reliably.

**Category:** color | **Severity:** 🔴 mandatory  
**Tags:** `color` `night-mode` `contrast` `safety-colors` `iso-2575`

**References:**
- [ISO 2575 Vehicle Symbols](https://www.iso.org/standard/72798.html) *(version: ISO 2575:2021 (4th edition))*

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale | Source |
|---|---|---|---|---|---|---|
| AUT-003-01 | Day/night contrast | Displays must maintain a minimum contrast ratio of 3:1 in direct sunlight and must automatically adjust brightness for night driving to prevent glare. Night mode must use a dark background with light text. | 3 | ratio | ISO 15008:2017 (Section 5.4) specifies minimum contrast requirements for automotive displays under all ambient lighting conditions. | [source](https://www.iso.org/standard/62794.html) |
| AUT-003-02 | Warning color semantics | Red must be reserved exclusively for critical/danger alerts (engine failure, collision warning). Amber/yellow for caution/warnings. Green for normal/confirmed status. Blue for informational displays. These mappings must never be overridden. | — | — | ISO 2575:2021 (Section 4.1) and FMVSS 101 Table 1 establish universal automotive color-to-severity mappings that drivers rely on across all vehicles. | [source](https://www.iso.org/standard/72798.html) |
| AUT-003-03 | Night mode color restrictions | In night mode, the display must limit bright colors and use a predominantly dark palette. White backgrounds are prohibited. Maximum display brightness must be automatically capped to prevent glare adaptation loss. | — | — | ISO 15008:2017 (Section 5.4) covers luminance requirements for night-time driving. Bright displays at night cause pupil constriction and temporary blindness. | [source](https://www.iso.org/standard/62794.html) |
| AUT-003-04 | Color-independent information | Safety-critical information must never rely on color alone. Shapes (triangle for warning, circle for prohibition), icons, and text labels must always accompany color coding. | — | — | ISO 2575:2021 requires redundant coding for safety information. Approximately 8% of male drivers have color vision deficiency. | [source](https://www.iso.org/standard/72798.html) |
| AUT-003-05 | Ambient light adaptation | Display color temperature and brightness must automatically adapt based on ambient light sensors. Manual brightness override must always be available. | — | — | ISO 15008:2017 (Section 5.4) requires that in-vehicle displays adapt to ambient luminance conditions. | [source](https://www.iso.org/standard/62794.html) |

---

## AUT-004 — In-Vehicle Display Layout

> Display layouts must prioritize safety-critical information and minimize visual search time.

**Category:** layout | **Severity:** 🔴 mandatory  
**Tags:** `layout` `zones` `touch-targets` `hud`

**References:**
- [ISO 15005 Dialogue Management](https://www.iso.org/standard/55741.html) *(version: ISO 15005:2002)*

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale | Source |
|---|---|---|---|---|---|---|
| AUT-004-01 | Information hierarchy zones | The display must be organized into priority zones: Zone 1 (top/center) for driving-critical information (speed, navigation turn, warnings); Zone 2 (middle) for active task content; Zone 3 (bottom/periphery) for status indicators and secondary controls. | — | — | ISO 15005:2002 specifies zoned layout principles to reduce visual search time by placing critical information where drivers look first. | [source](https://www.iso.org/standard/55741.html) |
| AUT-004-02 | Touch target size | Touch targets must be at least 12.7mm x 12.7mm (approximately 48dp) with at least 6mm spacing between adjacent targets. Frequently used controls should be at least 20mm x 20mm. | 12.7 | mm | ISO 15005:2002 requires appropriately sized controls for vehicle environments. Larger touch targets compensate for vehicle vibration and difficulty of precise touch while driving. | [source](https://www.iso.org/standard/55741.html) |
| AUT-004-03 | Split attention minimization | Navigation and speed information must be displayed in the driver's primary line of sight (instrument cluster or HUD) in addition to the center display. | — | — | ISO 15005:2002 recommends placing safety-critical information in the driver's primary visual field to reduce the angular displacement between road view and display. | [source](https://www.iso.org/standard/55741.html) |
| AUT-004-04 | Consistent layout across modes | Core navigation elements (home, back, media controls) must remain in fixed positions regardless of the active application or driving mode. | — | — | ISO 15005:2002 (Section 5.2) recommends consistent control placement so drivers can build spatial memory and reduce glance time. | [source](https://www.iso.org/standard/55741.html) |

---

## AUT-005 — Driver Interaction Patterns

> Interaction patterns must be optimized for the driving context where visual and manual attention are limited.

**Category:** interaction | **Severity:** 🔴 mandatory  
**Tags:** `interaction` `voice-control` `physical-controls` `gestures`

**References:**
- [Android Automotive Interaction Guidelines](https://developer.android.com/training/cars) *(version: Current (2024))*

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale | Source |
|---|---|---|---|---|---|---|
| AUT-005-01 | Voice control as primary input | All frequently used functions (navigation destination, phone calls, media selection, climate control) must be accessible via voice commands as an alternative to touch. | — | — | Android Automotive OS Design Guidelines require voice alternatives for all primary functions to allow eyes-on-road, hands-on-wheel operation. | [source](https://developer.android.com/training/cars) |
| AUT-005-02 | Physical control integration | Steering wheel controls and physical knobs/buttons must be supported for core functions (volume, track skip, call accept/reject, voice activation). Physical controls must take priority over touchscreen equivalents. | — | — | Android Automotive OS Design Guidelines specify physical control integration requirements. Physical controls provide haptic feedback and can be operated without looking. | [source](https://developer.android.com/training/cars) |
| AUT-005-03 | Gesture simplicity | Touch gestures must be limited to tap, swipe, and pinch-to-zoom (for maps only while parked). Multi-finger gestures, long presses, and complex gesture sequences are prohibited while driving. | — | — | Android Automotive OS Design Guidelines prohibit complex gestures in the driving context. Complex gestures require visual attention to perform and verify. | [source](https://developer.android.com/training/cars) |
| AUT-005-04 | Confirmation feedback | Every driver interaction must produce immediate multi-modal feedback: visual change plus audio confirmation or haptic response within 250ms. | 250 | ms | Android Automotive OS Design Guidelines specify response time requirements. Drivers who do not receive immediate feedback will look at the display to verify their action. | [source](https://developer.android.com/training/cars) |

---

## AUT-006 — In-Vehicle Navigation UI

> Navigation and map displays must provide clear guidance while minimizing driver distraction.

**Category:** navigation | **Severity:** 🔴 mandatory  
**Tags:** `navigation` `maps` `turn-by-turn` `driving`

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale | Source |
|---|---|---|---|---|---|---|
| AUT-006-01 | Turn instruction clarity | Turn-by-turn navigation must display: a large directional arrow, distance to next maneuver in driver's preferred unit, street name, and lane guidance. Instructions must be readable in under 2 seconds. | 2 | seconds | NHTSA Phase 2 guidelines (DOT HS 812 483) require that navigation instructions be readable within a single 2-second glance. | [source](https://www.nhtsa.gov/technology-innovation/driver-distraction) |
| AUT-006-02 | Map simplification while driving | While the vehicle is in motion, maps must automatically reduce detail level: hiding non-essential POIs, simplifying road networks, and enlarging the current route. Full detail maps are available only when parked. | — | — | NHTSA Phase 2 guidelines require minimizing visual complexity on driver-facing displays while driving. Detailed maps require extended visual search time. | [source](https://www.nhtsa.gov/technology-innovation/driver-distraction) |
| AUT-006-03 | ETA and route information | Estimated time of arrival, remaining distance, and current road name/speed limit must be persistently visible during active navigation without requiring any interaction. | — | — | Android Automotive OS Design Guidelines specify persistent navigation status display to prevent distraction from repeated taps to check route information. | [source](https://developer.android.com/training/cars) |

---

## AUT-007 — Automotive Alerts and Notifications

> Alerts and notifications must be delivered through appropriate channels based on urgency and driving context.

**Category:** feedback | **Severity:** 🔴 mandatory  
**Tags:** `alerts` `notifications` `audio` `haptics` `safety`

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale | Source |
|---|---|---|---|---|---|---|
| AUT-007-01 | Alert priority levels | Alerts must be categorized into three tiers: Critical (collision, system failure) with visual + audio + haptic delivery; Warning (low fuel, traffic) with visual + audio; Information (message received, weather) with brief visual notification only. | — | — | NHTSA Phase 2 guidelines require alert delivery methods proportionate to urgency to prevent alert fatigue while ensuring critical alerts cannot be missed. | [source](https://www.nhtsa.gov/technology-innovation/driver-distraction) |
| AUT-007-02 | Alert interruption limits | Non-critical notifications must be queued and batched during active navigation maneuvers. No more than one non-critical notification may be displayed per 30-second interval. | 30 | seconds | NHTSA Phase 2 guidelines limit interruption frequency to prevent compounding distraction during critical driving moments. | [source](https://www.nhtsa.gov/technology-innovation/driver-distraction) |
| AUT-007-03 | Audio alert standards | Critical audio alerts must be played at a volume audible over the current media and road noise. Non-critical alerts must respect the user's notification volume setting. Alert sounds must be distinct and not resemble common environmental sounds. | — | — | NHTSA guidelines require safety alerts be audible and distinguishable. Inaudible critical alerts compromise driver safety. | [source](https://www.nhtsa.gov/technology-innovation/driver-distraction) |
| AUT-007-04 | Alert dismissal | Non-critical alerts must auto-dismiss after 5 seconds. Critical alerts must persist until acknowledged by the driver via a single tap or voice command. | 5 | seconds | NHTSA guidelines require non-critical notifications not occupy prolonged screen real estate. Critical alerts must remain visible until the driver acknowledges the hazard. | [source](https://www.nhtsa.gov/technology-innovation/driver-distraction) |

---

## AUT-008 — Automotive Component Standards

> UI components for automotive displays must be designed for the unique constraints of the driving environment.

**Category:** components | **Severity:** 🔴 mandatory  
**Tags:** `components` `media` `climate` `phone` `camera`

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale | Source |
|---|---|---|---|---|---|---|
| AUT-008-01 | Media player component | The media player must display: current track/station info (max 2 lines), album art (optional), and large play/pause/skip controls. Controls must be operable via touch, steering wheel buttons, and voice. | — | — | Android Automotive OS Design Guidelines specify media player component requirements. Media is the most frequently used in-vehicle function. | [source](https://developer.android.com/training/cars) |
| AUT-008-02 | Climate control display | Climate controls must display current temperature, target temperature, fan speed, and air distribution with intuitive visual indicators. Temperature adjustment must be possible in single-tap increments. | — | — | Android Automotive OS Design Guidelines specify climate control interface requirements to minimize steps needed to adjust common settings. | [source](https://developer.android.com/training/cars) |
| AUT-008-03 | Phone call interface | Incoming call screens must display caller name/number prominently with large accept/reject buttons. During calls, the interface must minimize to a small persistent indicator showing call duration and a prominent end-call button. | — | — | Android Automotive OS Design Guidelines require that phone interactions be kept as brief and simple as possible during driving. | [source](https://developer.android.com/training/cars) |
| AUT-008-04 | Parking camera overlay | Rear/surround camera views must display trajectory guidelines, distance indicators, and obstacle highlighting. Camera views must activate automatically when reverse gear is engaged. | — | — | Android Automotive OS Design Guidelines specify parking camera overlay requirements. Camera-assisted parking is a safety feature requiring clear spatial guidance. | [source](https://developer.android.com/training/cars) |

---

## AUT-009 — Automotive Accessibility

> In-vehicle systems must be accessible to drivers and passengers with various abilities.

**Category:** accessibility | **Severity:** 🔴 mandatory  
**Tags:** `accessibility` `voice` `adjustability` `a11y`

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale | Source |
|---|---|---|---|---|---|---|
| AUT-009-01 | Voice interaction accessibility | Voice control must support natural language input (not just exact command phrases), provide voice readback of on-screen content, and allow complete hands-free operation of all non-visual features. | — | — | WCAG 2.1 Guideline 1.3 (Adaptable) and Android Automotive accessibility requirements specify all functionality must be available without visual-manual interaction for users with motor impairments. | [source](https://www.w3.org/TR/WCAG21/) |
| AUT-009-02 | Display adjustability | Display brightness, contrast, text size, and color scheme must be user-adjustable. A high-contrast mode must be available that exceeds standard contrast ratios by at least 50%. | — | — | WCAG 2.1 Guideline 1.4.3 (Contrast) and Android Automotive accessibility guidelines require adjustable display settings for drivers with varying visual capabilities. | [source](https://www.w3.org/TR/WCAG21/) |
| AUT-009-03 | Audio description for visual alerts | All visual alerts and notifications must have an audio equivalent that can be enabled in accessibility settings. Screen reader support must be available for passenger-side infotainment. | — | — | WCAG 2.1 Guideline 1.1.1 (Non-text Content) requires equivalent alternatives for visual information. Drivers with visual impairments may not see visual-only alerts. | [source](https://www.w3.org/TR/WCAG21/) |

---

## AUT-010 — Automotive Motion and Animation

> Motion and animation in automotive displays must enhance usability without creating distraction.

**Category:** motion | **Severity:** 🔴 mandatory  
**Tags:** `motion` `animation` `performance` `driving-mode`

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale | Source |
|---|---|---|---|---|---|---|
| AUT-010-01 | Animation restriction while driving | Non-essential animations (decorative transitions, loading spinners, parallax effects) must be disabled while the vehicle is in motion. Only functional animations (screen transitions, progress indicators) are permitted. | — | — | NHTSA Phase 2 guidelines (DOT HS 812 483) require minimizing any visual elements that attract driver attention without functional benefit. | [source](https://www.nhtsa.gov/technology-innovation/driver-distraction) |
| AUT-010-02 | Transition speed | Screen transitions must complete within 300ms. If content is loading, the new screen frame must appear immediately with content populating progressively. | 300 | ms | NHTSA Phase 2 guidelines require display state changes be immediate. Slow transitions cause drivers to maintain visual attention on the display. | [source](https://www.nhtsa.gov/technology-innovation/driver-distraction) |
| AUT-010-03 | Map animation smoothness | Map scrolling and zoom animations must run at a minimum of 30fps to prevent motion sickness for passengers and maintain spatial orientation for the driver. | 30 | fps | Android Automotive OS Design Guidelines specify minimum frame rates for map rendering. Choppy map animations disrupt spatial understanding. | [source](https://developer.android.com/training/cars) |

---

## AUT-011 — Vehicle Telltale Display Regulations

> In-vehicle telltale indicators (warning lamps and symbols) in digital instrument clusters and IVI systems must comply with FMVSS No. 101 (49 CFR 571.101) for required telltale set, color coding, and operability requirements, and with ISO 2575:2021 for symbol design.

**Category:** safety | **Severity:** 🔴 mandatory  
**Tags:** `safety` `telltale` `warning-lamp` `fmvss-101` `iso-2575` `compliance` `instrument-cluster`

**References:**
- [FMVSS No. 101 - Controls and Displays](https://www.ecfr.gov/current/title-49/part-571/section-571.101) *(version: 49 CFR 571.101 (as codified 2024))*
- [ISO 2575 - Symbols for Controls, Indicators and Tell-tales](https://www.iso.org/standard/72798.html) *(version: ISO 2575:2021 (4th edition))*

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale | Source |
|---|---|---|---|---|---|---|
| AUT-011-01 | Telltale color coding by severity | Telltale indicators must use the following color assignments: Red - imminent safety hazard requiring immediate driver action (brake system failure, oil pressure loss, engine coolant over-temperature, seat belt reminder, air bag system fault); Amber/Yellow - driver attention or service required (malfunction indicator lamp/check engine, tire pressure warning, ABS malfunction, electronic stability control fault, low fuel, battery charge fault); Green - normal operational status confirmation (turn signal active, front fog lamp on, daytime running lamps active); Blue - high-beam headlamp active. No colors other than those defined in FMVSS 101 Table 1 and ISO 2575:2021 Section 4.1 may be used for regulated telltales. | — | — | FMVSS 101 Table 1 specifies permissible telltale colors for each required indicator. ISO 2575:2021 Section 4.1 provides the international color-to-severity framework. Consistent color coding across all vehicles reduces driver response time in emergencies. | [source](https://www.ecfr.gov/current/title-49/part-571/section-571.101) |
| AUT-011-02 | Mandatory telltale set per FMVSS 101 Table 1 | The following telltales must be present and illuminate under the specified conditions per 49 CFR 571.101 S5.1 and Table 1: (1) Brake system warning - red, activates on hydraulic circuit failure or parking brake application while vehicle is in motion; (2) High-beam headlamp indicator - blue, activates when high-beam headlamps are on; (3) Turn signal indicator left - amber; (4) Turn signal indicator right - amber; (5) Oil pressure warning - red, activates at critically low engine oil pressure; (6) Charge indicator - red, activates on charging system fault; (7) Seat belt reminder - red, activates when front outboard occupant seat belt is not latched; (8) Air bag readiness indicator - red, activates on supplemental restraint system fault; (9) Malfunction indicator lamp (MIL/check engine) - amber, activates on OBD-II emissions system fault per 40 CFR Part 86; (10) Tire pressure monitoring system (TPMS) warning - amber, activates when any tire is 25% or more below vehicle placard pressure per 49 CFR 571.138. | — | — | 49 CFR 571.101 (FMVSS No. 101) S5.1 and Table 1 define the legally required minimum telltale set for all light vehicles sold in the United States. The TPMS telltale requirement was added by 49 CFR Part 571 Final Rule (68 FR 67966, December 2003), effective for model year 2007 and later vehicles. | [source](https://www.ecfr.gov/current/title-49/part-571/section-571.101) |
| AUT-011-03 | Symbol conformance to ISO 2575:2021 | Each telltale symbol must use the standardized graphic symbol defined in ISO 2575:2021 (Road vehicles - Symbols for controls, indicators and tell-tales, 4th edition). Where FMVSS 101 Appendix A and ISO 2575:2021 both define a symbol for the same function, the ISO 2575:2021 symbol must be used. Custom symbols are only permissible for vehicle-specific functions not covered by ISO 2575:2021 and must not conflict with or resemble any ISO 2575:2021 symbol. Symbol color must match the color requirement in AUT-011-01. | — | — | ISO 2575:2021 (4th edition, supersedes ISO 2575:2010, ISO 2575:2004, and ISO 2575:1982) is the current international standard for vehicle indicator symbols adopted by FMVSS 101 by reference. Standardized symbols reduce driver learning time and enable cross-vehicle recognition. | [source](https://www.ecfr.gov/current/title-49/part-571/section-571.101) |
| AUT-011-04 | Telltale visibility in digital instrument clusters | In digital instrument clusters and IVI-integrated displays: (1) FMVSS 101-required telltales must occupy a dedicated zone that cannot be obscured, overlaid, or displaced by navigation, media, or application content at any time; (2) Active red-severity telltales must remain visible regardless of the current IVI application or screen state; (3) Minimum telltale symbol display size: 7mm x 7mm in the driver-facing instrument cluster zone; (4) Display luminance must be adjustable between a daytime maximum sufficient for sunlight readability and a nighttime minimum that does not impair night vision, per 49 CFR 571.101 S5.2.1. | 7 | mm | 49 CFR 571.101 S5.2.1 requires telltales to be visible to the driver under all conditions. Digital cluster integration creates the architectural risk of application content obscuring safety-critical warning lamps, which must be prevented at the system level. | [source](https://www.ecfr.gov/current/title-49/part-571/section-571.101) |
| AUT-011-05 | Regulatory version compliance tracking | Design specifications must document the specific regulatory version used for telltale compliance. Current applicable versions: (1) FMVSS No. 101 - 49 CFR 571.101 as currently codified in the Code of Federal Regulations; (2) ISO 2575:2021 - 4th edition (supersedes ISO 2575:2010, ISO 2575:2004, and ISO 2575:1982); (3) UNECE Regulation No. 121 - current revision, applicable to vehicles sold in UNECE-contracting-party markets outside the US. When a new edition of any referenced standard is published, affected designs must be evaluated for compliance impact within 24 months of the new standard's effective date. | — | — | FMVSS 101 has been amended multiple times since its initial 1967 publication, adding requirements for supplemental restraint system indicators (1992), TPMS (2003 Final Rule 68 FR 67966), and ESC indicators. ISO 2575 was last fully revised in 2021. Explicitly tracking standard versions enables compliance traceability and ensures designs are verified against a specific edition. | [source](https://www.ecfr.gov/current/title-49/part-571/section-571.101) |

---

## AUT-012 — Telltale Design Requirements Catalog

> Per-telltale design specifications for each mandatory FMVSS 101 vehicle telltale indicator. Each entry defines the ISO 2575:2021 symbol reference, required display color, minimum rendered symbol dimensions, activation conditions, blink rate where applicable, and digital rendering conformance requirements for instrument cluster and IVI displays.

**Category:** safety | **Severity:** 🔴 mandatory  
**Tags:** `safety` `telltale` `warning-lamp` `fmvss-101` `fmvss-126` `fmvss-138` `iso-2575` `instrument-cluster` `symbol` `compliance`

**References:**
- [FMVSS No. 101 - Controls and Displays](https://www.ecfr.gov/current/title-49/part-571/section-571.101) *(version: 49 CFR 571.101 (as codified 2024))*
- [ISO 2575 - Symbols for Controls, Indicators and Tell-tales](https://www.iso.org/standard/72798.html) *(version: ISO 2575:2021 (4th edition))*
- [FMVSS No. 126 - Electronic Stability Control Systems](https://www.ecfr.gov/current/title-49/part-571/section-571.126) *(version: 49 CFR 571.126 (as codified 2024))*
- [FMVSS No. 135 - Light Vehicle Brake Systems](https://www.ecfr.gov/current/title-49/part-571/section-571.135) *(version: 49 CFR 571.135 (as codified 2024))*
- [FMVSS No. 138 - Tire Pressure Monitoring Systems](https://www.ecfr.gov/current/title-49/part-571/section-571.138) *(version: 49 CFR 571.138 (as codified 2024))*
- [FMVSS No. 208 - Occupant Crash Protection](https://www.ecfr.gov/current/title-49/part-571/section-571.208) *(version: 49 CFR 571.208 (as codified 2024))*

### Per-Telltale Design Specifications

#### AUT-012-01 — Brake System Warning Telltale

| Property | Value |
|---|---|
| **ISO 2575:2021 Symbol** | 2.15 — exclamation mark enclosed in a circle (alt: FMVSS 101 Appendix A 'P' with brake shoe) |
| **Color** | 🔴 Red |
| **Minimum Size** | 7 mm × 7 mm |
| **Display Behavior** | Steady (no blink) |
| **Activation** | Hydraulic circuit failure; parking brake engaged while moving (>5 km/h); low brake fluid |
| **Zone** | Dedicated safety-critical telltale zone (cannot be masked by any app layer) |
| **Source** | [49 CFR 571.101 Table 1 item 1](https://www.ecfr.gov/current/title-49/part-571/section-571.101) |

![Brake System Warning — exclamation mark inside a circle](https://commons.wikimedia.org/wiki/Special:FilePath/Brake_failure_indicator.svg)  
*Brake System Warning — ISO 2575:2021 ref. 2.15 / FMVSS 101 Appendix A*

---

#### AUT-012-02 — Malfunction Indicator Lamp (MIL / Check Engine) Telltale

| Property | Value |
|---|---|
| **ISO 2575:2021 Symbol** | 4.90 — silhouette of an engine block (optionally with lightning bolt overlay) |
| **Color** | 🟡 Amber/Yellow |
| **Minimum Size** | 7 mm × 7 mm |
| **Display Behavior** | Steady = stored DTC; 1 Hz blink = active catalytic-converter-damaging misfire |
| **Activation** | OBD-II emissions fault per 40 CFR Part 86 / SAE J1979 |
| **Lamp-off Condition** | Three consecutive fault-free drive cycles |
| **Source** | [49 CFR 571.101 Table 1 item 10](https://www.ecfr.gov/current/title-49/part-571/section-571.101) |

![Malfunction Indicator Lamp — engine block silhouette](https://commons.wikimedia.org/wiki/Special:FilePath/Check_engine_light.svg)  
*Malfunction Indicator Lamp (MIL) — ISO 2575:2021 ref. 4.90 / FMVSS 101 Table 1 item 10*

---

#### AUT-012-03 — Tire Pressure Monitoring System (TPMS) Warning Telltale

| Property | Value |
|---|---|
| **ISO 2575:2021 Symbol** | 2.67 — cross-sectional view of a tire with an exclamation mark inside |
| **Color** | 🟡 Amber/Yellow |
| **Minimum Size** | 7 mm × 7 mm |
| **Display Behavior** | Steady = tire ≥25% below placard pressure; 1 Hz blink (60–90 s) then steady = sensor fault |
| **Activation** | Any tire ≥25% below cold-inflation placard pressure per 49 CFR 571.138 |
| **Supplemental Display** | Optional adjacent numeric pressure readout; ISO symbol must always be present |
| **Source** | [49 CFR 571.138](https://www.ecfr.gov/current/title-49/part-571/section-571.138) / [49 CFR 571.101 Table 1 item 11](https://www.ecfr.gov/current/title-49/part-571/section-571.101) |

![TPMS Warning — tire cross-section with exclamation mark](https://commons.wikimedia.org/wiki/Special:FilePath/TPMS_telltale_us.svg)  
*TPMS Warning — ISO 2575:2021 ref. 2.67 / FMVSS No. 138*

---

#### AUT-012-04 — Anti-lock Braking System (ABS) Warning Telltale

| Property | Value |
|---|---|
| **ISO 2575:2021 Symbol** | 2.57 — letters 'ABS' enclosed in a circle or ring |
| **Color** | 🟡 Amber/Yellow |
| **Minimum Size** | 7 mm × 7 mm |
| **Display Behavior** | Steady on fault; self-test lamp at ignition-on (extinguishes ≤3 s on pass) |
| **Activation** | ABS module fault; wheel speed sensor signal loss |
| **Co-illumination** | May illuminate simultaneously with AUT-012-01 only when hydraulic failure also disables ABS |
| **Source** | [49 CFR 571.135 S5.4](https://www.ecfr.gov/current/title-49/part-571/section-571.135) |

![ABS Warning — letters ABS in a circle](https://commons.wikimedia.org/wiki/Special:FilePath/ABS_warning_light.svg)  
*ABS Warning — ISO 2575:2021 ref. 2.57 / FMVSS No. 135*

---

#### AUT-012-05 — Seat Belt Reminder (SBR) Telltale

| Property | Value |
|---|---|
| **ISO 2575:2021 Symbol** | 2.53 — seated human figure with diagonal seat belt strap |
| **Color** | 🔴 Red |
| **Minimum Size** | 7 mm × 7 mm |
| **Display Behavior** | Steady when unbuckled; enhanced SBR: 4 Hz blink (up to 30 s) then steady at speed >8 km/h |
| **Activation** | Front outboard occupant seat belt unfastened at ignition-on |
| **Audible Companion** | Chime required per FMVSS 101 S5.3 |
| **Source** | [49 CFR 571.101 Table 1 item 8](https://www.ecfr.gov/current/title-49/part-571/section-571.101) |

![Seat Belt Reminder — seated figure with seat belt](https://commons.wikimedia.org/wiki/Special:FilePath/Seat_belt_indicator.svg)  
*Seat Belt Reminder (SBR) — ISO 2575:2021 ref. 2.53 / FMVSS 101 Table 1 item 8*

---

#### AUT-012-06 — Airbag / Supplemental Restraint System (SRS) Fault Telltale

| Property | Value |
|---|---|
| **ISO 2575:2021 Symbol** | 2.54 — seated human figure with deployed frontal airbag between occupant and steering wheel |
| **Color** | 🔴 Red |
| **Minimum Size** | 7 mm × 7 mm |
| **Display Behavior** | Self-test at ignition-on (extinguishes ≤7 s on pass); steady on fault |
| **Activation** | SRS module fault; squib or pretensioner circuit fault; arming sensor fault per FMVSS 208 S19 |
| **Fault Persistence** | Must not extinguish without explicit system-level fault resolution |
| **Source** | [49 CFR 571.208 S19](https://www.ecfr.gov/current/title-49/part-571/section-571.208) / [49 CFR 571.101 Table 1 item 9](https://www.ecfr.gov/current/title-49/part-571/section-571.101) |

![Airbag / SRS Fault — seated figure with deployed airbag](https://commons.wikimedia.org/wiki/Special:FilePath/Airbag_indicator.svg)  
*Airbag / SRS Fault Indicator — ISO 2575:2021 ref. 2.54 / FMVSS 208 S19*

---

#### AUT-012-07 — Engine Oil Pressure Warning Telltale

| Property | Value |
|---|---|
| **ISO 2575:2021 Symbol** | 2.12 — stylized oil lamp (Aladdin-type lantern) with a drop dripping from the spout |
| **Color** | 🔴 Red |
| **Minimum Size** | 7 mm × 7 mm |
| **Display Behavior** | Steady; immediate driver action required |
| **Activation** | Oil pressure below critical threshold (typically ≤0.3 bar / 4.3 PSI at idle) |
| **Symbol Distinction** | Must not be confused with oil level indicator (ISO 2575:2021 symbol 2.76, adds wavy level line) |
| **Source** | [49 CFR 571.101 Table 1 item 6](https://www.ecfr.gov/current/title-49/part-571/section-571.101) |

![Oil Pressure Warning — stylized oil lamp with drop](https://commons.wikimedia.org/wiki/Special:FilePath/Oil_pressure_warning.svg)  
*Engine Oil Pressure Warning — ISO 2575:2021 ref. 2.12 / FMVSS 101 Table 1 item 6*

---

#### AUT-012-08 — Battery / Charging System Warning Telltale

| Property | Value |
|---|---|
| **ISO 2575:2021 Symbol** | 2.13 — rectangular battery outline with (+) and (−) terminal tabs on top |
| **Color** | 🔴 Red |
| **Minimum Size** | 7 mm × 7 mm |
| **Display Behavior** | Steady |
| **Activation** | Charging voltage below minimum; alternator/DC-DC fault; broken alternator belt |
| **BEV Note** | Must not be repurposed for HV traction battery SoC; BEV HV faults use ISO 2575:2021 2.80-series symbols |
| **Source** | [49 CFR 571.101 Table 1 item 7](https://www.ecfr.gov/current/title-49/part-571/section-571.101) |

![Battery / Charging System Warning — battery outline with terminals](https://commons.wikimedia.org/wiki/Special:FilePath/Battery_charge_warning.svg)  
*Battery / Charging System Warning — ISO 2575:2021 ref. 2.13 / FMVSS 101 Table 1 item 7*

---

#### AUT-012-09 — High-beam Headlamp Indicator Telltale

| Property | Value |
|---|---|
| **ISO 2575:2021 Symbol** | 2.22 — headlamp lens with ≥5 parallel horizontal beams projecting forward-left |
| **Color** | 🔵 Blue |
| **Minimum Size** | 7 mm × 7 mm |
| **Display Behavior** | Steady when high-beams active; extinguishes immediately on low-beam return |
| **Activation** | High-beam filament or LED/laser module energized |
| **Color Exclusivity** | Blue must not be used for any other indicator; it is exclusively reserved for this state per ISO 2575:2021 Section 4.1 |
| **Source** | [49 CFR 571.101 Table 1 item 3](https://www.ecfr.gov/current/title-49/part-571/section-571.101) |

![High-beam Headlamp Indicator — headlamp with parallel beams](https://commons.wikimedia.org/wiki/Special:FilePath/High_beam_indicator.svg)  
*High-beam Headlamp Indicator — ISO 2575:2021 ref. 2.22 / FMVSS 101 Table 1 item 3*

---

#### AUT-012-10 — Turn Signal Indicators (Left and Right) Telltales

| Property | Value |
|---|---|
| **ISO 2575:2021 Symbols** | 2.24 (left-pointing arrow) and 2.25 (right-pointing arrow) — solid chevron/arrowheads |
| **Color** | 🟡 Amber (US per FMVSS 101); Green also permissible per ECE Reg. No. 121 |
| **Minimum Size** | 7 mm × 7 mm per arrow |
| **Blink Rate** | 60–120 cycles/minute (1–2 Hz) per FMVSS 108; synchronized with exterior lamps |
| **Activation Timing** | Begins flashing within 1 second of stalk activation |
| **Hazard State** | Both arrows flash simultaneously, positioned symmetrically |
| **Constraint** | Separate left/right arrows required; combined center arrow is not a substitute |
| **Source** | [49 CFR 571.101 Table 1 items 4–5](https://www.ecfr.gov/current/title-49/part-571/section-571.101) / [49 CFR 571.108](https://www.ecfr.gov/current/title-49/part-571/section-571.108) |

![Left Turn Signal — left-pointing solid arrow](https://commons.wikimedia.org/wiki/Special:FilePath/Turn_signal_left_indicator.svg) ![Right Turn Signal — right-pointing solid arrow](https://commons.wikimedia.org/wiki/Special:FilePath/Turn_signal_right_indicator.svg)  
*Left / Right Turn Signal Indicators — ISO 2575:2021 refs. 2.24 & 2.25 / FMVSS 101 Table 1 items 4–5*

---

#### AUT-012-11 — Electronic Stability Control (ESC) Indicator Telltale

| Property | Value |
|---|---|
| **ISO 2575:2021 Symbol** | 2.60 — vehicle silhouette (top view) with skid marks or curved arrow track behind rear wheels |
| **Color** | 🟡 Amber (both active-intervention and fault states) |
| **Minimum Size** | 7 mm × 7 mm |
| **Display Behavior — Active** | 2 Hz blink during ESC brake/engine-torque intervention (informational, no audible alarm) |
| **Display Behavior — Fault/Off** | Steady, with 'OFF' label or ISO 2575:2021 fault variant |
| **Activation** | ESC actively intervening; ESC disabled by driver; ESC module or wheel speed sensor fault per FMVSS 126 S5.3.2 |
| **Applicability** | All light vehicles ≤3,856 kg, effective model year 2012 |
| **Source** | [49 CFR 571.126 S5.3.2](https://www.ecfr.gov/current/title-49/part-571/section-571.126) |

![ESC Indicator — vehicle silhouette with skid track](https://commons.wikimedia.org/wiki/Special:FilePath/Electronic_stability_control_indicator.svg)  
*Electronic Stability Control (ESC) Indicator — ISO 2575:2021 ref. 2.60 / FMVSS No. 126*

---
