import React, { useState } from "react";

export default function StarRating({ rating, setRating }) {
    const handleStarClick = (ele) => {
        setRating(ele);
    };

    return (
        <div>
            {[1, 2, 3, 4, 5].map((e, i) => (
                <span
                    key={i}
                    onClick={() => handleStarClick(e)}
                    style={{
                        cursor: "pointer",
                        color: i < rating ? "gold" : "gray",
                        fontSize: "35px",
                    }}
                >
                    &#9733;
                </span>
            ))}
        </div>
    );
}
