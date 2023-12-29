import React, { useState, useEffect } from 'react';
import { Button, Table } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

export default function Admin() {
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate()
    let [showIndex, setShowIndex] = useState([]);

    const registerHandler = () => {
        navigate("/newuser")
    }

    useEffect(() => {
        const storeData = JSON.parse(localStorage.getItem('newUser')) || [];
        const filteredData = storeData.filter((e) => e.userType !== "Admin")
        setUserData(filteredData);
    }, []);

    const showPasswordHandler = (i) => {
        if (showIndex.includes(i)) {
            setShowIndex(showIndex.filter((index) => index !== i));
        } else {
            setShowIndex([...showIndex, i])
        }
    }
    return (
        <>
            <div className='d-flex justify-content-end pb-4 mt-4'>
                {
                    (<Button style={{ backgroundColor: "#ffb217", color: "white", fontWeight: "bold", border: "1px solid gray" }} onClick={registerHandler}>Register new user</Button>)
                }
            </div>
            <div>
                {userData.length === 0 ? ("data not found") :
                    (<Table
                    >
                        <thead>
                            <tr className="table-danger">
                                <th>
                                    SR NO.
                                </th>
                                <th>
                                    User name
                                </th>
                                <th>
                                    password
                                </th>

                                <th>
                                    Usertype
                                </th>
                                <th>
                                    Show Password
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((e, i) => {
                                return (
                                    <tr className="table-success" key={i}>
                                        <th scope="row">
                                            {i + 1}
                                        </th>
                                        <td>
                                            {e.email}
                                        </td>
                                        <td>
                                            {showIndex.includes(i) ? e.password : "*******"}
                                        </td>
                                        <td>
                                            {e.userType}
                                        </td>
                                        <td>
                                            {showIndex.includes(i) ? <EyeOff color="#3d9de6"
                                                role='button' onClick={() => showPasswordHandler(i)} /> : <Eye color='#3d9de6' role='button' onClick={() => showPasswordHandler(i)} />}
                                        </td>
                                    </tr>
                                )
                            })
                            }

                        </tbody>
                    </Table>)
                }
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <Button
                        style={{
                            backgroundColor: '#ffb217',
                            marginTop: '20px',
                            marginBottom: '40px',
                        }}
                        onClick={() => navigate(-1)}
                    >
                        Go back
                    </Button>
                </div>
            </div>
        </>
    );
};

