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
  add: "",
  city: "",
  state: "",
  pinCode: ""
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
          console.log("------point2-----")

          setCookie("user", res.data.data);
          setCookie("token", res.data.token);
          if (res.data.data.userType === "admin") navigate("/track");
          let match = cookies?.user?.find((e) => e.email === res.data.data.email)
          console.log("🚀 ~ .then ~ match:", match)
          if (!match) {
            toast.error("Registerd ata is already exist")
            toast.error("Registerd ith another email")
          }
          else {
            navigate("/");
            toast.success("Registration successful!");
            setAddress(initialAdress);
            setNewUser(initialData);
            toggle();
          }
        })
        .catch((err) => {
          console.log("🚀 ~ handleSubmit ~ err:", err)
        });
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
        <Modal size="lg" isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>
          </ModalHeader>
          <h4 className="tracking-wider pt-5 pb-3">Register</h4>
          <ModalBody className="mb-28 mx-36">
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  className="shadow-none !border-none !bg-gray-100 !p-[9px] !rounded-none"
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
                  className="shadow-none !border-none !bg-gray-100 !p-[9px] !rounded-none"
                  placeholder="Enter your email"
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
                  className="shadow-none !border-none !bg-gray-100 !p-[9px] !rounded-none"
                  placeholder="Enter your number"
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
                  className="shadow-none !border-none !bg-gray-100 !p-[9px] !rounded-none"
                  placeholder="Enter your age"
                  id="age"
                  value={newUser.age}
                  onChange={handleAgeInput}
                >
                </Input>
              </FormGroup>
              <FormGroup className="!mb-0">
                <Label for="age">Gender</Label>
                <div className="flex ga!p-[9px]3 m-0">
                  <FormGroup className="flex ga!p-[9px]2 mb-0">
                    <Input
                      checked={newUser.gender === "male"}
                      type="radio"
                      value="male"
                      onChange={(e) => { setNewUser({ ...newUser, gender: e.target.value }) }}
                    />
                    <Label>Male</Label>
                  </FormGroup>
                  <FormGroup className="flex ga!p-[9px]2 mb-0">
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
                  className="shadow-none !border-none !bg-gray-100 !p-[9px] !rounded-none"
                  placeholder="Enter your address"
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
                  className="shadow-none !border-none !bg-gray-100 !p-[9px] !rounded-none"
                  placeholder="Enter your city"
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
                  className="shadow-none !border-none !bg-gray-100 !p-[9px] !rounded-none"
                  placeholder="Enter your state"
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
                  className="shadow-none !border-none !bg-gray-100 !p-[9px] !rounded-none"
                  placeholder="Enter your pincode"
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
                <InputGroup>
                  <Input
                    className="shadow-none !border-none !bg-gray-100 !p-[9px] !rounded-none"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    style={{ borderRight: "none" }}
                    placeholder="Enter your password"
                    id="password"
                    value={newUser.password}
                    onChange={(e) =>
                      setNewUser({ ...newUser, password: e.target.value })
                    }
                  >
                  </Input>
                  <InputGroupText className='!border-none !bg-gray-100'>
                    {showPassword ?
                      <Eye role="button" strokeWidth={1.5} color="#3b82f6" onClick={() => setShowPassword(!showPassword)} /> :
                      <EyeOff role="button" strokeWidth={1.5} color="#3b82f6" onClick={() => setShowPassword(!showPassword)} />
                    }
                  </InputGroupText>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label for="password">Confirm Password</Label>
                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  id="confirmPassword"
                  className="shadow-none !border-none !bg-gray-100 !p-[9px] !rounded-none"
                  value={newUser.confirmPass}
                  onChange={(e) =>
                    setNewUser({ ...newUser, confirmPass: e.target.value })
                  }
                />
              </FormGroup>
              <button className="bg-blue-400 hover:bg-blue-500 text-white !p-[10px] w-full">
                Register
              </button>
              <p className="pt-3 text-sm">
                Already have an account ?
                <span
                  role="button"
                  className="font-semibold text-blue-500"
                  onClick={singIn}
                >
                  Sign in ...!
                </span>
              </p>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
}
