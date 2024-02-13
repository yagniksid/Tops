import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, FormGroup, Input, Label, Table } from 'reactstrap'

export default function About() {
    const [userData, setUserData] = useState([])
    const [userType, setUserType] = useState("All")
    const [search, setSearch] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("regData")) || []
        console.log("🚀 ~ useEffect ~ data:", data)
        let filteredData = data;

        if (userType && userType !== "All") {
            filteredData = filteredData.filter((e) => e.userType === userType)
            setUserData(filteredData)
        }
        if (search) {
            console.log("search")
            filteredData = filteredData.filter((e) =>
                e.email.toLowerCase().includes(search.toLowerCase())
            )
        }
        setUserData(filteredData)

    }, [userType, search])

    return (
        <>
            <div className='d-flex justify-content-end pt-5 pe-5'>
                <FormGroup className='w-25'>
                    <Label for="userType">Search User Type</Label>
                    <Input
                        type="select"
                        name="userType"
                        id="userType"
                        value={userType}
                        onChange={(e) =>
                            setUserType(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
                        }
                        style={{ boxShadow: "none" }}
                    >
                        <option>All</option>
                        <option>User</option>
                        <option>Admin</option>
                        <option>Employee</option>
                    </Input>
                </FormGroup>
            </div>
            <div className='d-flex justify-content-end pb-2 pe-5'>
                <FormGroup className='w-25'>
                    <Label>Search Here</Label>
                    <Input
                        type="text"
                        name="search"
                        id="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{ boxShadow: "none" }}
                    />
                </FormGroup>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th>Sr no</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>UserType</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((e, i) => (
                        <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>{e.email}</td>
                            <td>{e.password}</td>
                            <td>{e.userType}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className='d-flex justify-content-center'>
                <Button style={{
                    color: " white",
                    backgroundColor: "#5383d3",
                    fontWeight: "600",
                    margin: "20px"
                }} onClick={() => navigate("/")}>Go to Homepage</Button>
            </div>
        </>
    )
}
