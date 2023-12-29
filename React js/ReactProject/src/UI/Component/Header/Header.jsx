import React, { useState } from "react";
import "./index.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import LoginModal from "../Modal/LoginModal";
import RegisterModal from "../Modal/RegisterModal";
import { toast } from "react-toastify";

export default function Header() {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const loginData = JSON.parse(localStorage.getItem("loginUser")) || [];
  const RegData = JSON.parse(localStorage.getItem("newUser")) || [];
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.setItem("loginUser", JSON.stringify([]));
    navigate("/");
    toast.warning("Log Out Successfully !", {
      position: "top-center",
      autoClose: 10000,
      hideProgressBar: false,
      theme: "light",
    });
  };

  const loginToggle = () => setLoginModal(!loginModal);
  const registerToggle = () => setRegisterModal(!registerModal);

  return (
    <>
      <LoginModal toggle={loginToggle} modal={loginModal} registerToggle={registerToggle} />
      <RegisterModal toggle={registerToggle} modal={registerModal} loginToggle={loginToggle} />

      <header className="sticky">
        <b>BY</b>
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/profile"}>Profile</NavLink>
          {loginData.userType === "Admin" && (
            <NavLink to={"/admin"}>Admin</NavLink>
          )}
        </nav>
        <div className="d-flex justify-content-end w-100 gap-3">
          <div>
            {Object.keys(loginData).length > 0 ? (
              <Button
                style={{
                  backgroundColor: "#ffb217",
                  color: "white",
                  border: "none",
                  fontWeight: "bold",
                }}
                onClick={logoutHandler}
              >
                Log out
              </Button>
            ) : (
              <Button
                style={{
                  backgroundColor: "#ffb217",
                  color: "white",
                  border: "none",
                  fontWeight: "bold",
                }}
                onClick={loginToggle}
              >
                Log in
              </Button>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
