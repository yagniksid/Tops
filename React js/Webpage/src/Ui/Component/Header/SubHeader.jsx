import { MapPin } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SubHeader() {
    const navigate = useNavigate();

    function goToMenPage() {
        navigate("/men");
    }
    function goToWomenPage() {
        navigate("/women");
    }
    function goToSmartWactchPage() {
        navigate("/smartWatch");
    }
    function goToPremiumWactchPage() {
        navigate("/premiumWatch");
    }
    function goToInternationalBrandsPage() {
        navigate("/internationalBrands");
    }
    function goToGiftingPage() {
        navigate("/gifting");
    }
    function goToSalePage() {
        navigate("/sale");
    }

    return (
        <>
            <div className='flex gap-10 justify-center pt-2 pb-2 relative cursor-pointer group'>
                <h6 role='button' className='text-sm font-normal hover:underline underline-offset-4 ' onClick={goToMenPage}>MEN</h6>
                <h6 role='button' className='text-sm font-normal hover:underline underline-offset-4' onClick={goToWomenPage}>WOMEN</h6>
                <h6 role='button' className='text-sm font-normal hover:underline underline-offset-4' onClick={goToSmartWactchPage}>SMART WATCHES</h6>
                <h6 role='button' className='text-sm font-normal hover:underline underline-offset-4' onClick={goToPremiumWactchPage}>PREMIUM WATCHES</h6>
                <h6 role='button' className='text-sm font-normal hover:underline underline-offset-4' onClick={goToInternationalBrandsPage}>INTERNATIONAL BRANDS</h6>
                <h6 role='button' className='text-sm font-normal hover:underline underline-offset-4' onClick={goToGiftingPage}>GIFTING</h6>
                <h6 role='button' className='text-sm font-normal hover:underline underline-offset-4' onClick={goToSalePage}>SALE</h6>
                <h6 role='button' className='text-sm font-normal hover:underline underline-offset-4'>MORE</h6>
            </div>
            <div className='flex text-xs bg-orange-50 p-2 items-center'>
                <span role='button' className='ps-16'><MapPin strokeWidth={1} size={20} /></span>
                <span role='button' className='ps-2'>Select a location to see product availability</span>
            </div>
        </>
    );
}
