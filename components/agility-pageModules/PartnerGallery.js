import React from "react";
import { renderHTML } from "@agility/nextjs";

const PartnerGallery = ({ module, customData }) => {
  // get module fields
  const { fields } = module;
  console.log('m', module);
  console.log('c', customData.partnerIcons)

  return (
    <>
      <div className="flex flex-row flex-wrap px-32">
        {!!customData &&
          customData.partnerIcons.map((item, index) => {
            return (
            <div className="w-full w-3/12 px-4 py-10 md:w-3/12" key={index}>
              <div className="flex justify-center items-center"> 
              <img
                src={item?.fields?.displayIcon?.url}
                //alt={}
                className="pb-10"
              />
              </div>
            </div>)
          })}
      </div>
    </>
  );
};

PartnerGallery.getCustomInitialProps = async function ({
  agility,
  languageCode,
  channelName,
  item,
}) {
  const api = agility;

  const partnerIcons = await api.getContentList({
    referenceName: item.fields.partnerIcon.referencename,
    channelName: channelName,
    languageCode: languageCode,
  });
  console.log(partnerIcons);
  return {
    partnerIcons: partnerIcons,
  };
};

export default PartnerGallery;