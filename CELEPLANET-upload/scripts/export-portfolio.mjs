import {cp,readdir,readFile,writeFile,mkdir} from 'node:fs/promises';
import {resolve,join,extname} from 'node:path';
const destination=process.argv[2],base=process.argv[3];
if(!destination||!base?.startsWith('/')||!base.endsWith('/'))throw Error('Usage: node scripts/export-portfolio.mjs <destination> </public/base/>');
const output=resolve(destination);await mkdir(output,{recursive:true});await cp(new URL('../dist/',import.meta.url),output,{recursive:true});
async function visit(dir){for(const entry of await readdir(dir,{withFileTypes:true})){const path=join(dir,entry.name);if(entry.isDirectory())await visit(path);else if(['.html','.js','.css','.json'].includes(extname(path))){let text=await readFile(path,'utf8');for(const prefix of ['/landing-pages/','/celebi/','/nature/','/assets/','/celeplanet.svg'])text=text.replaceAll(prefix,base+prefix.slice(1));await writeFile(path,text)}}}
await visit(output);console.log('Exported working CELEPLANET demo to '+output+' at '+base);
