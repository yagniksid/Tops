import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { BE_URL } from '../../../../config'
import axios from 'axios'
import Review from './Review'
import { reFetch } from '../../../Redux/feature/cartSlice'
import { useCookies } from 'react-cookie'
import { useDispatch, useSelector } from 'react-redux'


export default function ProductPreview() {
    let [{ token }, setCookie] = useCookies();
    let [singleProduct, setSingleProduct] = useState([])

    let refreshPage = () => {
        setRefresh(!refresh);
        console.log("=============>>>>>>>>>>>");
    };


    const dispatch = useDispatch()


    const redux = useSelector((store) => store.cartReducer);

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
        axios({
            method: "post",
            url: `${BE_URL}/cart/create/${productId}`,
            // data: { productId, _id: redux.cartId, isRemove: true },
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
        // console.log(">>>>>>>>>>>>>>");
    };


    return (
        <div>
            {
                singleProduct.map((product, i) => {
                    return (
                        <div key={i} className=" flex justify-center gap-6 py-16 px-20">
                            <div className='flex-1 flex justify-center'>
                                <p>
                                    <img className='w-[475px] h-[475px]' src={product.thumbnail} alt="" />
                                </p>
                            </div>
                            <div className='flex-1 py-16 bg-[#fdfbf6]'>
                                <div className="ps-20">
                                    <h5 className="line-clamp-2 hover:underline py-2">
                                        {product.description}
                                    </h5>
                                    <p className=" text-gray-500">{product.mainCategory}</p>
                                    <div className='pt-2'>
                                        <Review productId={product?.id} refreshPage={refreshPage} />
                                    </div>
                                    <h5 className=" text-gray-400 text-[20px] font-light pt-3 ">MRP <span className='text-[24px] text-black font-semibold'> ₹ {product.price}.00</span></h5>
                                    <div className="text-black py-3 font-medium flex items-center">Color:
                                        <div className='ms-2 flex gap-5'> {product.color.map((e, i) => {
                                            return (
                                                <div key={i} className='flex p-0 m-0 items-center '>
                                                    <div style={{ backgroundColor: e }} className='w-4 h-4 rounded-full bg-[e] me-3 flex items-center '><span className='flex ps-[20px] font-normal'>{e}</span></div>
                                                </div>
                                            )
                                        })}
                                        </div>

                                    </div>
                                </div>
                                <div className="pt-5 flex justify-center">
                                    <button
                                        onClick={() => addToCart(product._id)}
                                        className="w-50 m-1 bg-[#dda243] text-whiteduration-300 h-10 mb-16 rounded text-base font-medium"
                                    >
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
