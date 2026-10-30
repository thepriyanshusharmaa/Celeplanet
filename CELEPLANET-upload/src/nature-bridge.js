// Navigation only: leave the authored scene and its animation controllers intact.
(() => {
 window.addEventListener('message',event=>{
   if(event.origin===window.location.origin&&event.source===window.parent&&event.data?.type==='celeplanet:visibility')window.__celeplanetScenePaused=event.data.visible!==true;
 });
 const open=page=>window.parent.postMessage({type:'celeplanet:navigate',page},window.location.origin);
 const bind=(selector,page)=>document.querySelectorAll(selector).forEach(el=>{
   el.addEventListener('click',event=>{event.preventDefault();open(page)});
 });
 bind('.liquid-button--explore','explore');
 bind('.knob--about','gallery');
 bind('.card--stove .knob','curiosity');
 document.querySelectorAll('.dock-item').forEach(el=>{
   const label=el.textContent.trim();
   const page=label==='Habitats'?'habitats':label==='Field guide'?'guide':label==='Explore'?'explore':null;
   if(page)el.addEventListener('click',event=>{event.preventDefault();open(page)});
 });
})();
