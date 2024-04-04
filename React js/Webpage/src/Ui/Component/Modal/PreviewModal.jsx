import React from 'react'
import { useCookies } from 'react-cookie'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'

export default function PreviewModal({ modal, toggle }) {
    let [cookie, setCookie] = useCookies(["previewData"])
    return (
        <>
            <div>
                <Modal isOpen={modal} toggle={toggle} size='lg'>
                    <ModalHeader toggle={toggle}>Product Preview</ModalHeader>
                    <ModalBody>
                        <div>
                            <div className='flex justify-center items-center'>
                                <img src={cookie.previewData?.thumbnail} className='w-96 h-96 m-7' alt="Product Thumbnail" />
                            </div>
                            <hr />
                            <p className='text-lg'> <span className='font-medium text-xl'>Title</span> : {cookie?.previewData?.title}</p>
                            <hr />
                            <p className='text-lg'> <span className='font-medium text-xl'> Description </span> : {cookie?.previewData?.description}</p>
                            <hr />
                            <p className='text-lg'> <span className='font-medium text-xl'> Gender </span> : {cookie?.previewData?.gender}</p>
                            <hr />
                            <p className='text-lg'> <span className='font-medium text-xl'> Price </span> : {cookie?.previewData?.price}</p>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        </>
    )
}
