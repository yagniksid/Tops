import { Edit, Trash } from 'lucide-react'
import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'

export default function Crud() {
    let [inputData, setInputData] = useState({ email: "", password: "" })
    console.log("🚀 ~ Crud ~ inputData:", inputData)
    let [userData, setUserData] = useState([])
    let [index, setIndex] = useState(null)
    let [updateMode, setUpdateMode] = useState(false)
    console.log("🚀 ~ Crud ~ userData:", userData)

    const submitHandler = () => {
        if (inputData.email === "" || inputData.password === "") {
            alert("Please Input First")
        } else {
            setUserData([...userData, inputData])
            localStorage.setItem("user", JSON.stringify(userData))
            setInputData({ email: "", password: "" });
        }
    }

    let editData = (data, index) => {
        setIndex(index)
        setInputData({ ...data })
        setUpdateMode(true)
    }

    let updateHandler = () => {
        if (index || index === 0) {
            userData.splice(index, 1, { ...inputData })
            setIndex(null)
            setUserData([...userData])
            setUpdateMode(false)
            setInputData({ email: "", password: "" })
        }
    }

    let deleteHandler = (index) => {
        console.log("🚀 ~ deleteHandler ~ index:", index)
        let deleteData = userData.filter((e, i) => i !== index)
        console.log("🚀 ~ deleteHandler ~ deleteData:", deleteData)
        setUserData(deleteData)
    }

    return (
        <>
            <div className='flex justify-center'>
                <div className='w-50 border border-black p-5 m-5'>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">
                                Email
                            </Label>
                            <Input
                                id="exampleEmail"
                                name="email"
                                placeholder="with a placeholder"
                                type="email"
                                value={inputData.email}
                                onChange={(e) => { setInputData({ ...inputData, email: e?.target?.value }) }}
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
                                value={inputData.password}
                                onChange={(e) => { setInputData({ ...inputData, password: e?.target?.value }) }}
                            />
                        </FormGroup>
                        {!updateMode ?
                            <Button onClick={submitHandler}>Submit</Button> :
                            <Button onClick={updateHandler}>Update</Button>
                        }
                    </Form>
                </div>
            </div>
            <div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>
                                Sr no
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Password
                            </th>
                            <th>
                                Edit
                            </th>
                            <th>
                                Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData?.map((e, i) => {
                                return <tr key={i}>
                                    <th scope="row">
                                        {i + 1}
                                    </th>
                                    <td>
                                        {e.email}
                                    </td>
                                    <td>
                                        {e.password}
                                    </td>
                                    <td>
                                        <Edit onClick={() => editData(e, i)} role='button' />
                                    </td>
                                    <td>
                                        <Trash onClick={() => deleteHandler(i)} role='button' />
                                    </td>
                                </tr>

                            })
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}
