import React, { useState } from 'react';
import Review from './Reviwe';
import ReviewImage from './ReviewImage';
import Header from '../../Component/Header/Header';
import SubHeader from '../../Component/Header/SubHeader';


export default function ReviewPage() {
    const [refresh, setRefresh] = useState(false);
    console.log("🚀 ~ ReviewPage ~ refresh:", refresh)

    let refreshPage = () => {
        setRefresh(!refresh);
    };

    return (
        <div>
            <Header />
            <SubHeader />
            <div className="flex gap-20 py-32 px-32">
                <div className='flex-1'>
                    <ReviewImage refreshPage={refreshPage} />
                </div>
                <div className='flex-1'>
                    <Review refreshPage={refreshPage} />
                </div>
            </div>
        </div>
    );
}
