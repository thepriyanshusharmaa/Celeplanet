  function buildButterfly(host, limbs, uni) {
    var group=new THREE.Group(),body=new THREE.Group(),rig=null;
    group.name='Celebi';group.add(body);host.add(group);group.scale.setScalar(.25);
    scene.add(new THREE.HemisphereLight(0xf0ffe7,0x3e5940,.85));
    var celebiKey=new THREE.DirectionalLight(0xfff5de,1.1);
    celebiKey.position.set(-500,900,1200);scene.add(celebiKey);
    window.CelebiAssets.loadCelebi().then(function(loaded){
      rig=loaded;body.add(rig.model);
      rig.model.traverse(function(o){o.frustumCulled=false;o.renderOrder=5;});
      window.__celebi.loaded=true;
    }).catch(function(error){console.error('Celebi model failed to load',error);});
    var p=new THREE.Vector3(),n=new THREE.Vector3(),base=new THREE.Vector3(),best=-10;
    for(var j=0;j<64;j++){limbSurface(limbs[0],.29,j/64*TAU,p,n);var score=n.y+n.z*.42;if(score>best){best=score;base.copy(p);}}
    base.x+=.30;base.y+=.35;base.z+=.25;
    var pos=base.clone(),target=base.clone(),mouse=new THREE.Vector3(),yaw=0;
    var mode='hover',avoid=0;
    group.position.copy(base);
    group.traverse(function(o){o.frustumCulled=false;o.renderOrder=5;});
    window.__celebi={kind:'textured-skinned-mesh',group:group,mode:mode,loaded:false};
    return function update(dt,t){
      var cycle=t%22;
      // Rounded figure-eight flight, returning to a quiet hover over the moss.
      var flight=cycle<13?1:Math.max(0,1-(cycle-13)/3);
      target.set(base.x+Math.sin(t*.40)*.55*flight,base.y+.20+Math.sin(t*.83)*.12+Math.pow(Math.sin(t*.20),2)*.55*flight,base.z+Math.cos(t*.40)*.28*flight);
      mouse.copy(uMouseNear.value).sub(pos);mouse.z*=.30;
      var proximity=uMouseNear.value.x<999?Math.max(0,1-mouse.length()/.85):0;
      avoid+=(proximity-avoid)*(1-Math.exp(-dt*5));
      if(avoid>.01){mouse.normalize();target.addScaledVector(mouse,-avoid*.75);target.y+=avoid*.40;}
      target.x=Math.max(base.x-.60,Math.min(base.x+.80,target.x));
      var previous=pos.clone();pos.lerp(target,1-Math.exp(-dt*2.2));
      group.position.copy(pos);
      var velocity=pos.clone().sub(previous).divideScalar(Math.max(dt,.001));
      var desiredYaw=Math.max(-.65,Math.min(.65,velocity.x*.8));yaw+=(desiredYaw-yaw)*(1-Math.exp(-dt*3));
      group.rotation.set(-.07+Math.sin(t*1.1)*.04,yaw,-velocity.x*.22);
      body.position.y=Math.sin(t*2.4)*.025;
      if(rig)window.CelebiAssets.animateRig(rig,t,avoid>.1);
      mode=avoid>.1?'evade':flight>.1?'fly':'hover';window.__celebi.mode=mode;
      var projected=group.getWorldPosition(new THREE.Vector3()).project(camera);
      window.__celebi.screen={x:(projected.x*.5+.5)*W,y:(.5-projected.y*.5)*H};
    };
  }
