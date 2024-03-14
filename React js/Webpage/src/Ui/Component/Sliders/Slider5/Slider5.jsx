import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import s5img1 from "../../../Image/s5img.webp";
import s5img2 from "../../../Image/s5img2.webp";
import s5img3 from "../../../Image/s5img3.webp";
import s5img4 from "../../../Image/s5img4.webp";
import s5img5 from "../../../Image/s5img5.webp";
import s5img6 from "../../../Image/s5img6.webp";
import "./Slider5.css"

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1366: { items: 4 }
};

const items = [
    <div className="item" data-value="1">
        {<img src={s5img1} alt="" />}
    </div>,
    <div className="item" data-value="2">
        <img src={s5img2} alt="" />
    </div>,
    <div className="item" data-value="3">
        <img src={s5img3} alt="" />
    </div>,
    <div className="item" data-value="4">
        <img src={s5img4} alt="" />
    </div>,
    <div className="item" data-value="5">
        <img src={s5img5} alt="" />
    </div>,
    <div className="item" data-value="5">
        <img src={s5img6} alt="" />
    </div>,
];

export default function Slider5() {
    return (
        <div className='pt-14 ps-14 pe-14'>
            <div className='text-center pb-3'>
                <h2 className="font-normal">WATCH WARDROBE</h2>
            </div>
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                disableDotsControls
            />
        </div>
    );
}
