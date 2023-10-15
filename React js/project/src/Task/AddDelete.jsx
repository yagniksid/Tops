import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'
import { XCircle } from "lucide-react";

export default function AddDelete() {
    const [carData, setCarData] = useState({ carName: "", carColor: "" });
    const [userArr, setUserArr] = useState([]);

    const addDataToArr = () => {
        setUserArr([...userArr, carData]);
        setCarData({ carName: "", carColor: "" });
    }

    const deleteHandler = (index) => {
        const filteredData = userArr.filter((e, i) => i !== index);
        setUserArr(filteredData);
    }

    const getData = (element, key) => {
        const value = element.target.value;
        setCarData({ ...carData, [key]: value });
    }

    return (
        <>
            <div className='maindiv'>
                <Form className='formcss'>
                    <FormGroup>
                        <Label for="carName">
                            Car Name
                        </Label>
                        <Input
                            value={carData.carName}
                            id="carName"
                            name="carName"
                            placeholder="Enter Car Name"
                            type="text"
                            onChange={(e) => getData(e, "carName")}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="carColor">
                            Car Color
                        </Label>
                        <Input
                            value={carData.carColor}
                            id="carColor"
                            name="carColor"
                            placeholder="Enter Car Color"
                            type="text"
                            onChange={(e) => getData(e, "carColor")}
                        />
                    </FormGroup>
                    <Button color='success' style={{
                        width: "100%"
                    }} onClick={() => addDataToArr()}>Submit</Button>
                </Form>
                <Table hover className="w-100 tablecss">
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
                            userArr.map((e, i) => (
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
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}
