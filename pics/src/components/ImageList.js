import React from 'react';

const ImageList = (props) => {
    // use map() to change array element to a new array
    // we can use destructure to shorten the props images
//   const images = props.images.map((image) => {
    const images = props.images.map(({description, id, urls}) => {
      // image.id is from response data, it is unique
    // return <img alt={image.description} key={image.id} src={image.urls.regular} />;
    return <img alt={description} key={id} src={urls.regular} />;
  });

  return <div>{images}</div>;
};

export default ImageList;