import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

let initialData = {
    email: "",
    password: "",
    userType: "User"
}
export default function LoginModal({ modal, toggle, registerToggle }) {
    let [logData, setLogData] = useState(initialData)

    const addData = (e) => {
        e.preventDefault()
        let storedData = JSON.parse(localStorage.getItem("regData")) || []
        let matchingUser = storedData.find((e) => e.email === logData.email && e.userType === logData.userType)

        if (matchingUser) {
            localStorage.setItem("logData", JSON.stringify(matchingUser))
            toggle()
            setLogData(initialData)
        } else {
            let matchEmail = storedData.find((e) => e.email !== logData.email)
            let matchUserType = storedData.find((e) => e.userType !== logData.userType)

            if (matchEmail) {
                alert("please enter valid email")
            } else if (matchUserType) {
                alert("Please enter valid usertype")
            } else {
                alert("No matching user found please ,Register first")
            }
        }
    }
    
    const createAcoount = () => {
        registerToggle()
        toggle()
        console.log("=============>")
    }

    return (
        <>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Login Form</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Email
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="with a placeholder"
                                type="email"
                                value={logData.email}
                                onChange={(e) => setLogData({ ...logData, email: e?.target?.value })}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">
                                Password
                            </Label>
                            <Input
                                id="examplePassword"
                                name="password"
                                placeholder="password placeholder"
                                type="password"
                                value={logData.password}
                                onChange={(e) => setLogData({ ...logData, password: e?.target?.value })}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">
                                Select
                            </Label>
                            <Input
                                id="exampleSelect"
                                name="select"
                                type="select"
                                value={logData.userType}
                                onChange={(e) => setLogData({ ...logData, userType: e?.target?.value })}
                            >
                                <option>
                                    User
                                </option>
                                <option>
                                    Admin
                                </option>
                                <option>
                                    Employee
                                </option>
                            </Input>
                        </FormGroup>
                        <p>New Registration ? <span onClick={createAcoount} role='button' style={{ color: "#5383d3" }}>Create an account</span></p>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={addData}>
                        Submit
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Cancle
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}