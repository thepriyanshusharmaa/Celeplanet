import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import modelBytes from './assets/celebi.glb';
import decoderSource from './assets/draco-decoder.txt';
class EmbeddedDracoLoader extends DRACOLoader {
  _loadLibrary() { return Promise.resolve(decoderSource); }
}

export { OrbitControls };
export async function loadCelebi() {
  const THREE=window.THREE;
  const draco=new EmbeddedDracoLoader().setDecoderConfig({type:'js'});
  // Embed the tiny model so hosting does not need to serve a .glb MIME type.
  const gltf=await new GLTFLoader().setDRACOLoader(draco).parseAsync(modelBytes.buffer,'/celebi/');
  draco.dispose();
  const model=gltf.scene;
  model.updateMatrixWorld(true);
  const box=new THREE.Box3().setFromObject(model),size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3());
  const normalized=new THREE.Group(),scale=2/size.y;
  model.scale.multiplyScalar(scale);
  model.position.sub(center.multiplyScalar(scale));
  normalized.add(model);normalized.position.y=.65;
  const bones={};
  model.traverse(o=>{
    if(o.isBone) bones[o.name]={node:o,rotation:o.rotation.clone()};
    if(o.isMesh){o.frustumCulled=false;o.castShadow=false;
      const materials=Array.isArray(o.material)?o.material:[o.material];
      materials.forEach(m=>{m.roughness=.8;m.metalness=0;m.side=THREE.DoubleSide;if(m.name==='Material #50'||m.name==='Material #51')m.color.setRGB(.77,.96,.60);if(m.transparent)m.depthWrite=false;});
    }
  });
  return {model:normalized,bones,clips:gltf.animations};
}
export function animateRig(rig,time,react=0) {
  function pose(name,x,y,z){const b=rig.bones[name];if(!b)return;b.node.rotation.set(b.rotation.x+x,b.rotation.y+y,b.rotation.z+z);}
  pose('LFeeler',Math.sin(time*(react?68:52))*.55,0,0);
  pose('RFeeler',-Math.sin(time*(react?68:52))*.55,0,0);
  pose('LArm',Math.sin(time*1.7)*.08,0,-.72+Math.sin(time*1.1)*.10);
  pose('RArm',Math.sin(time*1.7+1)*.08,0,.72-Math.sin(time*1.1)*.10);
  pose('LForeArm',0,.18,0);pose('RForeArm',0,.18,0);
  for(let i=2;i<=7;i++){
    pose('LFeeler'+i,0,.075+Math.sin(time*1.8+i*.3)*.012,-.018);
    pose('RFeeler'+i,0,.075+Math.sin(time*1.8+i*.3+.4)*.012,.018);
  }
  pose('LThigh',Math.sin(time*1.5)*.08,0,0);
  pose('RThigh',Math.sin(time*1.5+1)*.08,0,0);
  pose('Head',Math.sin(time*.8)*.035,Math.sin(time*.5)*.045,0);
}
