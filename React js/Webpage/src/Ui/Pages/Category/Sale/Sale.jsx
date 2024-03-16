import React from 'react';
import Header from '../../../Component/Header/Header';
import SubHeader from '../../../Component/Header/SubHeader';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import book from "../../../Image/book.svg"
import buy from "../../../Image/buywith.svg"
import store from "../../../Image/store.webp"
import img1 from "../Sale/Images/img1.webp"
import img2 from "../Sale/Images/img2.webp"
import img3 from "../Sale/Images/img3.webp"
import img4 from "../Sale/Images/img4.webp"
import img5 from "../Sale/Images/img5.webp"
import img6 from "../Sale/Images/img6.webp"
import img7 from "../Sale/Images/img7.webp"
import img8 from "../Sale/Images/img8.webp"
import img9 from "../Sale/Images/img9.webp"
import img10 from "../Sale/Images/img10.jpg"
import img11 from "../Sale/Images/img11.webp"
import img12 from "../Sale/Images/img12.webp"
import img13 from "../Sale/Images/img13.webp"
import img14 from "../Sale/Images/img14.webp"
import img15 from "../Sale/Images/img15.webp"
import img16 from "../Sale/Images/img16.webp"
import img17 from "../Sale/Images/img17.webp"
import img18 from "../Sale/Images/img18.webp"
import img19 from "../Sale/Images/img19.webp"
import img20 from "../Sale/Images/img20.jpg"


import Footer from '../../../Component/Footer/Footer';
import Section7 from '../../../Component/Sections/Section7';
import Section5 from '../../../Component/Sections/Section5';

let items = [
    { img: img1, content: "Titan Neo Splash Blue Dial Quartz Multifunction Stainless Steel Strap watch for Men ", category: "Women's Watch", mainPrice: "₹ 8,255", discountPrice: "₹ 5,230" },
    { img: img2, content: "Titan Neo Splash Blue Dial Quartz Multifunction Stainless Steel Strap watch for Men ", category: "Women's Watch", mainPrice: "₹ 6,995", discountPrice: "₹ 3.255" },
    { img: img3, content: "Titan Men's Maritime Pro Lateen Sail Chronograph Watch", category: "Women's Watch", mainPrice: "₹ 15,545", discountPrice: "₹ 8,555" },
    { img: img4, content: "Titan Neo Splash Quartz Multifunction Black Dial Stainless Steel Strap Watch for Men", category: "Women's Watch", mainPrice: "₹ 6,345", discountPrice: "₹ 3,255" },
    { img: img5, content: "Titan Neo Splash Quartz Multifunction Black Dial Stainless Steel Strap Watch for Men", category: "Unisex Watch", mainPrice: "₹ 3,995", discountPrice: "₹ 1,550" },
    { img: img6, content: "Titan Regalia Opulent Analog With Day And Date Black Dial Watch For Men", category: "Unisex Watch", mainPrice: "₹ 7,295", discountPrice: "₹ 4,230" },
    { img: img7, content: "Titan Grandmaster Brown Dial Analog Stainless Steel Strap Watch For Men", category: "Women's Watch", mainPrice: "₹ 10,045", discountPrice: "₹ 5,540" },
    { img: img8, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Women's Watch", mainPrice: "₹ 11,995", discountPrice: "₹ 6,540" },
    { img: img9, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Women's Watch", mainPrice: "₹ 6,755", discountPrice: "₹ 3,380" },
    { img: img10, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Women's Watch", mainPrice: "₹ 5,515", discountPrice: "₹ 3,250" },
    { img: img11, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Women's Watch", mainPrice: "₹ 5,515", discountPrice: "₹ 2,540" },
    { img: img12, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Women's Watch", mainPrice: "₹ 10,395", discountPrice: "₹ 6,492" },
    { img: img13, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Women's Watch", mainPrice: "₹ 4,905", discountPrice: "₹ 2000" },
    { img: img14, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Women's Watch", mainPrice: "₹ 5,855", discountPrice: "₹ 3,299" },
    { img: img15, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Unisex Watch", mainPrice: "₹ 9,520", discountPrice: "₹ 5,480" },
    { img: img16, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Women's Watch", mainPrice: "₹ 12,500", discountPrice: "₹ 6,250" },
    { img: img17, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Women's Watch", mainPrice: "₹ 7,950", discountPrice: "₹ 3,970" },
    { img: img18, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Women's Watch", mainPrice: "₹ 6,850", discountPrice: "₹ 2,999" },
    { img: img19, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Women's Watch", mainPrice: "₹ 9,780", discountPrice: "₹ 5,460" },
    { img: img20, content: "Titan Regalia Premium Green Chrono Stainless Steel Strap Watch For Men", category: "Women's Watch", mainPrice: "₹ 2,995", discountPrice: "₹ 1,999" }
]

export default function Sale() {

    let navigate = useNavigate()
    return (
        <>
            <Header />
            <SubHeader />
            <div className='flex gap-3 items-center ps-16 pb-3 pt-3'>
                <h6 onClick={() => navigate("/")} role='button' className=' m-0 font-normal text-sm text-gray-400 ' >Home</h6>
                <span className='p-0 m-0 pt-1'><ChevronRight size={15} strokeWidth={2} /></span>
                <h6 className='font-normal text-sm m-0'>Sale</h6>
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
            <div className='strap pb-4 pt-4 mt-4 flex gap-5 sticky-top z-10 ' style={{ top: "80px" }}>
                <div className='ps-20 z-10'>
                    <h6 className='text-xs pb-0 mb-0 font-normal'>Filter By</h6>
                    <h6>Brands</h6>
                </div>
                <div>
                    <button className='btn me-2'>Sonata</button>
                    <button className='btn me-2'>Fastrack</button>
                    <button className='btn me-2'>Titan</button>
                    <button className='btn me-2'>Kenneth Cole</button>
                </div>
            </div>
            <div className='pt-4 pb-4 ps-20'>
                <h4>Watches On Sale<span className='font-light ps-3'>1,541 items</span></h4>
            </div>

            <div className="grid grid-cols-4 gap-3 ps-20">
                {items.map((item, index) => (
                    <div key={index}>

                        <div class="text-center m-2">
                            <div class="h-full overflow-hidden">
                                <img className=" hover:scale-110 transition-all duration-500 cursor-pointer" src={item.img} />
                            </div>
                        </div>
                        <h6 className="line-clamp-2 hover:underline">{item.content}</h6>
                        <p className=" text-gray-500 pb-3">{item.category}</p>
                        <div className='flex gap-3'>
                            <h5 className=' text-black'>{item.discountPrice}</h5>
                            <h5 className=' text-gray-400 line-through'>{item.mainPrice}</h5>
                        </div>
                    </div>
                ))}

            </div>
            <Section5 />
            <Section7 />
            <Footer />
        </>
    );
}
