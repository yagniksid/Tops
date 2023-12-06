import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'
import { XCircle } from "lucide-react";

export default function DeleteData() {
    let [email, setEmail] = useState("")
    const [userArr, setUserarr] = useState([])
    let addDataToArr = () => {
        setUserarr([...userArr, email])
        setEmail("")
    }
    let deleteHandler = (index) => {
        console.log("--------->", index);
        let filterData = userArr.filter((e, i) => {
            return i !== index
        })
        setUserarr(filterData)
    }
    return (
        <>
            <h1 className='text-center'>Email is {email}</h1>
            <Form className="border p-3 border-dark rounded-3 w-100" >
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
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormGroup>
                <Button color='success' className='w-100' onClick={() => addDataToArr()}>Submit</Button>
            </Form>

            <Table hover className="w-100 ">
                <thead>
                    <tr>
                        <th>
                            SR NO.
                        </th>
                        <th>
                            First Name
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
                                        {e}
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

