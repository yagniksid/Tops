import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Button, Form, Input, Label } from "reactstrap";

export default function Login() {
    const [logData, setLogData] = useState({ email: "", password: "" })
    console.log("🚀 ~ Login ~ logData:", logData)
    const submitHandler = (e) => {
        e.preventDefault()
        const oldData = JSON.parse(localStorage.getItem("regData") || "[]")
        console.log("🚀 ~ submitHandler ~ oldData:", oldData)
        const matchUser = oldData?.find((e) => e?.email === logData?.email)
        if (matchUser) {
            localStorage.setItem("logData", JSON.stringify(matchUser))
            setLogData({ email: "", password: "" })
            navigate("/product")
            console.log(">>>>>>>>");
        } else {
            alert("User Does Not Exist")
        }
    }

    const navigate = useNavigate()

    return (
        <div>
            <div className="flex items-center justify-center min-h-screen">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                    <div className="mb-4">
                        <h2 className="text-2xl font-bold text-sky-500">Login</h2>
                    </div>
                    <Form onSubmit={submitHandler}>
                        <div className="mb-4">
                            <Label className="block text-sky-500 mb-2" htmlFor="username">
                                User name / Email
                            </Label>
                            <Input
                                type="text"
                                id="username"
                                className="w-full shadow-none p-2 border border-skytext-sky-500 rounded-lg focus:outline-none focus:border-skytext-sky-500"
                                placeholder="Enter your username or email"
                                value={logData.email}
                                onChange={(e) => setLogData({ ...logData, email: e?.target?.value })}
                            />
                        </div>
                        <div className="mb-6">
                            <Label className="block text-sky-500 mb-2" htmlFor="password">
                                Password
                            </Label>
                            <Input
                                type="password"
                                id="password"
                                value={logData.password}
                                className="w-full shadow-none p-2 border border-skytext-sky-500 rounded-lg focus:outline-none focus:border-skytext-sky-500"
                                placeholder="Enter your password"
                                onChange={(e) => setLogData({ ...logData, password: e?.target?.value })}
                            />
                        </div>
                        <div>
                            <Button
                                onClick={submitHandler}
                                type='submit'
                                className="w-full !bg-sky-500 text-white py-2 rounded-lg hover:text-sky-500 transition duration-300"
                            >
                                LOG IN NOW
                            </Button>
                        </div>
                        <div className='pt-2'>
                            <p>Don't have an account ? <span role='button' className='font-semibold text-sky-500' onClick={() => navigate("/register")}>Sign in</span></p>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}