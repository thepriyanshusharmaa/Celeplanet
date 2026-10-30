import {readFile,writeFile,copyFile,mkdir} from 'node:fs/promises';
import {build} from 'esbuild';
import * as three from 'three';
const root=new URL('../',import.meta.url);
await mkdir(new URL('public/celebi/',root),{recursive:true});
await copyFile(new URL('subprojects/celebi-character/assets/celebi.glb',root),new URL('public/celebi/celebi.glb',root));
await copyFile(new URL('subprojects/celebi-character/viewer.html',root),new URL('public/celebi/index.html',root));
await build({entryPoints:[new URL('subprojects/celebi-character/model-loader.js',root).pathname.replace(/^\/([A-Za-z]:)/,'$1')],outfile:new URL('public/celebi/loader.js',root).pathname.replace(/^\/([A-Za-z]:)/,'$1'),bundle:true,loader:{'.glb':'binary','.txt':'text'},format:'iife',globalName:'CelebiAssets',minify:true,plugins:[{name:'existing-three-runtime',setup(b){b.onResolve({filter:/^three$/},()=>({path:'three',namespace:'global-three'}));b.onLoad({filter:/.*/,namespace:'global-three'},()=>({contents:`const {${Object.keys(three).join(',')}}=window.THREE;export {${Object.keys(three).join(',')}};`,loader:'js'}));}}]});
let html=await readFile(new URL('vendor/threeui/public/landing-pages/inner-green-3d.html',root),'utf8');
const start=html.indexOf('  function buildButterfly(host, limbs, uni) {');
const end=html.indexOf('  /* ── size the scene',start);
if(start<0||end<start)throw new Error('Original flight-controller boundary changed.');
const celebi=await readFile(new URL('subprojects/celebi-character/character.js',root),'utf8');
html=html.slice(0,start)+celebi+'\n\n'+html.slice(end);
// Always render the character, including on smaller displays.
html=html.replace('if (!small) bf = buildButterfly','bf = buildButterfly');
html=html.replace('<title>Sylva — Into the living world</title>','<title>CELEPLANET — Explore, discover, learn</title>');
html=html.replace('aria-label="Sylva — home"','aria-label="CELEPLANET — home"');
html=html.replace('aria-label="Read about Sylva"','aria-label="Read about celeplanet"');
html=html.replace('>SYLVA</div>','>CELEPLANET</div>');
// CELEPLANET's nature-learning copy; geometry and animation are separate.
const copy = [
  ['Step into','A small world.'],
  ['the living world</i>','A wild discovery.</i>'],
  ['We restore wild places through patient design, native planting, and a deeper kind of stewardship.',
   'Explore habitats, meet remarkable species, and learn through small adventures.'],
  ['>Grove</span>','>Explore</span>'],
  ['>Journal</span>','>Field guide</span>'],
  ['>Enter</span>','>Begin</span>'],
  ['Explore the work','Start exploring'],
  ['Our Ethos','Species spotlight'],
  ['Let the wild lead.','Meet the forest floor'],
  ['Field Note 07','Daily discovery'],
  ['After the Rain','Follow your curiosity'],
  ['Canopy restored','Your pace'],
  ['282 ha','Explore freely'],
  ['Native species','Your curiosity'],
  ['43 mapped','Keep discovering'],
  ['Read about celeplanet','Explore the forest floor'],
  ['Play the film','Preview the adventure'],
  ['>Discover<span','>Explore<span'],
  ['Restoring wild places through patient design, native planting, and a deeper kind of stewardship.',
   'CELEPLANET is an interactive nature-learning world. Explore habitats, discover species, and follow your curiosity.']
];
for (const [before,after] of copy) {
  if(!html.includes(before))throw new Error(`Missing copy anchor: ${before}`);
  html=html.replaceAll(before,after);
}
// The arch's two open tube ends meet at the crest. Round their radii into
// the overlap so a flat end-ring cannot poke through the moss silhouette.
html=html.replace('[0.722, 0.180,  0.15],\n      [0.752, 0.163,  0.02]',
  '[0.722, 0.180,  0.15],\n      [0.740, 0.158,  0.02],\n      [0.754, 0.176, -0.02]');
