import React from "react";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { BE_URL } from "../../../../config";
import { useDispatch, useSelector } from "react-redux";
import { reFetch } from "../../../Redux/feature/cartSlice";

export default function Card({ cardData }) {
  let [{ token }, setCookie] = useCookies();

  const dispatch = useDispatch()


  const redux = useSelector((store) => store.cartReducer);
  // console.log("🚀 ~ Card ~ redux:", redux)

  const addToCart = (productId) => {
    // console.log("🚀 ~ addToCart ~ productId:", productId)
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
        // console.log("🚀 ~ useEffect ~ res:", res);
        dispatch(reFetch())
      })
      .catch((err) => {
        // console.log("🚀 ~ useEffect ~ err:", err);
      });
    // console.log(">>>>>>>>>>>>>>");
  };
  return (
    <div className="mb-5 border-2 p-4 rounded-md pb-4">
      <div className="relative overflow-hidden">
        <img src={cardData.thumbnail} className=" w-full h-full mb-2" />
        <div className="absolute h-full w-full bg-black/0 flex justify-end  items-start -top-20 hover:-top-3 pe-2 pt-4 hover:opacity-100 opacity-20 transition-all duration-700">
          <span className="bg-gray-200 h-10 w-10 rounded-full flex justify-center items-center pt-1">
            <Heart
              strokeWidth={1}
              className="hover:text-red-500 hover:fill-red-500"
            />
          </span>
        </div>
      </div>
      <h6 role="button" className="line-clamp-1 hover:underline">
        {cardData.description}
      </h6>
      <p className=" text-gray-500">{cardData.mainCategory}</p>
      <h5 className="pb-3 text-black">{cardData.price}</h5>
      <div className="flex justify-between">
        <button
          onClick={() => addToCart(cardData._id)}
          className="w-100 m-1 bg-amber-500 text-whiteduration-300 h-10 mb-16 rounded text-base font-medium"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}


/*


upadte -> cart/update
data => {_id:cartId,prductId:productId,isRemove:boolean}


delete cart => cart/delete/:id => id = cartId remove whole cart


*/