# Create directories
New-Item -ItemType Directory -Force -Path "screenshots"
New-Item -ItemType Directory -Force -Path "code"
New-Item -ItemType Directory -Force -Path "design_system"

# Write design system files
$design_system_guidelines = @"
## Brand & Style

This design system targets the intersection of high-end luxury fashion and the immersive, cinematic quality of premium streaming services. The aesthetic is "Midnight Stage Presence"—an environment where the product is the star, spotlighted against a pitch-black abyss. 

The visual style blends **Minimalism** with **Cinematic Depth**. It relies on high-contrast visuals, sharp edges, and a "noir" atmosphere. The emotional response should be one of exclusivity, mystery, and uncompromising quality. Inspired by the warmth of golden hour against deep architectural shadows, the system uses subtle metallic and sunset tones to soften its clinical precision, creating a lifestyle-oriented experience that feels both aspirational and intimate.

## Layout & Spacing

The system follows a strict **4px baseline grid** with a comfortable density. The layout philosophy uses a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile.

- **Vertical Rhythm:** Sections are separated by large 64px gaps to create a sense of breath and prestige.
- **Grids:** Use a fixed-width container (max-width 1440px) for standard content, but allow hero sections and high-impact product imagery to break out into full-bleed displays. 
- **Reflow:** On mobile, margins reduce to 16px, and horizontal scrolling carousels are preferred over vertical stacking for product categories to maintain the "streaming" app feel.

## Elevation & Depth

