# Automotive Design Regulations

**Domain:** `automotive` | **Version:** 1.0.0 | **Last Updated:** 2026-04-13

Design system regulations for automotive in-vehicle infotainment (IVI) and head unit interfaces, based on NHTSA guidelines, ISO standards, and driver distraction research.

---

## Domain-Level Reference Links

| Standard | URL | Description |
|---|---|---|
| NHTSA Visual-Manual Driver Distraction Guidelines | https://www.nhtsa.gov/technology-innovation/driver-distraction | National Highway Traffic Safety Administration guidelines for reducing driver distraction from in-vehicle electronic devices. |
| ISO 15005 — Dialogue Management | https://www.iso.org/standard/55741.html | International standard for ergonomic principles of dialogue management in transport information and control systems. |
| ISO 15008 — Road Vehicle Displays | https://www.iso.org/standard/62794.html | Specifications for presentation of information on road vehicle displays. |
| Android Automotive OS Design Guidelines | https://developer.android.com/training/cars | Google's design guidelines for Android Automotive OS applications. |
| Apple CarPlay Human Interface Guidelines | https://developer.apple.com/carplay/documentation/CarPlay-App-Programming-Guide.pdf | Apple's guidelines for designing CarPlay applications. |
| ISO 26262 Functional Safety | https://www.iso.org/standard/68383.html | Functional safety standard for road vehicles. |

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

**Severity key:** 🔴 mandatory · 🟡 recommended · 🔵 optional

> ⚠️ All automotive regulations are **mandatory** — non-compliance directly increases crash risk and may violate federal safety standards.

---

## AUT-001 — Driver Distraction Prevention

> In-vehicle interfaces must minimize driver distraction in compliance with NHTSA guidelines and international driver distraction standards.

**Category:** safety | **Severity:** 🔴 mandatory  
**Tags:** `safety` `distraction` `nhtsa` `motion-lockout`

