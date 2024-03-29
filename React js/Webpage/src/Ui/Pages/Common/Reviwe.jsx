import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Button, Input, Label } from "reactstrap";

let initialData = {
    title: "",
    description: "",
    review: ""
}

export default function Review({ refreshPage }) {
    const [cookie, setCookie] = useCookies(["items"]);
    const [reviewRating, setReviewRating] = useState({});


    let submitHandler = () => {
        localStorage.setItem("reviewData", JSON.stringify(reviewRating));
        setReviewRating(initialData);
        refreshPage();
    };


    return (
        <>
            <div >
                <div className="bg-[#fdfbf6] px-20 pt-4">
                    <div>
                        <p className="font-semibold text-[#bf4815]">BEST SELLER</p>
                        <h3 className="w-w-100">{cookie.items.content}</h3>
                        <p>{cookie.items.category}</p>
                        <p className="text-2xl font-semibold">
                            <span className="text-gray-400 text-xl font-light">MRP</span> {cookie.items.price}
                        </p>
                    </div>
                    <div className="flex gap-3 pt-3">
                        <Label>Title</Label>
                        <Input
                            value={reviewRating.title}
                            onChange={(e) => setReviewRating({ ...reviewRating, title: e?.target?.value })} className="shadow-none" />
                    </div>
                    <div className="flex gap-3 pt-3">
                        <Label>Description</Label>
                        <Input
                            value={reviewRating.description}
                            onChange={(e) => setReviewRating({ ...reviewRating, description: e?.target?.value })} className="shadow-none" />
                    </div>
                    <div className="flex gap-3 pt-3">
                        <Label>Review</Label>
                        <Input
                            value={reviewRating.review}
                            onChange={(e) => setReviewRating({ ...reviewRating, review: e?.target?.value })} className="shadow-none" />
                    </div>
                    <div>
                        <Button onClick={submitHandler} color="success">Submit</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
