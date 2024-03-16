import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import s6img1 from "../../../Image/s6img1.webp";
import s6img2 from "../../../Image/s6img2.jpg";
import s6img3 from "../../../Image/s6img3.webp";
import s6img4 from "../../../Image/s6img4.webp";
import s6img5 from "../../../Image/s6img5.webp";
import s6img6 from "../../../Image/s6img6.webp";
import { Heart } from 'lucide-react';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
    1366: { items: 4 }
};

const items = [
    { img: s6img1, title: "Titan Neo Splash Blue Dial Quartz Multifunction Stainless Steel Strap watch for Men", category: "Men's Watch", discountPrice: "₹ 5,595", mainPrice: "₹ 6,595", discountPer: "20% off" },
    { img: s6img2, title: "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch", category: "Men's Watch", discountPrice: "₹ 2,755", mainPrice: "₹ 3,445", discountPer: "20% off" },
    { img: s6img3, title: "Titan Neo Splash Quartz Multifunction Black Dial Stainless Steel Strap Watch for Men", category: "Men's Watch", discountPrice: "₹ 5,075", mainPrice: "₹ 6,345", discountPer: "20% off" },
    { img: s6img4, title: "Titan Workwear Green Dial Analog Leather Strap Watch for Men", category: "Men's Watch", discountPrice: "₹ 2,595", mainPrice: "₹ 3,245", discountPer: "20% off" },
    { img: s6img5, title: " Raga Women's Charm: Elegant Mother of Pearl Dial with Ornate Strap Watch", category: "Women's Watch", discountPrice: "₹ 5,140", mainPrice: "₹ 7,345", discountPer: "30% off" },
    { img: s6img6, title: "Titan Women's Lagan Watch: Rose Gold Accents & Refined Elegance", category: "Women's Watch", discountPrice: "₹ 2,180", mainPrice: "₹ 2,725", discountPer: "20% off" }
];

export default function Slider6() {
    return (
        <div className='pt-14 ps-14 pe-14'>
            <div className='text-center pb-3'>
                <h2 className="font-normal">BESTSELLERS</h2>
            </div>
            <div className='slider6'>
                <AliceCarousel
                    mouseTracking
                    items={
                        items.map((e, i) => (
                            <div key={i} className='relative overflow-hidden'>
                                <img src={e.img} alt="" className='pe-3' />
                                <div className='absolute h-full w-full bg-black/0 flex justify-end  items-start -top-20 hover:-top-3 pe-8 pt-3 hover:opacity-100 opacity-20 transition-all duration-700'>
                                    <span className="bg-gray-200 h-10 w-10 rounded-full flex justify-center items-center pt-1"><Heart role='button' strokeWidth={1} /></span>
                                </div>
                                <p className="text-lg font-medium line-clamp-2 pe-3 hover:underline">{e.title}</p>
                                <p className="text-gray-400 text-base font-semibold pt-1 pb-1">{e.category}</p>
                                <div className='flex items-center gap-2'>
                                    <h5>{e.discountPrice}</h5>
                                    <h6 className='text-gray-400 line-through'>{e.mainPrice}</h6>
                                    <h6 className='text-red-800'>{e.discountPer}</h6>
                                </div>
                            </div>
                        ))
                    }
                    responsive={responsive}
                    disableDotsControls
                />
            </div>
        </div>
    );
}
