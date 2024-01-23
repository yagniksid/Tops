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
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import RegisterModal from "./RegisterModal";
import "./index.css";

const initialData = {
  email: "",
  password: "",
};

export default function LoginModal({ modal, toggle, registerToggle }) {
  const [user, setUser] = useState(initialData);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("newUser")) || [];
    const matchingUser = storedData.find(
      (e) => e.email === user.email && e.password === user.password
    );

    if (matchingUser) {
      if (matchingUser.password !== user?.password) {
        return toast.warn("password not match");
      }
      localStorage.setItem("loginUser", JSON.stringify(matchingUser));
      toast.success("Log in Successfully !", {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        theme: "light",
      });
      console.log("----log in success--->");
    } else {
      confirmAlert({
        title: "User not found",
        message: 'Click "Register" to create an account.',
        buttons: [
          {
            label: "Cancel",
            onClick: () => console.log("Alert closed"),
          },
          {
            label: "Register",
            onClick: registerToggle,
          },
        ],
        overlayClassName: "custom-overlay",
      });
      console.log("---log---->");
    }
    setUser(initialData);
    toggle();
  };


  function createAcoount() {
    toggle();
    registerToggle()
    console.log("========registr======>>>>>>");
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} onSubmit={(e) => handleSubmit(e)}>
        <ModalHeader toggle={toggle}>
          <b>Log in Form </b>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="text"
                onChange={(e) => setUser({ ...user, email: e?.target?.value.toLowerCase() })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password placeholder"
                type="password"
                onChange={(e) =>
                  setUser({ ...user, password: e?.target?.value })
                }
              />
            </FormGroup>
            <p role="button" className="text-primary" onClick={createAcoount}>
              Create account...!
            </p>
            <Button
              style={{
                backgroundColor: "#ffb217",
                color: "white",
                border: "none",
                fontWeight: "bold",
              }}
              className="w-100 mt-3 mb-3"
            >
              Submit
            </Button>
            <Button color="danger" className="w-100">
              Cancel
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
