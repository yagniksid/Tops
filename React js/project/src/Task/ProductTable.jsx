import React from 'react'
import productdata from "../../../Product.json"
import { Table } from "reactstrap"
export default function ProductTable() {
    return (
        <>
            <Table dark>
                <thead>
                    <tr>
                        <th>SR NO.</th>
                        <th>
                            TITLE
                        </th>
                        <th>
                            BRAND
                        </th>
                        <th>
                            COLOR
                        </th>
                        <th>
                            CATAGORY
                        </th>
                        <th>
                            SIZE
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productdata.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        {i + 1}
                                    </td>
                                    <td>
                                        {e.title}
                                    </td>
                                    <td>
                                        {e.brand}
                                    </td>
                                    <td>
                                        {e.color[1]}
                                    </td>
                                    <td>
                                        {e.category[0]}
                                    </td>
                                    <td>
                                        {e.size[e.size.length - 1]}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}
