import React, { useMemo } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function AccountModal({ accountModal, accountToggle, logoutHandler }) {

    const logInDAta = useMemo(() =>
        JSON.parse(localStorage.getItem("loginUser")) || {}
        , [])

    const logOut = () => {
        logoutHandler()
        accountToggle()
        console.log("=====================>>>>>>>>");
    }

    return (
        <>
            <div>
                <Modal isOpen={accountModal} toggle={accountToggle}>
                    <ModalHeader toggle={accountToggle}>User Data</ModalHeader>
                    <ModalBody>
                        <div >
                            <p>Email :{logInDAta.email}</p>
                            <p>Password :{logInDAta.password}</p>
                            <p>UserType :{logInDAta.userType}</p>
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
