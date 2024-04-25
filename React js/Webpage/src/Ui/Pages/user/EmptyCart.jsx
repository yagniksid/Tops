import React from 'react'
import CartImage from "../../../assets/images/cartimage.webp";
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
export default function EmptyCart() {

    let navigate = useNavigate()
    return (
        <div className='py-5'>
            <div className='d-flex justify-center'>
                <img className='w-[150px] h-[120px]' src={CartImage} alt="" />
            </div>
            <div className='d-flex flex-col items-center'>
                <h2 className='font-normal py-3 mb-0'>YOUR BAG IS EMPTY</h2>
                <h6 className='font-normal pb-0 mb-0' >There is nothing in your bag.
                </h6>
                <h6 className='font-normal pb-3' >
                    Let's add something new to your collection
                </h6>
                <Button onClick={() => navigate("/product/Titan")} className='w-[175px] h-[52px] border-0 rounded-0' style={{ backgroundColor: "#dda243", color: "#212121", fontWeight: "500", fontSize: "14px" }}>EXPLORE NOW!</Button>
            </div>
        </div>
    )
}
