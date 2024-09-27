import React, { useState, useEffect } from 'react';
import agility from '@agility/content-fetch';

const HeroBanner = (props) => {
  const {
    module
  } = props;

  const { fields } = module;
  console.log( fields )
  return (
    <div className="relative">
      <img 
        src={fields.backgroundImage.url} 
        alt={fields.headerCaption} 
        className="max-h-screen min-w-full bg-fixed bg-center bg-cover"
      />
      <div className="absolute left-1/2 top-1/2 text-white">
        <p className="text-sm">{fields.artistName}</p>
        <h1 className="text-4xl">{fields.headerCaption}</h1>
      </div>
    </div>
  )
}

export default HeroBanner;