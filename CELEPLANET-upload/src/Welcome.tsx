import {useEffect} from 'react';
export const WELCOME_DURATION=5000;
export function Welcome({onComplete}:{onComplete:()=>void}){
 useEffect(()=>{const timer=window.setTimeout(onComplete,WELCOME_DURATION);return()=>window.clearTimeout(timer)},[onComplete]);
 return <section className="welcome-screen" aria-label="Welcome to Celeplanet"><div className="welcome-orbit" aria-hidden="true"/><img src="/celeplanet.svg" alt=""/><span className="eyebrow">A LITTLE CLOSER TO THE WILD</span><h1>Welcome to<br/><em>Celeplanet.</em></h1><p>Your curiosity belongs here.</p><div className="welcome-progress" role="progressbar" aria-label="Opening the living world" aria-valuetext="The home page will open after five seconds"><span/></div></section>
}
