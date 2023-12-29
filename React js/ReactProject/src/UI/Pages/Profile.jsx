import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap'

export default function Profile() {
    let [profileData, setProfileData] = useState([])

    useEffect(() => {
        const normalData = JSON.parse(localStorage.getItem("loginUser")) || []
        setProfileData([normalData])
    }, [])

    return (
        <>
            <div className='d-flex justify-content-center align-items-center pt-5 pb-5 '>
                <Table className='w-50 ' bordered>
                    <thead>
                        <tr className="table-info">
                            <th>
                                Email
                            </th>
                            <th>
                                Password
                            </th>
                            <th>
                                Usertype
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {profileData.map((e, i) => {
                            return (
                                <tr className="table-warning" key={i}>
                                    <td scope="row">
                                        {e.email}
                                    </td>
                                    <td>
                                        {e.password}
                                    </td>
                                    <td>
                                        {e.userType}
                                    </td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </Table >
            </div >
        </>
    )
}

