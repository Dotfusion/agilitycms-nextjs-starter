import React, { useState, useEffect } from 'react';
import agility from '@agility/content-fetch';

const ParagraphWithHeading = (props) => {
  const {
    module
  } = props;

  const { fields } = module;
  console.log( fields )
  return (
    <div className="relative">
      <h4>{ fields.title }</h4>
      <p>{ fields.heading }</p>
      <p>{ fields.description }</p>
    </div>
  )
}

export default ParagraphWithHeading;