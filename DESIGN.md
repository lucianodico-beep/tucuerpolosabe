# Design System Strategy: Kinetic Editorial

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"Kinetic Brutalism."** This is a high-octane, premium digital experience that rejects the quiet safety of "standard" fitness apps. It is designed to feel like a high-end fashion lookbook fused with the raw energy of an underground boxing gym.

To move beyond a generic template, we utilize **intentional asymmetry** and **high-contrast typography**. We break the grid with overlapping "Display" elements and use the vibrant Primary Green against a deep charcoal canvas to create an electric sense of motion. This is not just a UI; it is a visual manifestation of adrenaline.

---

## 2. Colors: High-Voltage Contrast
The color palette is built on a foundation of absolute darkness (`#0e0e0e`) to allow the Primary Green and Secondary Purple to vibrate.

### The "No-Line" Rule
**Designers are prohibited from using 1px solid borders for sectioning.** Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section sitting on a `surface` background creates a clear but sophisticated division.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the surface-container tiers to define importance:
*   **Surface (`#0e0e0e`):** The infinite canvas.
*   **Surface Container Low (`#131313`):** Large secondary sections.
*   **Surface Container High (`#20201f`):** Interactive cards and modules.
*   **Surface Container Highest (`#262626`):** Floating elements or active states.

### The "Glass & Gradient" Rule
Floating navigation and modal elements should use **Glassmorphism**. Apply a semi-transparent `surface-variant` with a background blur (12px–20px). Main Call-to-Actions (CTAs) should utilize a subtle linear gradient from `primary` (`#8eff71`) to `primary-container` (`#2ff801`) at a 135-degree angle to provide a "liquid neon" depth that flat hex codes cannot achieve.

---

## 3. Typography: Bold & Athletic
The typography system relies on the interplay between the geometric aggression of **Space Grotesk** and the refined clarity of **Manrope**.

*   **Display & Headlines (Space Grotesk):** These are the "voice" of the brand. Use `display-lg` (3.5rem) with tight letter-spacing (-0.04em) for hero sections. Headlines should feel "chunky" and unapologetic, mimicking the weight of heavy fitness equipment.
*   **Body (Manrope):** All functional text and instructional content use Manrope. It provides a technical, sophisticated contrast to the loud headings, ensuring readability during high-intensity workouts.
*   **Labels:** Small-cap `label-md` elements in `secondary` purple act as "functional accents" throughout the UI.

---

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to mimic traditional light sources; we use them to mimic **Ambient Glow**.

*   **The Layering Principle:** Depth is achieved by stacking. Place a `surface-container-highest` card on a `surface-container-low` background to create a "lift" through luminance rather than shadow.
*   **Ambient Glow:** When a floating effect is required (e.g., a primary CTA), use a shadow tinted with `primary` (`#8eff71`) at 8% opacity with a high blur (32px). This creates a "neon haze" rather than a dirty grey drop shadow.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` token at **15% opacity**. Never use a 100% opaque border.
*   **Glassmorphism:** Use `backdrop-filter: blur(10px)` on top-level navigation to allow the vibrant `secondary` purple accents to bleed through as the user scrolls, creating a sense of integrated immersion.

---

## 5. Components: Precision & Power

### Buttons
*   **Primary:** `primary` background with `on-primary` (dark green) text. Solid, chunky, and always uses the `xl` (0.75rem) roundedness for a modern, pebble-like feel.
*   **Secondary:** Ghost style. Transparent background with a `primary` "Ghost Border" (20% opacity) and `primary` text.
*   **Action State:** On press, the button should scale down to 98% and shift to `primary-dim`.

### Cards & Lists
*   **Strict Rule:** No divider lines. Separate list items using `spacing-4` (1rem) of vertical white space or by alternating background shifts between `surface-container` and `surface-container-low`.
*   **Interactive Cards:** Cards should use a subtle vertical gradient. On hover, the "Ghost Border" opacity should increase from 15% to 40%.

### Additional Contextual Components
*   **Progress Rings:** Utilize a thick 8px stroke using a gradient from `secondary` to `secondary-dim`.
*   **Workout Chips:** Small, high-contrast pills with `secondary-container` backgrounds and `on-secondary-container` text for muscle group tags.

---

## 6. Do's and Don'ts

### Do
*   **Do** use extreme scale. Pair a `display-lg` headline with a `body-sm` caption for editorial impact.
*   **Do** use `primary` green for success and `secondary` purple for highlights or "Power" moments (e.g., Personal Bests).
*   **Do** utilize the `spacing-24` (6rem) for major section breaks to let the high-contrast elements "breathe."

### Don't
*   **Don't** use orange. If an "Error" is needed, use the `error` (`#ff7351`) token sparingly.
*   **Don't** use standard "Drop Shadows." They look dated and muddy on dark charcoal backgrounds.
*   **Don't** use 100% white (`#ffffff`) for long-form body text; use `on-surface-variant` (`#adaaaa`) to reduce eye strain, reserving pure white for headlines and active states.