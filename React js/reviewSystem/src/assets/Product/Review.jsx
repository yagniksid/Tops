import React, { useState, useEffect } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import StarRating from "./StarRating";
import AverageReview from "./AverageReview";

let initialData = {
    title: "",
    description: "",
};

export default function Review({ refreshPage, productId }) {
    const [review, setReview] = useState(initialData);
    const [rating, setRating] = useState(0);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("reviewData")) || [];
        const productReviews = data.filter((e) => e.productId === productId);
        setReviews(productReviews);
    }, [refreshPage, productId]);

    const submitHandler = () => {
        if (review.title === "" || review.description === "" || rating === 0) {
            alert("Please provide a title, description, and rating.");
            setRating(0);
        } else {
            const newData = [...reviews, { ...review, rating, productId, id: Date.now() }];
            localStorage.setItem("reviewData", JSON.stringify(newData));
            setReviews(newData);
            setReview(initialData);
            setRating(0);
            refreshPage();
        }
    };

    return (
        <>
            <div>
                <div className="pt-5 px-5 w-100">
                    <Form>
                        <FormGroup row>
                            <Label sm={2}>Title</Label>
                            <Col sm={10}>
                                <Input
                                    value={review.title}
                                    onChange={(e) => setReview({ ...review, title: e.target.value })}
                                    className="shadow-none"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Description</Label>
                            <Col sm={10}>
                                <Input
                                    value={review.description}
                                    onChange={(e) => setReview({ ...review, description: e.target.value })}
                                    className="shadow-none"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <div className="flex items-center">
                                <Label sm={2}>Review</Label>
                                <Col sm={10}>
                                    <StarRating rating={rating} setRating={setRating} />
                                </Col>
                            </div>
                        </FormGroup>
                        {reviews.length > 0 && (
                            <div>
                                <AverageReview reviews={reviews} />
                            </div>
                        )}
                        <div className="flex pb-3 justify-center">
                            <Button onClick={submitHandler} color="success">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}

