import {mkdir,writeFile,readFile} from 'node:fs/promises';
const files={...{"owl":"Бородатая неясыть (Strix nebulosa, m), Ботанический сад.jpg","frog":"Lithobates sylvaticus (Woodfrog).jpg","chameleon":"Panther chameleon (Furcifer pardalis) male Nosy Be.jpg","gecko":"Gold dust day gecko (Phelsuma laticauda) Nosy Komba.jpg","elephant":"Loxodontacyclotis.jpg","stick":"Le Caylar fg01.JPG","orangutan":"Tanjung Puting30477.jpg","monarch":"Monarch butterfly (70387).jpg","fern":"Fern Fronds (6626307231).jpg","orchid":"Phalaenopsis amabilis Orchi 198.jpg","fungus":"Mycena interrupta.jpg"},tropical:'Aerial view of the Amazon Rainforest.jpg',boreal:'Jack London Lake by bartosh.jpg',moss:'Tionesta-ac-moss2.jpg',summer:'Easy Access Path, High Beach, Essex, England 4.jpg',rainfall:'Khao Yai, Thailand, Khao Yai grasslands under the rain, tropical monsoon.jpg',panda:'Red Panda, Gentle Tree-Dweller of the Himalayas.jpg',ant:'Leaf-cutter ant (Atta cephalotes) Belize 4.jpg',sloth:'Bicho-preguiça 3.jpg',firefly:'Photuris lucicrescens.jpg',sunrise:'Forest Sunrise (122256965).jpeg',evening:'Sunset Forest Edge.jpg',rain:'Autumn Forest Wet Bark.jpg',winter:'Beech forest Mátra in winter.jpg',spring:'Portglenone Forest Bluebells - May 2008.jpg',autumn:'Autumn Forest and wood trees 16.jpg'};
const root=new URL('../',import.meta.url);await mkdir(new URL('public/nature/',root),{recursive:true});
const clean=s=>(s||'').replace(/<[^>]*>/g,'').replace(/&#160;|&nbsp;/g,' ').replace(/&amp;/g,'&').trim();
const media=JSON.parse(await readFile(new URL('src/nature-media.json',root),'utf8').catch(()=>'{}'));
for(const key of Object.keys(files))if(media[key])delete files[key];
if(!Object.keys(files).length)process.exit(0);
const params=new URLSearchParams({action:'query',format:'json',titles:Object.values(files).map(f=>'File:'+f).join('|'),prop:'imageinfo',iiprop:'url|extmetadata',iiurlwidth:'1600'});
async function get(url){for(let n=0;n<5;n++){const r=await fetch(url);if(r.ok)return r;if(r.status!==429)throw Error(r.status);await new Promise(r=>setTimeout(r,15000));}throw Error('Rate limit');}
const data=await (await get('https://commons.wikimedia.org/w/api.php?'+params)).json();
for(const [key,file] of Object.entries(files)){
 const info=Object.values(data.query.pages).find(p=>p.title.replaceAll('_',' ')==='File:'+file.replaceAll('_',' ')).imageinfo[0],meta=info.extmetadata;
 const url=info.thumburl||info.url;const photo=await get(url);
 await writeFile(new URL('public/nature/'+key+'.jpg',root),Buffer.from(await photo.arrayBuffer()));
 media[key]={src:'/nature/'+key+'.jpg',author:clean(meta.Artist?.value),license:clean(meta.LicenseShortName?.value),licenseUrl:meta.LicenseUrl?.value||'https://creativecommons.org/publicdomain/zero/1.0/',source:info.descriptionurl,description:clean(meta.ImageDescription?.value),original:info.url,changes:'Resized by Wikimedia; cropped to fit the page.'};
 console.log(key,media[key].author,media[key].license);
}
await writeFile(new URL('src/nature-media.json',root),JSON.stringify(media,null,2)+'\n');
