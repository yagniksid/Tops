import React, { useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row } from 'reactstrap'

const initialData = {
    email: "",
    password: "",
    address: "",
    city: "",
    state: ""
}

export default function RegisterModal({ modal, toggle, loginToggle }) {
    let [user, setUser] = useState(initialData)
    let [check, setCheck] = useState(false)
    console.log("🚀 ~ RegisterModal ~ check:", check)

    const registerHandler = (e) => {
        e.preventDefault()
        let storedData = JSON.parse(localStorage.getItem("regData")) || []
        console.log("🚀 ~ registerHandler ~ storedData:", storedData)
        let match = storedData?.find((e) => e?.email === user?.email)
        console.log("🚀 ~ registerHandler ~ match:", match)

        console.log("🚀 ~ registerHandler ~ storedData:", storedData)
        if (match) {
            alert("Registerd Data Is Already Exist")
        } else if (!user.email || !user.password || !user.address || !user.city || !user.state) {
            alert("Please fill out all fields")
        } else if (!check) {
            alert("First click on check me out")
        } else {
            let mainData = [...storedData, user]
            localStorage.setItem("regData", JSON.stringify(mainData))
            localStorage.setItem("loginData", JSON.stringify(user))
            toggle()
        }
    }

    const logIn = () => {
        loginToggle()
        toggle()
    }
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Register</ModalHeader>
                <ModalBody>
                    <Form onSubmit={registerHandler}>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Email
                                    </Label>
                                    <Input
                                        className="shadow-none"
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="Enter Email"
                                        type="email"
                                        onChange={(e) => { setUser({ ...user, email: e?.target?.value }) }}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Password
                                    </Label>
                                    <Input
                                        className="shadow-none"
                                        id="examplePassword"
                                        name="password"
                                        placeholder="Enter Password"
                                        type="password"
                                        onChange={(e) => { setUser({ ...user, password: e?.target?.value }) }}

                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="exampleAddress">
                                Address
                            </Label>
                            <Input
                                className="shadow-none"
                                id="exampleAddress"
                                name="address"
                                placeholder="1234 Main St"
                                onChange={(e) => { setUser({ ...user, address: e?.target?.value }) }}
                            />
                        </FormGroup>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleCity">
                                        City
                                    </Label>
                                    <Input
                                        className="shadow-none"
                                        id="exampleCity"
                                        name="city"
                                        onChange={(e) => { setUser({ ...user, city: e?.target?.value }) }}

                                    />
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="exampleState">
                                        State
                                    </Label>
                                    <Input
                                        className="shadow-none"
                                        id="exampleState"
                                        name="state"
                                        onChange={(e) => { setUser({ ...user, state: e?.target?.value }) }}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup check>
                            <Input
                                className="shadow-none"
                                id="exampleCheck"
                                name="check"
                                type="checkbox"
                                checked={check}
                                onChange={() => setCheck(!check)}
                            />
                            <Label
                                check
                                for="exampleCheck"
                            >
                                Check me out
                            </Label>
                        </FormGroup>
                        <p>Do You Have An Account ...! <span onClick={logIn} className='text-red-500'>Log in</span></p>
                        <Button color='primary' className="text-xl">
                            Sign in
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}

