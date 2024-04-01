import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import StarRating from "./StarRating";

let initialData = {
    title: "",
    description: "",
};

export default function Review({ refreshPage, productId }) {
    const [review, setReview] = useState(initialData);
    let [rating, setRating] = useState("");

    let submitHandler = () => {
        if (review.title === "" && review.description === "") {
            alert("Please provide an email or a review");
            setRating("")
        } else {
            const oldData = JSON.parse(localStorage.getItem("reviewData")) || [];
            const newData = [...oldData, { ...review, rating, productId, id: Date.now() }];
            localStorage.setItem("reviewData", JSON.stringify(newData));
            setReview(initialData);
            setRating("");
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
                                    onChange={(e) =>
                                        setReview({ ...review, title: e?.target?.value })
                                    }
                                    className="shadow-none"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={2}>Description</Label>
                            <Col sm={10}>
                                <Input
                                    value={review.description}
                                    onChange={(e) =>
                                        setReview({ ...review, description: e?.target?.value })
                                    }
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
