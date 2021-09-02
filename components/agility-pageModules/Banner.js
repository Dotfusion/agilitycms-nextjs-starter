import React, { useState, useEffect } from 'react';
import agility from '@agility/content-fetch';

const Banner = (props) => {
  const {
    module
  } = props;

  const { fields } = module;
  console.log('b', fields )
  return (
    <div className="px-40">
      <p className="uppercase">{ fields.heading }</p>
      <p className="font-bold">{ fields.description }</p>
    </div>
  )
}

export default Banner;