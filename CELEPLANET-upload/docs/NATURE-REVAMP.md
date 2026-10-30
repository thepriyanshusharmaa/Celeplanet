# Nature experience update

The five-second Welcome screen precedes mounting the unchanged Three.js hero. Home is first in both hero and content navigation; the previous Back to the grove button is removed. Layer labels use plain names.

Curiosity now has 12 sourced discoveries, with 14 field-guide entries and category filters for mammals, birds, reptiles, amphibians, bugs and plants. Every image includes its author, original source and license.

## Supplied components
The user's complete AccordionGallery and MorphSlider React sources were copied directly into src/components. GSAP drives the supplied accordion expansion, parallax and tilt. OGL uses the supplied morph shader, with GSAP transitions. Companion styles were authored locally because CSS was not included in the pasted source.

Integration fixes include React imports for Vite JSX, direct indicator navigation to the requested slide, resource cleanup, late image callbacks, context-restoration recovery, a static photo fallback when WebGL is unavailable, texture-readiness guards, reduced-motion support, and keyboard focus locking while the accordion animates.

Forest Moments contains eight accordion panels and uses vertical orientation on phones. The explorer offers botanical photographs, six animal portraits, and a fungi spotlight, followed by the retained sourced counts.

## New photo credits
- **panda**: Sunuwargr. [Source](https://commons.wikimedia.org/wiki/File:Red_Panda,_Gentle_Tree-Dweller_of_the_Himalayas.jpg) · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0). Resized and JPEG-compressed for the web; cropped to fit the page.
- **ant**: Charles J. Sharp. [Source](https://commons.wikimedia.org/wiki/File:Leaf-cutter_ant_(Atta_cephalotes)_Belize_4.jpg) · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0). Resized and JPEG-compressed for the web; cropped to fit the page.
- **sloth**: Daniella Maraschiello. [Source](https://commons.wikimedia.org/wiki/File:Bicho-pregui%C3%A7a_3.jpg) · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0). Resized and JPEG-compressed for the web; cropped to fit the page.
- **firefly**: Bruce Marlin. [Source](https://commons.wikimedia.org/wiki/File:Photuris_lucicrescens.jpg) · [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5). Resized and JPEG-compressed for the web; cropped to fit the page.
- **sunrise**: Vad 7. [Source](https://commons.wikimedia.org/wiki/File:Forest_Sunrise_(122256965).jpeg) · [CC BY 3.0](https://creativecommons.org/licenses/by/3.0). Resized and JPEG-compressed for the web; cropped to fit the page.
- **evening**: Eric Kilby. [Source](https://commons.wikimedia.org/wiki/File:Sunset_Forest_Edge.jpg) · [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0). Resized and JPEG-compressed for the web; cropped to fit the page.
- **rain**: Martin Vorel. [Source](https://commons.wikimedia.org/wiki/File:Autumn_Forest_Wet_Bark.jpg) · [CC0](http://creativecommons.org/publicdomain/zero/1.0/deed.en). Resized and JPEG-compressed for the web; cropped to fit the page.
- **winter**: Susulyka. [Source](https://commons.wikimedia.org/wiki/File:Beech_forest_M%C3%A1tra_in_winter.jpg) · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0). Resized and JPEG-compressed for the web; cropped to fit the page.
- **spring**: Diliff. [Source](https://commons.wikimedia.org/wiki/File:Portglenone_Forest_Bluebells_-_May_2008.jpg) · [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0). Resized and JPEG-compressed for the web; cropped to fit the page.
- **tropical**: lubasi. [Source](https://commons.wikimedia.org/wiki/File:Aerial_view_of_the_Amazon_Rainforest.jpg) · [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0). Resized and JPEG-compressed for the web; cropped to fit the page.
- **boreal**: Bartosh Dmytro, Ukraine, Kiev. http://fotostudio.com.ua. [Source](https://commons.wikimedia.org/wiki/File:Jack_London_Lake_by_bartosh.jpg) · [CC BY 3.0](https://creativecommons.org/licenses/by/3.0). Resized and JPEG-compressed for the web; cropped to fit the page.
- **moss**: IvoShandor. [Source](https://commons.wikimedia.org/wiki/File:Tionesta-ac-moss2.jpg) · [CC BY 2.5](https://creativecommons.org/licenses/by/2.5). Resized and JPEG-compressed for the web; cropped to fit the page.
- **summer**: Acabashi. [Source](https://commons.wikimedia.org/wiki/File:Easy_Access_Path,_High_Beach,_Essex,_England_4.jpg) · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0). Resized and JPEG-compressed for the web; cropped to fit the page.
- **rainfall**: Vyacheslav Argenberg. [Source](https://commons.wikimedia.org/wiki/File:Khao_Yai,_Thailand,_Khao_Yai_grasslands_under_the_rain,_tropical_monsoon.jpg) · [CC BY 4.0](https://creativecommons.org/licenses/by/4.0). Resized and JPEG-compressed for the web; cropped to fit the page.
- **autumn**: Scott Wylie. [Source](https://commons.wikimedia.org/wiki/File:Autumn_Forest_and_wood_trees_16.jpg) · [CC BY 4.0](https://creativecommons.org/licenses/by/4.0). Resized and JPEG-compressed for the web; cropped to fit the page.
- **owl**: Dion Art. [Source](https://commons.wikimedia.org/wiki/File:%D0%91%D0%BE%D1%80%D0%BE%D0%B4%D0%B0%D1%82%D0%B0%D1%8F_%D0%BD%D0%B5%D1%8F%D1%81%D1%8B%D1%82%D1%8C_(Strix_nebulosa,_m),_%D0%91%D0%BE%D1%82%D0%B0%D0%BD%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9_%D1%81%D0%B0%D0%B4.jpg) · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0). Resized and JPEG-compressed for the web; cropped to fit the page.
- **frog**: Brian Gratwicke. [Source](https://commons.wikimedia.org/wiki/File:Lithobates_sylvaticus_(Woodfrog).jpg) · [CC BY 2.0](https://creativecommons.org/licenses/by/2.0). Resized and JPEG-compressed for the web; cropped to fit the page.
- **chameleon**: Charles J. Sharp. [Source](https://commons.wikimedia.org/wiki/File:Panther_chameleon_(Furcifer_pardalis)_male_Nosy_Be.jpg) · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0). Resized and JPEG-compressed for the web; cropped to fit the page.
- **gecko**: Charles J. Sharp. [Source](https://commons.wikimedia.org/wiki/File:Gold_dust_day_gecko_(Phelsuma_laticauda)_Nosy_Komba.jpg) · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0). Resized and JPEG-compressed for the web; cropped to fit the page.
- **elephant**: Thomas Breuer. [Source](https://commons.wikimedia.org/wiki/File:Loxodontacyclotis.jpg) · [CC BY 2.5](https://creativecommons.org/licenses/by/2.5). Resized and JPEG-compressed for the web; cropped to fit the page.
- **stick**: Fritz Geller-Grimm and Felix Grimm. [Source](https://commons.wikimedia.org/wiki/File:Le_Caylar_fg01.JPG) · [CC BY-SA 2.5](https://creativecommons.org/licenses/by-sa/2.5). Resized and JPEG-compressed for the web; cropped to fit the page.
- **orangutan**: Nanosanchez. [Source](https://commons.wikimedia.org/wiki/File:Tanjung_Puting30477.jpg) · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0). Resized and JPEG-compressed for the web; cropped to fit the page.
- **orchid**: Orchi. [Source](https://commons.wikimedia.org/wiki/File:Phalaenopsis_amabilis_Orchi_198.jpg) · [CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0/). Resized and JPEG-compressed for the web; cropped to fit the page.
- **fungus**: JJ Harrison (https://www.jjharrison.com.au/). [Source](https://commons.wikimedia.org/wiki/File:Mycena_interrupta.jpg) · [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0). Resized and JPEG-compressed for the web; cropped to fit the page.
- **monarch**: Rhododendrites. [Source](https://commons.wikimedia.org/wiki/File:Monarch_butterfly_(70387).jpg) · [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0). Resized and JPEG-compressed for the web; cropped to fit the page.
- **fern**: Sid Mosdell from New Zealand. [Source](https://commons.wikimedia.org/wiki/File:Fern_Fronds_(6626307231).jpg) · [CC BY 2.0](https://creativecommons.org/licenses/by/2.0). Resized and JPEG-compressed for the web; cropped to fit the page.

## Verified
Production build and all ten original registered hashes pass. Browser verification measured the welcome at approximately five seconds; checked all twelve discovery photographs; checked all eight accordion descriptions and keyboard focus; checked morph next, direct selection and drag; checked collection switching without black textures; confirmed Home return and plain layer labels; checked vertical gallery orientation and no horizontal overflow at a 390 CSS-pixel viewport. No browser errors were recorded after loading the final build. All six pre-existing hero scripts remain unchanged.

