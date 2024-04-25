import axios from 'axios'
import React, { useState } from 'react'
import { Button, Input } from 'reactstrap'
import { BE_URL } from '../../../../config'
import { toast } from 'react-toastify'

export default function ForgotPassword() {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [isSend, setIsSend] = useState(false)
    let [otp, setOtp] = useState("")

    const sendOtpHandler = () => {
        setIsSend(true)
        axios({
            method: "post",
            url: `${BE_URL}/user/sendotp`,
            data: { email }
        }).then((res) => {
            console.log("🚀 ~ sendOtpHandler ~ res:", res)
        }).catch((err) => {
            console.log("🚀 ~ sendOtpHandler ~ err:", err)
            toast.error("Error occurred while fetching data")
        })
    }
    const otpVerifyHandler = () => {
        setIsSend(true)
        axios({
            method: "post",
            url: `${BE_URL}/user/reset_passsword`,
            data: { otp, password }
        }).then((res) => {
            console.log("🚀 ~ sendOtpHandler ~ res:", res)
        }).catch((err) => {
            console.log("🚀 ~ sendOtpHandler ~ err:", err)
            toast.error("Error occurred while fetching data")
        })
    }

    return (
        <div className='min-h-[50vh] flex flex-col justify-center items-center'>
            <h2>Forget Password</h2>
            <div className='w-25 border border-slate-500 rounded-lg p-5'>

                <Input
                    className="shadow-none mb-2"
                    type="email"
                    placeholder='Enter your email'
                    value={email}
                    disabled={isSend}
                    onChange={(e) => setEmail(e?.target?.value)
                    } />
                {isSend &&
                    <>
                        <Input
                            className="shadow-none mb-2"
                            type="text"
                            placeholder='Enter your OTP'
                            value={otp}
                            onChange={(e) => setOtp(e?.target?.value)
                            } />
                        <Input
                            className="shadow-none mb-2"
                            type="password"
                            placeholder='Enter your OTP'
                            value={password}
                            onChange={(e) => setPassword(e?.target?.value)
                            } />
                    </>
                }
                {
                    !isSend ?
                        <Button className='w-full' onClick={sendOtpHandler}>SendOtp</Button> :
                        <Button className='w-full' onClick={otpVerifyHandler}>Verify Otp</Button>
                }
            </div>
        </div>
    )
}
