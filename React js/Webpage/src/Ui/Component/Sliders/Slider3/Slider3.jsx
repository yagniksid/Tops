import React from "react";
import Slider from "react-slick";
import s1image from "../../../Image/s1.webp";
import s2image from "../../../Image/s2.webp";
import s3image from "../../../Image/s3.webp";
import s4image from "../../../Image/s4.webp";
import s5image from "../../../Image/s5.webp";
import s6image from "../../../Image/s6.webp";
import s7image from "../../../Image/s7.webp";
import s8image from "../../../Image/s8.webp";
import s9image from "../../../Image/s9.webp";
import "./Slider3.css";

const slideData = [
  { image: s1image, label: "Sale" },
  { image: s2image, label: "Men" },
  { image: s3image, label: "Women" },
  { image: s4image, label: "Kids" },
  { image: s5image, label: "Couple" },
  { image: s6image, label: "Luxe" },
  { image: s7image, label: "Clocks" },
  { image: s8image, label: "Smart" },
  { image: s9image, label: "Raga" }
];

export default function Slider3() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1
  };

  return (
    <div className="w-100 pt-5 flex justify-center flex-col items-center">
      <div>
        <h3 className="font-normal pt-6">THE BEST WAY TO BUY THE PRODUCTS YOU LOVE</h3>
      </div>
      <div className="p-6 text-xl" style={{ width: "95%" }}>
        <Slider {...settings} autoplay={true} autoplaySpeed={5000} >
          {slideData.map((slide, index) => (
            <div key={index} className="text-center">
              <img src={slide.image} alt={slide.label} />
              <p className="p-3">{slide.label}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
