/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderHead, j as renderComponent } from '../astro_CY83QnuY.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Image } from './generic_EZ-s_o8w.mjs';
import 'clsx';

const $$Astro$4 = createAstro();
const $$Preparation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Preparation;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-10/12 md:w-full bg-[#FFF7FB] p-6 rounded-xl"> <h2 class="font-semibold text-2xl text-[#7A284E]">Preparation Time</h2> <ul class="list-disc ml-7 marker:text-[#7A284E]"> ${items.map((item) => renderTemplate`<li class="text-[#5F564D]"> <span class="font-bold">${item.title}</span>: ${item.desc} </li>`)} </ul> </div>`;
}, "C:/Users/moran/OneDrive/Documentos/workspace/recipe-page/recipe-page/src/components/Preparation.astro", void 0);

const $$Astro$3 = createAstro();
const $$Ingredients = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Ingredients;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-10/12 md:w-full flex flex-col gap-6"> <h2 class="text-[#854632] font-serif text-2xl">Ingredients</h2> <ul class="list-disc px-6 marker:text-[#854632] flex flex-col gap-2 pb-8 border-b border-[#E3DDD7]"> ${items.map((item) => renderTemplate`<li class="text-[#5F564D] pl-1">${item}</li>`)} </ul> </div>`;
}, "C:/Users/moran/OneDrive/Documentos/workspace/recipe-page/recipe-page/src/components/Ingredients.astro", void 0);

const $$Astro$2 = createAstro();
const $$Instrutions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Instrutions;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-10/12 md:w-full flex flex-col gap-6"> <h2 class="text-[#854632] font-serif text-2xl">Instrutions</h2> <ul class="list-decimal px-6 marker:text-[#854632] flex flex-col gap-2 pb-8 border-b border-[#E3DDD7]"> ${items.map((item) => renderTemplate`<li class="text-[#5F564D] pl-1"> <span class="font-bold">${item.title}</span>: ${item.desc} </li>`)} </ul> </div>`;
}, "C:/Users/moran/OneDrive/Documentos/workspace/recipe-page/recipe-page/src/components/Instrutions.astro", void 0);

const $$Astro$1 = createAstro();
const $$Nutrition = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Nutrition;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-10/12 md:w-full flex flex-col gap-6"> <h2 class="text-[#854632] font-serif text-2xl">Nutrition</h2> <div class="flex flex-col gap-3"> <h3 class="text-[#5F564D] text-balance">
The table below shows nutritional values per serving without the
      additional fillings.
</h3> <div class="flex flex-col divide-[#E3DDD7] divide-y"> ${items.map((item) => renderTemplate`<div class="w-full justify-between flex text-[#5F564D] px-6 py-3"> ${item.title} <span class="mr-[25%] md:mr-[40%] text-[#854632] font-bold"> ${item.desc} </span> </div>`)} </div> </div> </div>`;
}, "C:/Users/moran/OneDrive/Documentos/workspace/recipe-page/recipe-page/src/components/Nutrition.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/png" href="/favicon.png"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Recipe Page</title>${renderHead()}</head> <body class="bg-[#F3E5D7]"> <header class="w-full grid place-items-center"> <div class="w-full flex flex-col items-center gap-10 md:max-w-[736px] bg-white md:mt-32 md:px-10 md:pt-10 rounded-t-3xl"> ${renderComponent($$result, "Image", $$Image, { "src": "/public/image-omelette.jpeg", "width": 375, "height": 171, "loading": "eager", "class": "md:rounded-xl w-full", "alt": "omelette" })} <div class="flex flex-col w-10/12 md:w-full gap-6"> <h1 class="font-serif text-4xl">Simple Omelette Recipe</h1> <h2 class="text-[#5F564D] leading-normal">
An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
</h2> </div> </div> </header> <main class="w-full grid place-items-center md:mb-32"> <div class="w-full flex flex-col items-center gap-8 md:max-w-[736px] md:px-10 pt-8 md:pb-10 bg-white md:rounded-b-3xl"> ${renderComponent($$result, "Preparation", $$Preparation, { "items": [
    { title: "Total", desc: "Approximately 10 minutes" },
    { title: "Preparation", desc: "5 minutes" },
    { title: "Cooking", desc: "5 minutes" }
  ] })} ${renderComponent($$result, "Ingredients", $$Ingredients, { "items": [
    "2-3 large eggs",
    "Salt, to taste",
    "Pepper, to taste",
    "1 tablespoon of butter or oil",
    "Optional fillings: cheese, diced vegetables, cooked meeats, herbs"
  ] })} ${renderComponent($$result, "Instrutions", $$Instrutions, { "items": [
    {
      title: "Beat the eggs",
      desc: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture."
    },
    {
      title: "Heat the pan",
      desc: "Place a non-stick frying pan over medium heat and add butter or oil."
    },
    {
      title: "Cook the omelette",
      desc: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."
    },
    {
      title: "Add fillings (optional)",
      desc: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette."
    },
    {
      title: "Fold and serve",
      desc: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate."
    },
    {
      title: "Enjoy",
      desc: "Serve hot, with additional salt and pepper if needed."
    }
  ] })} ${renderComponent($$result, "Nutrition", $$Nutrition, { "items": [
    { title: "Calories", desc: "277kcal" },
    { title: "Carbs", desc: "0g" },
    { title: "Protein", desc: "20g" },
    { title: "Fat", desc: "22g" }
  ] })} </div> </main> </body></html>`;
}, "C:/Users/moran/OneDrive/Documentos/workspace/recipe-page/recipe-page/src/pages/index.astro", void 0);

const $$file = "C:/Users/moran/OneDrive/Documentos/workspace/recipe-page/recipe-page/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
