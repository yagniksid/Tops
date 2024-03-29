import React, { useEffect, useState } from 'react';
import Review from './Reviwe';

export default function Product({ refreshPage }) {
    const [reviewImg, setReviewImg] = useState([]);
    console.log("🚀 ~ Product ~ reviewImg:", reviewImg)

    useEffect(() => {
        const imgData = JSON.parse(localStorage.getItem("reviewproduct")) || [];
        setReviewImg([imgData]);
    }, [refreshPage]);

    return (
        <div className='border border-black'>
            <div className='pt-3 flex justify-center'>
                {reviewImg.map((review, index) => (
                    <div key={index}>
                        <div className='flex justify-center'>
                            <p><img src={review.img} alt="" /></p>
                        </div>
                        <div className='ps-5 pe-2'>
                            <h5 className="line-clamp-2 hover:underline ">{review.content}</h5>
                            <p className=" text-gray-500">{review.category}</p>
                            <h5 className=" text-black">{review.price}</h5>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <Review refreshPage={refreshPage} />
            </div>

        </div>
    );
}

