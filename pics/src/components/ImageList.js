// use css to create grid for images
import './ImageList.css';
import React from 'react';
// use ImageCard component to syle each image, due to they have different size
import ImageCard from './ImageCard';

const ImageList = (props) => {
    // use map() to change array element to a new array
    // we can use destructure to shorten the props images
    const images = props.images.map((image) => {
        // image.id is from response data, it is unique
        return <ImageCard key={image.id} image={image} />;
    });
    // add css for grid
    return <div className='image-list'>{images}</div>;
};

export default ImageList;