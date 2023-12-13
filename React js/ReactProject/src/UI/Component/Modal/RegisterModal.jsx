import React from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'

export default function RegisterModal({ toggle, modal }) {
    return (
        <>
            <div>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}><b>Registeration Form</b></ModalHeader>
                    <ModalBody>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleEmail">
                                            Email
                                        </Label>
                                        <Input
                                            id="exampleEmail"
                                            name="email"
                                            placeholder="with a placeholder"
                                            type="email"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="examplePassword">
                                            Password
                                        </Label>
                                        <Input
                                            id="examplePassword"
                                            name="password"
                                            placeholder="password placeholder"
                                            type="password"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label for="phoneno">
                                    Phone no
                                </Label>
                                <Input
                                    id="phoneno"
                                    name="phone no"
                                    placeholder=""
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleAddress">
                                    Address
                                </Label>
                                <Input
                                    id="exampleAddress"
                                    name="address"
                                    placeholder="Apartment, studio, or floor"
                                />
                            </FormGroup>
                            <Row>
                                <Col md={6}>
                                    <FormGroup>
                                        <Label for="exampleCity">
                                            City
                                        </Label>
                                        <Input
                                            id="exampleCity"
                                            name="city"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={4}>
                                    <FormGroup>
                                        <Label for="exampleState">
                                            State
                                        </Label>
                                        <Input
                                            id="exampleState"
                                            name="state"
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={2}>
                                    <FormGroup>
                                        <Label for="exampleZip">
                                            Zip
                                        </Label>
                                        <Input
                                            id="exampleZip"
                                            name="zip"
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup check>
                                <Input
                                    id="exampleCheck"
                                    name="check"
                                    type="checkbox"
                                />
                                <Label
                                    check
                                    for="exampleCheck"
                                >
                                    Check me out
                                </Label>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button style={{ backgroundColor: "#ffb217", color: "white", border: "none", fontWeight: "bold" }} onClick={toggle}>
                            Register
                        </Button>
                        <Button style={{ backgroundColor: "red", color: "white", border: "none", fontWeight: "bold" }} onClick={toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </>
    )
}
