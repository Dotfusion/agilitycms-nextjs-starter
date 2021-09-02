import React from "react";
import { renderHTML } from "@agility/nextjs";

const IconGallery = ({ module, customData }) => {
  // get module fields
  const { fields } = module;

  console.log("icons", customData.icons);
  console.log("fields", fields);
  return (
    <>
      <div className="flex flex-row flex-wrap px-20 md:px-40">
        {!!customData &&
          customData.icons.map((item, index) => {
            return (
              <div
                className={`w-full m-auto
                ${
                  fields?.iconOrientation == 3
                    ? "md:w-4/12 px-12 py-24"
                    : fields?.iconOrientation == 8
                    ? "md:w-6/12 lg:w-3/12 px-6 py-10"
                    : "md:w-full"
                }
                `}
                key={index}
              >
                <div
                  className={`flex ${
                    fields?.iconOrientation == 3
                      ? ""
                      : fields?.iconOrientation == 8
                      ? "justify-center"
                      : ""
                  }`}
                >
                  <img
                    className={`flex ${
                      fields?.iconOrientation == 3
                        ? ""
                        : fields?.iconOrientation == 8
                        ? "w-full px-8 justify-center"
                        : ""
                    }`}
                    src={item?.fields?.iconImage.url}
                    alt={item?.fields?.heading}
                  />
                </div>
                <div className="text-black">
                  <h1>{item?.fields?.heading}</h1>
                  <h1>{item?.fields?.description}</h1>
                </div>
              </div>
            );
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