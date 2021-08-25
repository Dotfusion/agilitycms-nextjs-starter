import React, { useState, useEffect } from 'react';
import agility from '@agility/content-fetch';

const ImageWithDescription = (props) => {
  const [cardItems, setCardItems] = useState(null);
  const {
    module
  } = props;

  const { fields } = module;
  const { image } = fields;

  console.log('items ', cardItems);

  return (
    <div>
      <img src={image.url} />
    </div>
  )
}

export default ImageWithDescription;