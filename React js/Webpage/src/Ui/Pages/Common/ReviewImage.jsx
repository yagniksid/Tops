// import React, { useEffect, useState } from 'react';
// import { useCookies } from 'react-cookie';
// import { Button } from 'reactstrap';

// export default function ReviewImage({ refreshPage }) {
//     const [cookie, setCookie] = useCookies(["items"]);
//     const [reviewData, setReviewData] = useState([]);

//     useEffect(() => {
//         const data = JSON.parse(localStorage.getItem("reviewData")) || [];
//         setReviewData([data]);
//     }, [refreshPage]);

//     const deleteHandler = () => {
//         localStorage.removeItem('reviewData');
//         setReviewData([]);
//     };

//     return (
//         <div>
//             <div className="flex justify-center items-center border">
//                 <img src={cookie.items.img} alt="" />
//             </div>

//             <div className='pt-3'>
//                 {
//                     reviewData.map((e, i) => (
//                         <div key={i}>
//                             <h2>{e.title}</h2>
//                             <h3>{e.description}</h3>
//                             <h4>{e.review}</h4>
//                         </div>
//                     ))
//                 }
//             </div>
//             <div className='pt-3'>
//                 <Button onClick={deleteHandler} color="danger">
//                     Delete
//                 </Button>
//             </div>
//         </div>
//     );
// }

import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Button } from 'reactstrap';

export default function ReviewImage({ refreshPage }) {
    const [cookie, setCookie] = useCookies(["items"]);
    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("reviewData")) || [];
        setReviewData([data]);
    }, [refreshPage]);

    const deleteHandler = () => {
        localStorage.removeItem('reviewData');
        setReviewData([]);
    };

    return (
        <div>
            <div className="flex justify-center items-center border">
                <img src={cookie.items.img} alt="" />
            </div>

            <div className='pt-3'>
                {reviewData.map((review, index) => (
                    <div key={index}>
                        <h2>{review.title}</h2>
                        <h3>{review.description}</h3>
                        <h4>{review.review}</h4>
                    </div>
                ))}
            </div>
            <div className='pt-3'>
                <Button onClick={deleteHandler} color="danger">
                    Delete
                </Button>
            </div>
        </div>
    );
}
