# CELEPLANET

An interactive nature-learning experience: wander through a living forest, discover remarkable species, and follow your curiosity.

**[Explore the live demo](https://thepriyanshusharma.in/projects/celeplanet/)** · **[My portfolio](https://thepriyanshusharma.in/)**

## Inside the experience

- A five-second welcome that opens into an interactive Three.js forest scene with moss-covered branches, drifting pollen, and an animated Celebi character.
- **Follow your curiosity:** twelve animal and insect discoveries with photographs, scientific names, and sources.
- **A world worth knowing:** flora, fauna, and fungi collections with image morph transitions and contextual species counts.
- **Forest moments:** eight photographic views across seasons, weather, sunrise, and evening, presented in an interactive accordion gallery.
- **Habitats:** tropical, temperate, and boreal forests, plus the canopy, understory, and forest floor.
- **Field guide:** searchable species cards, category filters, and a favourites notebook saved locally in your browser.
- Keyboard controls, reduced-motion support, responsive content layouts, and rendering suspension when the hero is covered or offscreen.

The hero retains its authored 1600 × 900 composition and scales to fit the available space; the surrounding nature content adapts to smaller screens.

## Built with

React 19, TypeScript, Vite, Three.js, GSAP, OGL, and ThreeUI.

## Run locally

Use Node.js 22.12 or newer and npm.

```sh
npm ci
npm run dev
```

Open the local address printed by Vite. No API keys or backend configuration are required. The initial dependency installation requires an internet connection.

```sh
npm run verify:source  # Check the preserved upstream files and assets
npm run build          # Verify source, build the character integration, type-check, and build
npm run preview        # Preview the production build
```

The production output is `dist/`. Serve it from a site root, or use the included export script for subdirectory hosting:

```sh
node scripts/export-portfolio.mjs ./site-export /projects/celeplanet/
```

Run `npm run build` before exporting. The existing live demo uses this subdirectory export.

## Source map

| Location | Purpose |
| --- | --- |
| `src/Scene.tsx` | Hero composition, welcome flow, and nature-page navigation |
| `src/NatureExperience.tsx` | Curiosity, collections, forest moments, habitats, and field guide |
| `src/nature-data.ts`, `src/extra-facts.ts` | Nature content and reference links |
| `src/components/` | Accordion gallery and image morph slider |
| `scripts/build-celebi.mjs` | Derives the customized hero from the preserved original |
| `subprojects/celebi-character/` | Character loading, posing, flight controller, and inspection viewer |
| `public/nature/` | Locally served nature photography |
| `vendor/threeui/` | Preserved upstream source and license notices |

Edit the generator and source modules rather than the generated `public/landing-pages/inner-green-3d.html`, which is rebuilt by the development and production commands.

## Project work and credits

This personal frontend project was customized and integrated by **Priyanshu Sharma**, with AI-assisted development. The work includes the CELEPLANET identity, daylight presentation, nature-learning pages, sourced content, character integration and flight behaviour, component integration, readability refinements, and rendering lifecycle improvements.

The forest renderer and base hero are adapted from **SylvaHero / Living Green by ThreeUI / Designcode (Meng To)**, using `@designcodeio/threeui@1.2.0`. This project does not claim original authorship of that scene. The preserved registered source has revision `05f359ce157a`; `npm run verify:source` checks the ten original files and assets. [Source bundle](https://threeui.com/source-code/sylva-hero.json).

The accordion and morph-slider implementations were adapted from component source supplied for this project. The interface credits React Bits as an animation-component reference. Third-party components retain their respective ownership.

The Celebi mesh is an existing textured model from [Pokemon-3D-api/assets](https://github.com/Pokemon-3D-api/assets/blob/main/models/opt/regular/251.glb). Pokémon and Celebi belong to Nintendo / Creatures Inc. / GAME FREAK inc. The character was integrated and posed here; the mesh was not modelled from scratch. See [model attribution](subprojects/celebi-character/assets/ATTRIBUTION.md).

Nature photographs retain individual author, source, and Creative Commons license credits in the interface and in [the media manifest](src/nature-media.json), [content references](docs/NATURE-CONTENT.md), and [photo credits](docs/NATURE-REVAMP.md). The daylight background uses AI-generated imagery. Species counts are dated reference snapshots, not live inventories.

## Licenses and scope

This is a personal portfolio and learning project. The included ThreeUI Community code is MIT licensed; its [license](vendor/threeui/LICENSE), [asset notices](vendor/threeui/ASSET-LICENSES.md), and [font licenses](vendor/threeui/FONT-LICENSES.md) are preserved. Photography, fonts, libraries, and the Pokémon character have separate rights and notices; no blanket license is granted over those assets.

The notebook is stored only in the current browser. There are no accounts, payments, conservation donations, or live species databases in this demo.
