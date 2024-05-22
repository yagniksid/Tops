import React from 'react'
import { Table } from "reactstrap";
import { Edit, Trash } from "lucide-react";

export default function TableData({ userName, editData, deleteData }) {

    // const edithHandler = (i, e) => {
    //     editData(i, e)
    // }

    // const deleteHandler = (i) => {
    //     deleteData(i)
    // }

    return (
        <div>
            <Table striped>
                <thead>
                    <tr className='text-center'>
                        <th>
                            Sr No.
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
                    {
                        userName.map((e, i) => {
                            return (
                                <tr className='text-center' key={i}>
                                    <th scope="row">
                                        {i + 1}
                                    </th>
                                    <td>
                                        {e.name}
                                    </td>
                                    <td>
                                        <div className='flex justify-center'>
                                            <Edit onClick={() => editData(i, e)} />
                                        </div>
                                    </td>
                                    <td>
                                        <div className='flex justify-center'>
                                            <Trash onClick={() => deleteData(i)} />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>

        </div>
    )
}
