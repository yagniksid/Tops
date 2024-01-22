import React, { useEffect, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import ProductForm from '../Form/ProductForm';


export default function ProductModal({ modal, toggle, productData, updateHandler,submitHandler }) {
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} fullscreen className='w-50 m-auto'>
                <ModalHeader toggle={toggle}>Add Product</ModalHeader>
                <ModalBody>
                    <ProductForm updateHandler={updateHandler} productData={productData} toggle={toggle} submitHandler={submitHandler} />
                </ModalBody>
            </Modal>
        </div >
    );
}
