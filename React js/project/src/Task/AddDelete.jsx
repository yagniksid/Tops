import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'
import { XCircle } from "lucide-react";
import "./index.css"

export default function InputData() {
    let [carName, setcarName] = useState("")
    const [userArr, setUserarr] = useState([])
    let [carColor, setcarColor] = useState("")
    let addDataToArr = () => {
        setUserarr([...userArr, { carName, carColor }])
        setcarName("")
        setcarColor("")
    }
    const getData = (elemet) => {
        setcarName(elemet.target.value)
    }
    let deleteHandler = (index) => {
        // console.log("--------->", index);
        let filterData = userArr.filter((e, i) => {
            return i !== index
        })
        setUserarr(filterData)
    }
    return (
        <>
            <Form className='formcss' >
                <FormGroup>
                    <Label for="exampleEmail">
                        <b>Car Name</b>
                    </Label>
                    <Input
                        value={carName}
                        id="exampleEmail"
                        name="carName"
                        placeholder="Enter Car Name"
                        type="text"
                        onChange={(e) => getData(e)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">
                        <b>Car Color</b>
                    </Label>
                    <Input
                        valu
                        value={carColor}
                        id="examplePassword"
                        name="password"
                        placeholder="Enter Car Color"
                        type="text"
                        onChange={(elemet) => setcarColor(elemet?.target?.value)}
                    />
                </FormGroup>
                <Button color='success' style={{
                    width: "100%"
                }} onClick={() => addDataToArr()}>Submit</Button>
            </Form>
            <Table hover className="tablecss">
                <thead>
                    <tr>
                        <th>
                            SR NO.
                        </th>
                        <th>
                            Car Name
                        </th>
                        <th>
                            Car Color
                        </th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userArr.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <th scope="row">
                                        {i + 1}
                                    </th>
                                    <td>
                                        {e.carName}
                                    </td>
                                    <td>
                                        {e.carColor}
                                    </td>
                                    <td><XCircle color="#f50000" role='button' onClick={() => deleteHandler(i)} /></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>

        </>
    )
}
