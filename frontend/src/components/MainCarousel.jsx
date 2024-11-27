// import React from 'react'
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';
// import {mainCarouselData} from '../data/mainCarouselData'

// const MainCarousel = () => {    
//     const items = mainCarouselData.map((item)=><img className='cursor-pointer -z-10 mt-100' 
//     role='presentation' src={item.image} alt=""/>)
//     return (
//         <div>
//             <AliceCarousel
//             items={items}
//             disableButtonsControls
//             autoPlay
//             autoPlayInterval={1000}
//             infinite/>
//         </div>
//     )
// }

// export default MainCarousel

import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from '../data/mainCarouselData';
import './MainCarousel.css'; // Add this for custom styles

const MainCarousel = () => {
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
