# Sylva integration

Goal: run the supplied Living Green SylvaHero configuration in a new React project, as requested after confirming this workspace was empty.

Approach: pin the official Community npm package to 1.2.0, whose canonical HTML matches the requested revision. Copy local runtime assets without modifying their bytes. Preserve all registered original TypeScript/CSS sources in vendor/threeui. The live website HTML has changed and must not be used.

Plan:
- Verify all source and asset hashes, including a failure before copying the runtime files.
- Mount the exact Scene configuration through React and Vite. Keep only viewport sizing in app.css.
- Build and check the page, dock selection, pointer/button effects, and responsive layout in the browser.

Compatibility: Community 1.2.0 includes only the Living Green scene. Its older declarations omit variant; src/threeui.d.ts allows the literal living-green selector without replacing the runtime component. Other variants are outside this integration.

The component's own local iframe is part of ThreeUI's authored implementation. No documentation page is embedded. Placeholder destinations and film controls remain as authored.
