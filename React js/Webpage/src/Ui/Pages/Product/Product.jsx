import React, { useEffect, useState } from "react";
import ProductReview from "./ProductReview";
import Review from "./Reviwe";

export default function Product() {
    const [product, setProduct] = useState({});
    const [refresh, setRefresh] = useState(false);
    let refreshPage = () => {
        setRefresh(!refresh);
        console.log("=============>>>>>>>>>>>");
    };

    useEffect(() => {
        const imgData = JSON.parse(localStorage.getItem("reviewproduct")) || [];
        setProduct(imgData);
    }, []);
    console.log("🚀 ~ useEffect ~ product:", product)

    return (
        <>
            <div className="flex gap-5 px-14 py-16 ">
                <div className="pt-3 flex justify-center items-center border border-gray-700 flex-1 rounded-xl">
                    <div>
                        <div className="flex justify-center">
                            <p>
                                <img src={product.img} alt="" />
                            </p>
                        </div>
                        <div className="ps-5 pe-3">
                            <h5 className="line-clamp-2 hover:underline ">
                                {product.content}
                            </h5>
                            <p className=" text-gray-500">{product.category}</p>
                            <h5 className=" text-black">{product.price}</h5>
                        </div>
                    </div>
                </div>
                <div className="border border-gray-700 flex-1 rounded-xl">
                    <div>
                        <Review productId={product?.id} refreshPage={refreshPage} />
                    </div>
                    <div className="m-auto pt-10">
                        <ProductReview productId={product?.id} refreshPage={refreshPage} />
                    </div>
                </div>
            </div>
        </>
    );
}
