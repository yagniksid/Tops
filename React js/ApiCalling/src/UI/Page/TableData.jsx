import React, { useEffect, useState } from 'react'
import { Edit, Trash2Icon } from "lucide-react";
import { Button, Table } from 'reactstrap';

let sizeArray = ["41", "42", "43", "44", "45"]
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
                            <th>Discount per</th>
                            <th>Final price</th>
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
                                {/* <td className='d-flex gap-3' style={{ borderBottomWidth: "0px" }}>
                                    {e.discountPercentage > 0 ? (
                                        <>
                                            <div>{e.price}</div>
                                            <div>{e.discountPercentage}%</div>
                                            <div style={{ textAlign: "center", backgroundColor: "green", height: "25px", width: "auto", borderRadius: "30px", padding: "0px 5px" }}>{(e.price * (e.discountPercentage / 100)).toFixed(2)}</div>
                                        </>
                                    ) : (
                                        <div>{e.price} <span style={{ backgroundColor: "red", borderRadius: "20px", padding: "0px 10px" }}>- No Discount</span></div>
                                    )}
                                </td> */}

                                <td>{e.price}</td>
                                <td>
                                    {e.discountPercentage > 0 ? (<div>{e.discountPercentage}%</div>) : ("No Discount")
                                    }
                                </td>
                                <td>
                                    {e.discountPercentage > 0 ? (
                                        <div>{(e.price * (e.discountPercentage / 100)).toFixed(2)}</div>
                                    ) : (
                                        <div>{e.price}</div>
                                    )}
                                </td>
                                <td>{e.category}</td>
                                <td>
                                    <div className='d-flex align-items-center gap-2'>
                                        {e.color.map((e, i) => (
                                            <>
                                                <div
                                                    key={i}
                                                    style={{
                                                        width: '15px',
                                                        height: '15px',
                                                        backgroundColor: e,
                                                        borderRadius: '50%',
                                                        border: '1px solid black',
                                                    }}

                                                ></div>
                                            </>
                                        ))}
                                    </div>
                                    {e.color.join(",")}
                                </td>
                                <td className='d-flex' style={{ borderBottomWidth: "0px" }}>
                                    {sizeArray.map((ele, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                padding: "2px 6px",
                                                color: e.size.find((e) => e === ele) ? "black" : "lightgray",
                                            }}
                                        >
                                            {ele}
                                        </div>
                                    ))}
                                </td>
                                <th><Edit onClick={() => editHandler(e)} color='red' role='button' /></th>
                                <th><Trash2Icon role='button' onClick={() => deleteHandler(e._id)} color='red' /></th>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div >)
            }
        </>
    )
}
