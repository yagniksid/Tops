import React, { useEffect } from "react";
import { CalendarClock, ChevronRight, Heart, Percent } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img1 from "../Men/Image/img1.webp";
import img2 from "../Men/Image/img2.webp";
import img3 from "../Men/Image/img3.webp";
import img4 from "../Men/Image/img4.webp";


let items = [
    {
        img: img1,
        content:
            "Titan Men's Multifunction Karishma: Two-Tone Steel Elegance Watch",
        category: "Men's Watch",
        price: "₹ 3,445",
    },
    {
        img: img2,
        content:
            "Titan Neo Splash Blue Dial Quartz Multifunction Stainless Steel Strap watch for Men ",
        category: "Men's Watch",
        price: "₹ 6,995",
    },
    {
        img: img3,
        content: "Titan Men's Maritime Pro Lateen Sail Chronograph Watch",
        category: "Unisex Watch",
        price: "₹ 15,545",
    },
    {
        img: img4,
        content:
            "Titan Neo Splash Quartz Multifunction Black Dial Stainless Steel Strap Watch for Men",
        category: "Men's Watch",
        price: "₹ 6,345",
    }
];

export default function Men() {

    let navigate = useNavigate();

    let handleReview = (item) => {
        console.log("🚀 ~ handleReview ~ item:", item);
        localStorage.setItem("reviewproduct", JSON.stringify(item));
        navigate("/productReview");
    };
    

    return (
        <>
            <div className="grid grid-cols-4 gap-3 ps-20">
                {items.map((item, index) => (
                    <div key={index}>
                        <div className="relative overflow-hidden">
                            <img src={item.img} className=" mb-2" />
                            <div className="absolute h-full w-full bg-black/0 flex justify-end  items-start -top-20 hover:-top-3 pe-2 pt-4 hover:opacity-100 opacity-20 transition-all duration-700">
                                <span className="bg-gray-200 h-10 w-10 rounded-full flex justify-center items-center pt-1">
                                    <Heart strokeWidth={1} />
                                </span>
                            </div>
                        </div>
                        <h6 className="line-clamp-2 hover:underline">{item.content}</h6>
                        <p className=" text-gray-500">{item.category}</p>
                        <h5 className="pb-3 text-black">{item.price}</h5>
                        <button
                            onClick={() => handleReview(item)}
                            className="bg-amber-500 text-white hover:bg-yellow-600 duration-300 h-10 mb-16 rounded w-32 text-base font-medium"
                        >
                            Give Review
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}
