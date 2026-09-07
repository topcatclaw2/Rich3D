import React,{useEffect,useRef,forwardRef,useImperativeHandle} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {TILES,COLORS,money} from './game.js';

export function tilePosition(i){if(i<=8)return [-8+i*2,8];if(i<=16)return [8,8-(i-8)*2];if(i<=24)return [8-(i-16)*2,-8];return [-8,-8+(i-24)*2];}
const Board=forwardRef(function Board({game,onSelect,onError},ref){
 const host=useRef(),engine=useRef(),current=useRef(game),select=useRef(onSelect);current.current=game;select.current=onSelect;
 useImperativeHandle(ref,()=>({reset(){engine.current?.reset();},zoom(factor){const e=engine.current;if(e){e.camera.position.sub(e.controls.target).multiplyScalar(factor).clampLength(13,80).add(e.controls.target);e.controls.update();}},rotate(){if(engine.current)engine.current.controls.autoRotate=!engine.current.controls.autoRotate;},top(){const e=engine.current;if(e){e.camera.position.set(0,29,.01);e.controls.update();}}}),[]);
 useEffect(()=>{
  let disposed=false,cleanup=()=>{};
  const setup=async()=>{
  try{await Promise.race([document.fonts?.ready||Promise.resolve(),new Promise(resolve=>setTimeout(resolve,2000))]);}catch{}
  if(disposed)return;
  const cjkFont='"Noto Sans TC", "Microsoft JhengHei", sans-serif';
  const el=host.current;let renderer;
  try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true});}catch{onError?.('瀏覽器無法啟用 WebGL，請開啟硬體加速後重新整理。');return;}
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.9;el.appendChild(renderer.domElement);renderer.domElement.setAttribute('aria-label','3D 城市棋盤，拖曳旋轉，滾輪縮放，點擊地產查看詳情');
  const scene=new THREE.Scene();scene.background=new THREE.Color('#eaf0e5');scene.fog=new THREE.Fog('#eaf0e5',48,90);
  const camera=new THREE.PerspectiveCamera(39,1,.1,120);const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.dampingFactor=.07;controls.minDistance=13;controls.maxDistance=80;controls.maxPolarAngle=Math.PI*.485;controls.minPolarAngle=.01;controls.target.set(0,0,0);controls.autoRotateSpeed=.65;controls.enablePan=true;
  const reset=()=>{camera.position.set(4.5,28,22).multiplyScalar(Math.max(1,1.12/camera.aspect));controls.target.set(0,0,0);controls.autoRotate=false;controls.update();};reset();engine.current={camera,controls,reset};
  scene.add(new THREE.HemisphereLight('#fff9e9','#86967e',2.4));const sun=new THREE.DirectionalLight('#fff5df',3.2);sun.position.set(-12,25,8);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-17,right:17,top:17,bottom:-17,near:1,far:65});sun.shadow.normalBias=.04;sun.shadow.bias=-.0002;sun.shadow.radius=4;scene.add(sun);
  const mats=new Map();const mat=c=>{if(!mats.has(c))mats.set(c,new THREE.MeshStandardMaterial({color:c,roughness:.82}));return mats.get(c);};
  const boxGeo=new Map();const box=(parent,w,h,d,c,x=0,y=0,z=0,r=0)=>{const key=[w,h,d,r].join(',');if(!boxGeo.has(key))boxGeo.set(key,r?new RoundedBoxGeometry(w,h,d,2,r):new THREE.BoxGeometry(w,h,d));const m=new THREE.Mesh(boxGeo.get(key),mat(c));m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;};
  const ballGeo=new THREE.SphereGeometry(1,14,10);const ball=(parent,c,x,y,z,sx,sy=sx,sz=sx)=>{const m=new THREE.Mesh(ballGeo,mat(c));m.position.set(x,y,z);m.scale.set(sx,sy,sz);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;};
  const cyl=(parent,rt,rb,h,c,x,y,z,n=24)=>{const m=new THREE.Mesh(new THREE.CylinderGeometry(rt,rb,h,n),mat(c));m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;};
  const ground=new THREE.Mesh(new THREE.PlaneGeometry(200,200),mat('#eaf0e5'));ground.rotation.x=-Math.PI/2;ground.position.y=-.67;ground.receiveShadow=true;scene.add(ground);
  cyl(scene,14.3,14.5,.22,'#d2dfc8',0,-.51,0,100);cyl(scene,13.8,13.8,.035,'#dce7d4',0,-.38,0,100);
  box(scene,18.55,.65,18.55,'#405d50',0,-.03,0,.2);box(scene,18.35,.13,18.35,'#f8f4e9',0,.35,0,.1);box(scene,14.05,.08,14.05,'#b8d0a2',0,.46,0,.1);
  const textures=[];
  function labelTexture(draw,w=512,h=512){const c=document.createElement('canvas');c.width=w;c.height=h;const ctx=c.getContext('2d');draw(ctx,w,h);const tex=new THREE.CanvasTexture(c);tex.colorSpace=THREE.SRGBColorSpace;tex.minFilter=THREE.LinearFilter;tex.magFilter=THREE.LinearFilter;tex.anisotropy=renderer.capabilities.getMaxAnisotropy();textures.push(tex);return tex;}
  const icons={start:'➜',chance:'?',fund:'✦',tax:'$',jail:'▥',gojail:'▥',park:'P'};
  const tiles=[];const lotGroups=[];
  for(const t of TILES){const [x,z]=tilePosition(t.id);const g=new THREE.Group();g.position.set(x,.44,z);scene.add(g);const b=box(g,1.94,.14,1.94,'#fffaf0',0,0,0,.035);b.userData.tile=t.id;tiles.push(b);
   const tex=labelTexture((ctx,w,h)=>{ctx.fillStyle='#fcf9f0';ctx.fillRect(0,0,w,h);if(t.type==='property'){ctx.fillStyle=t.color;ctx.fillRect(0,0,w,82);}ctx.fillStyle='#294237';ctx.textAlign='center';ctx.font=`bold 76px ${cjkFont}`;ctx.fillText(t.name,w/2,t.type==='property'?180:140);if(t.type==='property'){ctx.font='60px Arial';ctx.fillText(money(t.price),w/2,290);ctx.fillStyle='#8c998e';ctx.font='26px sans-serif';ctx.fillText('CITY PROPERTY',w/2,410);}else{ctx.font='bold 135px Arial';ctx.fillStyle=t.type==='chance'?'#ba9270':'#648473';ctx.fillText(icons[t.type],w/2,320);ctx.fillStyle='#728375';ctx.font=`30px ${cjkFont}`;ctx.fillText(t.type==='start'?'+ $2,000':t.type==='tax'?'城市稅收':t.type==='park'?'歇一會兒':t.type==='chance'?'好運降臨':t.type==='fund'?'城市生活':'JUST VISITING',w/2,420);}});
   const face=new THREE.Mesh(new THREE.PlaneGeometry(1.89,1.89),new THREE.MeshBasicMaterial({map:tex,toneMapped:false}));face.rotation.x=-Math.PI/2;face.rotation.z=t.id<8?0:t.id<16?Math.PI/2:t.id<24?Math.PI:-Math.PI/2;face.position.y=.076;g.add(face);
   const props=new THREE.Group();props.position.set(x,.58,z);scene.add(props);lotGroups[t.id]=props;
  }
  // Miniature city: intersecting avenues, pavements, individual windows and roof details.
  for(const x of [-4.4,4.4]){box(scene,.8,.025,13,'#d3d2bb',x,.525,0);box(scene,1.15,.018,13,'#f6f1df',x,.513,0);for(let z=-6;z<=6;z+=.75)box(scene,.035,.008,.29,'#faf6e8',x,.543,z);}
  for(const z of [-3.2,3.2]){box(scene,13,.025,.8,'#d3d2bb',0,.525,z);box(scene,13,.018,1.15,'#f6f1df',0,.513,z);for(let x=-6;x<=6;x+=.75)box(scene,.29,.008,.035,'#faf6e8',x,.543,z);}
  function tree(x,z,scale=1){const g=new THREE.Group();g.position.set(x,.52,z);g.scale.setScalar(scale);scene.add(g);cyl(g,.045,.075,.55,'#94785c',0,.28,0,7);ball(g,'#8db578',0,.83,0,.29,.44,.29);ball(g,'#a2c28a',-.14,.69,.02,.22,.29,.22);}
  function building(x,z,w,d,h,color,roof=false){const g=new THREE.Group();g.position.set(x,.53,z);scene.add(g);box(g,w+.18,.12,d+.18,'#ede9d5',0,.06,0,.04);box(g,w,h,d,color,0,h/2+.1,0,.035);box(g,w+.1,.1,d+.1,'#fff4df',0,h+.12,0,.02);
   for(let y=.45;y<h-.1;y+=.42){for(let xx=-w/2+.22;xx<w/2-.08;xx+=.32){box(g,.17,.23,.018,'#6d9097',xx,y,d/2+.01);box(g,.17,.23,.018,'#6d9097',xx,y,-d/2-.01);}for(let zz=-d/2+.22;zz<d/2-.08;zz+=.32)box(g,.018,.23,.17,'#6d9097',w/2+.01,y,zz);box(g,w+.025,.045,d+.025,'#ede9d8',0,y+.17,0);}
   box(g,.24,.36,.024,'#496d68',0,.28,d/2+.02);
   if(roof){const m=new THREE.Mesh(new THREE.ConeGeometry(w*.81,.55,4),mat('#c98468'));m.rotation.y=Math.PI/4;m.scale.z=d/w;m.position.y=h+.42;m.castShadow=true;g.add(m);}else{box(g,w*.7,.08,d*.7,'#a5b7ae',0,h+.21,0);box(g,.23,.2,.25,'#e9e4d2',w*.18,h+.34,0);}
  }
  building(-5.6,-5.2,1.1,1.3,1.2,'#dbc39f',true);building(-2.6,-5.15,1.15,1.05,2.2,'#b4cbd3');building(-.55,-5.2,1.25,1.25,3.15,'#93b4c4');building(1.55,-5.2,1.3,1.3,1.7,'#e3c7a5');building(5.6,-5,1.1,1.5,2.3,'#aac5bc');
  building(-5.7,-.9,1.05,1.35,1.7,'#b3c7ce');building(5.7,-1.1,1.1,1.25,1.3,'#e4c2a4',true);building(-5.7,4.95,1.15,1.25,1.2,'#e0bf9d',true);building(-2.6,5.25,1.25,1.1,1.35,'#c1d1c7',true);building(2.15,5.25,1.15,1.2,2.15,'#b7cad2');building(5.55,5.3,1.1,1.15,1.7,'#d4c7b2');
  for(const [x,z] of [[-6.4,-6.3],[-3.6,-6.1],[3.2,-5.8],[6.2,-3.8],[-6.3,1.8],[-5.4,2],[-3.3,-1.9],[3.4,-1.9],[-3.3,1.9],[3.3,1.9],[-.5,5.2],[.4,6.2],[6.1,2.2],[-3.5,6.3],[3.8,6.2],[-6.3,6.4]])tree(x,z,1.05);
  for(let i=0;i<24;i++){const a=i*Math.PI*2/24;if(i%3!==0)tree(Math.cos(a)*12.5,Math.sin(a)*12.5,.85+(i%3)*.12);}
  box(scene,7.1,.055,4.3,'#dce0b9',0,.545,0,.3);
  const centerTex=labelTexture((c,w,h)=>{c.clearRect(0,0,w,h);c.textAlign='center';c.fillStyle='#3d6850';c.font='900 152px Arial';c.fillText('CITY',w/2,148);c.fillText('TYCOON',w/2,265);c.font=`25px ${cjkFont}`;c.fillStyle='#6d8468';c.fillText('每一步，都是新可能。',w/2,338);},1024,420);
  const center=new THREE.Mesh(new THREE.PlaneGeometry(6.2,2.54),new THREE.MeshStandardMaterial({map:centerTex,transparent:true,depthWrite:false}));center.rotation.x=-Math.PI/2;center.position.set(0,.58,0);scene.add(center);
  cyl(scene,.75,.82,.12,'#ede7cf',0,.59,4.3);cyl(scene,.62,.62,.05,'#91c8ce',0,.675,4.3);cyl(scene,.18,.28,.5,'#dfebdf',0,.95,4.3);ball(scene,'#9fcfd2',0,1.3,4.3,.14);cyl(scene,.36,.26,.08,'#e8eedc',0,1.16,4.3);
  const pawns=[];
  for(let i=0;i<4;i++){const g=new THREE.Group();scene.add(g);cyl(g,.26,.3,.12,COLORS[i],0,.08,0);ball(g,COLORS[i],0,.53,0,.23,.32,.18);ball(g,'#f1d5b0',0,1,0,.225);ball(g,COLORS[i],0,1.12,-.015,.24,.14,.235);box(g,.44,.05,.15,COLORS[i],0,1.1,.16,.025);for(const x of [-.09,.09]){ball(g,'#273e34',x,1.015,.198,.025);box(g,.13,.2,.19,'#3c5349',x,.22,.025,.035);ball(g,'#f1d5b0',x*2.8,.51,0,.075,.15,.075);}box(g,.29,.3,.15,'#edcf8a',0,.56,-.19,.04);g.scale.setScalar(.95);const [x,z]=tilePosition(0);g.position.set(x+(i%2-.5)*.62,.59,z+(Math.floor(i/2)-.5)*.62);pawns.push(g);}
  const ring=new THREE.Mesh(new THREE.RingGeometry(.42,.5,40),new THREE.MeshBasicMaterial({color:'#f4c65b',side:THREE.DoubleSide}));ring.rotation.x=-Math.PI/2;scene.add(ring);
  const highlight=new THREE.Mesh(new THREE.BoxGeometry(1.98,.045,1.98),new THREE.MeshBasicMaterial({color:'#edc768',transparent:true,opacity:.6}));scene.add(highlight);highlight.visible=false;
  let lastLots='',frame,elapsed=0;let previousTime=performance.now();
  const resize=()=>{const w=el.clientWidth,h=el.clientHeight;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();reset();};const ro=new ResizeObserver(resize);ro.observe(el);resize();
  let pointerDown;const down=e=>{pointerDown=[e.clientX,e.clientY];};const up=e=>{if(!pointerDown||Math.hypot(e.clientX-pointerDown[0],e.clientY-pointerDown[1])>6)return;const r=el.getBoundingClientRect();const ray=new THREE.Raycaster();ray.setFromCamera(new THREE.Vector2((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1),camera);const hit=ray.intersectObjects(tiles)[0];if(hit)select.current(hit.object.userData.tile);};el.addEventListener('pointerdown',down);el.addEventListener('pointerup',up);
  function animate(){frame=requestAnimationFrame(animate);const now=performance.now();const dt=Math.min((now-previousTime)/1000,.05);previousTime=now;elapsed+=dt;const s=current.current;
   for(let i=0;i<4;i++){const p=s.players[i],g=pawns[i],[x,z]=tilePosition(p.pos);const tx=x+(i%2-.5)*.62,tz=z+(Math.floor(i/2)-.5)*.62;const dist=Math.hypot(tx-g.position.x,tz-g.position.z);if(dist>.04){g.rotation.y=Math.atan2(tx-g.position.x,tz-g.position.z);g.position.x=THREE.MathUtils.damp(g.position.x,tx,13,dt);g.position.z=THREE.MathUtils.damp(g.position.z,tz,13,dt);g.position.y=.59+Math.abs(Math.sin(elapsed*17))*.18;}else g.position.y=.59;g.visible=!p.bankrupt;}
   ring.position.copy(pawns[s.turn].position);ring.position.y=.595;ring.scale.setScalar(1+Math.sin(elapsed*3)*.06);if(s.selected!==null){const [x,z]=tilePosition(s.selected);highlight.position.set(x,.536,z);highlight.visible=true;}else highlight.visible=false;
   const lots=JSON.stringify(s.lots);if(lastLots!==lots){lastLots=lots;for(const t of TILES){const g=lotGroups[t.id];while(g.children.length)g.remove(g.children[0]);const l=s.lots[t.id];if(l){box(g,1.75,.055,.13,COLORS[l.owner],0,0,.84,.015);for(let n=0;n<l.level;n++){const x=(n-1)*.47;box(g,.33,.32,.34,COLORS[l.owner],x,.2,-.45,.02);const roof=new THREE.Mesh(new THREE.ConeGeometry(.3,.19,4),mat('#faf0d7'));roof.position.set(x,.45,-.45);roof.rotation.y=Math.PI/4;g.add(roof);}}}}
   controls.update();renderer.render(scene,camera);
  }animate();
  cleanup=()=>{cancelAnimationFrame(frame);ro.disconnect();el.removeEventListener('pointerdown',down);el.removeEventListener('pointerup',up);controls.dispose();const geometries=new Set(),materials=new Set();scene.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)materials.add(o.material);});geometries.forEach(g=>g.dispose());boxGeo.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());renderer.dispose();if(renderer.domElement.parentNode===el)el.removeChild(renderer.domElement);engine.current=null;};
  };
  setup();
  return()=>{disposed=true;cleanup();};
 },[]);
 return <div className="board-canvas" ref={host}/>;
});
export default Board;


