import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

let initialData = {
    title: "",
    description: "",
    review: ""
}

export default function Review({ refreshPage }) {
    const [review, setReview] = useState(initialData);

    let submitHandler = () => {
        const oldData = JSON.parse(localStorage.getItem("reviewData")) || [];
        const newData = [...oldData, review];
        localStorage.setItem("reviewData", JSON.stringify(newData))
        setReview(initialData);
        refreshPage();
    };

    return (
        <>
            <div >
                <div className="pt-4 w-100">
                    <Form>
                        <div className="px-5">
                            <FormGroup>
                                <div className="flex gap-3 pt-3">
                                    <Label>Title</Label>
                                    <Input
                                        value={review.title}
                                        onChange={(e) => setReview({ ...review, title: e?.target?.value })} className="shadow-none" />
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <div className="flex gap-3 pt-3">
                                    <Label>Description</Label>
                                    <Input
                                        value={review.description}
                                        onChange={(e) => setReview({ ...review, description: e?.target?.value })} className="shadow-none" />
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <div className="flex gap-3 pt-3">
                                    <Label>Review</Label>
                                    <Input
                                        value={review.review}
                                        onChange={(e) => setReview({ ...review, review: e?.target?.value })} className="shadow-none" />
                                </div>
                            </FormGroup>
                        </div>
                        <div className="flex pb-3 justify-center">
                            <Button onClick={submitHandler} color="success">Submit</Button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}
