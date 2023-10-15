import React from 'react'
import citydata from "../../../../AdvanceJs/data.json"
import { Table } from "reactstrap";
export default function CityTable() {
    return (
        <>
            <Table striped>
                <thead>
                    <tr>
                        <th>
                            SR.NO
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
                        citydata.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <th>
                                        {i + 1}
                                    </th>
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
