import React, { useState } from 'react';
import img1 from "../../../Image/image1.webp"
import img2 from "../../../Image/image2.webp"
import img3 from "../../../Image/image3.webp"
import img4 from "../../../Image/image4.webp"
import img5 from "../../../Image/image5.webp"
import img6 from "../../../Image/image6.webp"
import img7 from "../../../Image/image7.jpg"
import "./Slider1.css"
import {
    Carousel,
    CarouselItem,
    CarouselControl,
} from 'reactstrap';

const items = [
    {
        src: img1,
        altText: 'Slide 1',
        caption: 'Slide 1',
        key: 1,
    },
    {
        src: img2,
        altText: 'Slide 2',
        caption: 'Slide 2',
        key: 2,
    },
    {
        src: img3,
        altText: 'Slide 3',
        caption: 'Slide 3',
        key: 3,
    },
    {
        src: img4,
        altText: 'Slide 4',
        caption: 'Slide 4',
        key: 4,
    },
    {
        src: img5,
        altText: 'Slide 5',
        caption: 'Slide 5',
        key: 5,
    },
    {
        src: img6,
        altText: 'Slide 6',
        caption: 'Slide 6',
        key: 6,
    },
    {
        src: img7,
        altText: 'Slide 7',
        caption: 'Slide 7',
        key: 7,
    },
];


let name = ["Sale", "Women's Day", "International", "Smart", "Workwear", "Raga", "New Arrival", "Clocks"]

export default function Slider1() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const slides = items.map((item, i) => {
        return (
            <CarouselItem key={i} >
                <img src={item.src} alt={item.altText} />
            </CarouselItem>
        );
    });

    return (
        <>
            <div>
                <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                    dark={true}
                    mouseEnter={false}
                    pause={false}
                    slide={true}
                    ride='carousel'
                >
                    {slides}
                    <CarouselControl
                        direction="prev"
                        directionText="Previous"
                        onClickHandler={previous}
                    />

                    <CarouselControl
                        direction="next"
                        directionText="Next"
                        onClickHandler={next}
                    />
                </Carousel>
            </div>
            <div className='flex gap-20 justify-center pt-10 p-10 h-20 bg-white'>
                {name.map((item, index) => (
                    <h6 key={index} className='relative cursor-pointer group'>
                        {item}
                        <div className='absolute top-5 left-0 w-100 h-1 bg-amber-600 transition-transform scale-x-0 group-hover:scale-x-100 duration-300 rounded'></div>
                    </h6>
                ))}
            </div>
        </>
    );
}
