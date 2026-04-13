# iOS Design Regulations

**Domain:** `ios` | **Version:** 1.0.0 | **Last Updated:** 2026-04-13

Design system regulations for iOS applications based on Apple Human Interface Guidelines, App Store Review Guidelines, and WCAG accessibility standards.

---

## Domain-Level Reference Links

| Standard | URL | Description |
|---|---|---|
| Apple Human Interface Guidelines | https://developer.apple.com/design/human-interface-guidelines/ | Apple's comprehensive design guidance for all Apple platforms. |
| Apple Accessibility Guidelines | https://developer.apple.com/accessibility/ | Apple's accessibility programming and design resources. |
| WCAG 2.1 | https://www.w3.org/TR/WCAG21/ | Web Content Accessibility Guidelines used as baseline for mobile accessibility. |
| App Store Review Guidelines | https://developer.apple.com/app-store/review/guidelines/ | Guidelines for app submission and approval on the App Store. |

---

## Regulations Overview

| ID | Category | Title | Severity |
|---|---|---|---|
| [IOS-001](#ios-001-dynamic-type-support) | typography | Dynamic Type Support | 🔴 mandatory |
| [IOS-002](#ios-002-color-and-appearance) | color | Color and Appearance | 🔴 mandatory |
| [IOS-003](#ios-003-layout-and-spacing) | spacing | Layout and Spacing | 🔴 mandatory |
| [IOS-004](#ios-004-accessibility-compliance) | accessibility | Accessibility Compliance | 🔴 mandatory |
| [IOS-005](#ios-005-component-standards) | components | Component Standards | 🟡 recommended |
| [IOS-006](#ios-006-navigation-and-gestures) | navigation | Navigation and Gestures | 🔴 mandatory |
| [IOS-007](#ios-007-animation-and-motion) | motion | Animation and Motion | 🟡 recommended |
| [IOS-008](#ios-008-feedback-and-communication) | feedback | Feedback and Communication | 🔴 mandatory |
| [IOS-009](#ios-009-privacy-and-data-handling) | privacy | Privacy and Data Handling | 🔴 mandatory |
| [IOS-010](#ios-010-icon-and-image-standards) | iconography | Icon and Image Standards | 🟡 recommended |

**Severity key:** 🔴 mandatory · 🟡 recommended · 🔵 optional

---

## IOS-001 — Dynamic Type Support

> All text elements must support Dynamic Type to respect user font size preferences across the system.

**Category:** typography | **Severity:** 🔴 mandatory  
**Tags:** `dynamic-type` `typography` `hig` `accessibility`

**References:**
- [HIG Typography](https://developer.apple.com/design/human-interface-guidelines/typography)

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| IOS-001-01 | Minimum body text size | Body text must use at minimum the system 'body' text style (17pt at default scale) or equivalent. | 17 | pt | The body text style is the baseline readable size on iOS devices. |
| IOS-001-02 | Dynamic Type adoption | All text must scale with Dynamic Type using UIFont.preferredFont(forTextStyle:) or the equivalent SwiftUI .font() modifier with system text styles. | — | — | Users who configure larger text sizes expect all apps to respect their preference. |
| IOS-001-03 | Large Content Viewer | UI elements that cannot scale with Dynamic Type (e.g., tab bar labels, navigation bar titles) must support the Large Content Viewer accessibility feature. | — | — | The Large Content Viewer provides a zoomed preview for elements that can't grow. |
| IOS-001-04 | Text truncation handling | Text containers must gracefully handle larger text sizes by wrapping, scrolling, or expanding. Text must never be clipped without providing access to the full content. | — | — | Clipped text at larger Dynamic Type sizes makes content inaccessible. |

---

## IOS-002 — Color and Appearance

> Applications must implement a thoughtful color system that works across light and dark modes and meets accessibility requirements.

**Category:** color | **Severity:** 🔴 mandatory  
**Tags:** `color` `dark-mode` `accessibility` `hig`

**References:**
- [HIG Color](https://developer.apple.com/design/human-interface-guidelines/color)

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| IOS-002-01 | Color contrast compliance | Text and essential icons must meet WCAG 2.1 Level AA contrast ratios: 4.5:1 for normal text and 3:1 for large text (18pt+ or 14pt+ bold). | 4.5 | ratio | Sufficient contrast is required for readability in varied lighting conditions. |
| IOS-002-02 | Dark Mode support | Applications must provide a full Dark Mode implementation using semantic/adaptive colors from the system palette or Asset Catalog named colors. | — | — | Dark Mode is an expected iOS feature; apps without it appear broken in dark environments. |
| IOS-002-03 | System color usage | Applications should prefer system-provided semantic colors (e.g., .label, .secondaryLabel, .systemBackground) which automatically adapt to appearance modes and accessibility settings. | — | — | System colors automatically handle dark mode, high contrast, and reduce transparency settings. |
| IOS-002-04 | Color independence | Color must not be the sole means of conveying meaning. Additional indicators such as shapes, icons, patterns, or text must supplement color-coded information. | — | — | Color-blind users cannot distinguish information conveyed by color alone. |
| IOS-002-05 | Increase Contrast support | Applications must support the 'Increase Contrast' accessibility setting by providing high-contrast color variants in the Asset Catalog. | — | — | Users with low vision may enable Increase Contrast for better visibility. |

---

## IOS-003 — Layout and Spacing

> Applications must use iOS layout system conventions to ensure consistent spacing across all device sizes and orientations.

**Category:** spacing | **Severity:** 🔴 mandatory  
**Tags:** `layout` `spacing` `safe-area` `adaptive-layout`

**References:**
- [HIG Layout](https://developer.apple.com/design/human-interface-guidelines/layout)

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| IOS-003-01 | Minimum tap target size | All interactive elements must have a minimum tap target of 44×44 points. | 44 | pt | Apple's HIG specifies 44pt as the minimum comfortable tap target size. |
| IOS-003-02 | Safe Area adherence | Content must be positioned within the Safe Area to avoid being obscured by the notch, Dynamic Island, home indicator, or rounded corners. | — | — | Ignoring Safe Areas causes content to be hidden behind hardware features. |
| IOS-003-03 | Layout margins | Content must use the system layout margins (at least 16pt on compact width, 20pt on regular width) for consistent edge spacing. | 16 | pt | System layout margins ensure content is well-inset and consistent with the platform. |
| IOS-003-04 | Multitasking layout support | Applications must support all multitasking modes on iPad including Split View, Slide Over, and Stage Manager by using adaptive layouts. | — | — | iPad users expect apps to work seamlessly in multitasking configurations. |

---

## IOS-004 — Accessibility Compliance

> Applications must be fully accessible using VoiceOver, Switch Control, and other iOS assistive technologies.

**Category:** accessibility | **Severity:** 🔴 mandatory  
**Tags:** `accessibility` `voiceover` `switch-control` `a11y`

**References:**
- [Apple Accessibility Programming Guide](https://developer.apple.com/accessibility/)

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| IOS-004-01 | VoiceOver labels | All interactive elements and meaningful images must have descriptive accessibilityLabel values. Decorative images must be marked as not accessible. | — | — | VoiceOver reads accessibility labels aloud; missing labels render the app unusable. |
| IOS-004-02 | Accessibility traits | Elements must have correct accessibilityTraits (button, header, link, image, etc.) so assistive technologies convey the element's role properly. | — | — | Correct traits help VoiceOver users understand what an element does. |
| IOS-004-03 | Reduce Motion support | Applications must respect the 'Reduce Motion' accessibility preference by replacing complex animations with simple dissolve transitions or removing them entirely. | — | — | Motion can cause nausea or discomfort for users with vestibular disorders. |
| IOS-004-04 | Focus management | When content changes (navigation, modals, alerts), accessibility focus must be moved to the new content so VoiceOver users are aware of the change. | — | — | Without focus management, VoiceOver users may not realize the screen has changed. |
| IOS-004-05 | Custom action support | Complex gestures (swipe-to-delete, long press menus) must provide accessible alternatives via accessibilityCustomActions or standard system gestures. | — | — | Users of Switch Control and VoiceOver cannot perform custom gestures. |

---

## IOS-005 — Component Standards

> UI components must follow Human Interface Guidelines patterns for consistent, intuitive user experiences.

**Category:** components | **Severity:** 🟡 recommended  
**Tags:** `components` `navigation` `hig` `ui-patterns`

**References:**
- [HIG Components](https://developer.apple.com/design/human-interface-guidelines/components)

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| IOS-005-01 | Standard navigation patterns | Applications must use UINavigationController (push/pop) for hierarchical navigation and UITabBarController for flat, top-level navigation between sections. | — | — | Standard navigation patterns are familiar to iOS users and integrate with system gestures. |
| IOS-005-02 | Action sheet usage | Action Sheets must be used for presenting a set of alternatives related to an action the user initiated. Action Sheets must include a cancel option. | — | — | Action Sheets are the iOS convention for contextual choices and must be dismissible. |
| IOS-005-03 | Alert usage | Alerts must be reserved for important information requiring acknowledgment or a critical decision. Alerts must have concise titles and offer clear action buttons. | — | — | Excessive alerts train users to dismiss them without reading, reducing their effectiveness. |
| IOS-005-04 | Pull-to-refresh | Scrollable lists of updatable content should implement the standard UIRefreshControl pull-to-refresh pattern. | — | — | Pull-to-refresh is a deeply ingrained iOS gesture that users expect for refreshing content. |

---

## IOS-006 — Navigation and Gestures

> Navigation must follow iOS platform conventions and support standard system gestures.

**Category:** navigation | **Severity:** 🔴 mandatory  
**Tags:** `navigation` `gestures` `hig`

**References:**
- [HIG Navigation](https://developer.apple.com/design/human-interface-guidelines/navigation)

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| IOS-006-01 | Edge swipe back gesture | Applications using navigation controllers must not disable the interactive edge-swipe-back gesture. Custom gesture recognizers must not conflict with it. | — | — | The swipe-back gesture is fundamental to iOS navigation; disabling it confuses users. |
| IOS-006-02 | Navigation bar back button | Navigation bars must include a visible back button with the previous screen's title. Custom back buttons must maintain the chevron icon and back navigation behavior. | — | — | The back button is the primary visual indicator of navigational hierarchy. |
| IOS-006-03 | Tab bar persistence | The tab bar must remain visible during navigation within each tab's hierarchy unless the user enters a focused, immersive experience. | — | — | Hiding the tab bar unexpectedly disorients users within the app's structure. |

---

## IOS-007 — Animation and Motion

> Animations must feel fluid and purposeful, adhering to iOS motion principles.

**Category:** motion | **Severity:** 🟡 recommended  
**Tags:** `motion` `animation` `spring` `reduce-motion`

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| IOS-007-01 | Spring animation preference | Animations should use spring-based timing curves for natural-feeling motion. Linear and ease-in-out curves should be used sparingly. | — | — | Spring animations are the signature motion style of iOS and feel natural. |
| IOS-007-02 | Animation duration | Standard UI transitions should be between 250ms and 450ms. Micro-interactions should be 100ms to 200ms. | 250–450 | ms | iOS animations feel fast and responsive within these ranges. |
| IOS-007-03 | Reduce Motion compliance | When Reduce Motion is enabled, replace slide transitions with cross-dissolves and disable parallax, bouncing, and scaling animations. | — | — | Compliance with Reduce Motion is essential for users with vestibular conditions. |

---

## IOS-008 — Feedback and Communication

> Applications must provide clear, consistent feedback using iOS platform patterns.

**Category:** feedback | **Severity:** 🔴 mandatory  
**Tags:** `feedback` `haptics` `errors` `loading`

**References:**
- [HIG Feedback](https://developer.apple.com/design/human-interface-guidelines/feedback)

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| IOS-008-01 | Haptic feedback | Applications must use the UIFeedbackGenerator APIs for haptic feedback on supported devices. Impact, notification, and selection feedback types must match the context of the interaction. | — | — | Appropriate haptics enhance the tactile quality of the experience on iOS. |
| IOS-008-02 | Error presentation | Errors must be presented in context (inline near the affected element) rather than as top-level alerts whenever possible. Error messages must describe the problem and offer a recovery path. | — | — | Inline errors reduce disruption and help users understand what to fix. |
| IOS-008-03 | Loading states | Loading states must use the system UIActivityIndicatorView for indeterminate progress or UIProgressView for determinate progress. Skeleton screens are preferred for content loading. | — | — | Consistent loading indicators set user expectations about wait times. |

---

## IOS-009 — Privacy and Data Handling

> Applications must follow Apple's privacy principles and App Store requirements for user data handling.

**Category:** privacy | **Severity:** 🔴 mandatory  
**Tags:** `privacy` `app-store` `att` `permissions`

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| IOS-009-01 | Privacy nutrition labels | Applications must accurately declare all data collection and usage in the App Store privacy nutrition labels. | — | — | Inaccurate privacy labels can result in App Store rejection and erode user trust. |
| IOS-009-02 | Permission request context | Permission requests (camera, location, notifications) must include a clear, specific purpose string explaining why the permission is needed at the moment it is requested. | — | — | Contextual, just-in-time permission requests have higher grant rates and are required by Apple. |
| IOS-009-03 | App Tracking Transparency | Applications that track users across other apps or websites must present the ATT (App Tracking Transparency) prompt before collecting any tracking data. | — | — | ATT is mandatory as of iOS 14.5 and failure to comply results in App Store rejection. |

---

## IOS-010 — Icon and Image Standards

> Icons and images must follow Apple's design guidelines for clarity and platform consistency.

**Category:** iconography | **Severity:** 🟡 recommended  
**Tags:** `icons` `sf-symbols` `images` `app-icon`

### Rules

| Rule ID | Description | Requirement | Value | Unit | Rationale |
|---|---|---|---|---|---|
| IOS-010-01 | SF Symbols usage | Applications should use SF Symbols for system-style icons to ensure consistency with the platform and automatic support for Dynamic Type, weight, and accessibility features. | — | — | SF Symbols scale with text, support multiple weights, and are familiar to iOS users. |
| IOS-010-02 | App icon requirements | Application icons must be provided as a single 1024×1024 point PNG image. The icon must not contain transparency or rounded corners (the system applies the mask). | 1024 | pt | The system derives all icon sizes from the single source image. |
| IOS-010-03 | Image resolution | All raster images must be provided at @1x, @2x, and @3x resolutions or as vector (PDF/SVG) assets to support all device display scales. | — | — | Missing resolution variants result in blurry images on higher-density screens. |

---

*Data source: [`data/ios/design-regulations.json`](../data/ios/design-regulations.json)*
