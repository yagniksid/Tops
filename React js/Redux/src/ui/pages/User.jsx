import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Table } from 'reactstrap'
import { getAllUser } from '../../Redux/feature/user/user'
import { useNavigate } from 'react-router-dom'

export default function User() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllUser());
    }, [dispatch]);

    const redirect = (id) => {
        navigate(`/user/${id}`);
    }

    const userData = useSelector((store) => store.userReducer.user);
    console.log("🚀 ~ userData ~ userData:", userData);

    return (
        <div className='mt-5 d-flex justify-content-center' >
            <Table hover="true" bordered="true" striped="true" >
                <thead>
                    <tr>
                        <th>Sr no</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone no</th>
                        <th>Adress</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((e, i) => (
                        <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>{e.username}</td>
                            <td>{e.email}</td>
                            <td>{e.phone}</td>
                            <td>City :  {e.address.city}</td>
                            <td>
                                <Button onClick={() => redirect(e.id)}>Show</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
