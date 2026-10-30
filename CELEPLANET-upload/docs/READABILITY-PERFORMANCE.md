# Readability and performance — 28 October 2026

Supporting text on dark forest backgrounds now uses near-cream at full or near-full opacity, regular weight, and larger small-print sizes. Cream cards retain dark text.

Baseline browser measurement recorded 924 hero WebGL draw calls in roughly 1.6 seconds while the Explore page covered the hero. The derived source now skips hidden/covered scene rendering; its clock is drained while paused so returning to Home does not jump the motion forward. Geometry, shaders, camera and visible branch/Celebi animation are retained.

Morph sliders suspend their animation frames when outside the viewport or in a hidden tab, cap idle drift rendering to 30fps, and retain animation-frame rendering during interactions. Intersection and visibility listeners are cleaned up on unmount.

The portfolio export is a separate deployment under /projects/celeplanet/. It rewrites build asset roots and retains local Three.js, model, font and photography assets. The original Sites audience is unchanged.
