import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function AccountModal({ accountModal, accountToggle, logoutHandler }) {
    let [logInData, setLogInData] = useState({})
    let [data, setData] = useState(true)
    console.log("🚀 ~ AccountModal ~ data:", data)

    console.log("🚀 ~ AccountModal ~ loginData:", logInData)

    useEffect(() => {
        let profileData = JSON.parse(localStorage.getItem("loginUser")) || {}
        console.log("🚀 ~ useEffect ~ profileData:", profileData)
        setLogInData(profileData)
        console.log(">>>>>>>>>>>>>>>>>>>>>");
        setData(!data)
        // window.location.reload()
    }, [])

    const logOut = () => {
        logoutHandler()
        accountToggle()
        setLogInData({})
        console.log("=====================>>>>>>>>");
        // alert("logout")
    }

    return (
        <>
            <div>
                <Modal isOpen={accountModal} toggle={accountToggle}>
                    <ModalHeader toggle={accountToggle}>User Data</ModalHeader>
                    <ModalBody>

                        <div >
                            <p>Email :{logInData.email}</p>
                            <p>Password :{logInData.password}</p>
                            <p>UserType :{logInData.userType}</p>
                        </div>

                    </ModalBody>
                    <ModalFooter>
                        <button className="bg-amber-500 hover:bg-yellow-600 h-10 rounded w-20 p-0" onClick={logOut}>
                            Logout
                        </button>
                    </ModalFooter>
                </Modal>
            </div>
            <h1>

            </h1>
        </>
    )
}
