# CELEPLANET / Celebi Character

This subproject owns the interactive Celebi model, its materials, wing geometry, and flight controller. The forest hero remains in the main project.

- `character.js`: source inserted into the preserved ThreeUI scene by `../../scripts/build-celebi.mjs`.
- `reference/prompt.md`: image generation prompt and outcome.

Run `npm run build` in the main CELEPLANET directory to rebuild the hero with changes here. Run `npm run dev` to preview.

Version 2 replaces four oval wing lobes with two continuous slender transparent membranes and fine rims. Skin blends emerald shadows, leaf green, and lime highlights in a lit shader. The head profile is smoothed, with subtle leaf grooves and blue-tipped antennae. Flight, hovering, banking and cursor avoidance remain animated in real 3D.

Anatomy reference: https://sg.portal-pokemon.com/pokedex/0251/ . No official character artwork is bundled into the live renderer.

## Version 3 — textured skinned mesh
The primitive model has been replaced with a textured skeletal GLB. A dedicated model viewer is published at /celebi/ with front, side, back and orbit controls. model-loader.js handles loading, normalization, green tint, and skeletal posing; character.js retains flight, hovering, banking and cursor avoidance. Draco decoding and all assets are served locally.

Model source: https://github.com/Pokemon-3D-api/assets/blob/main/models/opt/regular/251.glb . The repository credits Nintendo/Creatures Inc./GAME FREAK inc. for the underlying model. This integration and posing work does not claim authorship of the mesh. See assets/ATTRIBUTION.md.

