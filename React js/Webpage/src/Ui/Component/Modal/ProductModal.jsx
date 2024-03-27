import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ProductForm from '../Form/ProductForm';


export default function ProductModal({ modal, toggle, productData, updateHandler, submitHandler, updatedData }) {
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} fullscreen className='w-50 m-auto'>
                <ModalHeader toggle={toggle}>Add Product</ModalHeader>
                <ModalBody>
                    <ProductForm updatedData={updatedData} updateHandler={updateHandler} productData={productData} toggle={toggle} submitHandler={submitHandler} />
                </ModalBody>
            </Modal>
        </div >
    );
}
