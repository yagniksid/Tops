import React from 'react'
import sbb1 from "../../Image/sbb1.webp";
import sbb2 from "../../Image/sbb2.webp";
import sbb3 from "../../Image/sbb3.webp";
import sbb4 from "../../Image/sbb4.webp";
import sbb5 from "../../Image/sbb5.webp";
import sbb6 from "../../Image/sbb6.webp";
import sbb7 from "../../Image/sbb7.webp";
import sbb8 from "../../Image/sbb8.webp";
import sbb9 from "../../Image/sbb9.webp";
import sbb10 from "../../Image/sbb10.webp";

export default function Section4() {
    return (
        <div className='pt-20'>
            <div style={{ backgroundColor: "rgba(221, 162, 67, .05)" }} className='pb-14'>
                <h2 className="font-normal text-center pt-5 pb-4">SHOP BY BRANDS
                </h2>
                <div className='grid grid-cols-4 gap-3 ps-16 pe-16'>
                    <img src={sbb1} alt="" />
                    <img src={sbb2} alt="" />
                    <img src={sbb3} alt="" />
                    <img src={sbb4} alt="" />
                    <img src={sbb5} alt="" />
                    <img src={sbb6} alt="" />
                    <img src={sbb7} alt="" />
                    <img src={sbb8} alt="" />
                    <img src="" alt="" />
                    <img src={sbb9} alt="" />
                    <img src={sbb10} alt="" />
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}
