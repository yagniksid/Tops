import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';


let initialData = {
    email: "",
    password: "",
    userType: "User"
}
export default function RegisterModal({ modal, toggle, loginToggle }) {
    let [regData, setRegData] = useState(initialData)
    // console.log("🚀 ~ RegisterModal ~ regData:", regData)

    const addData = (e) => {
        e.preventDefault()
        let oldData = JSON.parse(localStorage.getItem("regData")) || []
        let matchData = oldData.find((e) => e.email === regData.email)
        if (matchData) {
            alert("Data already exist please input another data")
            setRegData(initialData)
        } else if (regData.email === "" || regData.password === "") {
            alert("Please enter data first")
        } else {
            let newData = [...oldData, regData]
            localStorage.setItem("regData", JSON.stringify(newData))
            localStorage.setItem("logData", JSON.stringify(regData))
            setRegData(initialData)
            toggle()
        }
    }

    const login = () => {
        loginToggle()
        toggle()
        console.log("==================>");
    }

    return (
        <>

            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Register Form</ModalHeader>
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
                                value={regData.email}
                                onChange={(e) => setRegData({ ...regData, email: e?.target?.value })}
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
                                value={regData.password}
                                onChange={(e) => setRegData({ ...regData, password: e?.target?.value })}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">
                                Select
                            </Label>
                            <Input
                                id="userType"
                                name="userType"
                                type="select"
                                value={regData.userType}
                                onChange={(e) => setRegData({ ...regData, userType: e?.target?.value })}
                            >
                                <option>User</option>
                                <option>Admin</option>
                                <option>Employee</option>
                            </Input>
                        </FormGroup>
                        <p>Already have an account ? <span role="button" onClick={login} style={{ color: "#5383d3" }}>Log in</span></p>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button style={{ backgroundColor: "#5383d3" }} onClick={addData}>
                        Submit
                    </Button>
                    <Button color="danger" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

