import React from 'react'
import data from "../../../../AdvanceJs/data.json"
import { Table } from "reactstrap"
export default function CityTable() {
    return (
        <>
            <Table>
                <thead>
                    <tr className="table-success">
                        <th>
                            SR.
                        </th>
                        <th>
                            CITY
                        </th>
                        <th>
                            STATE
                        </th>
                        <th>
                            POPULATION
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((e, i) => {
                            return (
                                <tr key={i} className="table-secondary">
                                    <td>
                                        {i + 1}
                                    </td>
                                    <td>
                                        {e.city}
                                    </td>
                                    <td>
                                        {e.state_name}
                                    </td>
                                    <td>
                                        {e.population}
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
