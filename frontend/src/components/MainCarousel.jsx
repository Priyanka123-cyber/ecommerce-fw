import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from '../data/mainCarouselData';
import './MainCarousel.css'; 

const MainCarousel = () => {
    // Generating carousel items from the data
    const items = mainCarouselData.map((item) => (
        <img 
            className="carousel-image" 
            role="presentation" 
            src={item.image} 
            alt="" 
        />
    ));

    return (
        <div className="carousel-container">
            <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={2000}
                infinite
            />
        </div>
    );
};

export default MainCarousel;
