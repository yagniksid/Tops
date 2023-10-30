import React, { useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap'

export default function CrudFull() {
    let [data, setData] = useState({email:"",password:"",adrees:"",city:""})
    let [userArray,setUserArray]=useState([])

    let addDataToArray=()=>{
        setUserArray([...userArray,email])
    }

    return (
        <>
            <div className='d-flex flex-column align-items-center'>
                <Form className='border border-black p-4 mt-4 rounded-3'>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">
                                    Email
                                </Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="with a placeholder"
                                    type="text"
                                    onChange={(e) =>setData({})}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">
                                    Password
                                </Label>
                                <Input
                                    id="examplePassword"
                                    name="password"
                                    placeholder="password placeholder"
                                    type="password"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="exampleAddress">
                            Address
                        </Label>
                        <Input
                            id="exampleAddress"
                            name="address"
                            placeholder="1234 Main St"
                        />
                    </FormGroup>
                    <Row >
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleCity">
                                    City
                                </Label>
                                <Input className='w-200'
                                    id="exampleCity"
                                    name="city"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Button onClick={()=>addDataToArray()} color='success' className='w-100'>
                        Sign in
                    </Button>
                </Form>

                <Table>
                    <thead>
                        <tr>
                            <th>
                                SR NO.
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Password
                            </th>
                            <th>
                                Address
                            </th>
                            <th>
                                City
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                       
                    </tbody>
                </Table>
{
    userArray.map((e,i)=>{
        return(
            <tr key={i} className="table-primary">
            <td>
                {i+1}
            </td>
            <td>
                {e.email}
            </td>
            <td>
                {e.password}
            </td>
            <td>
                {e.adrees}
            </td>
            <td>
                {e.city}
            </td>
        </tr>
        )
    })
}

            </div>

        </>
    )
}
