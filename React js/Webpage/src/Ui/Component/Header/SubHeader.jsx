import { MapPin } from 'lucide-react'
import React from 'react'

export default function SubHeader() {
    return (
        <>
            <div className='flex gap-10 justify-center pt-3 pb-2 '>
                <h6 className='text-sm font-normal' >MEN</h6>
                <h6 className='text-sm font-normal' >WOMEN</h6>
                <h6 className='text-sm font-normal' >SMART WATCHES</h6>
                <h6 className='text-sm font-normal' >PREMIUM WATCHES</h6>
                <h6 className='text-sm font-normal' >INTERNATIONAL BRANDS</h6>
                <h6 className='text-sm font-normal' >GIFTING</h6>
                <h6 className='text-sm font-normal' >SALE</h6>
                <h6 className='text-sm font-normal' >MORE</h6>
            </div>
            <div className='flex text-xs bg-orange-50 p-2 items-center '>
                    <span className='ps-24'><MapPin strokeWidth={1} size={20} /></span>
                    <span className='ps-2'>Select a location to see product availability</span>
            </div>
        </>
    )
}
