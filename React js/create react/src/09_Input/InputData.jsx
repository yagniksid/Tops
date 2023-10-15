import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import "./index.css"

export default function InputData() {
    let [email, setemail] = useState("")
    const [userArr, setUserarr] = useState([])
    let [Password, setPassword] = useState("")
    let addDataToArr = () => {
        setUserarr([...userArr, email])
        setemail("")
    }
    const getData = (elemet) => {
        setemail(elemet.target.value)
    }
    return (
        <>
            <h1>Email is {email}</h1>
            <h1>Password id {Password} </h1>
            <Form className='formcss' >
                <FormGroup>
                    <Label for="exampleEmail">
                        Email
                    </Label>
                    <Input
                        value={email}
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="text"
                        onChange={(e) => getData(e)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">
                        Password
                    </Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="password placeholder"
                        type="password"
                        onChange={(elemet) => setPassword(elemet?.target?.value)}
                    />
                </FormGroup>
                <Button color='success' style={{
                    width: "100%"
                }} onClick={() => addDataToArr()}>Submit</Button>
            </Form>
            {
                userArr.map((e, i) => {
                    return <h1 key={i}>My name is {e}</h1>
                })
            }
        </>
    )
}