**References:**
- [NHTSA Phase 2 Distraction Guidelines](https://www.nhtsa.gov/technology-innovation/driver-distraction)

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| AUT-001-01 | Glance time limit | Any single glance at the display must not require more than 2 seconds of visual attention. Tasks requiring multiple glances must be completable within a total of 12 seconds. | 2 | seconds | NHTSA research shows glances longer than 2 seconds significantly increase crash risk. |
| AUT-001-02 | Task completion time | Any driver-initiated task must be completable within 12 seconds of total glance time or must be blocked while the vehicle is in motion. | 12 | seconds | The NHTSA 12-second total glance time rule is the accepted standard for in-vehicle tasks. |
| AUT-001-03 | Motion lockout | Complex interactions (text input, browsing lists longer than 6 items, video playback) must be disabled when the vehicle speed exceeds 5 mph (8 km/h). A clear message must explain why the feature is unavailable. | 5 | mph | Complex visual-manual tasks while driving are the leading cause of distraction-related crashes. |
| AUT-001-04 | Interaction simplicity | Tasks must require no more than 3 steps (taps, swipes, or voice commands) to complete common actions while driving. Frequently used functions must be accessible in 1–2 interactions. | 3 | steps | Fewer interaction steps mean shorter eyes-off-road time and reduced cognitive load. |
| AUT-001-05 | Scrolling list limits | Scrollable lists presented to the driver while the vehicle is in motion must not exceed 6 visible items per screen without paging or voice-assisted navigation. | 6 | items | NHTSA guidelines limit list browsing complexity to reduce visual search time. |

---

## AUT-002 — In-Vehicle Typography

> Text in automotive displays must be readable at a glance under all driving conditions.

**Category:** typography | **Severity:** 🔴 mandatory  
**Tags:** `typography` `iso-15008` `legibility` `glanceability`

**References:**
- [ISO 15008 Display Requirements](https://www.iso.org/standard/62794.html)

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| AUT-002-01 | Minimum character height | Text on the center display must have a minimum character height of 6.4mm (approximately 18pt at standard viewing distance). Critical information (speed, warnings) must use at least 8mm character height. | 6.4 | mm | ISO 15008 specifies minimum character heights for legibility at driver viewing distances. |
| AUT-002-02 | Font selection | Fonts must be sans-serif with open apertures and generous x-height. Recommended fonts include Roboto, San Francisco, Noto Sans, or purpose-built automotive fonts. Decorative or condensed fonts are prohibited. | — | — | Sans-serif fonts with clear letterforms are most legible during brief glances at distance. |
| AUT-002-03 | Text content brevity | On-screen text presented to the driver must be limited to essential information. Labels must not exceed 3 words. Notification messages must not exceed 2 lines of text. | 3 | words | Drivers cannot safely read long text; information must be conveyed in the shortest possible form. |
| AUT-002-04 | Dynamic text restrictions | Scrolling, animated, or auto-updating text must not be displayed on screens visible to the driver while the vehicle is in motion. | — | — | Moving text requires sustained visual attention incompatible with safe driving. |

---

## AUT-003 — Automotive Color System

> Colors in automotive displays must ensure visibility under all ambient lighting conditions and convey safety-critical information reliably.

**Category:** color | **Severity:** 🔴 mandatory  
**Tags:** `color` `night-mode` `contrast` `safety-colors` `iso-2575`

**References:**
- [ISO 2575 Vehicle Symbols](https://www.iso.org/standard/72798.html)

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| AUT-003-01 | Day/night contrast | Displays must maintain a minimum contrast ratio of 3:1 in direct sunlight and must automatically adjust brightness for night driving to prevent glare. Night mode must use a dark background with light text. | 3 | ratio | Automotive displays must be readable in extreme lighting conditions from bright sun to darkness. |
| AUT-003-02 | Warning color semantics | Red must be reserved exclusively for critical/danger alerts (engine failure, collision warning). Amber/yellow for caution/warnings. Green for normal/confirmed status. Blue for informational displays. These mappings must never be overridden. | — | — | ISO 2575 and automotive industry conventions establish universal color meanings that drivers expect. |
| AUT-003-03 | Night mode color restrictions | In night mode, the display must limit bright colors and use a predominantly dark palette. White backgrounds are prohibited. Maximum display brightness must be automatically capped to prevent glare adaptation loss. | — | — | Bright displays at night cause pupil constriction and temporary blindness when looking back at the road. |
| AUT-003-04 | Color-independent information | Safety-critical information must never rely on color alone. Shapes (triangle for warning, circle for prohibition), icons, and text labels must always accompany color coding. | — | — | Up to 8% of male drivers have color vision deficiency; safety info must be perceivable by all. |
| AUT-003-05 | Ambient light adaptation | Display color temperature and brightness must automatically adapt based on ambient light sensors. Manual brightness override must always be available. | — | — | Static brightness causes either washed-out displays in daylight or blinding glare at night. |

---

## AUT-004 — In-Vehicle Display Layout

> Display layouts must prioritize safety-critical information and minimize visual search time.

**Category:** layout | **Severity:** 🔴 mandatory  
**Tags:** `layout` `zones` `touch-targets` `hud`

**References:**
- [ISO 15005 Dialogue Management](https://www.iso.org/standard/55741.html)

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| AUT-004-01 | Information hierarchy zones | The display must be organized into priority zones: Zone 1 (top/center) for driving-critical information (speed, navigation turn, warnings); Zone 2 (middle) for active task content; Zone 3 (bottom/periphery) for status indicators and secondary controls. | — | — | Zoned layouts reduce visual search time by placing critical information where drivers look first. |
| AUT-004-02 | Touch target size | Touch targets must be at least 12.7mm × 12.7mm (approximately 48dp) with at least 6mm spacing between adjacent targets. Frequently used controls should be at least 20mm × 20mm. | 12.7 | mm | Larger touch targets compensate for vehicle vibration and the difficulty of precise touch while driving. |
| AUT-004-03 | Split attention minimization | Navigation and speed information must be displayed in the driver's primary line of sight (instrument cluster or HUD) in addition to the center display. | — | — | Reducing the angle between road view and display reduces eyes-off-road time. |
| AUT-004-04 | Consistent layout across modes | Core navigation elements (home, back, media controls) must remain in fixed positions regardless of the active application or driving mode. | — | — | Consistent control placement allows drivers to build muscle memory and reduce glance time. |

---

## AUT-005 — Driver Interaction Patterns

> Interaction patterns must be optimized for the driving context where visual and manual attention are limited.

**Category:** interaction | **Severity:** 🔴 mandatory  
**Tags:** `interaction` `voice-control` `physical-controls` `gestures`

**References:**
- [Android Automotive Interaction Guidelines](https://developer.android.com/training/cars)

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| AUT-005-01 | Voice control as primary input | All frequently used functions (navigation destination, phone calls, media selection, climate control) must be accessible via voice commands as an alternative to touch. | — | — | Voice control allows drivers to keep their eyes on the road and hands closer to the wheel. |
| AUT-005-02 | Physical control integration | Steering wheel controls and physical knobs/buttons must be supported for core functions (volume, track skip, call accept/reject, voice activation). Physical controls must take priority over touchscreen equivalents. | — | — | Physical controls provide haptic feedback and can be operated without looking. |
| AUT-005-03 | Gesture simplicity | Touch gestures must be limited to tap, swipe, and pinch-to-zoom (for maps only while parked). Multi-finger gestures, long presses, and complex gesture sequences are prohibited while driving. | — | — | Complex gestures require visual attention to perform and verify, increasing distraction. |
| AUT-005-04 | Confirmation feedback | Every driver interaction must produce immediate multi-modal feedback: visual change plus audio confirmation or haptic response within 250ms. | 250 | ms | Drivers who don't receive immediate feedback will look at the display to verify their action. |

---

## AUT-006 — In-Vehicle Navigation UI

> Navigation and map displays must provide clear guidance while minimizing driver distraction.

**Category:** navigation | **Severity:** 🔴 mandatory  
**Tags:** `navigation` `maps` `turn-by-turn` `driving`

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| AUT-006-01 | Turn instruction clarity | Turn-by-turn navigation must display: a large directional arrow, distance to next maneuver in driver's preferred unit, street name, and lane guidance. Instructions must be readable in under 2 seconds. | 2 | seconds | Navigation instructions are safety-critical and must be instantly comprehensible. |
| AUT-006-02 | Map simplification while driving | While the vehicle is in motion, maps must automatically reduce detail level: hiding non-essential POIs, simplifying road networks, and enlarging the current route. Full detail maps are available only when parked. | — | — | Detailed maps require extended visual search time that is unsafe while driving. |
| AUT-006-03 | ETA and route information | Estimated time of arrival, remaining distance, and current road name/speed limit must be persistently visible during active navigation without requiring any interaction. | — | — | Drivers frequently need route status information and should not have to tap to see it. |

---

## AUT-007 — Automotive Alerts and Notifications

> Alerts and notifications must be delivered through appropriate channels based on urgency and driving context.

**Category:** feedback | **Severity:** 🔴 mandatory  
**Tags:** `alerts` `notifications` `audio` `haptics` `safety`

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| AUT-007-01 | Alert priority levels | Alerts must be categorized into three tiers: Critical (collision, system failure) with visual + audio + haptic delivery; Warning (low fuel, traffic) with visual + audio; Information (message received, weather) with brief visual notification only. | — | — | Tiered alerting prevents alert fatigue while ensuring critical alerts are impossible to miss. |
| AUT-007-02 | Alert interruption limits | Non-critical notifications must be queued and batched during active navigation maneuvers. No more than one non-critical notification may be displayed per 30-second interval. | 30 | seconds | Frequent notifications during critical driving moments increase accident risk. |
| AUT-007-03 | Audio alert standards | Critical audio alerts must be played at a volume that is audible over the current media and road noise. Non-critical alerts must respect the user's notification volume setting. Alert sounds must be distinct and not resemble common environmental sounds. | — | — | Inaudible critical alerts or annoying frequent alerts both compromise driver safety. |
| AUT-007-04 | Alert dismissal | Non-critical alerts must auto-dismiss after 5 seconds. Critical alerts must persist until acknowledged by the driver via a single tap or voice command. | 5 | seconds | Persistent non-critical alerts distract; auto-dismissing critical alerts may be missed. |

---

## AUT-008 — Automotive Component Standards

> UI components for automotive displays must be designed for the unique constraints of the driving environment.

**Category:** components | **Severity:** 🔴 mandatory  
**Tags:** `components` `media` `climate` `phone` `camera`

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| AUT-008-01 | Media player component | The media player must display: current track/station info (max 2 lines), album art (optional), and large play/pause/skip controls. Controls must be operable via touch, steering wheel buttons, and voice. | — | — | Media is the most frequently used in-vehicle function and must be instantly controllable. |
| AUT-008-02 | Climate control display | Climate controls must display current temperature, target temperature, fan speed, and air distribution with intuitive visual indicators. Temperature adjustment must be possible in single-tap increments. | — | — | Climate control is a frequent driver need that must not require complex interaction. |
| AUT-008-03 | Phone call interface | Incoming call screens must display caller name/number prominently with large accept/reject buttons. During calls, the interface must minimize to a small persistent indicator showing call duration and a prominent end-call button. | — | — | Phone interaction while driving must be as brief and simple as possible. |
| AUT-008-04 | Parking camera overlay | Rear/surround camera views must display trajectory guidelines, distance indicators, and obstacle highlighting. Camera views must activate automatically when reverse gear is engaged. | — | — | Camera-assisted parking is a safety feature that must provide clear spatial guidance. |

---

## AUT-009 — Automotive Accessibility

> In-vehicle systems must be accessible to drivers and passengers with various abilities.

**Category:** accessibility | **Severity:** 🔴 mandatory  
**Tags:** `accessibility` `voice` `adjustability` `a11y`

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| AUT-009-01 | Voice interaction accessibility | Voice control must support natural language input (not just exact command phrases), provide voice readback of on-screen content, and allow complete hands-free operation of all non-visual features. | — | — | Drivers with motor impairments may rely entirely on voice for vehicle controls. |
| AUT-009-02 | Display adjustability | Display brightness, contrast, text size, and color scheme must be user-adjustable. A high-contrast mode must be available that exceeds standard contrast ratios by at least 50%. | — | — | Driver visual capabilities vary widely; adjustable displays serve all users safely. |
| AUT-009-03 | Audio description for visual alerts | All visual alerts and notifications must have an audio equivalent that can be enabled in accessibility settings. Screen reader support must be available for passenger-side infotainment. | — | — | Drivers with visual impairments may not see visual-only alerts. |

---

## AUT-010 — Automotive Motion and Animation

> Motion and animation in automotive displays must enhance usability without creating distraction.

**Category:** motion | **Severity:** 🔴 mandatory  
**Tags:** `motion` `animation` `performance` `driving-mode`

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| AUT-010-01 | Animation restriction while driving | Non-essential animations (decorative transitions, loading spinners, parallax effects) must be disabled while the vehicle is in motion. Only functional animations (screen transitions, progress indicators) are permitted. | — | — | Decorative animations attract driver attention away from the road without functional benefit. |
| AUT-010-02 | Transition speed | Screen transitions must complete within 300ms. If content is loading, the new screen frame must appear immediately with content populating progressively. | 300 | ms | Slow transitions cause drivers to stare at the display waiting for the result. |
| AUT-010-03 | Map animation smoothness | Map scrolling and zoom animations must run at a minimum of 30fps to prevent motion sickness for passengers and maintain spatial orientation for the driver. | 30 | fps | Choppy map animations disrupt spatial understanding and can cause passenger discomfort. |

---

*Data source: [`data/automotive/design-regulations.json`](../data/automotive/design-regulations.json)*
