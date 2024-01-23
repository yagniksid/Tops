import React, { useState } from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'

export default function CheckBox() {
    let [data, setData] = useState([])

    const checkHandler = (name) => {
        let index = data?.indexOf(name)
        if (index !== -1) {
            data.splice(index, 1)
            setData([...data])
        } else {
            setData([...data, name])
        }
    }
    return (
        <>
            <div className='w-100 d-flex justify-content-center'>

                <Form className='border border-black rounded-3 p-3 mt-3 d-flex flex-column '>
                    <FormGroup
                        check
                        inline
                    >
                        <Input onClick={() => checkHandler("yagnik")} checked={data?.includes("yagnik")} type="checkbox" />
                        <Label check>
                            YAGNIK
                        </Label>
                    </FormGroup>
                    <FormGroup
                        check
                        inline
                    >
                        <Input onClick={() => checkHandler("divyesh")} checked={data?.includes("divyesh")} type="checkbox" />
                        <Label check>
                            DIVYESH
                        </Label>
                    </FormGroup>
                    <FormGroup
                        check
                        inline
                    >
                        <Input onClick={() => checkHandler("nil")} checked={data?.includes("nil")} type="checkbox" />
                        <Label check>
                            NIL
                        </Label>
                    </FormGroup>
                    <FormGroup
                        check
                        inline
                    >
                        <Input onClick={() => checkHandler("pavan")} checked={data?.includes("pavan")} type="checkbox" />
                        <Label check>
                            PAVAN
                        </Label>
                    </FormGroup>
                    <FormGroup
                        check
                        inline
                    >
                        <Input onClick={() => checkHandler("tejas")} checked={data?.includes("tejas")} type="checkbox" />
                        <Label check>
                            TEJAS
                        </Label>
                    </FormGroup>
                    <FormGroup
                        check
                        inline
                    >
                        <Input onClick={() => checkHandler("khushal")} checked={data?.includes("khushal")} type="checkbox" />
                        <Label check>
                            KHUSHAL
                        </Label>
                    </FormGroup>
                </Form>
                <div>
                    {
                        data.map((e) => {
                            return <h1>{e}</h1>
                        })
                    }
                </div>
            </div>
        </>
    )
}
