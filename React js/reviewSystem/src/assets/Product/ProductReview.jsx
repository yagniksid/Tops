import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";

export default function ProductReview({ refreshPage, productId }) {
    const [reviewData, setReviewData] = useState([]);
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("reviewData")) || [];
        setReviewData(data.filter((e) => e.productId === productId));
    }, [refreshPage]);

    const deleteHandler = (id) => {
        const data = JSON.parse(localStorage.getItem("reviewData")) || [];
        let deleteData = data.filter((e) => e.id !== id,);
        setReviewData(deleteData);
        localStorage.setItem("reviewData", JSON.stringify(deleteData));
        refreshPage()
    };

    return (
        <div className="border-t">
            <div className=" rounded-xl h-96 ">
                {reviewData.length > 0 ? (
                    <div className="p-4 ps-4 overflow-y-scroll h-[375px]">
                        {reviewData.map((e, i) => {
                            let star = [];
                            for (let i = 0; i < e.rating; i++) {
                                star.push(<span className="text-[gold]">&#9733;</span>);
                            }
                            return (
                                <div key={e?.id}>
                                    <h5>
                                        Title :
                                        <span className="text-gray-600 font-normal">{e.title}</span>
                                    </h5>
                                    <h5>
                                        Description :
                                        <span className="text-gray-600 font-normal">
                                            {e.description}
                                        </span>
                                    </h5>
                                    <h5>
                                        Review :
                                        <span className="text-gray-600 font-normal">{star}</span>
                                    </h5>
                                    <div className="pt-2 pb-4">
                                        <Button onClick={() => deleteHandler(e?.id)} color="danger">
                                            Delete
                                        </Button>
                                        <hr />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <h3 className="text-center pt-40">Review Not Found</h3>
                )}
            </div>
        </div>
    );
}
