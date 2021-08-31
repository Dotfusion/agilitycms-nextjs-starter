import React from "react";
import { renderHTML } from "@agility/nextjs";

const IconGallery = ({ module, customData }) => {
  // get module fields
  const { fields } = module;
  console.log('m', module)
  console.log('icons ', customData.icons);

  return (
    <>
      <div className="relative">
        {!!customData &&
          customData.icons.map((iconItem, index) => {
            return (<div key={index}>
              <img
                src={iconItem?.fields?.iconImage?.url}
                alt={iconItem.fields.heading}
                className="max-h-screen min-w-full bg-fixed bg-center bg-cover"
              />
              <div className="absolute text-white left-1/4 top-1/3">
                <p className="text-2xl">{iconItem.fields.description}</p>
                <h1>{iconItem.fields.heading}</h1>
              </div>
            </div>)
          })}
      </div>
    </>
  );
};

IconGallery.getCustomInitialProps = async function ({
  agility,
  languageCode,
  channelName,
  item,
}) {
  const api = agility;

  const icons = await api.getContentList({
    referenceName: item.fields.iconList.referencename,
    channelName: channelName,
    languageCode: languageCode,
  });
  console.log(icons);
  return {
    icons: icons,
  };
};

export default IconGallery;