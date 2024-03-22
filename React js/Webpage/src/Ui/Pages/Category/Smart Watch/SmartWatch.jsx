import React from 'react';
import Header from '../../../Component/Header/Header';
import SubHeader from '../../../Component/Header/SubHeader';
import { ChevronRight, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import book from "../../../Image/book.svg"
import buy from "../../../Image/buywith.svg"
import store from "../../../Image/store.webp"
import smartWatch from "../Smart Watch/Images/smartwatch.webp"
import img1 from "../Smart Watch/Images/img1.webp"
import img2 from "../Smart Watch/Images/img2.webp"
import img3 from "../Smart Watch/Images/img3.webp"
import img4 from "../Smart Watch/Images/img4.webp"
import img5 from "../Smart Watch/Images/img5.webp"
import img6 from "../Smart Watch/Images/img6.webp"
import img7 from "../Smart Watch/Images/img7.webp"
import img8 from "../Smart Watch/Images/img8.webp"
import img9 from "../Smart Watch/Images/img9.webp"
import img10 from "../Smart Watch/Images/img10.webp"
import img11 from "../Smart Watch/Images/img11.webp"
import img12 from "../Smart Watch/Images/img12.webp"
import img13 from "../Smart Watch/Images/img13.webp"
import img14 from "../Smart Watch/Images/img14.webp"
import img15 from "../Smart Watch/Images/img15.webp"
import img16 from "../Smart Watch/Images/img16.webp"
import img17 from "../Smart Watch/Images/img17.jpg"
import img18 from "../Smart Watch/Images/img18.webp"
import img19 from "../Smart Watch/Images/img19.webp"
import img20 from "../Smart Watch/Images/img20.webp"


import Footer from '../../../Component/Footer/Footer';
import Section7 from '../../../Component/Sections/Section7';
import Section5 from '../../../Component/Sections/Section5';

let items = [
    { img: img1, content: "Titan Traveller with 4.52 cm AMOLED Display, BT Calling, India's First FitVerse Smartwatch with Black Leather Strap", category: "Unisex Watch", price: "₹ 3,755" },
    { img: img2, content: "Titan Traveller with 4.52 cm AMOLED Display, BT Calling, India's First FitVerse Smartwatch with Black Leather Strap ", category: "Unisex Watch", price: "₹ 6,995" },
    { img: img3, content: "Titan Traveller with 4.52 cm AMOLED Display, BT Calling, India's First FitVerse Smartwatch with Black Leather Strap", price: "₹ 15,545" },
    { img: img4, content: "Titan Traveller with 4.52 cm AMOLED Display, BT Calling, India's First FitVerse Smartwatch with Black Leather Strap", category: "Unisex Watch", price: "₹ 6,345" },
    { img: img5, content: "Titan Traveller with 4.52 cm AMOLED Display, BT Calling, India's First FitVerse Smartwatch with Black Leather Strap", category: "Unisex Watch", price: "₹ 3,995" },
    { img: img6, content: "Titan Traveller with 4.52 cm AMOLED Display, BT Calling, India's First FitVerse Smartwatch with Black Leather Strap For Men", category: "Unisex Watch", price: "₹ 7,295" },
    { img: img7, content: "Titan Traveller with 4.52 cm AMOLED Display, BT Calling, India's First FitVerse Smartwatch with Black Leather Strap", category: "Unisex Watch", price: "₹ 10,045" },
    { img: img8, content: "Titan Traveller with 4.52 cm AMOLED Display, BT Calling, India's First FitVerse Smartwatch with Black Leather Strap", category: "Unisex Watch", price: "₹ 11,995" },
    { img: img9, content: "Titan Traveller with 4.52 cm AMOLED Display, BT Calling, India's First FitVerse Smartwatch with Black Leather Strap", category: "Unisex Watch", price: "₹ 6,755" },
    { img: img10, content: "Titan Traveller with 4.52 cm AMOLED Display, BT Calling, India's First FitVerse Smartwatch with Black Leather Strap", category: "Unisex Watch", price: "₹ 5,515" },
    { img: img11, content: "Titan Traveller with 4.52 cm AMOLED Display, BT Calling, India's First FitVerse Smartwatch with Black Leather Strap", category: "Unisex Watch", price: "₹ 5,515" },
    { img: img12, content: "Titan Traveller with 4.52 cm AMOLED Display, BT Calling, India's First FitVerse Smartwatch with Black Leather Strap", category: "Unisex Watch", price: "₹ 10,395" },
    { img: img13, content: "Titan Traveller with 4.52 cm AMOLED Display, BT Calling, India's First FitVerse Smartwatch with Black Leather Strap", category: "Unisex Watch", price: "₹ 4,905" },
    { img: img14, content: "Titan Traveller with 4.52 cm AMOLED Display, BT Calling, India's First FitVerse Smartwatch with Black Leather Strap", category: "Unisex Watch", price: "₹ 5,855" },
    { img: img15, content: "Titan Traveller with 4.52 cm AMOLED Display, BT Calling, India's First FitVerse Smartwatch with Black Leather Strap", category: "Unisex Watch", price: "₹ 9,520" },
    { img: img16, content: "Titan Traveller with 4.52 cm AMOLED Display, BT Calling, India's First FitVerse Smartwatch with Black Leather Strap", category: "Unisex Watch", price: "₹ 12,500" },
    { img: img17, content: "Titan Traveller with 4.52 cm AMOLED Display, BT Calling, India's First FitVerse Smartwatch with Black Leather Strap", category: "Unisex Watch", price: "₹ 7,950" },
    { img: img18, content: "Titan Traveller with 4.52 cm AMOLED Display, BT Calling, India's First FitVerse Smartwatch with Black Leather Strap", category: "Unisex Watch", price: "₹ 6,850" },
    { img: img19, content: "Titan Traveller with 4.52 cm AMOLED Display, BT Calling, India's First FitVerse Smartwatch with Black Leather Strap", category: "Unisex Watch", price: "₹ 9,780" },
    { img: img20, content: "Titan Traveller with 4.52 cm AMOLED Display, BT Calling, India's First FitVerse Smartwatch with Black Leather Strap", category: "Unisex Watch", price: "₹ 2,995" }
]

export default function SmartWatch() {

    let navigate = useNavigate()
    return (
        <>
            <Header />
            <SubHeader />
            <div className='flex gap-3 items-center ps-16 pb-3 pt-3'>
                <h6 onClick={() => navigate("/")} role='button' className=' m-0 font-normal text-sm text-gray-400 ' >Home</h6>
                <span className='p-0 m-0 pt-1'><ChevronRight size={15} strokeWidth={2} /></span>
                <h6 className='font-normal text-sm m-0'>Smart Watches</h6>
            </div>
            <div>
                <img src={smartWatch} alt="" />
            </div>
            <div className='pb-4 pt-4 flex justify-between ps-36 pe-36' style={{ backgroundColor: "#fafafa" }}>
                <div className='flex items-center gap-3'>
                    <img src={book} alt="" />
                    <h6>Book An Appointment</h6>
                </div>
                <div className='flex items-center gap-3'>
                    <img src={buy} alt="" />
                    <h6>Buy With No Cost EMI</h6>
                </div>
                <div className='flex items-center gap-3'>
                    <img className='h-7 w-7 text-gray-400 opacity-50' src={store} alt="" />
                    <h6 className=' opacity-40'>Pickup At The Store</h6>
                </div>
            </div>
            <div className='strap pb-4 mt-4 pt-4 flex gap-5 sticky-top z-10 ' style={{ top: "80px" }}>
                <div className='ps-20 z-10'>
                    <h6 className='text-xs pb-0 mb-0 font-normal'>Filter By</h6>
                    <h6>Brands</h6>
                </div>
                <div>
                    <button className='btn me-2'>Fastrack</button>
                    <button className='btn me-2'>Titan</button>
                    <button className='btn me-2'>Kenneth Cole</button>
                </div>
            </div>
            <div className='pt-4 pb-4 ps-20'>
                <h4>Smart Watches<span className='font-light ps-3'>107 items</span></h4>
            </div>

            <div className="grid grid-cols-4 gap-3 ps-20">
                {items.map((item, index) => (
                    <div key={index}>
                        <div className='relative overflow-hidden'>
                            <img src={item.img} className=" mb-2" />
                            <div className='absolute h-full w-full bg-black/0 flex justify-end  items-start -top-20 hover:-top-3 pe-8 pt-3 hover:opacity-100 opacity-20 transition-all duration-700'>
                                <span className="bg-gray-200 h-10 w-10 rounded-full flex justify-center items-center pt-1"><Heart strokeWidth={1} /></span>
                            </div>
                        </div>
                        <h6 className="line-clamp-2 hover:underline">{item.content}</h6>
                        <p className=" text-gray-500 pb-2">{item.category}</p>
                        <h5 className='pb-4 text-black'>{item.price}</h5>

                    </div>
                ))}

            </div>
            <Section5 />
            <Section7 />
            <Footer />

        </>
    );
}
