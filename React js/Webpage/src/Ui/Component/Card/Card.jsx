import React from "react";
import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Card({ cardData }) {

  let navigate = useNavigate()

  let redirect = (id) => {
    navigate(`/user-card/${id}`)
  }

  return (
    <div className="mb-5 border-2 p-4 rounded-md pb-4" role="button" onClick={() => redirect(cardData._id)}>
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

    </div>
  );
}


/*


upadte -> cart/update
data => {_id:cartId,prductId:productId,isRemove:boolean}


delete cart => cart/delete/:id => id = cartId remove whole cart


*/