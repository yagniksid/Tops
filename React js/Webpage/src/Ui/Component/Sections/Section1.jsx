import React from 'react'
import wimg1 from "../../Image/image8.webp"
import wimg2 from "../../Image/image9.webp"
export default function Section1() {
    return (

        <div className='flex gap-3 ps-20 pe-20 pt-10'>
            <div className='flex-1'>
                <img src={wimg1} alt="" />
            </div>

            <div className='flex-1'>
                <img src={wimg2} alt="" />
            </div>
        </div>


    )
}
