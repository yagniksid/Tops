import React from "react";
import Slider from "react-slick";
import s4img1 from "../../../Image/s4img1.webp";
import s4img2 from "../../../Image/s4img2.webp";
import s4img3 from "../../../Image/s4img3.webp";
import s4img4 from "../../../Image/s4img4.webp";
import s4img5 from "../../../Image/s4img5.webp";
import s4img6 from "../../../Image/s4img6.webp";
import s4img7 from "../../../Image/s4img7.webp";
import s4img8 from "../../../Image/s4img8.webp";
import s4img9 from "../../../Image/s4img9.webp";
import s4img10 from "../../../Image/s4img10.webp";
import s4img11 from "../../../Image/s4img11.jpg";
import s4img12 from "../../../Image/s4img12.webp";
import "./Slider4.css"
import { Heart } from "lucide-react";

const slidesData = [
    { img: s4img1, title: "Titan Raga Showstopper Quartz Analog Purple Dial Metal Strap Watch for Women", category: "Women's Watch", price: "₹ 5,795.00" },
    { img: s4img2, title: "Titan Raga Showstopper Quartz Analog Blue Dial Metal Strap Watch for Women", category: "Women's Watch", price: "₹ 5,995.00" },
    { img: s4img3, title: "Raga Women's Allure: Brown Dial with designer Metal Strap Watch", category: "Women's Watch", price: "₹ 4,795.00" },
    { img: s4img4, title: "Titan Raga Viva Rose Gold Dial Women Watch With Metal Strap", category: "Women's Watch", price: "₹ 5,140.00" },
    { img: s4img5, title: "Titan Crest with 3.63 cm AMOLED Display with AOD, Functional Crown, BT Calling, Premium Smartwatch with Black Strap", category: "Unisex Watch", price: "₹ 5,995.00" },
    { img: s4img6, title: "Titan Raga Showstopper Quartz Analog Silver Dial Metal Strap Watch for Women", category: "Women's Watch", price: "₹ 5,995.00" },
    { img: s4img7, title: "Titan Raga Showstopper Quartz Analog Rose Gold Dial Metal Strap Watch for Women", category: "Women's Watch", price: "₹ 5,995.00" },
    { img: s4img8, title: "Titan Classic Chrono Blue Dial Quartz Multifunction Leather Strap watch for Men", category: "Men's Watch", price: "₹ 8,795.00" },
    { img: s4img10, title: "Titan Men's Metropolitan Charm: Men's Multifunctional Black Watch with Metallic Accents", category: "Men's Watch", price: "₹ 5,175.00" },
    { img: s4img9, title: "Titan Infinity Display Blue Dial Chronograph Leather Strap watch for Men", category: "Men's Watch", price: "₹ 7,380.00" },
    { img: s4img11, title: "Titan Maritime Green Dial Quartz Multifunction Leather Strap watch for Men", category: "Men's Watch", price: "₹ 7,695.00" },
    { img: s4img12, title: "Titan Black and Gold Quartz Analog with Date Silver Dial Stainless Steel Strap Watch for Men", category: "Men's Watch", price: "₹ 4,995.00" }
];

export default function Slider4() {
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="text-center pt-12">
                <h2 className="font-normal">RECOMMENDED FOR YOU</h2>
            </div>
            <div className="flex justify-center slide4 pt-2">
                <div className="slider-container" style={{ width: "90%" }}>
                    <Slider {...settings} autoplay={true} autoplaySpeed={5000}>
                        {slidesData.map((slide, index) => (
                            <div key={index} className="slide relative overflow-hidden">
                                <img role="button" className="pe-3" src={slide.img} alt="" />
                                <div className='absolute h-full w-full bg-black/0 flex justify-end  items-start -top-20 hover:-top-3 pe-8 pt-3 hover:opacity-100 opacity-20 transition-all duration-700'>
                                    <span className="bg-gray-200 h-10 w-10 rounded-full flex justify-center items-center pt-1"><Heart strokeWidth={1} /></span>
                                </div>
                                <p role="button" className="text-lg font-medium line-clamp-2 pe-3 hover:underline">{slide.title}</p>

                                <h5 role="button" className="text-gray-400 text-base font-semibold pt-1 pb-1">{slide.category}</h5>
                                <h5 role="button" >{slide.price}</h5>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}
