import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./Cart.css";
import { Minus, Plus } from 'lucide-react';
import EmptyCart from './EmptyCart';
import axios from 'axios';
import { BE_URL } from '../../../../config';
import { reFetch } from '../../../Redux/feature/cartSlice';
import { useCookies } from 'react-cookie';

export default function Cart() {
    let [{ token }, setCookie] = useCookies();

    const { cart, cartId } = useSelector((store) => {
        return store.cartReducer;
    });
    console.log("🚀 ~ const{cart,cartId}=useSelector ~ cartId:", cartId)
    console.log("🚀 ~ const{cart,cartId}=useSelector ~ cart:", cart)
    // Calculate subtotal
    const calculateSubtotal = () => {
        let subtotal = 0;
        cart?.forEach(({ productId, count }) => {
            subtotal += productId?.price * count;
        });
        return subtotal;
    };

    // Calculate total discount
    const calculateTotalDiscount = () => {
        let totalDiscount = 0;
        cart?.forEach(({ productId, count }) => {
            const discountPercentage = productId?.discountPercentage || 0; // Assuming default to 0 if no discount
            const discountAmount = (productId?.price * discountPercentage / 100) * count;
            totalDiscount += discountAmount;
        });
        return totalDiscount;
    };

    // Calculate total
    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        const totalDiscount = calculateTotalDiscount();
        return (subtotal - totalDiscount)?.toFixed(2);
    };

    let dispatch = useDispatch()

    const addMoreProduct = (id) => {
        console.log("🚀 ~ addToCart ~ id:", id)
        axios({
            method: "post",
            url: `${BE_URL}/cart/create/${id}`,
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                console.log("🚀 ~ .then ~ res:", res)
                dispatch(reFetch())
            })
            .catch((err) => {
                console.log("🚀 ~ addMoreProduct ~ err:", err)
            });
        console.log(">>>>>>>>>>>>>>");
    };


    const removeProduct = (id, isRemove) => {
        console.log("🚀 ~ removeProduct ~ id, isRemove:", id, isRemove)
        axios({
            method: "put",
            url: `${BE_URL}/cart/update`,
            data: { productId: id, _id: cartId, isRemove },
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                console.log("🚀 ~ .then ~ res:", res)
                dispatch(reFetch())
            })
            .catch((err) => {
                console.log("🚀 ~ addMoreProduct ~ err:", err)
            });
        console.log(">>>>>>>>>>>>>>");
    };

    const deleteAllProduct = (id) => {
        axios({
            method: "delete",
            url: `${BE_URL}/cart/delete/${cartId}`,
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                console.log("🚀 ~ .then ~ res:", res)
                dispatch(reFetch())
            })
            .catch((err) => {
                console.log("🚀 ~ addMoreProduct ~ err:", err)
            });
        console.log(">>>>>>>>>>>>>>");
    };
    console.log("🚀 ~ removeProduct ~ cartId:", cartId)

    return (
        <>
            {cart?.length > 0 ?
                <div className='px-20'>
                    <div className='text-sm flex justify-center py-4 font-semibold text-[#00000099]'>
                        <span><span className='text-[#dda243]'>CART</span> ---------- DELIVERY INFORMATION ---------- PAYMENT</span>
                    </div>
                    <div className='py-4'>
                        <h5 className='text-[#0000009] font-normal'><span className='text-3xl font-normal text-black'>CART </span>({cart?.length} items)</h5>
                    </div>
                    <div>
                        <div className='flex gap-3'>
                            <div className='flex-1'>
                                <ul>
                                    {cart?.map((ele, i) => {
                                        let isRemove = ele.count === 1 ? true : false
                                        return (
                                            <div key={i} className='flex border border-gray-400 gap-4 mb-3 p-3'>
                                                <div>
                                                    <li>
                                                        <img className='w-[175px] h-[175px]' src={ele?.productId?.thumbnail} alt="" />
                                                    </li>
                                                </div>
                                                <div>
                                                    <li className='mb-3'>
                                                        <h6>{ele?.productId?.title}</h6>
                                                    </li>
                                                    <li className='mb-3'>
                                                        <h6>{ele?.productId?.description}</h6>
                                                    </li>
                                                    <li className='mb-3'>
                                                        ₹{(ele?.productId?.price * ele?.count)?.toFixed(2)}
                                                    </li>
                                                    <li>
                                                        <div className='flex gap-3'>
                                                            <div className=' w-[101px]'>
                                                                <div className='flex border h-[32px] border-gray-400'>
                                                                    <div className='flex-1 flex justify-center items-center border-r border-gray-300 bg-gray-100 hover:bg-black hover:text-white'>
                                                                        <Minus onClick={() => removeProduct(ele?.productId?._id, isRemove)} size={18} strokeWidth={3} />
                                                                    </div>
                                                                    <div className='flex-1 flex justify-center items-center  border-r border-gray-300'>
                                                                        <h6 className='m-0'>
                                                                            {ele?.count}
                                                                        </h6>
                                                                    </div>
                                                                    <div className='flex justify-center items-center flex-1 bg-gray-100 hover:bg-black hover:text-white'>
                                                                        <Plus onClick={() => addMoreProduct(ele?.productId._id)} size={18} strokeWidth={3} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button onClick={() => removeProduct(ele?.productId?._id, true)} className='w-[73px] h-[33px] border border-gray-100 text-xs font-semibold'>DELETE</button>
                                                        </div>
                                                    </li>
                                                </div>
                                            </div>
                                        )
                                    })
                                    }
                                </ul>
                            </div>
                            <div>
                                <div className='p-[1rem] h-auto border border-gray'>
                                    <div className='flex justify-between'>
                                        <h6 className='text-[#222222] m-0'>Order Summary</h6>
                                        <p id="subtotal" className='m-0'>({cart?.length}Items)</p>
                                    </div>
                                    <hr />
                                    <div className='flex justify-between'>
                                        <h6 className='text-[#222222] font-normal'  >Order Value</h6>
                                        <p id="subtotal" className='font-normal text-sm'>₹{calculateSubtotal()?.toFixed(2)}</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <h6 className='text-[#222222]  font-normal' >Shipping</h6>
                                        <p className='text-[#45a03f] font-normal text-sm'>FREE</p>
                                    </div>
                                    <div className='flex justify-between pb-5'>
                                        <h6 className='text-[#222222]  font-normal m-0' >Product Discount</h6>
                                        <p id="totalDiscount" className='text-sm font-normal'>- ₹ {calculateTotalDiscount()?.toFixed(2)}</p>
                                    </div>
                                    <hr className='m-0' />
                                    <div className="flex justify-between py-3">
                                        <h5 className='text-[#222222] text-[18px]' >Grand Total</h5>
                                        <p id="total" className='m-0'>₹ {calculateTotal()}</p>
                                    </div>
                                    <a href="#"><button id="btn-checkout" className="shopnow text-black w-[452px] h-[52px] font-[500] text-sm"><span>PROCEED TO CHECKOUT</span></button></a>
                                </div>
                            </div>
                        </div >
                        <button onClick={deleteAllProduct} >Clear cart</button>
                    </div >
                </div > :
                <EmptyCart />
            }
        </>
    );
}
