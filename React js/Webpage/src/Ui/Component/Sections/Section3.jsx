import React from 'react'
import col1 from "../../Image/col1.jpg";
import col2 from "../../Image/col2.webp";
import col3 from "../../Image/col3.webp";
import col4 from "../../Image/col4.webp";
import col5 from "../../Image/col5.webp";
import col6 from "../../Image/col6.webp";
import col7 from "../../Image/col7.webp";
import col8 from "../../Image/col8.jpg";
import col9 from "../../Image/col9.webp";
import col10 from "../../Image/col10.webp";
import col11 from "../../Image/col11.webp";
import col12 from "../../Image/col12.webp";

export default function Section3() {
    return (
        <div>
            <h2 className="font-normal text-center pt-20 pb-5">COLLECTION</h2>
            <div className='grid grid-cols-4 gap-0 ps-16 pe-16'>
                <img src={col1} alt="" />
                <img src={col2} alt="" />
                <img src={col3} alt="" />
                <img src={col4} alt="" />
                <img src={col5} alt="" />
                <img src={col6} alt="" />
                <img src={col7} alt="" />
                <img src={col8} alt="" />
                <img src={col9} alt="" />
                <img src={col10} alt="" />
                <img src={col11} alt="" />
                <img src={col12} alt="" />
            </div>
        </div>
    )
}
