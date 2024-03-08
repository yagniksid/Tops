import React from "react";
import Slider from "react-slick";
import s1image from "../../../Image/s1.webp"
import s2image from "../../../Image/s2.webp"
import s3image from "../../../Image/s3.webp"
import s4image from "../../../Image/s4.webp"
import s5image from "../../../Image/s5.webp"
import s6image from "../../../Image/s6.webp"
import s7image from "../../../Image/s7.webp"
import s8image from "../../../Image/s8.webp"
import s9image from "../../../Image/s9.webp"
import "./Slider3.css"

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
        <h3 className="font-normal pt-6">THE BEST WAY TO BUY THE PRODUCTS YOU LOVE
        </h3>
      </div>
      <div className="p-6 text-xl font-" style={{ width: "95%" }}>
        <Slider {...settings} autoplay={true} autoplaySpeed={5000} >
          <div className="text-center" >
            <img src={s1image} alt="" />
            <p className="p-3">Sale</p>
          </div>
          <div className="text-center">
            <img src={s2image} alt="" />
            <p className="p-3">Men</p>
          </div>
          <div className="text-center">
            <img src={s3image} alt="" />
            <p className="p-3">Women</p>
          </div>
          <div className="text-center">
            <img src={s4image} alt="" />
            <p className="p-3">Kids</p>
          </div>
          <div className="text-center">
            <img src={s5image} alt="" />
            <p className="p-3">Couple</p>
          </div>
          <div className="text-center">
            <img src={s6image} alt="" />
            <p className="p-3">Luxe</p>
          </div>
          <div className="text-center">
            <img src={s7image} alt="" />
            <p className="p-3">Clocks</p>
          </div>
          <div className="text-center">
            <img src={s8image} alt="" />
            <p className="p-3">Smart</p>
          </div>
          <div className="text-center">
            <img src={s9image} alt="" />
            <p className="p-3">Raga</p>
          </div>

        </Slider>
      </div>
    </div>
  );
}