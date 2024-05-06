import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { BE_URL } from '../../../../config'
import axios from 'axios'
import Review from './Review'
import { reFetch } from '../../../Redux/feature/cartSlice'
import { useCookies } from 'react-cookie'
import { useDispatch } from 'react-redux'
import cart from "../../Image/cart.svg";
import { LoginContext } from '../../../App'

export default function ProductPreview() {
    let [{ token }, setCookie] = useCookies();
    let [singleProduct, setSingleProduct] = useState([])

    let refreshPage = () => {
        setRefresh(!refresh);
        console.log("=============>>>>>>>>>>>");
    };

    const { loginToggle } = useContext(LoginContext);


    const dispatch = useDispatch()

    let urlData = useParams()

    useEffect(() => {
        axios({
            method: "get",
            url: `${BE_URL}/product/getProductById/${urlData.id}`,
        }).then((res) => {
            setSingleProduct([res?.data?.data])
        }).catch((err) => {
            toast.error("Error occurred while fetching data")
        })
    }, [])


    const addToCart = (productId) => {
        if (token) {
            axios({
                method: "post",
                url: `${BE_URL}/cart/create/${productId}`,
                headers: {
                    authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            })
                .then((res) => {
                    dispatch(reFetch())
                })
                .catch((err) => {
                });
        } else {
            toast.error("Please log in first 😑")
            loginToggle()
        }
    };


    return (
        <div>
            {
                singleProduct.map((product, i) => {
                    return (
                        <div key={i} className=" flex justify-center gap-6 py-16 px-20">
                            <div className='flex-1 flex justify-center'>
                                <p>
                                    <img className='ms-16 w-[500px] h-[500px]' src={product?.thumbnail} alt="" />
                                </p>
                            </div>
                            <div className='flex-1 py-10 h-[500px] bg-[#fdfbf6]  ps-20 ' >
                                <div>
                                    <h5 className="line-clamp-2 text-[25px] w-75 hover:underline py-2">
                                        {product?.description}
                                    </h5>
                                    <p className=" text-sm text-gray-500">{product?.mainCategory}</p>
                                    <div>
                                        <Review productId={product?.id} refreshPage={refreshPage} />
                                    </div>
                                    <h5 className=" flex items-center gap-2 pb-[10px] text-gray-400 text-[20px] font-light m-0">MRP <span className='text-[24px] text-black font-semibold'> ₹ {product?.price}.00</span></h5>
                                    <p className='text-[#45a03f]'>Inclusive of all taxes</p>
                                    <div className="text-black py-2 font-medium flex items-center">Color:
                                        <div className='ms-2 flex gap-5'> {product?.color?.map((e, i) => {
                                            return (
                                                <div key={i} className='flex p-0 m-0 items-center '>
                                                    <div style={{ backgroundColor: e }} className='w-4 h-4 rounded-full bg-[e] me-3 flex items-center '><span className='flex ps-[20px] font-normal'>{e}</span></div>
                                                </div>
                                            )
                                        })}
                                        </div>
                                    </div>
                                </div>
                                <div className="pt-4 flex">
                                    <button
                                        onClick={() => addToCart(product?._id)}
                                        className="w-44 h-10 m-1 bg-white border border-black text-whiteduration-300 mb-16 text-sm font-medium"
                                    >
                                        <span className='flex justify-center items-center gap-1 '><img className='w-5 h-5' src={cart} alt="" />ADD TO CART</span>
                                    </button>
                                    <button
                                        onClick={() => addToCart(product?._id)}
                                        className="w-36 h-10 m-1 text-sm bg-[#dda243] text-whiteduration-300 mb-16  font-medium"
                                    >
                                        BUY NOW
                                    </button>
                                </div>
                                <div>
                                    <h5 className='font-semibold text-base pt-3'>TALK TO A TITAN EXPERT</h5>
                                    <p className='text-sm m-0 text-[#00000099]'>Have any question? We are here to help you.</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
