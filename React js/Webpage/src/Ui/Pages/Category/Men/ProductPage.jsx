import React, { useEffect, useState } from "react";
import { ChevronRight, ListFilter, X } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import menImage from "../../Category/Men/Images/menImage.webp";
import wmnImg from "../../Category/Men/Images/wmnImg.webp";
import preWatch from "../../Category/Men/Images/preWatch.webp";
import inter from "../../Category/Men/Images/inter.jpg";
import smartwatch from "../../Category/Men/Images/smartwatch.webp";
import book from "../../../Image/book.svg";
import buy from "../../../Image/buywith.svg";
import store from "../../../Image/store.webp";
import "./Men.css"
import Filter from "../../../Component/FilterData/Filter";
import { BE_URL } from "../../../../../config";
import axios from 'axios';
import Card from "../../../Component/Card/Card";

const initialData = {
    brand: "Titan",
    mainCategory: "",
    price: { lt: "5500", gt: "0" },
    discountPercentage: {},
    category: [],
    color: [],
    size: [],
    availableStock: ""
};

const image = {
    "Men's Watches": menImage,
    "Women's Watches": wmnImg,
    "Smartwatches": smartwatch,
    "Premium Watches": preWatch,
    "International Brands": inter
}

const page = {
    "Men's Watches": "Men",
    "Women's Watches": "Women",
    "Smartwatches": "Smartwatch",
    "Premium Watches": "Premium Watches",
    "International Brands": "International Brands"
}


export default function ProductPage() {
    let [data, setData] = useState([])
    let [count, setCount] = useState([])
    const [filter, setFilter] = useState(initialData);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const slideBarToggle = () => {
        setIsOpen(!isOpen);
    };

    const paramsData = useParams()
    useEffect(() => {
        setFilter({ ...initialData, mainCategory: paramsData.type })
    }, [paramsData])

    useEffect(() => {
        console.log("fileter", filter)
        axios({
            method: "get",
            url: `${BE_URL}/product/getAll`,
            params: filter
        }).then((res) => {
            setData(res.data.data)
            setCount(res.data)
        }).catch((err) => {
            toast.error("Error occurred while fetching data")
        })
    }, [filter, paramsData])

    const addCategoryToFilter = (category) => {
        setFilter({ ...filter, category: [...filter.category, category] })
        setSelectedCategories([...selectedCategories, category]);
    }

    const removeCategory = (categoryToRemove) => {
        setFilter({ ...filter, category: filter.category.filter(category => category !== categoryToRemove) });
        setSelectedCategories(selectedCategories.filter(cat => cat !== categoryToRemove));
    }

    let navigate = useNavigate()
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
                    <h6 className="font-normal text-sm m-0 capitalize">{page[paramsData.type]}</h6>
                </div>
                <div>
                    <img src={image[paramsData.type]} alt="" />
                </div>
                <div
                    className={`pb-4 pt-4 flex justify-between ps-36 pe-36 ${isOpen ? 'bg-white transition-all duration-500' : ''}`}
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
                    className="strap py-4 px-5 mt-4 flex items-center gap-5 sticky-top "
                    style={{ top: "79px", zIndex: "2" }}
                >
                    <div className="ps-20">
                        <h6 className="text-xs pb-0 mb-0 font-normal">Filter By</h6>
                        <h6 className="m-0">Category</h6>
                    </div>
                    <div className="flex justify-between w-100">
                        <div className="flex flex-col ">
                            <div>
                                <button
                                    className={`btn me-2 ${selectedCategories.includes("Casual") ? "selected" : ""}`}
                                    onClick={() => {
                                        if (!selectedCategories.includes("Casual")) {
                                            addCategoryToFilter("Casual");
                                        }
                                    }}
                                >
                                    Casual
                                </button>
                                <button
                                    className={`btn me-2 ${selectedCategories.includes("Sport") ? "selected" : ""}`}
                                    onClick={() => {
                                        if (!selectedCategories.includes("Sport")) {
                                            addCategoryToFilter("Sport");
                                        }
                                    }}
                                >
                                    Sport
                                </button>
                                <button
                                    className={`btn me-2 ${selectedCategories.includes("Luxury") ? "selected" : ""}`}
                                    onClick={() => {
                                        if (!selectedCategories.includes("Luxury")) {
                                            addCategoryToFilter("Luxury");
                                        }
                                    }}
                                >
                                    Luxury
                                </button>
                                <button
                                    className={`btn me-2 ${selectedCategories.includes("Formal") ? "selected" : ""}`}
                                    onClick={() => {
                                        if (!selectedCategories.includes("Formal")) {
                                            addCategoryToFilter("Formal");
                                        }
                                    }}
                                >
                                    Formal
                                </button>
                            </div>
                            <div>

                                {selectedCategories.map((category, index) => (

                                    <button
                                        key={index}
                                        onClick={() => removeCategory(category)}
                                        className="selected-category-button"
                                    >

                                        <button
                                            className="clbtn"
                                        >
                                            <div className=" flex items-center px-1 gap-1">
                                                <span className="text-[13px]">{category}</span>
                                                <span><X size={15} strokeWidth={1} /></span>
                                            </div>
                                        </button>

                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            {
                                !isOpen ?
                                    <button onClick={slideBarToggle} role="button" className="!text-xs !font-semibold py-2 me-5 w-[170px] px-4 tracking-wider bg-white ">
                                        <div className="flex gap-2 items-center"><ListFilter strokeWidth={1} size={20} /> SHOW FILTER </div>
                                    </button> :
                                    <button onClick={slideBarToggle} role="button" className="!text-xs !font-semibold py-2 me-5  w-[170px] px-4 tracking-wider bg-white">
                                        <div className="flex gap-2 items-center"><ListFilter strokeWidth={1} size={20} /> HIDE FILTER </div>
                                    </button>
                            }
                        </div>
                    </div>
                </div>
                <div className="pt-4 pb-4 ps-20">
                    <h4 className="text-start">
                        {paramsData.type} <span className="font-light ps-3">{count.count}</span>
                    </h4>
                </div>
                <div className="flex">
                    <div>
                        <Filter filter={filter} isOpen={isOpen} setFilter={setFilter} />
                    </div>
                    <div className="grid grid-cols-4 gap-3 px-20">
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
