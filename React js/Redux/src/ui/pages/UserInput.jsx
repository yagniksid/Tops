import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input, Table } from 'reactstrap'
import { Edit2Icon, Plus, PlusCircle, Trash2Icon } from 'lucide-react'
import { addUserName, editUserName, removeUserName } from '../../Redux/feature/input/input'

export default function UserInput() {
    let [name, setName] = useState("")
    let [index, setIndex] = useState(null)

    let userData = useSelector((store) => {
        return store.nameReducer.name
    })
    let dispatch = useDispatch()

    let addData = () => {
        dispatch(addUserName(name))
        setName("")
    }

    let editData = (e, i) => {
        setName(e)
        setIndex(i)
    }

    let editHandler = () => {
        dispatch(editUserName({ index, name }))
        setName("")
        setIndex(null)
    }

    let removeHandler = (i) => {
        dispatch(removeUserName(i))
    }

    return (
        <>
            <div className='d-flex justify-content-center p-5' style={{
                backgroundColor: "lightgreen"
            }}>
                <div className='d-flex w-50'>
                    <Input
                        value={name}
                        placeholder='Enter Your Name'
                        className='rounded-0'
                        onChange={(e) => setName(e?.target?.value)}
                        style={{ boxShadow: "none" }}
                    />
                    {index === null ?
                        (<Button color='danger' className='rounded-0' onClick={() => addData()} ><Plus /></Button>) :
                        (<Button color='danger' className='rounded-0' onClick={() => editHandler()} ><PlusCircle /></Button>)
                    }
                </div>
            </div >
            <div className='d-flex justify-content-center pt-5'>
                <div className='w-75 d-flex justify-content-center'>
                    <Table >
                        <thead>
                            <tr>
                                <th>
                                    Sr no
                                </th>
                                <th>
                                    Name
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
                            {userData.map((e, i) => {
                                return <tr key={i}>
                                    <th scope="row">
                                        {i + 1}
                                    </th>
                                    <td>
                                        {e}
                                    </td>
                                    <td>
                                        <Edit2Icon color='LightGreen' onClick={() => editData(e, i)} role='button' />
                                    </td>
                                    <td>
                                        <Trash2Icon onClick={() => removeHandler(i)} color='Red' role='button' />
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}
