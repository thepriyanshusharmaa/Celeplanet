import { SylvaHero } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import {Welcome} from './Welcome';
import {NatureExperience, type NaturePage} from './NatureExperience';

export function Scene(){
 const [welcomed,setWelcomed]=useState(false);
 const complete=useCallback(()=>setWelcomed(true),[]);
 return welcomed?<HomeScene/>:<Welcome onComplete={complete}/>;
}
function HomeScene() {
  const viewport = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [page,setPage]=useState<NaturePage|null>(null);
  const [embeddedVisible,setEmbeddedVisible]=useState(true);
  useLayoutEffect(()=>{
    const frame=viewport.current?.querySelector('iframe');
    const sync=()=>frame?.contentWindow?.postMessage({type:'celeplanet:visibility',visible:!page&&embeddedVisible&&!document.hidden},window.location.origin);
    sync();frame?.addEventListener('load',sync);document.addEventListener('visibilitychange',sync);
    return()=>{frame?.removeEventListener('load',sync);document.removeEventListener('visibilitychange',sync)};
  },[page,embeddedVisible]);
  useLayoutEffect(() => {
    const host = viewport.current!;
    host.querySelector('iframe')?.setAttribute('title', 'CELEPLANET — Nature learning');
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      if (!width || !height) return;
      // Fit the complete authored composition. Never extend the camera's
      // viewport or crop the branches to cover a differently shaped screen.
      const gutter = Math.min(24, width * 0.02);
      setScale(Math.min((width - gutter * 2) / 1600, (height - gutter * 2) / 900, 1));
    });
    observer.observe(host);
    const navigate=(event:MessageEvent)=>{
      if(event.origin===window.location.origin&&window.parent!==window&&event.source===window.parent&&event.data?.type==='portfolio:visibility'){
        setEmbeddedVisible(event.data.visible===true);return;
      }
      if(event.origin!==window.location.origin||event.source!==host.querySelector('iframe')?.contentWindow)return;
      if(event.data?.type==='celeplanet:navigate'&&['curiosity','explore','gallery','habitats','guide'].includes(event.data.page))setPage(event.data.page);
    };
    window.addEventListener('message',navigate);
    if(window.parent!==window)window.parent.postMessage({type:'celeplanet:ready'},window.location.origin);
    return () => {observer.disconnect();window.removeEventListener('message',navigate)};
  }, []);
  return (
    <div className="hero-viewport" ref={viewport}>
    <div className="shader-frame" style={{ transform: `translate(-50%, -50%) scale(${scale})` }}>
      <SylvaHero
        variant="living-green"
        headingFont="lexend"
        bodyFont="lexend"
        headingWeight="300"
        bodyWeight="300"
        primaryColor="#173b2a"
        headingSize={63}
        bodySize={16.5}
        headingLetterSpacing={-0.006}
      />
    </div>
    {page&&<NatureExperience page={page} onPage={setPage} onClose={()=>setPage(null)}/>}
    </div>
  );
}
