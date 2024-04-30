import React, { useState } from "react";
import { Col, Form, FormGroup, Label } from "reactstrap";
import StarRating from "./StarRating";

export default function Review() {
    const [rating, setRating] = useState(0);

    return (
        <>
            <div>
                <div className="w-100">
                    <Form>
                        <FormGroup row>
                            <div className="flex items-center">
                                <Col sm={10}>
                                    <StarRating rating={rating} setRating={setRating} />
                                </Col>
                            </div>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </>
    );
}

