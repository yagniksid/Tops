import React, { useReducer, useState } from "react";
import { Button, Input } from "reactstrap";

export default function Task() {
    const reducer = (state, action) => {
        if (action.actionType === "SetEmail") {
            return { ...state, email: action.email };
        } else if (action.actionType === "SetPassword") {
            return { ...state, password: action.password };
        } else {
            return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, { email: "", password: "" });
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const setEmailHandler = () => {
        dispatch({ actionType: "SetEmail", email: emailInput });
        setEmailInput("");
    };

    const setPasswordHandler = () => {
        dispatch({ actionType: "SetPassword", password: passwordInput });
        setPasswordInput("");
    };

    return (
        <div>
            <h1>Email is: {state.email}</h1>
            <h1>Password is: {state.password}</h1>
            <div>
                <Input
                    type="text"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Input your email"
                />
                <Button color="primary" onClick={setEmailHandler}>
                    Set Email
                </Button>
            </div>
            <div>
                <Input
                    type="password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="Input your password"
                />
                <Button color="primary" onClick={setPasswordHandler}>
                    Set Password
                </Button>
            </div>
        </div>
    );
}
