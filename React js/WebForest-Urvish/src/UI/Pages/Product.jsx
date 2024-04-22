import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label, Table } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteData, getData, updateData } from '../../Redux/features/product'
import { Edit, Trash } from 'lucide-react'

export default function Product() {
    let [proData, setProData] = useState([{ name: "", price: "" }])
    let [mapData, setMapData] = useState()
    let [index, setIndex] = useState(null)
    console.log("🚀 ~ Product ~ index:", index)
    console.log("🚀 ~ Product ~ mapData:", mapData)
    let [isTrue, setIsTrue] = useState(false)
    let dispatch = useDispatch()


    let submitHandler = (e) => {
        e.preventDefault()
        dispatch(getData(proData))
        setProData({ name: "", price: "" })
        console.log("-------------->>>");
    }

    const data = useSelector((store) => {
        return store.productSlice
    })
    console.log("🚀 ~ useselector ~ data:", data)

    useEffect(() => {
        setMapData(data)
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    }, [data])

    let editData = (e, i) => {
        setProData(e)
        setIndex(i)
        setIsTrue(true)
    }

    let updateHandler = (e) => {
        e.preventDefault()
        dispatch(updateData({ name: proData.name, price: proData.price, index: index }))
        setIsTrue(false)
        setProData({ name: "", price: "" })
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>========================");
    }

    let deleteHandler = (e) => {
        console.log("🚀 ~ deleteHandler ~ e:", e)
        dispatch(deleteData(e))
    }

    return (
        <>
            <div className=' flex justify-center py-5' >
                <Form className='w-50 p-5 border border-black'>
                    <FormGroup>
                        <Label for="name">
                            Name
                        </Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Enter Name"
                            type="text"
                            value={proData.name}
                            onChange={(e) => setProData({ ...proData, name: e?.target?.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="price">
                            Price
                        </Label>
                        <Input
                            id="price"
                            name="price"
                            placeholder="Enter Price"
                            type="text"
                            value={proData.price}
                            onChange={(e) => setProData({ ...proData, price: e?.target?.value })}
                        />
                    </FormGroup>
                    {!isTrue ?
                        <Button Button onClick={submitHandler} className='w-100' color="primary" type="submit">
                            Submit
                        </Button> :
                        <Button onClick={updateHandler} className='w-100' color="primary" type="submit">
                            Update
                        </Button>}
                </Form>
            </div >
            <div>
                <div>
                    <Table
                    >
                        <thead>
                            <tr>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Price
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
                                mapData?.map((e, i) => {
                                    return <tr key={i}>
                                        <th scope="row">
                                            {e?.name}
                                        </th>
                                        <td>
                                            {e?.price}
                                        </td>
                                        <td>
                                            <Edit role='button' onClick={() => editData(e, i)} />
                                        </td>
                                        <td>
                                            <Trash role='button' onClick={() => deleteHandler(e)} />
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}
