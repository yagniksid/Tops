import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowBigLeft } from "lucide-react";
export default function SingleProduct() {
    let [product, setProduct] = useState({})
    const urlData = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        axios({
            method: "get",
            url: `https://fakestoreapi.com/products/${urlData.id}`
        }).then((res) => {
            console.log("-------->", res.data);
            setProduct(res.data)
        }).catch((err) => {
            console.log("--------err----->", err);
        })
    }, [])


    return (
        <>
            <div style={{ width: "28%" }} className='d-flex justify-content-center'>
                <div
                    role='button'
                    style={{
                        width: "50px",
                        height: "50px",
                        display: "grid",
                        placeContent: "center"
                    }} className='mb-3 border border-dark rounded-3' onClick={() => navigate("/product2")}>
                    <ArrowBigLeft />
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='d-flex gap-3 w-75'>
                    <img className='w-25 border border-dark rounded-3 p-4' src={product.image} alt="" />
                    <div className='w-75 border border-dark rounded-3 p-4'>
                        <h1>{product.title}</h1>
                        <h4>Price{product.price}</h4>
                        <p>
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
