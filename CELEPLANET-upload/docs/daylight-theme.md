# CELEPLANET — Daylight Field Guide

User selected the first visual concept, with its leaf wordmark, editorial type, ivory cards and pale forest atmosphere. Keep branch geometry, loading animation, motion, shaders and Celebi unchanged. Fit a fixed 1600 × 900 document inside a dark blurred outer background, without stretching or extending the scene.

Implementation: `src/Scene.tsx` fits the existing component; `src/app.css` owns the outer frame; `src/daylight.css` is injected by the existing builder and only styles presentation. Existing source and character subproject remain intact. Validate with the source hash check, production build, browser rendering, narrow/short viewport fit, navigation hover and Celebi pointer response.

Background: generated with the built-in image generation tool, saved as `public/landing-pages/inner-green-assets/daylight-forest.png`. The existing 3D scene is layered above this asset.

Exact generation prompt:

Use case: photorealistic-natural. Asset type: background-only landscape for the CELEPLANET Daylight Field Guide website. Create a wide 16:9 softly atmospheric distant forest landscape, layers of rolling forested hills seen through pale sage mist, warm ivory early morning sky and diffused sunlight toward upper center-right. Muted green, soft cream, gentle natural haze, premium nature editorial photography. Upper left is mostly very pale open sky and faint mist for dark green text; tree-covered hills in the middle and lower half, distant and low contrast, no crisp foreground. This image sits behind an existing interactive 3D moss branch scene. Absolutely no foreground branches, no close tree trunks, no flowers, no characters, no Celebi, no UI, no text, no logo, no borders. Do not render the website, only its background landscape.

Verification: all 10 registered source files/assets match their required hashes. Production build passed. All 5 inline scene scripts match the preceding published version after line-ending normalization. Browser confirmed 1600 × 900 scene dimensions, no document scrolling, loaded images/model, navbar hover magnification and Celebi hover-to-evade response; no console errors observed.
