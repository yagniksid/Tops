import React from "react";
import { Star } from "lucide-react";

export default function StarRating({ rating, setRating }) {

    const handleStarClick = (ele) => {
        setRating(ele);
    };

    return (
        <div className="flex items-center gap-3">
            <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((e, i) => (
                    <span
                        key={i}
                        onClick={() => handleStarClick(e)}
                        style={{
                            cursor: "pointer",
                            fontSize: "35px",
                        }}
                    >
                        <Star
                            className="fill-current"
                            style={{
                                color: i < rating ? "#e7721b" : "transparent",
                                stroke: "#e7721b",
                                strokeWidth: 1.5
                            }}
                            size={20}
                        />
                    </span>
                ))}
            </div>
            <h6 className="m-0">{rating} Reviews</h6>
        </div>
    );
}
