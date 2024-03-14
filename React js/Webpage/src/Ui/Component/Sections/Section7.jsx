import React from 'react'
import { Button } from 'reactstrap'

export default function Section7() {
    return (
        <div style={{ backgroundColor: "rgba(221, 162, 67, .05)" }} className='mt-10'>
            <h2 className="font-normal text-center pt-20 pb-4">LOGIN FOR THE BEST EXPERIENCE
            </h2>
            <div className='flex justify-center pb-4'>
                <button class="bg-amber-500 hover:bg-yellow-600 h-12 w-36 text-sm font-medium">
                    LOGIN NOW
                </button>
            </div>
            <div className='pb-20 mb-0 flex justify-center'>
                <p role='button' className='underline underline-offset-2 hover:no-underline hover:text-amber-600  '>Create An Account</p>
            </div>
        </div>
    )
}
