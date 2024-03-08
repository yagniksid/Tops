import React from 'react'
import imag1 from "../../Image/image12.webp"
import imag2 from "../../Image/image13.webp"
import imag3 from "../../Image/image14.jpg"
import imag4 from "../../Image/image15.webp"
import imag5 from "../../Image/image16.webp"

export default function Section2() {
    return (
        <>
            <div className='text-center pt-3 pb-2'>
                <p className='font-normal text-3xl'>MOVEMENT IN TIME</p>
            </div>

            <div className='flex ps-16 pe-16'>
                <div className='flex-1'>
                    <img style={{ height: "99.4%", paddingLeft: "5px" }} src={imag1} alt="" />
                </div>
                <div className='flex-1'>
                    <div className='grid grid-cols-2 '>
                        <img src={imag2} alt="" className='pb-3' />
                        <img src={imag3} alt="" />
                        <img src={imag4} alt="" />
                        <img src={imag5} alt="" />
                    </div>
                </div>
            </div>
        </>

    )
}
