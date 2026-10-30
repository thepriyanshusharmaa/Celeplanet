# CELEPLANET

An interactive nature-learning experience by **Priyanshu Sharma**. Explore a living forest, discover remarkable species, and follow your curiosity.

## [Explore the live website ↗](https://thepriyanshusharma.in/projects/celeplanet/)

[My portfolio](https://thepriyanshusharma.in/) · [Project source and detailed documentation](CELEPLANET-upload/README.md)

### Discover the experience

- Interactive Three.js forest with moss-covered branches, drifting pollen, and an animated Celebi character.
- Twelve sourced animal and insect discoveries.
- Flora, fauna, and fungi collections with image morph transitions.
- Eight forest moments across seasons, weather, and changing light.
- Habitat exploration and a searchable field guide with browser-saved favourites.
- Responsive content pages, keyboard controls, reduced-motion support, and offscreen rendering suspension.

### Run locally

Requires Node.js 22.12 or newer. The application lives in `CELEPLANET-upload/`.

```sh
git clone https://github.com/thepriyanshusharmaa/Celeplanet.git
cd Celeplanet/CELEPLANET-upload
npm ci
npm run dev
```

For a production build, run `npm run build`, then `npm run preview`. No API keys or backend configuration are required.

### Built with

React, TypeScript, Vite, Three.js, GSAP, OGL, and ThreeUI.

### Project work and credits

A personal frontend project customized and integrated by Priyanshu Sharma with AI-assisted development. My work includes the CELEPLANET identity, daylight presentation, educational pages, sourced content, character flight integration, component integration, and performance/readability refinements.

The base forest hero is adapted from **SylvaHero / Living Green by ThreeUI / Designcode (Meng To)**. The Celebi mesh is an existing model from **Pokemon-3D-api/assets**; Pokémon and Celebi belong to Nintendo / Creatures Inc. / GAME FREAK inc. The forest scene and character mesh were not authored from scratch here.

Nature photographs retain individual author and Creative Commons credits. The daylight background uses AI-generated imagery. Component sources were adapted from supplied examples; React Bits is credited as an animation-component reference.

See the [full project README](CELEPLANET-upload/README.md), [photo credits](CELEPLANET-upload/docs/NATURE-REVAMP.md), [model attribution](CELEPLANET-upload/subprojects/celebi-character/assets/ATTRIBUTION.md), and [upstream licenses](CELEPLANET-upload/vendor/threeui/). Third-party assets retain their respective rights and licenses.
