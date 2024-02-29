import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Button, Table } from 'reactstrap'

export default function SingleProduct() {
    let [data, setData] = useState({})
    console.log("🚀 ~ SingleProduct ~ data:", data)
    const urlData = useParams()
    console.log("🚀 ~ SingleProduct ~ urlData:", urlData)
    let navigate = useNavigate()

    useEffect(() => {
        axios({
            method: "get",
            url: `https://fakestoreapi.com/users/${urlData.id}`
        }).then((res) => {
            console.log("🚀 ~ useEffect ~ res:", res.data)
            setData(res.data)
        }).catch((err) => {
            console.log("🚀 ~ useEffect ~ err:", err)
        })
    }, [])

    return (
        <>
            <Table hover="true" bordered="true" striped="true" className='mt-5'>
                <thead>
                    <tr>
                        <th>
                            User Name
                        </th>
                        <th>
                            Email
                        </th>
                        <th>
                            Phone
                        </th>
                        <th>
                            Adress
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">
                            {data.username}
                        </th>
                        <td>
                            {data.email}
                        </td>
                        <td>
                            {data.phone}
                        </td>

                        <td>
                            {data.address && (
                                <>
                                    City : {data.address.city}
                                </>
                            )}
                        </td>
                    </tr>
                </tbody>
            </Table>
            <div className='d-flex justify-content-center mt-5'>
                <Button color='success' onClick={() => navigate("/user")}>Go Back</Button>
            </div>

        </>
    )
}
