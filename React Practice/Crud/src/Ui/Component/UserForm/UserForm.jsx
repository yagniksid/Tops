import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import UserTable from '../UserTable/UserTable';

let initialData = {
    uName: {
        firstName: "",
        lastName: ""
    },
    email: "",
    password: "",
    gender: "",
    hobby: "",
    color: [],
    password: ""
}


export default function UserForm() {
    let [newUser, setNewUser] = useState(initialData)
    let [userName, setUserName] = useState({
        firstName: "",
        lastName: ""
    })
    let [data, setData] = useState([])
    let [index, setIndex] = useState(null)

    useEffect(() => {
        let userData = JSON.parse(localStorage.getItem("user")) || []
        setData(userData)
    }, [])


    const checkBoxHandler = (name, e) => {
        let selectedData = e?.target?.checked

        if (selectedData) {
            setNewUser({ ...newUser, color: [...newUser.color, name] })
        } else {
            let filterdData = newUser?.color?.filter((e) => e !== name)
            setNewUser({ ...newUser, color: filterdData })
        }

    }

    const submitHandler = (e) => {
        e.preventDefault()
        let mainData = { ...newUser, uName: userName }
        setData([...data, mainData])
        localStorage.setItem("user", JSON.stringify([...data, mainData]))
        setNewUser(initialData);
        setUserName({ firstName: "", lastName: "" });
    }

    let editData = (ele, index) => {
        setIndex(index)
        setNewUser(ele)
        setUserName(ele.uName)
    }

    let updateHandler = (e) => {
        if (index || index === 0) {
            let updateData = { ...newUser, uName: userName }
            data.splice(index, 1, updateData)
            setData([...data])
            localStorage.setItem("user", JSON.stringify([...data]))
            setNewUser(initialData)
            setUserName({
                firstName: "",
                lastName: ""
            })
            setIndex(null)
        }
    }

    let deleteHandler = (element) => {
        let newData = data?.filter((e) => e !== element)
        setData(newData)
        localStorage.setItem("user", JSON.stringify(newData))
    }

    return (
        <>
            <div>
                <Form onSubmit={submitHandler}>
                    <FormGroup>
                        <Label for="exampleEmail">
                            First Name
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="Enter Your Email"
                            type="text"
                            value={userName?.firstName}
                            onChange={(e) => setUserName({ ...userName, firstName: e?.target?.value })}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail">
                            Last Name
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="Enter Your Email"
                            type="text"
                            value={userName?.lastName}
                            onChange={(e) => setUserName({ ...userName, lastName: e?.target?.value })}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail">
                            Email
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="Enter Your Email"
                            type="email"
                            value={newUser.email}
                            onChange={(e) => setNewUser({ ...newUser, email: e?.target?.value })}
                        />
                    </FormGroup>

                    <FormGroup className=' flex gap-2'>
                        <Label for="examplePassword">
                            Gender :
                        </Label>
                        <FormGroup>
                            <Input
                                id="male"
                                name="male"
                                type="radio"
                                value="male"
                                checked={newUser.gender === "male"}
                                onChange={(e) => setNewUser({ ...newUser, gender: e?.target?.value })}
                            />
                            <Label>Male</Label>
                        </FormGroup>
                        <FormGroup>
                            <Input
                                id="female"
                                name="female"
                                type="radio"
                                value="female"
                                checked={newUser.gender === "female"}
                                onChange={(e) => setNewUser({ ...newUser, gender: e?.target?.value })}
                            />
                            <Label>Female</Label>
                        </FormGroup>
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleSelect">
                            Hobby
                        </Label>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                            value={newUser.hobby}
                            onChange={(e) => setNewUser({ ...newUser, hobby: e?.target?.value })}
                        >
                            <option>
                                1
                            </option>
                            <option>
                                2
                            </option>
                            <option>
                                3
                            </option>
                            <option>
                                4
                            </option>
                            <option>
                                5
                            </option>
                        </Input>
                    </FormGroup>

                    <FormGroup className='flex gap-2'>
                        <Label>Color :</Label>
                        <FormGroup>
                            <Input
                                id="Red"
                                name="Red"
                                type="checkbox"
                                checked={newUser.color.includes("red")}
                                onChange={(e) => checkBoxHandler("red", e)}
                            />
                            <Label>Red</Label>
                        </FormGroup>

                        <FormGroup>
                            <Input
                                id="green"
                                name="green"
                                type="checkbox"
                                checked={newUser.color.includes("green")}
                                onChange={(e) => checkBoxHandler("green", e)}
                            />
                            <Label>Green</Label>
                        </FormGroup>

                        <FormGroup>
                            <Input
                                id="blue"
                                name="blue"
                                type="checkbox"
                                checked={newUser.color.includes("blue")}
                                onChange={(e) => checkBoxHandler("blue", e)}
                            />
                            <Label>Blue</Label>
                        </FormGroup>

                        <FormGroup>
                            <Input
                                id="black"
                                name="black"
                                type="checkbox"
                                checked={newUser.color.includes("black")}
                                onChange={(e) => checkBoxHandler("black", e)}
                            />
                            <Label>Black</Label>
                        </FormGroup>
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail">
                            Password
                        </Label>
                        <Input
                            id="password"
                            name="password"
                            placeholder="Enter Your Password"
                            type="password"
                            value={newUser.password}
                            onChange={(e) => setNewUser({ ...newUser, password: e?.target?.value })}
                        />
                    </FormGroup>

                    {
                        index || index === 0 ?
                            <Button onClick={updateHandler}>
                                Update
                            </Button>
                            :
                            <Button type='submit' onClick={submitHandler}>
                                Submit
                            </Button>
                    }
                </Form>
            </div>
            <div>
                <UserTable data={data} editData={editData} deleteHandler={deleteHandler} setData={setData} />
            </div>
        </>
    )
}
