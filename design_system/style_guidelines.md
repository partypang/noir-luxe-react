## Brand & Style

This design system targets the intersection of high-end luxury fashion and the immersive, cinematic quality of premium streaming services. The aesthetic is "Midnight Stage Presence"?봞n environment where the product is the star, spotlighted against a pitch-black abyss. 

The visual style blends **Minimalism** with **Cinematic Depth**. It relies on high-contrast visuals, sharp edges, and a "noir" atmosphere. The emotional response should be one of exclusivity, mystery, and uncompromising quality. Inspired by the warmth of golden hour against deep architectural shadows, the system uses subtle metallic and sunset tones to soften its clinical precision, creating a lifestyle-oriented experience that feels both aspirational and intimate.

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
