import RichTextArea from "./RichTextArea";
import DefaultModule from "./DefaultModule";
import ImageWithDescription from "./ImageWithDescription";
// import HeroBanner from "./HeroBanner";
import HeroHeading from "./HeroHeading";
import ParagraphWithHeading from "./ParagraphWithHeading";
import IconGallery from "./IconGallery";

// All of the Agility Page Module Components that are in use in this site need to be imported into this index file.
// Place Page Modules in allModules array below, passing in a name and the component.

const allModules = [
  { name: "RichTextArea", module: RichTextArea },
  { name: "ImageWithDescription", module: ImageWithDescription },
  { name: "HeroHeading", module: HeroHeading },
  { name: "ParagraphWithHeading", module: ParagraphWithHeading},
  { name: "IconGallery", module: IconGallery }
];

export const getModule = (moduleName) => {
  if (!moduleName) return null;
  const obj = allModules.find(
    (m) => m.name.toLowerCase() === moduleName.toLowerCase()
  );
  if (!obj) return DefaultModule;
  return obj.module;
};
