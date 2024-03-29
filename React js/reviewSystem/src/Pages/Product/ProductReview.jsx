import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';
import Product from './Product';

export default function ProductReview() {
    const [refresh, setRefresh] = useState(false);
    console.log("🚀 ~ ProductReview ~ refresh:", refresh)
    const [reviewData, setReviewData] = useState([]);
    console.log("🚀 ~ ProductReview ~ reviewData:", reviewData)

    let refreshPage = () => {
        setRefresh(!refresh);
        console.log("=============>>>>>>>>>>>");
    };

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("reviewData")) || [];
        setReviewData(data)
    }, []);

    const deleteHandler = () => {
        localStorage.removeItem('reviewData');
        setReviewData([]);
    };

    return (
        <div>
            <div className='flex  gap-14 px-52 py-10'>
                <div className='flex-1'>
                    <Product refreshPage={refreshPage} />
                </div>
                <div className='pt-3 border border-black flex-1 bg-[#fdfbf6]'>
                    <div className='p-5'>
                        {reviewData.map((e, i) => {
                            return (
                                <div key={i}>
                                    <h2>Title : {e.title}</h2>
                                    <h3>Description : {e.description}</h3>
                                    <h4>Review : {e.review}</h4>
                                    <div className='pt-3'>
                                        <Button onClick={deleteHandler} color="danger">
                                            Delete
                                        </Button>
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
