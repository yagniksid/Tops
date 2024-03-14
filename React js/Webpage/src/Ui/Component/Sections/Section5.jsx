import React from 'react'
import ori from "../../Image/original.svg"
import ret from "../../Image/Return.svg"
import ship from "../../Image/Shipping.svg"

export default function Section5() {
    return (
        <div className='mt-16 flex items-center justify-center' style={{ backgroundColor: "#fafafa" }}>
            <div className='flex justify-around w-50 pb-4 pt-8'>
                <div className='flex flex-column items-center'>
                    <img src={ori} alt="" className='flex justify-center' />
                    <h5 className='text-lg text-center'>100% ORIGINAL</h5>
                </div>
                <div className='flex flex-column items-center'>
                    <img src={ret} alt="" />
                    <h5 className='text-lg text-center'>7 DAY RETURN</h5>
                </div>
                <div className='flex flex-column items-center'>
                    <img src={ship} alt="" />
                    <h5 className='text-lg text-center'>FREE SHIPPING</h5>
                </div>
            </div>
        </div>
    )
}
