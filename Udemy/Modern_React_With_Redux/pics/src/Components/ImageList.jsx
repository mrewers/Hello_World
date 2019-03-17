import React from 'react';

import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = ( { images } ) => {
  const list = images.map( image => (
    <ImageCard
      image={ image }
      key={ image.id }
    />
  ) )
  
  return (
    <div className="image-list">
      {list}
    </div>
  )

}

export default ImageList;