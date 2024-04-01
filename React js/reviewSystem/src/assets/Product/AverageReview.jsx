import React, { useEffect, useState } from "react";

export default function AverageReview({ reviews }) {
    const [averageRating, setAverageRating] = useState(0);

    useEffect(() => {
        if (reviews.length > 0) {
            const totalRating = reviews.reduce((acc, curr) => acc + curr.rating, 0);
            const average = totalRating / reviews.length;
            setAverageRating(average);
        } else {
            setAverageRating(0);
        }
    }, [reviews]);

    return (
        <div>
            <p className="font-normal text-lg">Average Rating: <span className="text-red-700">{averageRating.toFixed(1)}</span></p>
        </div>
    );
}
