import { Edit, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { FormGroup, Input, Table } from 'reactstrap'

export default function UserTable({ data, editData, deleteHandler, setData }) {
    let [search, setSearch] = useState("")
    console.log("🚀 ~ UserTable ~ search:", search)

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("user")) || []
        let searchedData = data.filter((e) => e.uName.firstName.toLowerCase().includes(search.toLowerCase()))
        setData(searchedData)
    }, [search])

    return (
        <>
            <div>
                <FormGroup className='flex justify-end '>
                    <Input
                        className='w-25'
                        value={search}
                        onChange={(e) => setSearch(e?.target?.value)}
                    />
                </FormGroup>
            </div>
            <div>
                {
                    data.length >= 1 ?
                        <Table
                        >
                            <thead>
                                <tr>
                                    <th>
                                        sr no.
                                    </th>
                                    <th>
                                        First Name
                                    </th>
                                    <th>
                                        Last Name
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                    <th>
                                        Gender
                                    </th>
                                    <th>
                                        Hobby
                                    </th>
                                    <th>
                                        Color
                                    </th>
                                    <th>
                                        Password
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
                                    data?.map((e, i) => {
                                        return (
                                            <tr key={i}>
                                                <th >
                                                    {i + 1}
                                                </th>
                                                <td>
                                                    {e?.uName?.firstName}
                                                </td>
                                                <td>
                                                    {e?.uName?.lastName}
                                                </td>
                                                <td>
                                                    {e.email}
                                                </td>
                                                <td>
                                                    {e.gender}
                                                </td>
                                                <td>
                                                    {e.hobby}
                                                </td>
                                                <td>
                                                    {e.color}
                                                </td>
                                                <td>
                                                    {e.password}
                                                </td>
                                                <td>
                                                    <Edit onClick={() => editData(e, i)} />
                                                </td>
                                                <td>
                                                    <Trash onClick={() => deleteHandler(e)} />
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </Table> :
                        <h1>Data Not Found</h1>
                }
            </div>
        </>

    )
}
