import { readFile, writeFile } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
let html = await readFile(new URL('vendor/threeui/public/landing-pages/inner-green-3d.html', root), 'utf8');
const additions = await readFile(new URL('src/rainforest-scene.js', root), 'utf8');
function replaceOnce(anchor, replacement) {
  if (html.split(anchor).length !== 2) throw new Error(`Rainforest source anchor changed: ${anchor}`);
  html = html.replace(anchor, replacement);
}
replaceOnce('  var nearGroup, farGroup, motes, shadowMesh, glowMesh;', '  var nearGroup, farGroup, motes, shadowMesh, glowMesh;\n  var rainforestLayers = [], rainforestMist;\n' + additions);
replaceOnce('    buildAmbient();\n    layout();', '    buildAmbient();\n    buildRainforest();\n    layout();');
replaceOnce('    place(farGroup,  F, 0.410, 0.32, F.z);', '    place(farGroup,  F, 0.410, 0.32, F.z);\n    layoutRainforest(W, H, u, wx, wy);');
replaceOnce('    if (bf && !REDUCED) bf(dt, uTime.value);', '    animateRainforest(uTime.value, smooth, REDUCED);\n    if (bf && !REDUCED) bf(dt, uTime.value);');
replaceOnce('</head>', `<style>
html, body { background:#263a34; }
.hero { background:radial-gradient(ellipse at 78% 23%,#7b9281 0%,#435d50 38%,#263a34 76%); }
.hero::after { background:linear-gradient(90deg,rgba(12,26,23,.32),transparent 60%),radial-gradient(ellipse at 50% 100%,rgba(186,205,184,.24),transparent 65%); }
.headline,.lede { text-shadow:0 2px 20px rgba(7,18,13,.4); }
.card--about { z-index:4; }
</style></head>`);
await writeFile(new URL('public/landing-pages/inner-green-3d.html', root), html);
console.log('Built Misty Rainforest from preserved ThreeUI source.');