html=html.replace('[0.706, 0.176, -0.02],\n      [0.740, 0.158,  0.02]',
  '[0.740, 0.158,  0.02],\n      [0.754, 0.176, -0.02]');
html=html.replace('rw:   function (t) { return legRw(t) * knot(t, 0.05, 0.022); },\n      moss: legMoss',
  'rw:   function (t) { return legRw(t) * knot(t, 0.05, 0.022) * (0.06 + 0.94 * (1 - sstep(0.95, 1, t))); },\n      moss: function(t) { return legMoss(t) * (0.06 + 0.94 * (1 - sstep(0.95, 1, t))); }');
html=html.replace('rw:   function (t) { return legR(t) * knot(t, 0.05, 0.022); },\n      moss: legRm',
  'rw:   function (t) { return legR(t) * knot(t, 0.05, 0.022) * (0.06 + 0.94 * sstep(0, 0.05, t)); },\n      moss: function(t) { return legRm(t) * (0.06 + 0.94 * sstep(0, 0.05, t)); }');
// Presentation-only theme. The Three.js scene, loading sequence, input
// controller, and character implementation above remain unchanged.
const daylight=await readFile(new URL('src/daylight.css',root),'utf8');
html=html.replace('</head>',`<style id="celeplanet-daylight">${daylight}</style></head>`);
html=html.replace(/(<a class="dock-item dock-mark"[^>]*>)[\s\S]*?(<\/a>)/,
  `$1<svg viewBox="0 0 30 40" aria-hidden="true"><path d="M15 37c-2-12 0-22 7-32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M18 15C17 7 21 3 27 1c0 7-3 12-9 14ZM14 22C7 21 3 16 2 9c8 2 12 6 12 13ZM15 29c0-7 4-11 11-13-1 7-5 11-11 13ZM11 31c-5 0-8-3-9-7 5 1 8 3 9 7Z"/></svg><span class="brand-name">CELEPLANET</span>$2`);
html=html.replaceAll('Open field note: After the Rain','Follow your curiosity');
html=html.replace(/<svg class="ico" viewBox="0 0 115 115"[\s\S]*?<\/svg>/,
  '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg>');
html=html.replace(/(<button class="knob[^>]*>)[\s\S]*?<\/svg>/g,
  '$1<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg>');
html=html.replace('<script src="inner-green-assets/three.min.js"></script>','<script src="inner-green-assets/three.min.js"></script><script src="/celebi/loader.js"></script>');
// Keep Home first in the authored hero dock as well as the content navigation.
const exploreLink=html.match(/<a class="dock-item is-active"[^>]*>[\s\S]*?<\/a>/)?.[0];
if(!exploreLink)throw new Error('Explore navigation anchor changed.');
const homeLink=exploreLink.replace('>Explore</span>','>Home</span>').replace('180ms','150ms');
html=html.replace(exploreLink,homeLink+exploreLink.replace('dock-item is-active','dock-item'));
const natureBridge=await readFile(new URL('src/nature-bridge.js',root),'utf8');
// Skip work while the scene is covered or its portfolio preview is offscreen.
// Keep the authored meshes, shaders, camera and visible motion unchanged.
html=html.replace('  function renderFrame() {','  function renderFrame() {\n    if (window.__celeplanetScenePaused || document.hidden) { if(clock)clock.getDelta(); return; }');
html=html.replace('function frame(now){','function frame(now){\n  if(window.__celeplanetScenePaused || document.hidden){ requestAnimationFrame(frame); return; }');
html=html.replace('</body>',`<script id="celeplanet-nature-navigation">${natureBridge}</script></body>`);
await writeFile(new URL('public/landing-pages/inner-green-3d.html',root),html);
console.log('Built CELEPLANET Daylight presentation with the existing branch scene and Celebi.');
