---
name: Midnight Couture
colors:
  surface: '#121316'
  surface-dim: '#121316'
  surface-bright: '#38393c'
  surface-container-lowest: '#0d0e11'
  surface-container-low: '#1a1b1e'
  surface-container: '#1e2022'
  surface-container-high: '#292a2d'
  surface-container-highest: '#343538'
  on-surface: '#e3e2e6'
  on-surface-variant: '#e4bdbf'
  inverse-surface: '#e3e2e6'
  inverse-on-surface: '#2f3033'
  outline: '#ab888a'
  outline-variant: '#5b3f41'
  surface-tint: '#ffb2b8'
  primary: '#ffb2b8'
  on-primary: '#67001d'
  primary-container: '#e32652'
  on-primary-container: '#ffffff'
  inverse-primary: '#be003d'
  secondary: '#ffffff'
  on-secondary: '#2c3400'
  secondary-container: '#d0f100'
  on-secondary-container: '#5c6b00'
  tertiary: '#dfc573'
  on-tertiary: '#3c2f00'
  tertiary-container: '#c3aa5a'
  on-tertiary-container: '#4e3e00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdadb'
  primary-fixed-dim: '#ffb2b8'
  on-primary-fixed: '#40000f'
  on-primary-fixed-variant: '#91002c'
  secondary-fixed: '#d0f100'
  secondary-fixed-dim: '#b6d300'
  on-secondary-fixed: '#181e00'
  on-secondary-fixed-variant: '#404c00'
  tertiary-fixed: '#fce18b'
  tertiary-fixed-dim: '#dfc572'
  on-tertiary-fixed: '#231b00'
  on-tertiary-fixed-variant: '#564500'
  background: '#121316'
  on-background: '#e3e2e6'
  surface-variant: '#343538'
  pitch-black: '#000000'
  graphite-base: '#0d0d0e'
  deep-slate: '#272c33'
  silver-mist: '#9ea0a9'
  pure-white: '#ffffff'
typography:
  display-xl:
    fontFamily: Anton
    fontSize: 80px
    fontWeight: '400'
    lineHeight: '0.85'
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Anton
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '0.90'
    letterSpacing: -0.02em
  headline-serif:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.45'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.45'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.45'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 48px
  xl: 64px
  container-margin: 32px
  gutter: 16px
---

## Brand & Style

This design system targets the intersection of high-end luxury fashion and the immersive, cinematic quality of premium streaming services. The aesthetic is "Midnight Stage Presence"?봞n environment where the product is the star, spotlighted against a pitch-black abyss. 

The visual style blends **Minimalism** with **Cinematic Depth**. It relies on high-contrast visuals, sharp edges, and a "noir" atmosphere. The emotional response should be one of exclusivity, mystery, and uncompromising quality. Inspired by the warmth of golden hour against deep architectural shadows, the system uses subtle metallic and sunset tones to soften its clinical precision, creating a lifestyle-oriented experience that feels both aspirational and intimate.

## Colors

The palette is anchored in a true dark mode. **Pitch Black** and **Charcoal Canvas** form the structural foundation, ensuring that product photography and typography command absolute focus. 

- **Action Raspberry** is the primary signal color, reserved exclusively for high-conversion CTAs and critical brand moments.
- **Interactive Lime** provides a high-energy contrast for secondary interactive states and selected navigation.
- **Highlight Gold** acts as an editorial accent, nodding to luxury craftsmanship and the "golden hour" warmth found in premium lifestyle imagery.
- **Neutrals** (Graphite and Silver Mist) manage hierarchy, keeping the interface sophisticated without becoming visually cluttered.

## Typography

The typographic hierarchy is built on three distinct voices:
1. **Monumental (Anton):** Used for large-scale, impactful headlines. It should be set with tight leading and negative letter-spacing to create a "block" of text that feels architectural.
2. **Systematic (Inter):** The workhorse for navigation, body copy, and UI labels. It ensures legibility and a modern, technical feel.
3. **Editorial (Playfair Display):** Used sparingly as a serif accent for feature titles or pull quotes to inject a sense of classical luxury and fashion-authority.

For mobile devices, display-xl and display-lg should scale down to 48px to maintain readability and avoid excessive horizontal overflow.

## Layout & Spacing

The system follows a strict **4px baseline grid** with a comfortable density. The layout philosophy uses a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile.

- **Vertical Rhythm:** Sections are separated by large 64px gaps to create a sense of breath and prestige.
- **Grids:** Use a fixed-width container (max-width 1440px) for standard content, but allow hero sections and high-impact product imagery to break out into full-bleed displays. 
- **Reflow:** On mobile, margins reduce to 16px, and horizontal scrolling carousels are preferred over vertical stacking for product categories to maintain the "streaming" app feel.

## Elevation & Depth

Depth is communicated through **Tonal Layering** rather than traditional shadows. Surfaces are differentiated by their gray-scale values:
- **Level 0:** Pitch Black (#000000) for the deepest backgrounds and footers.
- **Level 1:** Charcoal Canvas (#222326) for the primary page body.
- **Level 2:** Deep Slate (#272c33) for elevated cards and modules.

**Interactive Depth:**
Instead of drop shadows, use **low-contrast outlines** and **inset borders**. Active states should utilize a subtle 2px internal stroke (#949aa4) to create a pressed, tactile effect without breaking the flat, cinematic aesthetic. Backdrop blurs are permitted only on sticky navigation bars to maintain legibility over moving content.

## Shapes

The shape language is sharp and disciplined. 
- **Standard UI:** 4px to 8px radii provide a modern, "tech-luxury" feel.
- **Images:** Strictly 4px radii to maintain a crisp, editorial look.
- **Inputs:** 0px (sharp) corners to emphasize integration with the grid and a more "brutalist" fashion edge.
- **Badges:** Use 20px (pill) shapes to provide a soft contrast to the otherwise rigid geometry, making them easily identifiable as metadata.

## Components

### Buttons
- **Primary:** Action Raspberry background, white text, 8px radius. High-impact padding (12px 24px).
- **Secondary:** Charcoal Canvas background with a 1px Pure White border, 8px radius.
- **Ghost:** Transparent background, Silver Mist text, no border until hover (then use 1px Silver Mist).

### Input Fields
- **Search/Forms:** Transparent background with a 1px Pure White bottom-only or full border. 0px radius. Text in Pure White. No shadows.

### Cards
- **Product Card:** Deep Slate background, 8px radius, 16px internal padding. Image within the card should have a 4px radius. 
- **Editorial Card:** Pitch Black background, no border, full-bleed imagery with Sohne Schmal overlay.

### Feedback & Indicators
- **Badges:** Pure White background with Pitch Black text for high-contrast labels (e.g., "NEW", "LIMITED").
- **Progress/Selection:** Use Interactive Lime (#dcff00) for selection states and active toggle tracks to provide a sharp, digital pop.

### Navigation
- **Top Nav:** Sticky, #000000 with 80% opacity and backdrop blur. Links in Silver Mist, switching to Pure White on hover.
