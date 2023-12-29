
import React, { useReducer, useState } from "react";
import { Button, Input } from "reactstrap";

export default function Task() {
    const reducer = (state, action) => {
        if (action.actionType === "INC") {
            return { count: state.count + action.payload };
        } else {
            return state;
        }
    };

    const [countState, dispatch] = useReducer(reducer, { count: 1000 });
    const [inputValue, setInputValue] = useState("");

    const handler = (e) => {
        const value = parseInt(e.target.value, 10);

        if (!isNaN(value)) {
            setInputValue(value);
        }
    };

    function submitHandler() {
        dispatch({ actionType: "INC", payload: inputValue });
        setInputValue("");
    }
    return (
        <div>
            <h1>count is: {countState.count}</h1>
            <Input
                type="text"
                value={inputValue}
                onChange={handler}
                placeholder="input your number"
            />
            <Button color="primary" onClick={() => submitHandler()}>
                INC by Number
            </Button>
        </div>
    );
}
