import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Table } from 'reactstrap'
import "./index.css"

export default function HomePage() {
    let [toDoData, setToDoData] = useState({ data: "" })

    const addData = () => {

    }
    return (
        <>
            <div>
                <h1> Todo Data is {toDoData.data}</h1>
                <Form className='todo'>
                    <FormGroup className='d-flex w-25 gap-3' >
                        <Input
                            value={toDoData.data}
                            id="todo"
                            name="Todo"
                            placeholder="Enter data"
                            type="text"
                            onChange={(e) => setToDoData(e?.target?.value )}
                        />
                        <Button onClick={addData}>Add Data</Button>
                    </FormGroup>
                </Form>
            </div>
            <div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>
                                SR NO.
                            </th>
                            <th>
                                Name
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toDoData.map((e, i) =>
                                <tr key={i}>
                                    <th scope="row">
                                        {i + 1}
                                    </th>
                                    <td>
                                        {e.data}
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>

            </div>
        </>
    )
}