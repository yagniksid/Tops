import React, { useEffect, useState } from 'react'
import { Eye, Pencil, XCircle } from "lucide-react";
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'
import "./index.css"

export default function PasswordVisible() {
    let [userData, setUserdata] = useState({ firstName: "", lastName: "", age: "", email: "", password: "" })
    let [index, setIndex] = useState(null)
    let [updateMode, setUpdateMode] = useState(false)
    let [searchtext, setSearchtext] = useState("")
    let [showPassword, setShowPassword] = useState(false)

    const [userArr, setUserArr] = useState([])

    useEffect(() => {
        let data = localStorage.getItem("userData")
        let normaData = JSON.parse(data) || []
        let newData = normaData.filter((e) => {
            return e.firstName.toLowerCase().includes(searchtext.toLowerCase()) || e.age.includes(searchtext)
        })
        setUserArr(newData)
    }, [searchtext])

    // INPUT

    let addDataToArr = () => {

        if (userData.email === "" || userData.password === "") {
            alert("Please fill the form first")
        } else {
            setUserArr([...userArr, userData])
            localStorage.setItem("userData", JSON.stringify([...userArr, userData]))
            setUserdata({ firstName: "", lastName: "", age: "", email: "", password: "" })
        }
    }

    // DELETE

    let deleteHandler = (index) => {
        const deleteData = window.confirm("Do you want to delete?");
        if (deleteData) {
            let filterData = userArr.filter((e, i) => {
                return i !== index
            })
            setUserArr(filterData)
            localStorage.setItem("userData", JSON.stringify(filterData))
        }
    }

    // UPDATE

    function updateHandler(data, index) {
        setUserdata({ ...data })
        setIndex(index)
        setUpdateMode(true)
    }

    function updateDataToArray() {
        if (index || index === 0)
            userArr.splice(index, 1, { ...userData })
        setUserArr([...userArr])
        localStorage.setItem("userData", JSON.stringify([...userArr]))
        setIndex(null)
        setUserdata({ firstName: "", lastName: "", age: "", email: "", password: "" })
        setUpdateMode(false)
    }

    function deleteAll() {
        const allDelete = window.confirm("Do you want to delete all data?");
        if (allDelete) {
            const allDeleteData = window.confirm("Are you sure delete all data?");
            if (allDeleteData) {
                setUserArr([]);
                localStorage.removeItem("userData")
            }
        }
    }

    function passwordVisibility() {

        setShowPassword(true)
        setTimeout(() => {
            setShowPassword(false)
        }, 5000);
    }

    return (
        <>
            <div className='formcss'>
                <Form className='mainclass' >
                    <FormGroup>
                        <Label for="firstName">
                            <b>First Name</b>
                        </Label>
                        <Input
                            value={userData.firstName}
                            id="firstName"
                            name="firstName"
                            placeholder="Enter your firstName"
                            type="text"
                            onChange={(element) => setUserdata({ ...userData, firstName: element?.target?.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">
                            <b>Last Name</b>
                        </Label>
                        <Input
                            value={userData.lastName}
                            id="lastname"
                            name="lastname"
                            placeholder="Enter your Lastname"
                            type="text"
                            onChange={(element) => setUserdata({ ...userData, lastName: element?.target?.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            <b>Age</b>
                        </Label>
                        <Input
                            value={userData.age}
                            id="age"
                            name="age"
                            placeholder="Enter your Age"
                            type="number"
                            onChange={(element) => setUserdata({ ...userData, age: element?.target?.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            <b>Email</b>
                        </Label>
                        <Input
                            value={userData.email}
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            type="text"
                            onChange={(element) => setUserdata({ ...userData, email: element?.target?.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">
                            <b>Password</b>
                        </Label>
                        <Input
                            value={userData.password}
                            id="password"
                            name="password"
                            placeholder="Enter your Password"
                            type="password"
                            onChange={(element) => setUserdata({ ...userData, password: element?.target?.value })}
                        />
                    </FormGroup>
                    {
                        // index || index === 0 ?
                        updateMode ?
                            (<Button color='success' style={{
                                width: "100%"
                            }} onClick={() => updateDataToArray()}>Update</Button>)
                            : (<Button color='success' style={{
                                width: "100%"
                            }} onClick={() => addDataToArr()}>Submit</Button>)
                    }
                </Form>
            </div>
            <div className="tablecss">
                <input
                    onChange={(e) => setSearchtext(e.target.value)}
                    placeholder='Search Here'
                    type="text" />
                {userArr.length === 0 ? ("data not found") :
                    (<Table hover className='subtable'>
                        <thead>
                            <tr>
                                <th>
                                    SR NO.
                                </th>
                                <th>
                                    First Name
                                </th>
                                <th>
                                    Last Name
                                </th>
                                <th>
                                    Age
                                </th>
                                <th>
                                    Email
                                </th>
                                <th>
                                    Password
                                </th>
                                <th
                                >Delete
                                </th>
                                <th>
                                    Edit
                                </th>
                                <th>
                                    Show Password
                                </th>

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
                                                {e.firstName}
                                            </td>
                                            <td>
                                                {e.lastName}
                                            </td>
                                            <td>
                                                {e.age}
                                            </td>

                                            <td>
                                                {e.email}
                                            </td>
                                            <td>
                                                {showPassword ? e.password : "*******"}
                                            </td>

                                            <td><XCircle color="#f50000" role='button' onClick={() => deleteHandler(i)} />
                                            </td>
                                            <td> <Pencil color="#f50000" role='button' onClick={() => updateHandler(e, i)} />
                                            </td>
                                            <td> <Eye color="#f50000" role='button' onClick={() => passwordVisibility()} />
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>)}
            </div>
            <div className='d-flex justify-content-center mt-3 ' >
                <Button color='danger' className='buttoncss' onClick={() => deleteAll()} >Delete all</Button></div>
        </>
    )
}

