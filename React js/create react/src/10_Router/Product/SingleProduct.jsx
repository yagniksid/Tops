import axios from 'axios';
import { ArrowBigLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function SingleProduct() {
    let [product, setProduct] = useState({})
    const navigate = useNavigate()
    const urlData = useParams()

    useEffect(() => {
        axios({
            method: "get",
            url: `https://fakestoreapi.com/products/${urlData.id}`
        }).then((res) => {
            console.log("----->", res.data);
            setProduct(res?.data)
        }).catch((err) => {
            alert("some error", err)
        })
    }, [])

    return (
        <><div>
            <div
                role='button'
                onClick={() => navigate("/product")}
                style={{
                    width: "60px"
                }} className='border border-black p-3 d-flex justify-content-center align-items-center mb-3 rounded-3'>
                <ArrowBigLeft />
            </div>
            <div className='w-75 d-flex justify-content-center gap-2'>
                <img className='w-25 border border-black rounded-3' src={product.image} alt="" />
                <div className='w-75 border border-black rounded-3'>
                    <h1>{product.title}</h1>
                    <h4>Price{product.price}</h4>
                    <p>{product.description
                    }</p>
                </div>
            </div>
        </div>
        </>
    )
}
