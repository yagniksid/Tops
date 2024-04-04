import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "react-confirm-alert/src/react-confirm-alert.css";
import "./index.css";
import { useCookies } from "react-cookie";
import axios from "axios";
import { BE_URL } from "../../../../config";
import { Eye, EyeOff } from "lucide-react";
import { InputGroup, InputGroupText } from "reactstrap";

export default function LoginModal({ modal, toggle, registerToggle }) {
  const [user, setUser] = useState({ email: "", password: "", });
  const [cookies, setCookie] = useCookies();
  const [showPassword, setShowPassword] = useState(false)

  let navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: "post",
      url: `${BE_URL}/user/signin`,
      data: user
    }).then((res) => {
      setCookie("user", res.data.data)
      setCookie("token", res.data.token)
      toggle()
      setUser({ email: "", password: "", })
      if (res.data.data.userType === "admin") navigate("/track")
      else navigate("/")
    }).catch((err) => {
      toast.error(err.response.data)
    })
  }

  function createAcoount() {
    toggle();
    registerToggle()
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} onSubmit={(e) => handleSubmit(e)}>
        <ModalHeader toggle={toggle}>
          <b>Log in Form </b>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                className="shadow-none"
                type="email"
                name="email"
                id="email"
                value={user.email}
                onChange={(e) =>
                  setUser({ ...user, email: e.target.value.toLowerCase() })
                }
              />
            </FormGroup>

            <FormGroup>
              <Label for="password">Password</Label>
              <InputGroup>
                <Input
                  className="shadow-none"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <InputGroupText>
                  {
                    showPassword ? <Eye role="button" strokeWidth={1.5} color="Gray" onClick={() => setShowPassword(!showPassword)} /> : <EyeOff strokeWidth={1.5} role="button" color="Gray" onClick={() => setShowPassword(!showPassword)} />
                  }
                </InputGroupText>
              </InputGroup>
            </FormGroup>

            <p role="button" onClick={createAcoount}>
              Don't have an account? <span className="font-semibold text-red-500">Create account...!</span>
            </p>
            <button className="border-2 border-black rounded-md hover:bg-black hover:text-white p-1 w-full">
              Login
            </button>

          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
