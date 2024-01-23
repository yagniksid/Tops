import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";

const initialData = {
  email: "",
  password: "",
  userType: "User",
};

export default function RegisterModal({ toggle, modal, login }) {
  let [newUser, setNewUser] = useState(initialData);
  console.log("🚀 ~ RegisterModal ~ newUser:", newUser)

  const handleSubmit = (e) => {
    // console.log("----->", newUser);
    e.preventDefault();
    let oldData = localStorage.getItem("newUser");
    let cnvertedOldData = JSON.parse(oldData || "[]");
    let matchUser = cnvertedOldData.find((e) => e.email === newUser.email);
    if (matchUser) {
      toast.warn("Data is already exist please input another data");
      setNewUser(initialData);
    } else if (newUser.email === "" || newUser.password === "") {
      toast.error("Please input data");
    } else {
      let finalData = [...cnvertedOldData, newUser];
      localStorage.setItem("newUser", JSON.stringify(finalData));
      localStorage.setItem("loginUser", JSON.stringify(newUser));
      toggle();
      setNewUser(initialData);
      window.location.reload()
    }
  };

  function singIn() {
    console.log("=========sign in=======>>>");
    login()
    toggle();
  }

  return (
    <>
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            <b>Registeration Form</b>
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder="with a placeholder"
                      type="text"
                      value={newUser.email}
                      onChange={(e) =>
                        setNewUser({ ...newUser, email: e?.target?.value.toLowerCase() })
                      }
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                      id="examplePassword"
                      name="password"
                      placeholder="password placeholder"
                      type="password"
                      value={newUser.password}
                      onChange={(e) =>
                        setNewUser({ ...newUser, password: e?.target?.value })
                      }
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="userType">Select User Type</Label>
                <Input
                  type="select"
                  name="userType"
                  id="userType"
                  value={newUser.userType}
                  onChange={(e) =>
                    setNewUser({ ...newUser, userType: e.target.value })
                  }
                >
                  <option>User</option>
                  <option>Admin</option>
                </Input>
              </FormGroup>
              <p>
                Already have an account ?
                <span
                  role="button"
                  style={{ color: "#ffb217" }}
                  onClick={singIn}
                >
                  Sign in ...!
                </span>
              </p>
              <Button
                style={{
                  backgroundColor: "#ffb217",
                  color: "white",
                  border: "none",
                  fontWeight: "bold",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
                className="w-100"
                type="submit"
              >
                Register
              </Button>
              <Button color="danger" className="w-100" onClick={toggle}>
                Cancle
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
}