Depth is communicated through **Tonal Layering** rather than traditional shadows. Surfaces are differentiated by their gray-scale values:
- **Level 0:** `Pitch Black` (#000000) for the deepest backgrounds and footers.
- **Level 1:** `Charcoal Canvas` (#222326) for the primary page body.
- **Level 2:** `Deep Slate` (#272c33) for elevated cards and modules.

**Interactive Depth:**
Instead of drop shadows, use **low-contrast outlines** and **inset borders**. Active states should utilize a subtle 2px internal stroke (`#949aa4`) to create a pressed, tactile effect without breaking the flat, cinematic aesthetic. Backdrop blurs are permitted only on sticky navigation bars to maintain legibility over moving content.

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
"@

$design_system_md = @"
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

This design system targets the intersection of high-end luxury fashion and the immersive, cinematic quality of premium streaming services. The aesthetic is "Midnight Stage Presence"—an environment where the product is the star, spotlighted against a pitch-black abyss. 

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

For mobile devices, `display-xl` and `display-lg` should scale down to 48px to maintain readability and avoid excessive horizontal overflow.

## Layout & Spacing

The system follows a strict **4px baseline grid** with a comfortable density. The layout philosophy uses a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile.

- **Vertical Rhythm:** Sections are separated by large 64px gaps to create a sense of breath and prestige.
- **Grids:** Use a fixed-width container (max-width 1440px) for standard content, but allow hero sections and high-impact product imagery to break out into full-bleed displays. 
- **Reflow:** On mobile, margins reduce to 16px, and horizontal scrolling carousels are preferred over vertical stacking for product categories to maintain the "streaming" app feel.

## Elevation & Depth

Depth is communicated through **Tonal Layering** rather than traditional shadows. Surfaces are differentiated by their gray-scale values:
- **Level 0:** `Pitch Black` (#000000) for the deepest backgrounds and footers.
- **Level 1:** `Charcoal Canvas` (#222326) for the primary page body.
- **Level 2:** `Deep Slate` (#272c33) for elevated cards and modules.

**Interactive Depth:**
Instead of drop shadows, use **low-contrast outlines** and **inset borders**. Active states should utilize a subtle 2px internal stroke (`#949aa4`) to create a pressed, tactile effect without breaking the flat, cinematic aesthetic. Backdrop blurs are permitted only on sticky navigation bars to maintain legibility over moving content.

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
"@

$theme_json = @'
{
  "colorMode": "DARK",
  "font": "ANTON",
  "roundness": "ROUND_FOUR",
  "customColor": "#e32652",
  "headlineFont": "ANTON",
  "bodyFont": "INTER",
  "labelFont": "PLAYFAIR_DISPLAY",
  "namedColors": {
    "background": "#121316",
    "deep-slate": "#272c33",
    "error": "#ffb4ab",
    "error_container": "#93000a",
    "graphite-base": "#0d0d0e",
    "inverse_on_surface": "#2f3033",
    "inverse_primary": "#be003d",
    "inverse_surface": "#e3e2e6",
    "on_background": "#e3e2e6",
    "on_error": "#690005",
    "on_error_container": "#ffdad6",
    "on_primary": "#67001d",
    "on_primary_container": "#ffffff",
    "on_primary_fixed": "#40000f",
    "on_primary_fixed_variant": "#91002c",
    "on_secondary": "#2c3400",
    "on_secondary_container": "#5c6b00",
    "on_secondary_fixed": "#181e00",
    "on_secondary_fixed_variant": "#404c00",
    "on_surface": "#e3e2e6",
    "on_surface_variant": "#e4bdbf",
    "on_tertiary": "#3c2f00",
    "on_tertiary_container": "#4e3e00",
    "on_tertiary_fixed": "#231b00",
    "on_tertiary_fixed_variant": "#564500",
    "outline": "#ab888a",
    "outline_variant": "#5b3f41",
    "pitch-black": "#000000",
    "primary": "#ffb2b8",
    "primary_container": "#e32652",
    "primary_fixed": "#ffdadb",
    "primary_fixed_dim": "#ffb2b8",
    "pure-white": "#ffffff",
    "secondary": "#ffffff",
    "secondary_container": "#d0f100",
    "secondary_fixed": "#d0f100",
    "secondary_fixed_dim": "#b6d300",
    "silver-mist": "#9ea0a9",
    "surface": "#121316",
    "surface_bright": "#38393c",
    "surface_container": "#1e2022",
    "surface_container_high": "#292a2d",
    "surface_container_highest": "#343538",
    "surface_container_low": "#1a1b1e",
    "surface_container_lowest": "#0d0e11",
    "surface_dim": "#121316",
    "surface_tint": "#ffb2b8",
    "surface_variant": "#343538",
    "tertiary": "#dfc573",
    "tertiary_container": "#c3aa5a",
    "tertiary_fixed": "#fce18b",
    "tertiary_fixed_dim": "#dfc572"
  }
}
'@

$design_system_guidelines | Out-File -FilePath "design_system/style_guidelines.md" -Encoding utf8
$design_system_md | Out-File -FilePath "design_system/design_system.md" -Encoding utf8
$theme_json | Out-File -FilePath "design_system/theme.json" -Encoding utf8

Write-Host "Wrote design system files."

$downloads = @(
    @{
        url = "https://lh3.googleusercontent.com/aida/AP1WRLs3wajrtINvl6e2d3qXE-4zrp8jG7FMdlmjxqZY7OJB9ZqaWLXSTUNP-rwuj9FXFguNRMoF43nGE2WQ80LrVAlK1suS42s6Mh-csYk2Atw0EUg1yacccKyTLrxbBFvBfpQmb_r3TjL-C8_3GO3hJ9Ia9tsQULOhN1FfuDHwBLSeMhE8_ihx181pI7eBhCSi83Ney2BnRwbrL-h10BikiNAH_U94_oDp9wbo2lJ5hY7bUqZaowc1XaDOSucx13bs-fc8anNEImj1sQ"
        path = "screenshots/A_realistic_artistic_shot_of_202606281229.jpg"
    },
    @{
        url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBKOARIhYXBwX2NvbXBhbmlvbl91c2VyX3VwbG9hZGVkX2ZpbGVzGmkKM3VzZXJfdXBsb2FkZWRfaHRtbF8wMDA2NTU1ZWNhYzA5MGFlMDkyNWQzYmQwYjBmZDc2MBILEgcQn_6lpfIDGAGSASQKCnByb2plY3RfaWQSFkIUMTgyMjA2NjE1ODYyMjUzMDEzOTE&filename=&opi=89354086"
        path = "code/DESIGN_17583233910020018559.md"
    },
    @{
        url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBKOARIhYXBwX2NvbXBhbmlvbl91c2VyX3VwbG9hZGVkX2ZpbGVzGmkKM3VzZXJfdXBsb2FkZWRfaHRtbF8wMDA2NTU1ZWNhYzA5MGE3MDkyNWQzYmQwYjBmZDc2MBILEgcQn_6lpfIDGAGSASQKCnByb2plY3RfaWQSFkIUMTgyMjA2NjE1ODYyMjUzMDEzOTE&filename=&opi=89354086"
        path = "code/DESIGN_17583233910020018677.md"
    },
    @{
        url = "https://lh3.googleusercontent.com/aida/AP1WRLuN-oCZAKKP5exlP-n8MEurl5UqZiwaDdsFWzUqIbIhBEU5wn3ntM42vOadKSGwiSsWfbe1s0OnWUajDAL109I_zXryC4Dw-o4FdvYzbOE9QHV5Gh5zWBy-02-wGte7yhE-6Oz6907iiuu22trgHEN3oVAwTqrYr2rt7nqcdW_507NsBK-B2L7-QGc_V8skF2cEWp6lwCQbHQGk8DFHSrx2YD3bTuU9ezcOcsg7cwA_pHrWUx63SuC5hweS"
        path = "screenshots/NOIR_LUXE_Home.png"
    },
    @{
        url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1NTVmMjE3MzgyMzUwNTc2MDFkYTYyMGZkMzRkEgsSBxCf_qWl8gMYAZIBJAoKcHJvamVjdF9pZBIWQhQxODIyMDY2MTU4NjIyNTMwMTM5MQ&filename=&opi=89354086"
        path = "code/NOIR_LUXE_Home.html"
    },
    @{
        url = "https://lh3.googleusercontent.com/aida/AP1WRLsraKW52ra6ixYHnjrHRo6i1TotDiwbChw8lZNhjHKm3ANQGiFTep1FnZQfO1x5Pql5OGojFyK_j0GGukfwX1fP2eIFEk8Kq3BW04Yo6cv9l40Vgi8Bm55KvfRvnyJLoWodCxx6jh8wS2pI2mFIFcdJINY0uZMxsgxXSrjekmoZbglc7gPCMg5_2xi1DfVcCpUnN2QGKxF_bNmco9G7-G7qox2VNc-eTFjUoAsh2o9fF2vW6ZlgdDLOGmE8"
        path = "screenshots/NOIR_LUXE_Bags_Collection.png"
    },
    @{
        url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzk4YTZhZWRlMGNmNTRlMGM5MzIzMGFlODY0NjBkYTY2EgsSBxCf_qWl8gMYAZIBJAoKcHJvamVjdF9pZBIWQhQxODIyMDY2MTU4NjIyNTMwMTM5MQ&filename=&opi=89354086"
        path = "code/NOIR_LUXE_Bags_Collection.html"
    },
    @{
        url = "https://lh3.googleusercontent.com/aida/AP1WRLsZmqk-ceifa2RfHukdutQ2m0aEvzWgagChaOCq9jjc-VXNZBwIhAPD8vPUSHMOWfzvNbKWb9yKHb0Llu42yvshwKRysGNvwExCnWaagfro08_wf2Ob1yQ_thdrFOrdeRzbTJ3KelcCtUkjnqtQEuH7jWAfML6UwpVlTHSX8Q4yRTUhjNOla2ehKbsrR93eSJay5pvtxjkF-pxF5WpRYNNZnoHz7OucgESXNofIsO1EwS7CIKeyWxOHudaI"
        path = "screenshots/NOIR_LUXE_Obsidian_Tote_Detail.png"
    },
    @{
        url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2Q2YjgwNzk1Yzk0OTQwM2Q5YTQyY2Y1YjdmNjY4MzA3EgsSBxCf_qWl8gMYAZIBJAoKcHJvamVjdF9pZBIWQhQxODIyMDY2MTU4NjIyNTMwMTM5MQ&filename=&opi=89354086"
        path = "code/NOIR_LUXE_Obsidian_Tote_Detail.html"
    },
    @{
        url = "https://lh3.googleusercontent.com/aida/AP1WRLulL7kQl325l-oKeZCVhQ1k7UJlxiahL4M6C0A0HphWDfTkN1lpAepZTZO_pN8m99XWVoDzFeB2ODjMSoovnelCJgw0W65w73DLyJRzDl8IsumiqBSr4ZVOEzsP92CXX9yf0CTTzzioZBnXb0BWOCXKaFL93wDWjqJnijAj0zucw9iKQtzP2sFxtMlH42_yooLhSMq3kjacUYPNW5nlmCh7NslVQpjSO3G9tsmuOIJ0NP3RxvbM2Pwlrt4h"
        path = "screenshots/NOIR_LUXE_Obsidian_Tote_Premium_Experience.png"
    },
    @{
        url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2RkYTc4MzViODAzNDQ4OTA5YzRjNGUwZTJhNTg1NDBiEgsSBxCf_qWl8gMYAZIBJAoKcHJvamVjdF9pZBIWQhQxODIyMDY2MTU4NjIyNTMwMTM5MQ&filename=&opi=89354086"
        path = "code/NOIR_LUXE_Obsidian_Tote_Premium_Experience.html"
    },
    @{
        url = "https://lh3.googleusercontent.com/aida/AP1WRLuc4Vgd9ij1ONya6yo9FDaNkyO-S440qpQEom6seZNKGePERxYJLGowxwhnuo1pZqLKc-Blf7q70tQb41Z78qRmQwEh8fj669jtKgU8ITHpLFPMSeMAOwA9GDKpif-BXVef83aBdievzBwnwSWFWSA67kKiDLXUwatcQgb9bpsJCokP0q_V6Ov3SnoQrD1Wn5pXkzlvQD4ecvYPf48Zszo8iHMmbuN6dBs2BG3nQ8nRTzcYXE9B4SSF8HfN"
        path = "screenshots/NOIR_LUXE_Secure_Checkout_PayPal.png"
    },
    @{
        url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzhjNjUzNGVjMTNlYTRkNmU5OGNhNzA4NDE5MjE4ZjM2EgsSBxCf_qWl8gMYAZIBJAoKcHJvamVjdF9pZBIWQhQxODIyMDY2MTU4NjIyNTMwMTM5MQ&filename=&opi=89354086"
        path = "code/NOIR_LUXE_Secure_Checkout_PayPal.html"
    },
    @{
        url = "https://lh3.googleusercontent.com/aida/AP1WRLuJw_o_t1YzqG0NIXfSCyl6EDaMuzn1RN7LUluC2fLOxBC50merivsbNc6gDHq-PTMJFDZcpRPnWzCMFX7thWGnla6H1WEvqreiWm5PzWuGIqbVigqQmrghRW1NJ752ZqPzu2wchsRWqFpk5aaHKxFUTgP-OB7BJn6X1RIeWQfcpvU3IkLzJL1730HcwtFRgXe7I_QgsS9laQM_ormD6yRUlvdyjw9ZrPgDyOtr6mgkOM7G9rO_tOE5LIJo"
        path = "screenshots/NOIR_LUXE_Membership_Registration.png"
    },
    @{
        url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1NTVmMTA4YmY2NTYwMmQzYzI4YjczMTg0NmRhEgsSBxCf_qWl8gMYAZIBJAoKcHJvamVjdF9pZBIWQhQxODIyMDY2MTU4NjIyNTMwMTM5MQ&filename=&opi=89354086"
        path = "code/NOIR_LUXE_Membership_Registration.html"
    },
    @{
        url = "https://lh3.googleusercontent.com/aida/AP1WRLuCrYPUTELTy36Ahc8819V_555ax6Ms418IQngYhYHo1nMv-vVPxxYWoY9qi00asnyFQ4_WAgYj_L58UPYecA0lGP54HpkuPuWlctZ_RKP-DLrf23xWTNfWB_rtcXXnxMOUvigZZ7ydFg-4Mnnw0TQpMDs1X2LEJqMDX6wEJ39Gzbf0s-5i457E2J98MRGJwaKOJEtJSGkI0fcqMVEXxlWVL0-p5rQ1QPnlkRbq3zdsnAlXP_7bNsF-CYEQ"
        path = "screenshots/NOIR_LUXE_Shopping_Cart.png"
    },
    @{
        url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzg4MWU4ZTIwM2I2ZTQ4OTZhYmFhNTJmYjk1YzY2OWM4EgsSBxCf_qWl8gMYAZIBJAoKcHJvamVjdF9pZBIWQhQxODIyMDY2MTU4NjIyNTMwMTM5MQ&filename=&opi=89354086"
        path = "code/NOIR_LUXE_Shopping_Cart.html"
    },
    @{
        url = "https://lh3.googleusercontent.com/aida/AP1WRLulOXW-2HzodQknCld1rrGDk18r_wbGAzfAiA-Vokt4vMjadTzL0bIuBWaB6bGqp3GMtvR5rgT519rPzD7iKcEpVY_9JEDtKpl_J5ZmOGCyliVlqh7PlxUQSwek2ybG0QSS3crDeq577kg2xCpKZiTFAL65erLAHNY2i37LB83rh1UaT0gX4Afrf1IS4vucAu2RfF1eL1DyUrFXEGE11JGMTFQ8Yy6Bm8sntGxWpeAyw_AX7OzB_oQ7tNWT"
        path = "screenshots/NOIR_LUXE_Admin_Order_Detail_View.png"
    },
    @{
        url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sX2VmZmViYjkzNjY0ODRiYWE4ZjI2NzkxZjc1MDczNjBhEgsSBxCf_qWl8gMYAZIBJAoKcHJvamVjdF9pZBIWQhQxODIyMDY2MTU4NjIyNTMwMTM5MQ&filename=&opi=89354086"
        path = "code/NOIR_LUXE_Admin_Order_Detail_View.html"
    },
    @{
        url = "https://lh3.googleusercontent.com/aida/AP1WRLsz_FZyX5zvZf4wY0mGMlzczJYVLGyy18WmqdySO6pLD4CXFJVk1ALTwq9TncBxbP2XqT6kTHsrC3IO-aq6RB9Um9ESXiGeyGck6Y9D17BXlxe_HAgxZgJnDw9V2W2Bh43iOkQi4h4Mevch2Oj8w3JgeacFw1YsEKPFOp96UimNBVJwlHCHBouv6oaJZlTtXJ1g9a13mFjGRJ44Cj09gF1HesRFechURd9vCil7wle0blcf5y2TWzlQjDWO"
        path = "screenshots/NOIR_LUXE_Admin_Order_Management.png"
    },
    @{
        url = "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzEyYTAxODJhYWE3NzRiMzdhMmUwMTZjMzEyYjhlZTNkEgsSBxCf_qWl8gMYAZIBJAoKcHJvamVjdF9pZBIWQhQxODIyMDY2MTU4NjIyNTMwMTM5MQ&filename=&opi=89354086"
        path = "code/NOIR_LUXE_Admin_Order_Management.html"
    },
    @{
        url = "https://lh3.googleusercontent.com/aida/AP1WRLsgYj_GZ5cI0KXdr4N_ac7DylYFRZ-pPpqeeifkRLpxXx9po5aSwkseBAW3AF8H9C8PcEkkG3Yt54---WgA8Fdq51BsB9pbV7dJIHNcU84qkSRxD3jpJYw6bQhyLV8l8gHzp1HLf0MtQSyy-wpQG_oAJPiFhK6aLm-hrO2LtD-1xcY57vE8H-kl-iilrjyBGTMG3hSVbpE7qgXGkC49XpLeR_cuwnPPft-DLpUf-ZyfWyn-rM19Qn_Y4ViE7yGs64NV7JC9ZgBCtw"
        path = "screenshots/image_png_202606291607.jpg"
    },
    @{
        url = "https://lh3.googleusercontent.com/aida/AP1WRLvQtFV-hiJ6GgSm2qP0rc88Pc4X96ijZxpOBsnQelspD6CO5brpGB1-cDHzqkbkvVr1ye5lCvFu114V03eXYn1aT0lcb-lNlfBtzTOwj4tdX8-JBm1G3Rsqsz1CIKcFfOFERsvU_lLim5W4yciKRhJFOXcAod1O0ZLaGyospocO9q_GgLXAgQ31RFdSLn44h5f_J5coD0CN25ZUaTwM0F_j2XMjJ8-FTSs5zzjUXGcVgjXY-Bh-ilkEFgbU"
        path = "screenshots/High_end_luxury_fashion_editorial_photography_3c5173da9203430199439913fe93820b.jpg"
    }
)

foreach ($item in $downloads) {
    $url = $item.url
    $path = $item.path
    Write-Host "Downloading $url to $path..."
    try {
        # Use curl.exe directly to download, as it handles TLS and user agent nicely without complex PowerShell config
        curl.exe -L -o $path $url
        Write-Host "  Successfully downloaded to $path"
    } catch {
        Write-Host "  Failed to download $url : $_"
    }
}

Write-Host "All downloads complete."
