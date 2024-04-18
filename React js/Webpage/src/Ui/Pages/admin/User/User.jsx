import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BE_URL } from '../../../../../config';
import { Table } from "reactstrap";

const User = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get(`${BE_URL}/user/getAll`)
            .then((res) => {
                let filteredData = res.data.data.filter((e) => e.userType !== "admin")
                setUserData(filteredData);
            })
            .catch((err) => {
                toast.error("Error occurred while fetching data", err);
            });
    }, []);

    return (
        <div className='border border-gray-800 mb-5'>
            <h2 className='px-3 py-4'>User Data</h2>
            <hr />
            <Table size='sm' striped>
                <thead>
                    <tr>
                        <th>Sr no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.userType}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default User;
