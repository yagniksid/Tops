import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
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
import { useDispatch } from "react-redux";
import { fetchCart } from "../../../Redux/feature/cartSlice";

export default function LoginModal({ modal, toggle, registerToggle }) {
  const [user, setUser] = useState({ email: "", password: "", });
  const [cookies, setCookie] = useCookies();
  const [showPassword, setShowPassword] = useState(false)

  const dispatch = useDispatch()

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
      toggle()
      setUser({ email: "", password: "", })
      dispatch(fetchCart(res.data.token))
      if (res?.data?.data?.userType === "admin") navigate("/admin-dashboard")
      else navigate("/")
    }).catch((err) => {
      toast.error(err.response.data)
    })
  }

  function createAcoount() {
    toggle();
    registerToggle()
  }

  function forgetPassword() {
    toggle()
    navigate("/forgetPassword")
  }

  return (
    <div>
      <Modal size="lg" isOpen={modal} toggle={toggle} onSubmit={(e) => handleSubmit(e)}>
        <ModalHeader toggle={toggle}>
        </ModalHeader>
        <h4 className="text-[30px] pt-5 pb-3">Log in </h4>
        <ModalBody className="mb-28 mx-36" >
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                className="shadow-none !border-none !bg-gray-100 !p-[9px] !rounded-none"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
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
                  className="shadow-none !border-none !bg-gray-100 !p-[9px] !rounded-none"
                  type={showPassword ? "text" : "password"}
                  style={{ borderRight: "none" }}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <InputGroupText className='!border-none !bg-gray-100'>
                  {
                    showPassword ? <Eye role="button" strokeWidth={1.5} color="#3b82f6" onClick={() => setShowPassword(!showPassword)} /> : <EyeOff strokeWidth={1.5} role="button" color="#3b82f6" onClick={() => setShowPassword(!showPassword)} />
                  }
                </InputGroupText>
              </InputGroup>
            </FormGroup>

            <p role="button" className="text-right font-semibold text-sm text-blue-500 py-[6px]" onClick={() => forgetPassword()}>Forgot Password ?</p>
            <button className="bg-blue-400 hover:bg-blue-500 text-white p-[10px] w-full">
              Log in
            </button>
            <p className="pt-3 text-sm">
              Don't have an account ? <span onClick={createAcoount} role="button" className="font-semibold text-blue-500">Create an account</span>
            </p>

          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}
