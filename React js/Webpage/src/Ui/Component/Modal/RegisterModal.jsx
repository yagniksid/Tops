import React, { useState } from "react";
import { toast } from "react-toastify";
import axios, { } from "axios";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { BE_URL } from "../../../../config";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { InputGroup, InputGroupText } from "reactstrap";
let initialData = {
  name: "",
  email: "",
  number: "",
  age: "",
  gender: "",
  password: "",
  confirmPass: ""
};

let initialAdress = {
  add: "varachha",
  city: "surat",
  state: "gujarat",
  pinCode: "395007"
}

export default function RegisterModal({ toggle, modal, login }) {
  let [newUser, setNewUser] = useState(initialData);
  let [adress, setAddress] = useState(initialAdress);
  let [showPassword, setShowPassword] = useState(false)

  const [cookies, setCookie] = useCookies();

  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !newUser.name ||
      !newUser.email ||
      !newUser.number ||
      !newUser.age ||
      !newUser.gender ||
      !newUser.password ||
      !newUser.confirmPass ||
      !adress.add ||
      !adress.city ||
      !adress.state ||
      !adress.pinCode
    ) {
      toast.error("Please fill out all fields");
    } else if (newUser.password !== newUser.confirmPass) {
      toast.warn("Passwords do not match");
    } else {
      let mainData = { ...newUser, adress: [adress] };
      axios({
        method: "post",
        url: `${BE_URL}/user/signup`,
        data: mainData
      })
        .then((res) => {
          setCookie("user", res.data.data);
          setCookie("token", res.data.token);
          if (res.data.data.userType === "admin") navigate("/track");
          else navigate("/");
        })
        .catch((err) => { });
      toast.success("Registration successful!");
      setAddress(initialAdress);
      setNewUser(initialData);
      toggle();
    }
  };


  function singIn() {
    console.log("=========sign in=======>>>");
    login()
    toggle();
  }

  const handleNumberInput = (e) => {
    let inputNumber = e.target.value;
    if (inputNumber.length > 10) {
      inputNumber = inputNumber.slice(0, 10);
      toast.warn("Number must be 10 digits")
    }
    setNewUser({ ...newUser, number: inputNumber });
  };

  const handleAgeInput = (e) => {
    let inputAge = e.target.value;
    if (inputAge > 100) {
      inputAge = 100;
      toast.warning("Age cannot be greater than 100")
    }
    setNewUser({ ...newUser, age: inputAge });
  };


  return (
    <>
      <div>
        <Modal isOpen={modal} toggle={toggle} size="lg">
          <ModalHeader toggle={toggle}>
            <b>Registeration Form</b>
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={handleSubmit}>

              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  className="shadow-none"
                  id="name"
                  name="text"
                  placeholder="Enter your name"
                  type="text"
                  value={newUser.name}
                  onChange={(e) =>
                    setNewUser({ ...newUser, name: e?.target?.value })
                  }
                />
              </FormGroup>

              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  className="shadow-none"
                  id="email"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({ ...newUser, email: e.target.value.toLowerCase() })
                  }
                >
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="number">Number</Label>
                <Input
                  type="number"
                  name="number"
                  className="shadow-none"
                  id="number"
                  value={newUser.number}
                  onChange={handleNumberInput}
                >
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="age">Age</Label>
                <Input
                  type="number"
                  name="age"
                  className="shadow-none"
                  id="age"
                  value={newUser.age}
                  onChange={handleAgeInput}
                >
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="age">Gender</Label>
                <div className="flex gap-3">
                  <FormGroup className="flex gap-2">
                    <Input
                      checked={newUser.gender === "male"}
                      type="radio"
                      value="male"
                      onChange={(e) => { setNewUser({ ...newUser, gender: e.target.value }) }}
                    />
                    <Label>Male</Label>
                  </FormGroup>
                  <FormGroup className="flex gap-2">
                    <Input
                      checked={newUser.gender === "female"}
                      type="radio"
                      value="female"
                      onChange={(e) => { setNewUser({ ...newUser, gender: e.target.value }) }}
                    />
                    <Label>Female</Label>
                  </FormGroup>
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="adress">Address</Label>
                <Input
                  type="text"
                  name="adress"
                  className="shadow-none"
                  id="adress"
                  value={adress.add}
                  onChange={(e) =>
                    setAddress({ ...adress, add: e.target.value })
                  }
                >
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="city">City</Label>
                <Input
                  type="text"
                  name="city"
                  className="shadow-none"
                  id="city"
                  value={adress.city}
                  onChange={(e) =>
                    setAddress({ ...adress, city: e.target.value })
                  }
                >
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="state">State</Label>
                <Input
                  type="text"
                  name="state"
                  className="shadow-none"
                  id="state"
                  value={adress.state}
                  onChange={(e) =>
                    setAddress({ ...adress, state: e.target.value })
                  }
                >
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="pincode">Pincode</Label>
                <Input
                  type="text"
                  name="pincode"
                  className="shadow-none"
                  id="pincode"
                  value={adress.pinCode}
                  onChange={(e) =>
                    setAddress({ ...adress, pinCode: e.target.value })
                  }
                >
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  className="shadow-none"
                  id="password"
                  value={newUser.password}
                  onChange={(e) =>
                    setNewUser({ ...newUser, password: e.target.value })
                  }
                >
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="password">Confirm Password</Label>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    value={newUser.confirmPass}
                    onChange={(e) =>
                      setNewUser({ ...newUser, confirmPass: e.target.value })
                    }
                  />
                  <InputGroupText>
                    {showPassword ?
                      <Eye role="button" strokeWidth={1.5} color="Gray" onClick={() => setShowPassword(!showPassword)} /> :
                      <EyeOff role="button" strokeWidth={1.5} color="Gray" onClick={() => setShowPassword(!showPassword)} />
                    }
                  </InputGroupText>
                </InputGroup>
              </FormGroup>
              <p>
                Already have an account ?
                <span
                  role="button"
                  className="text-red-500 ps-2 font-semibold"
                  onClick={singIn}
                >
                  Sign in ...!
                </span>
              </p>
              <Button color="primary" className="mb-3 w-full">
                Register
              </Button>
              <Button color="secondary" className="w-full" onClick={toggle}>
                Cancel
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
}
