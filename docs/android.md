# Android Design Regulations

**Domain:** `android` | **Version:** 1.0.0 | **Last Updated:** 2026-04-13

Design system regulations for Android applications based on Material Design 3 guidelines, Google Play requirements, and WCAG accessibility standards.

---

## Domain-Level Reference Links

| Standard | URL | Description |
|---|---|---|
| Material Design 3 | https://m3.material.io/ | Google's open-source design system for building beautiful, usable products. |
| Android Accessibility Guidelines | https://developer.android.com/guide/topics/ui/accessibility | Official Android accessibility developer documentation. |
| WCAG 2.1 | https://www.w3.org/TR/WCAG21/ | Web Content Accessibility Guidelines used as baseline for mobile accessibility. |
| Google Play Design Guidelines | https://developer.android.com/distribute/best-practices/develop/design-for-quality | Quality guidelines for apps distributed on Google Play. |

---

## Regulations Overview

| ID | Category | Title | Severity |
|---|---|---|---|
| [AND-001](#and-001-type-scale-compliance) | typography | Type Scale Compliance | 🔴 mandatory |
| [AND-002](#and-002-color-system-and-theming) | color | Color System and Theming | 🔴 mandatory |
| [AND-003](#and-003-spacing-and-layout-grid) | spacing | Spacing and Layout Grid | 🔴 mandatory |
| [AND-004](#and-004-accessibility-requirements) | accessibility | Accessibility Requirements | 🔴 mandatory |
| [AND-005](#and-005-component-usage-standards) | components | Component Usage Standards | 🟡 recommended |
| [AND-006](#and-006-navigation-architecture) | navigation | Navigation Architecture | 🔴 mandatory |
| [AND-007](#and-007-motion-and-animation) | motion | Motion and Animation | 🟡 recommended |
| [AND-008](#and-008-icon-standards) | iconography | Icon Standards | 🟡 recommended |
| [AND-009](#and-009-user-feedback-patterns) | feedback | User Feedback Patterns | 🔴 mandatory |
| [AND-010](#and-010-privacy-and-data-display) | privacy | Privacy and Data Display | 🔴 mandatory |

**Severity key:** 🔴 mandatory · 🟡 recommended · 🔵 optional

---

## AND-001 — Type Scale Compliance

> All text elements must follow the Material Design 3 type scale to ensure consistent, readable typography across the application.

**Category:** typography | **Severity:** 🔴 mandatory  
**Tags:** `material-design` `typography` `readability`

**References:**
- [Material Design 3 Typography](https://m3.material.io/styles/typography/overview)

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| AND-001-01 | Minimum body text size | Body text must be at least 14sp to ensure readability on all device sizes. | 14 | sp | Text below 14sp becomes difficult to read on standard mobile screens. |
| AND-001-02 | Headline hierarchy | Applications must use a clear type hierarchy with distinct sizes for display, headline, title, body, and label roles. | — | — | A well-defined type hierarchy helps users scan and understand content structure. |
| AND-001-03 | Font scaling support | All text must support user-configured font scaling up to 200% without content being clipped or overlapping. | 200 | percent | Users with low vision rely on system font scaling to read content. |
| AND-001-04 | Use scalable text units | Text sizes must be specified in sp (scale-independent pixels) rather than dp or px to respect user font size preferences. | — | — | The sp unit scales with user accessibility settings while dp and px do not. |

---

## AND-002 — Color System and Theming

> Applications must implement a robust color system using Material Design 3 dynamic color and token-based theming.

**Category:** color | **Severity:** 🔴 mandatory  
**Tags:** `material-design` `color` `theming` `accessibility`

**References:**
- [Material Design 3 Color System](https://m3.material.io/styles/color/overview)

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| AND-002-01 | Color contrast for text | Normal text must have a contrast ratio of at least 4.5:1 against its background. Large text (18sp+ or 14sp+ bold) must have at least 3:1. | 4.5 | ratio | WCAG 2.1 Level AA requires these minimum contrast ratios for readable text. |
| AND-002-02 | Dark theme support | Applications must provide a dark theme that respects system-level dark mode settings and uses appropriate surface and on-surface colors. | — | — | Dark themes reduce eye strain, save battery on OLED displays, and are expected by users. |
| AND-002-03 | Color not as sole indicator | Color must not be the only means of conveying information. Additional visual cues such as icons, patterns, or text labels must accompany color-coded elements. | — | — | Approximately 8% of men and 0.5% of women have color vision deficiency. |
| AND-002-04 | Dynamic color compatibility | Applications targeting Android 12+ should support Material You dynamic color to harmonize with the user's wallpaper and theme. | — | — | Dynamic color creates a personalized experience and visual consistency across the OS. |

---

## AND-003 — Spacing and Layout Grid

> Layout and spacing must follow Material Design's 8dp grid system to maintain visual rhythm and consistency.

**Category:** spacing | **Severity:** 🔴 mandatory  
**Tags:** `material-design` `spacing` `layout` `responsive`

**References:**
- [Material Design 3 Layout](https://m3.material.io/foundations/layout/understanding-layout/overview)

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| AND-003-01 | Base grid unit | All spacing values (margins, padding, gaps) must be multiples of 8dp. Small elements may use 4dp for tighter spacing. | 8 | dp | An 8dp grid creates consistent spatial relationships and aligns with screen pixel densities. |
| AND-003-02 | Minimum touch target size | Interactive elements must have a minimum touch target size of 48×48dp. | 48 | dp | Touch targets smaller than 48dp cause user frustration and accessibility failures. |
| AND-003-03 | Screen edge margins | Content must maintain at least 16dp horizontal margins from the screen edges on mobile devices. | 16 | dp | Adequate margins prevent accidental edge interactions and improve readability. |
| AND-003-04 | Adaptive layout breakpoints | Layouts must adapt across compact (<600dp), medium (600–840dp), and expanded (>840dp) width breakpoints. | — | — | Android devices range from phones to tablets to foldables and need responsive layouts. |

---

## AND-004 — Accessibility Requirements

> Applications must meet WCAG 2.1 Level AA and Android-specific accessibility requirements to be usable by all people.

**Category:** accessibility | **Severity:** 🔴 mandatory  
**Tags:** `accessibility` `wcag` `talkback` `a11y`

**References:**
- [Android Accessibility Developer Guide](https://developer.android.com/guide/topics/ui/accessibility)

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| AND-004-01 | Content descriptions | All meaningful images and icons must have contentDescription attributes. Decorative images must have contentDescription set to null. | — | — | Screen readers (TalkBack) rely on content descriptions to convey non-text elements. |
| AND-004-02 | Focus order | Interactive elements must have a logical focus traversal order that follows the visual reading flow of the screen. | — | — | Keyboard and switch device users navigate sequentially and need a predictable order. |
| AND-004-03 | State announcements | Changes in UI state (loading, errors, success) must be announced to accessibility services using live regions or announcements. | — | — | Users relying on screen readers cannot see visual state changes. |
| AND-004-04 | Touch target spacing | Adjacent touch targets must have at least 8dp of spacing between them to prevent mis-taps. | 8 | dp | Closely spaced targets are difficult for users with motor impairments. |

---

## AND-005 — Component Usage Standards

> UI components must follow Material Design 3 component specifications for consistent behavior and appearance.

**Category:** components | **Severity:** 🟡 recommended  
**Tags:** `material-design` `components` `ui-patterns`

**References:**
- [Material Design 3 Components](https://m3.material.io/components)

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| AND-005-01 | Button hierarchy | Screens should use a clear button hierarchy: one filled button for the primary action, tonal or outlined buttons for secondary actions, and text buttons for tertiary actions. | — | — | A clear visual hierarchy helps users identify the most important action quickly. |
| AND-005-02 | Navigation patterns | Applications must use standard navigation components (Navigation Bar, Navigation Rail, Navigation Drawer) appropriate for the device form factor. | — | — | Familiar navigation patterns reduce cognitive load and learning time. |
| AND-005-03 | Dialog usage | Dialogs must be used sparingly for critical decisions and should include a clear title, body, and action buttons. Dialogs must be dismissible. | — | — | Overuse of dialogs interrupts workflow and fatigues users. |
| AND-005-04 | Loading indicators | Operations taking longer than 1 second must display a loading indicator. Operations taking longer than 10 seconds should show a progress bar with percentage or determinate progress. | 1 | seconds | Users need feedback that the system is working to prevent repeated taps or abandonment. |

---

## AND-006 — Navigation Architecture

> Applications must implement predictable, consistent navigation that follows Android platform conventions.

**Category:** navigation | **Severity:** 🔴 mandatory  
**Tags:** `navigation` `back-stack` `deep-links`

**References:**
- [Android Navigation Principles](https://developer.android.com/guide/navigation/navigation-principles)

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| AND-006-01 | System back behavior | The system back button/gesture must behave predictably: closing dialogs, popping the back stack, or exiting the application. Custom back behavior must be communicated clearly. | — | — | Inconsistent back behavior is a top source of user confusion on Android. |
| AND-006-02 | Deep link support | Key application destinations must support deep linking to allow direct access from notifications, widgets, and external links. | — | — | Deep linking improves discoverability and integration with the Android ecosystem. |
| AND-006-03 | Navigation state preservation | Navigation state must be preserved across configuration changes (rotation, resizing) and process death. | — | — | Users lose trust in applications that reset their position unexpectedly. |

---

## AND-007 — Motion and Animation

> Animations and transitions must enhance usability while respecting user motion preferences.

**Category:** motion | **Severity:** 🟡 recommended  
**Tags:** `motion` `animation` `performance` `accessibility`

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| AND-007-01 | Reduce motion support | Applications must respect the system 'Remove Animations' accessibility setting by disabling or reducing non-essential animations. | — | — | Animations can cause discomfort for users with vestibular disorders. |
| AND-007-02 | Transition duration limits | UI transitions should be between 200ms and 500ms. Transitions shorter than 100ms feel abrupt; transitions longer than 700ms feel sluggish. | 200–500 | ms | Appropriate duration ensures users can follow the transition without feeling delayed. |
| AND-007-03 | Purposeful animation | Every animation must serve a functional purpose: guiding attention, showing spatial relationships, or providing feedback. Purely decorative loops are discouraged. | — | — | Gratuitous animation wastes battery, distracts users, and hurts performance. |

---

## AND-008 — Icon Standards

> Icons must follow Material Design icon guidelines for clarity and consistency.

**Category:** iconography | **Severity:** 🟡 recommended  
**Tags:** `iconography` `material-icons` `visual-design`

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| AND-008-01 | Icon sizing | System icons must be 24dp in size within a 48dp touch target area. Smaller icons (20dp, 18dp) may be used in dense contexts like toolbars. | 24 | dp | Consistent icon sizing creates visual harmony and meets touch target requirements. |
| AND-008-02 | Icon labeling | Icons used for primary navigation or actions must include a text label. Icon-only buttons are acceptable only for universally recognized actions (close, back, search). | — | — | Icons without labels are frequently misinterpreted, especially across cultures. |
| AND-008-03 | Adaptive icons | Application launcher icons must be provided as adaptive icons with separate foreground and background layers. | — | — | Adaptive icons ensure the app icon renders correctly across different device shapes and launchers. |

---

## AND-009 — User Feedback Patterns

> Applications must provide clear, timely feedback for user actions and system events.

**Category:** feedback | **Severity:** 🔴 mandatory  
**Tags:** `feedback` `errors` `snackbar` `haptics`

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| AND-009-01 | Error message clarity | Error messages must be human-readable, describe what went wrong, and suggest a corrective action when possible. Generic messages like 'Error occurred' are prohibited. | — | — | Clear error messages reduce user frustration and support requests. |
| AND-009-02 | Snackbar duration | Snackbars must be displayed for at least 4 seconds and no more than 10 seconds. Snackbars with actions must remain until dismissed or acted upon. | 4–10 | seconds | Too-short snackbars are missed; too-long snackbars occlude content. |
| AND-009-03 | Haptic feedback | Critical actions (delete, submit, error) should provide haptic feedback using the system haptic API when haptics are enabled. | — | — | Haptic feedback reinforces actions for users who may not be looking at the screen. |

---

## AND-010 — Privacy and Data Display

> Applications must handle user data display in accordance with privacy best practices and platform policies.

**Category:** privacy | **Severity:** 🔴 mandatory  
**Tags:** `privacy` `security` `data-protection`

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| AND-010-01 | Sensitive data masking | Sensitive data (passwords, payment info, personal identifiers) must be masked by default with an option to reveal temporarily. | — | — | Visible sensitive data can be inadvertently exposed through screen sharing or shoulder surfing. |
| AND-010-02 | Permission rationale | Before requesting a runtime permission, the application must display a UI explaining why the permission is needed and how it will be used. | — | — | Users are more likely to grant permissions when they understand the purpose. |
| AND-010-03 | Secure screen flag | Screens displaying sensitive information must set FLAG_SECURE to prevent screenshots and screen recording in secure contexts. | — | — | FLAG_SECURE prevents data leakage through screenshots and recent apps preview. |

---

*Data source: [`data/android/design-regulations.json`](../data/android/design-regulations.json)*
