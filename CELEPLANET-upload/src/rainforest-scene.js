  // Additional scenery uses the original branch builder and instanced moss.
  function buildRainforest() {
    var configs = [
      { x:850,y:50,w:2200,z:-1300,angle:-0.18,haze:0.54 },
      { x:1000,y:110,w:1940,z:-850,angle:0.30,haze:0.36 },
      { x:1470,y:210,w:1500,z:-500,angle:-0.72,haze:0.22 }
    ];
    configs.forEach(function(cfg, index) {
      var mouse = { value:new THREE.Vector3(9999,9999,9999) };
      var limbs=buildFarRoot();
      limbs.forEach(function(limb){var originalRadius=limb.rw,originalMoss=limb.moss;limb.rw=function(t){return originalRadius(t)*0.22;};limb.moss=function(t){return originalMoss(t)*0.16;};});
      var group = assembleRoot(limbs, {
        aspect:FAR.aspect,haze:cfg.haze,fog:0.05,alpha:1,order:-3+index*0.2,
        hazeCol:[0.18,0.25,0.21],hazeLift:0.35,blades:10000,
        ferns:12,flowers:0,fernSize:[0.18,0.40],flowerSize:[0.04,0.06],
        mouse:mouse,mouseR:0.8,wire:false
      });
      var uni=group.userData.uni;
      uni.uKeyCol.value.setRGB(0.48,0.58,0.47);
      uni.uFillCol.value.setRGB(0.16,0.24,0.20);
      uni.uAmbCol.value.setRGB(0.025,0.045,0.035);
      // Hanging tendrils share a single inexpensive bark-colored material.
      var vineMat=new THREE.ShaderMaterial({vertexShader:'void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'void main(){gl_FragColor=vec4(.035,.065,.047,1.);}'});
      for(var i=0;i<9;i++) {
        var anchor=new THREE.Vector3(),normal=new THREE.Vector3();
        limbSurface(limbs[0],.08+i*.10,Math.PI,anchor,normal);
        var x=anchor.x,y=anchor.y,z=anchor.z,length=0.65+(i%4)*0.32;
        var curve=new THREE.CatmullRomCurve3([
          new THREE.Vector3(x,y,z),new THREE.Vector3(x+0.04,y-.3,z+.04),
          new THREE.Vector3(x-0.10,y-length,z+.06),new THREE.Vector3(x+0.02,y-length-.3,z+.02)
        ]);
        var vine=new THREE.Mesh(new THREE.TubeGeometry(curve,16,0.014+(i%3)*0.004,4,false),vineMat);
        vine.renderOrder=-2;
        group.add(vine);
      }
      group.userData.rainforest=cfg;
      rainforestLayers.push(group); scene.add(group);
    });
    // Two slowly drifting noise octaves create a veil between depth layers.
    rainforestMist=new THREE.Mesh(new THREE.PlaneGeometry(1,1),new THREE.ShaderMaterial({
      transparent:true,depthWrite:false,depthTest:true,
      uniforms:{uTime:uTime},
      vertexShader:'varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
      fragmentShader:[
        'uniform float uTime; varying vec2 vUv;',
        'float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}',
        'float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}',
        'void main(){vec2 p=vUv*vec2(4.,3.);float n=noise(p+vec2(uTime*.018,0.))*.7+noise(p*2.1-vec2(uTime*.009,0.))*.3;',
        'float band=exp(-pow((vUv.y-.55)*2.4,2.));gl_FragColor=vec4(.64,.73,.66,(.05+n*.19)*band);}'
      ].join('\n')
    }));
    rainforestMist.position.z=-210; rainforestMist.renderOrder=-0.5;
    scene.add(rainforestMist);
    window.__rainforest={layers:rainforestLayers.length,vines:27};
  }
  function layoutRainforest(width,height,unit,wx,wy) {
    rainforestLayers.forEach(function(group){
      var c=group.userData.rainforest,k=(DIST-c.z)/DIST;
      group.scale.setScalar(c.w*unit/BOXW*k);
      group.position.set(wx(c.x)*k,wy(c.y)*k,c.z);
      group.rotation.z=c.angle;
    });
    if(rainforestMist){var k=(DIST+210)/DIST;rainforestMist.scale.set(width*k,height*k,1);}
  }
  function animateRainforest(time,pointer,reduced) {
    rainforestLayers.forEach(function(group,index){
      var c=group.userData.rainforest;
      group.rotation.y=reduced?0:pointer.x*(0.012+index*0.006);
      group.rotation.z=c.angle+(reduced?0:Math.sin(time*.12+index*1.8)*.006);
    });
  }
