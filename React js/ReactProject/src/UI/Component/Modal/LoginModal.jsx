import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const initialData = {
    email: "",
    password: "",
};
export default function LoginModal({ modal, toggle }) {
    let [user, setUser] = useState(initialData)
    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem("user", JSON.stringify(user))
        setUser(initialData)
        toggle()
        // console.log("-------->", user)

    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} onSubmit={(e) => handleSubmit(e)}>
                <ModalHeader toggle={toggle}> <b>Log in Form </b></ModalHeader>
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
                                type="text"
                                onChange={(e) => setUser({ ...user, email: e?.target?.value })}
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
                                onChange={(e) => setUser({ ...user, password: e?.target?.value })}
                            />
                        </FormGroup>
                        <Button style={{ backgroundColor: "#ffb217", color: "white", border: "none", fontWeight: "bold" }} className="w-100">
                            Submit
                        </Button>
                        <Button color="danger" className="w-100">
                            Cancle
                        </Button>
                    </Form >
                </ModalBody>
            </Modal>
        </div>
    );
}