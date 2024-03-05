import React from 'react'
import { Input } from "reactstrap";

export default function Input2({ data, setData }) {
    console.log("🚀 ~ Input2 ~ data:", data)

    return (
        <div className='w-25 border border-black rounded-3 m-5'>
            <Input type='text'
                id='email'
                value={data.email}
                placeholder='Enter Your Email'
                onChange={(e) => setData({ ...data, email: e?.target?.value })}
            />
            <Input type='password'
                id='password'
                value={data.password}
                placeholder='Enter Your Password'
                onChange={(e) => setData({ ...data, password: e?.target?.value })}
            />
        </div>
    )
}
