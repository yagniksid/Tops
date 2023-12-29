import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";

let userData = {
  email: "",
  password: "",
  userType: "User",
};

export default function NewUser() {
  let [data, setData] = useState(userData);
  const navigate = useNavigate();

  let submitHandler = (e) => {
    e.preventDefault();
    let oldData = localStorage.getItem("newUser");
    let convertedData = JSON.parse(oldData) || [];
    let matchUserData = convertedData.find((e) => e.email === data.email);
    if (matchUserData) {
      toast.warning("Data is already exist please input another data");
      setData(userData);
    } else if (data.email === "" || data.password === "") {
      toast.error("Please input data");
    } else {
      let finalData = [...convertedData, data];
      localStorage.setItem("newUser", JSON.stringify(finalData));
      setData(userData);
    }
  };

  return (
    <>
      <div className="w-100 d-flex justify-content-center pt-5 pb-4">
        <Form
          style={{
            width: "50%",
            padding: "30px",
            border: "2px solid black",
            borderRadius: "10px",
          }}
          onSubmit={submitHandler}
        >
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Email
            </Label>
            <Col sm={10}>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="text"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e?.target?.value })}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="examplePassword" sm={2}>
              Password
            </Label>
            <Col sm={10}>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password placeholder"
                type="password"
                value={data.password}
                onChange={(e) =>
                  setData({ ...data, password: e?.target?.value })
                }
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="userType" sm={2}>
              Select User Type
            </Label>
            <Col sm={10}>
              <Input
                type="select"
                name="userType"
                id="user"
                value={data.userType}
                onChange={(e) =>
                  setData({ ...data, userType: e?.target?.value })
                }
              >
                <option>User</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col>
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
              >
                Register
              </Button>
              <Button color="danger" className="w-100">
                Cancel
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
      <div className="d-flex justify-content-center">
        <Button
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#ffb217",
            marginTop: "20px",
            marginBottom: "40px",
          }}
          onClick={() => navigate(-1)}
        >
          Go back
        </Button>
      </div>
    </>
  );
}
