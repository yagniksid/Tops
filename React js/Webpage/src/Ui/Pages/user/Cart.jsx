import React from 'react';
import { useSelector } from 'react-redux';
import "./Cart.css";
import { Table } from 'reactstrap';
import { Minus, Plus } from 'lucide-react';

export default function Cart() {
    let data = useSelector((store) => {
        return store.cartReducer.cart;
    });
    console.log("🚀 ~ data ~ data:", data?.count)

    // Calculate subtotal
    const calculateSubtotal = () => {
        let subtotal = 0;
        data?.forEach(({ productId, count }) => {
            subtotal += productId?.price * count;
        });
        return subtotal;
    };

    // Calculate total discount
    const calculateTotalDiscount = () => {
        let totalDiscount = 0;
        data?.forEach(({ productId, count }) => {
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

    return (
        <div className='px-20'>
            <div className='text-sm flex justify-center py-4 font-semibold text-[#00000099]'>
                <span><span className='text-[#dda243]'>CART</span> ---------- DELIVERY INFORMATION ---------- PAYMENT</span>
            </div>
            <div className='py-4'>
                <h5 className='text-[#0000009] font-normal'><span className='text-3xl font-normal text-black'>CART </span>({data?.length} items)</h5>
            </div>
            <div>
                <div className='flex'>
                    <ul>
                        {data?.map(({ productId, count }, i) => {
                            return (
                                <div key={i} className='flex border border-gray-400'>
                                    <div>
                                        <li>
                                            <img className='w-[200px] h-[200px]' src={productId?.thumbnail} alt="" />
                                        </li>
                                    </div>
                                    <div>
                                        <li><p>{productId?.title}</p></li>
                                        <li>
                                            <p>{productId?.description}</p>
                                        </li>
                                        <li>
                                            <div className='flex'>
                                                <Minus />
                                                <p>
                                                    {count}
                                                </p>
                                                <Plus />
                                            </div>
                                        </li>
                                        <li>
                                            ₹{(productId?.price * count)?.toFixed(2)}
                                        </li>
                                    </div>
                                </div>

                            )
                        })
                        }
                    </ul>
                    <div className='px-4 w-[35%]'>
                        <div className='flex justify-between'>
                            <h6 className='text-[#222222]'>Order Summary</h6>
                            <p id="subtotal">({data?.length}Items)</p>
                        </div>
                        <div className='flex justify-between'>
                            <h6 className='text-[#222222]'  >Order Value</h6>
                            <p id="subtotal">₹{calculateSubtotal()?.toFixed(2)}</p>
                        </div>
                        <div className='flex justify-between'>
                            <h6 className='text-[#222222]' >Shipping</h6>
                            <p className='text-[#45a03f]'>FREE</p>
                        </div>
                        <div className='flex justify-between'>
                            <h6 className='text-[#222222]' >Product Discount</h6>
                            <p id="totalDiscount">- ₹ {calculateTotalDiscount()?.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between">
                            <h5 className='text-[#222222]' >Grand Total</h5>
                            <p id="total">₹ {calculateTotal()}</p>
                        </div>
                        <a href="#"><button id="btn-checkout" className="shopnow"><span>PROCEED TO CHECKOUT</span></button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
