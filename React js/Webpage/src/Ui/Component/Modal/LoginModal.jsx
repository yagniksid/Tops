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


export default function LoginModal({ modal, toggle, registerToggle }) {
  const [user, setUser] = useState({ email: "", password: "", });
  const [cookies, setCookie] = useCookies();

  let navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios({
      method: "post",
      url: `${BE_URL}/user/signin`,
      data: user
    }).then((res) => {
      console.log("🚀 ~ handleSubmit ~ res:", res)
      setCookie("user", res.data.data)
      setCookie("token", res.data.token)
      // if (res.data.data.userType === "admin") navigate("/track")
      // else navigate("/")
    }).catch((err) => {
    })
    setUser({ email: "", password: "", })
    toggle()
  }

  function createAcoount() {
    toggle();
    registerToggle()
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} size="lg" onSubmit={(e) => handleSubmit(e)}>
        <ModalHeader toggle={toggle}>
          <b>Log in Form </b>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={user.email}
                onChange={(e) =>
                  setUser({ ...user, email: e.target.value.toLowerCase() })
                }
              >
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="text"
                name="password"
                id="password"
                value={user.password}
                onChange={(e) =>
                  setUser({ ...user, password: e.target.value })
                }
              >
              </Input>
            </FormGroup>

            <p role="button" className="text-primary" onClick={createAcoount}>
              Create account...!
            </p>
            <button
              className="w-100 mt-3 mb-3 h-10 rounded-md bg-amber-500 text-black"
            >
              Log in
            </button>
            <Button color="danger" className="w-100" onClick={toggle}>
              Cancle
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
