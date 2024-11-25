import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from './HomeSectionCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@mui/material';
import { mens_kurta } from '../data/menKurta';

const HomeSectionCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };
    //for sliding of cards in 
    // const slidePrev = () => setActiveIndex(activeIndex - 1);
    // const slideNext = () => setActiveIndex(activeIndex + 1);



    // const syncActiveIndex = ({ item }) => setActiveIndex(item);


    const slidePrev = () => {
        if (activeIndex > 0) setActiveIndex(activeIndex - 1);
    };
    const slideNext = () => {
        if (activeIndex < items.length - 1) setActiveIndex(activeIndex + 1);
    };
    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const items = mens_kurta.slice(0, 10).map((item) => <HomeSectionCard product={item} />)
    return (
        <div className='border border-black px-4 lg:px-8'>
            <div className='relative p-5'>
                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    disableButtonsControls
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length - 5 && (
                    <Button
                        className="z-50 bg-white"
                        variant="contained"
                        onClick={slideNext}
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            right: '0rem',
                            transform: 'translateX(50%) rotate(90deg)',
                            bgcolor: 'white',
                        }}
                        aria-label="next"
                    >
                        <ArrowForwardIosIcon
                            sx={{ color: 'black', transform: 'rotate(90deg)' }}
                        />
                    </Button>
                )}
                {activeIndex !==0 && (
                    <Button
                        className="z-50 bg-white"
                        variant="contained"
                        onClick={slidePrev}
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            left: '0rem',
                            transform: 'translateX(-50%) rotate(-90deg)',
                            bgcolor: 'white',
                        }}
                        aria-label="previous"
                    >
                        <ArrowForwardIosIcon
                            sx={{ transform: 'rotate(90deg)', color: 'black' }}
                        />
                    </Button>
                )}
            </div>
        </div>
    )
}

export default HomeSectionCarousel