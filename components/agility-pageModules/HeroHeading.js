import React from "react";
import { renderHTML } from "@agility/nextjs";

const HeroHeading = ({ module }) => {
  // get module fields
  const { fields } = module;

  console.log(fields);

  return (
    <div className="relative">
      <img
        src={fields.heroImage.url}
        alt={fields.heading}
        className="max-h-screen min-w-full bg-fixed bg-center bg-cover"
      />
      <div className="absolute text-white left-1/4 top-1/3">
        <p className="text-2xl text-aquaBlue">{fields.headingInfo}</p>
        <h1>{fields.heading}</h1>
      </div>
    </div>
  );
};

export default HeroHeading;