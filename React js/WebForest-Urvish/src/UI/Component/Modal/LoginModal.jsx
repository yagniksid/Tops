import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Form, Input } from 'reactstrap';

export default function LoginModal({ modal, toggle, registerToggle }) {
    let [data, setData] = useState({ email: "", password: "" })

    const submitHandler = (e) => {
        e.preventDefault();
        let userDats = JSON.parse(localStorage.getItem("regData")) || []
        let matchUser = userDats?.find((e) => e.email === data.email)
        if (!matchUser) {
            alert("Please register first")
        } else {
            localStorage.setItem("loginData", JSON.stringify(data))
            setData({ email: "", password: "" })
            console.log("============>>>>>>>>>>");
            toggle()
        }
    }

    const singIn = () => {
        registerToggle()
        toggle()
    }

    let clearForm = () => {
        setData({ email: "", password: "" })
        toggle()
        console.log(">>>>>>>>>>>>>>");
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={clearForm}>Log in</ModalHeader>
                <ModalBody>
                    <Form onSubmit={submitHandler}>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Email
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="with a placeholder"
                                type="email"
                                value={data.email}
                                onChange={(e) => setData({ ...data, email: e?.target?.value })}
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
                                value={data.password}
                                onChange={(e) => setData({ ...data, password: e?.target?.value })}
                            />
                        </FormGroup>
                        <p>Don't have an Account....! <span role='button' onClick={singIn} className='text-red-500'>Sign in</span></p>
                        <Button className='w-100' color="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}
