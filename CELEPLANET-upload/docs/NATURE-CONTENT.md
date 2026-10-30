# CELEPLANET nature collection

The existing ThreeUI hero, Celebi controller, branch loading and camera composition are retained. A separate native dialog hosts five nature sections. Navigation is a same-origin, iframe-source-validated message bridge; dialog content scrolls independently.

## Content
- Curiosity: four animal discoveries, a cream scalloped fact card, winding connector and credited photograph.
- Explore: six overlapping taxonomic groups, filters, dated worldwide counts, rank labels and source links. These are not forest-only or live totals.
- Forest moments: eight photographic views covering four seasons, sunrise, evening, rainfall and after rain. Photographs show different locations, not one location over time.
- Habitats: tropical, temperate and boreal forests; canopy, understory and floor explanations.
- Field guide: six introductory entries, search, category filters and a notebook saved to localStorage in the current browser.

Sources are linked next to the facts and stored in src/nature-data.ts. Photo metadata is in src/nature-media.json. Downloaded images are local assets, not runtime third-party embeds. Display crops retain the source photograph's license. No new dependencies.

## Photograph credits
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

## Verification
Production build and all ten registered source hashes pass. Browser checks cover all hero entry points, four discovery slides, eight gallery selections, habitat choices, floor-layer expansion, group filters, search, empty results, saved notebook, Escape and return navigation. Phone-width dialog has no horizontal overflow. All five pre-existing inline hero scripts remain byte-equivalent after newline normalization; only a navigation bridge was appended.
