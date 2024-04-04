import React from 'react';
import { Heart } from 'lucide-react';
export default function Card({ cardData }) {

    return (
        <div className='mb-5 border-2 p-2 rounded-md pb-4'>
            <div className="relative overflow-hidden">
                <img src={cardData.thumbnail} className=" mb-2" />
                <div className="absolute h-full w-full bg-black/0 flex justify-end  items-start -top-20 hover:-top-3 pe-2 pt-4 hover:opacity-100 opacity-20 transition-all duration-700">
                    <span className="bg-gray-200 h-10 w-10 rounded-full flex justify-center items-center pt-1">
                        <Heart strokeWidth={1} className='hover:text-red-500 hover:fill-red-500' />
                    </span>
                </div>
            </div>
            <h6 role='button' className="line-clamp-2 hover:underline">{cardData.description}</h6> {/* Change `item` to `cardData` */}
            <p className=" text-gray-500">{cardData.mainCategory}</p> {/* Change `item` to `cardData` */}
            <h5 className="pb-3 text-black">{cardData.price}</h5> {/* Change `item` to `cardData` */}
            <div className='flex justify-between'>

                <button className="w-100 m-1 bg-amber-500 text-white hover:bg-white hover:!text-amber-500 hover:border-2 hover:!border-amber-500 duration-300 h-10 mb-16 rounded text-base font-medium">
                    Add to cart
                </button>

            </div>
        </div>
    );
}
