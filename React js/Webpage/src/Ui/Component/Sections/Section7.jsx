import React, { useState } from 'react'
import LoginModal from '../Modal/LoginModal';
import RegisterModal from '../Modal/RegisterModal';


export default function Section7() {
    const [loginModal, setLoginModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);
    const loginToggle = () => setLoginModal(!loginModal);
    const registerToggle = () => setRegisterModal(!registerModal);


    return (
        <>
            <div style={{ backgroundColor: "rgba(221, 162, 67, .05)" }} className='mb-14 mt-7'>
                <h2 className="font-normal text-center pt-20 pb-4">LOGIN FOR THE BEST EXPERIENCE
                </h2>
                <div className='flex justify-center pb-4'>
                    <button onClick={loginToggle} className="bg-amber-500 hover:bg-yellow-600 h-12 w-36 text-sm font-medium">
                        LOGIN NOW
                    </button>
                </div>
                <div className='pb-20 mb-0 flex justify-center'>
                    <p role='button' onClick={registerToggle} className='underline underline-offset-2 hover:no-underline hover:text-amber-600 '>Create An Account</p>
                </div>
            </div>
            <LoginModal toggle={loginToggle} modal={loginModal} registerToggle={registerToggle} />
            <RegisterModal toggle={registerToggle} modal={registerModal} login={loginToggle} />
        </>
    )

}
