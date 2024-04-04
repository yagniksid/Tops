import React, { useEffect, useState } from "react";
import { ChevronRight, ListFilter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import menImage from "../../../Image/menimg.webp";
import book from "../../../Image/book.svg";
import buy from "../../../Image/buywith.svg";
import store from "../../../Image/store.webp";
import "./Men.css";
import axios from "axios";
import { BE_URL } from "../../../../../config";
import Card from "../../../Component/Card/Card";
import Filter from "../../../Component/FilterData/Filter";


export default function Men() {
    let [data, setData] = useState([])
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };


    useEffect(() => {
        axios({
            method: "get",
            url: `${BE_URL}/product/getAll`,
            params: {
                gender: "male",
                price: { lt: 5000, gt: 3700 },
                // price: 3800
                mainCategory: "Men's Watches"
            }
        }).then((res) => {
            console.log("🚀 ~ useEffect ~ res:", res.data)
            setData(res.data.data)
        }).catch((err) => {
            toast.error("Error occured while fetching data")
        })
    }, [])


    let navigate = useNavigate();

    return (
        <>
            <div className="flex-auto">
                <div className="flex gap-3 items-center ps-16 pb-3 pt-3">
                    <h6
                        onClick={() => navigate("/")}
                        role="button"
                        className=" m-0 font-normal text-sm text-gray-400 "
                    >
                        Home
                    </h6>
                    <span className="p-0 m-0 pt-1">
                        <ChevronRight size={15} strokeWidth={2} />
                    </span>
                    <h6 className="font-normal text-sm m-0">Men</h6>
                </div>
                <div>
                    <img src={menImage} alt="" />
                </div>
                <div
                    className="pb-4 pt-4 flex justify-between ps-36 pe-36"
                    style={{ backgroundColor: "#fafafa" }}
                >
                    <div className="flex items-center gap-3">
                        <img src={book} alt="" />
                        <h6>Book An Appointment</h6>
                    </div>
                    <div className="flex items-center gap-3">
                        <img src={buy} alt="" />
                        <h6>Buy With No Cost EMI</h6>
                    </div>
                    <div className="flex items-center gap-3">
                        <img
                            className="h-7 w-7 text-gray-400 opacity-50"
                            src={store}
                            alt=""
                        />
                        <h6 className=" opacity-40">Pickup At The Store</h6>
                    </div>
                </div>
                <div
                    className="strap py-4 mt-4 flex items-center gap-5 sticky-top z-1 "
                    style={{ top: "70px" }}
                >
                    <div className="ps-20">
                        <h6 className="text-xs pb-0 mb-0 font-normal">Filter By</h6>
                        <h6>Strap Material</h6>
                    </div>
                    <div className="flex justify-between w-75">
                        <div>
                            <button className="btn me-2">Bimetal</button>
                            <button className="btn me-2">18 Karat Gold</button>
                            <button className="btn me-2">Plastic</button>
                            <button className="btn me-2">Silicone</button>
                        </div>
                        <div>
                            {
                                !isOpen ?
                                    <button onClick={toggleSidebar} role="button" className="!text-xs !font-semibold py-2 w-[170px] px-4 tracking-wider bg-white hover:shadow-md">
                                        <div className="flex gap-2 items-center"><ListFilter strokeWidth={1} size={20} /> SHOW FILTER </div></button> :
                                    <button onClick={toggleSidebar} role="button" className="!text-xs !font-semibold py-2  w-[170px] px-4 tracking-wider bg-white shadow-md">
                                        <div className="flex gap-2 items-center"><ListFilter strokeWidth={1} size={20} /> HIDE FILTER </div></button>
                            }
                        </div>
                    </div>
                </div>
                <div className="pt-4 pb-4 ps-20">
                    <h4>
                        Men's Watches <span className="font-light ps-3">2,511 items</span>
                    </h4>
                </div>
                <div className="flex">
                    <div>
                        <Filter isOpen={isOpen} />
                    </div>
                    <div className="grid grid-cols-4 gap-3 ps-20">
                        {data.map((ele, index) => (
                            <div key={index}>
                                <Card cardData={ele} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
