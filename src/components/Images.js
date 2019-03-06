import React from 'react';

const Images = ({ images }) => {    
  const renderImages = images.map(image => 
    <span key={image.id}>{image.title}</span>
  )

  return (
    <div>
      {renderImages}
    </div>
  )
}

export default Images;