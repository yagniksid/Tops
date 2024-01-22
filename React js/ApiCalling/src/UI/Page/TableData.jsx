import React, { useEffect, useState } from 'react'
import { Edit, Trash2Icon } from "lucide-react";
import { Button, Table } from 'reactstrap';
import axios from 'axios';

export default function TableData({ toggle, productData, editHandler, deleteHandler }) {

    let [data, setData] = useState(productData)

    useEffect(() => {
        setData(productData)
    }, [productData])

    return (
        <>
            <div className='d-flex justify-content-end pb-3 pe-5'>
                <Button style={{ backgroundColor: "#6fcdff", color: "black" }} onClick={toggle}>Add Product</Button>
            </div>
            {data.length === 0 ? <span style={{ fontWeight: "bold", fontSize: "25px", display: "flex", width: "100%", justifyContent: "center", marginBottom: "20px" }}>Data Not Found</span> : (<div div className='p-5'>

                <Table size='sm' style={{ width: "100%" }}>
                    <thead>
                        <tr >
                            <th>Sr No.</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Brand</th>
                            <th>Gender</th>
                            <th>Price</th>
                            <th>Discount
                                Percentage</th>
                            <th>Category</th>
                            <th>Color</th>
                            <th>Size</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody >
                        {data.map((e, i) => (
                            <tr key={e._id}>
                                <th scope="row">{i + 1}</th>
                                <td><img style={{ width: "100%", aspectRatio: "3/2" }} src={e.thumbnail} alt="" /></td>
                                <td>{e.title}</td>
                                <td><div role='button' className='text'>{e.description}</div></td>
                                <td>{e.brand}</td>
                                <td>{e.gender}</td>
                                <td>{e.price}</td>
                                <td >{e.discountPercentage}</td>
                                <td>{e.category}</td>
                                <td>{e.color.join(",")}</td>
                                <td>{e.size.join(",")}</td>
                                <th><Edit onClick={() => editHandler(e)} color='red' role='button' /></th>
                                <th><Trash2Icon role='button' onClick={() => deleteHandler(e._id)} color='red' /></th>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>)
            }
        </>
    )
}
