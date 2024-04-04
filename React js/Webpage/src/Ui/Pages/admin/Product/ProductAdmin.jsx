import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../../../Component/Header/Header';
import ProductModal from '../../../Component/Modal/ProductModal';
import Swal from 'sweetalert2';
import PreviewModal from '../../../Component/Modal/PreviewModal';
import { useSelector } from 'react-redux';
import TableData from './TableData';

const initialData = {
    title: "",
    description: "",
    brand: "",
    category: [],
    price: "",
    gender: "",
    discountPercentage: "0",
    color: [],
    size: [],
    thumbnail: ""
}

export default function ProductAdmin() {
    const [modal, setModal] = useState(false);
    const [previewModal, setPreviewModal] = useState(false);
    let [fetchFlag, setFetchFlag] = useState(true)
    let [data, setData] = useState([])
    let [productData, setProductData] = useState(initialData)
    let [updateMode, setUpdateMode] = useState(false)
    let [paginate, setPaginate] = useState({
        limit: 10,
        page: 0,
        totalProduct: 0
    })

    const resetForm = () => {
        setProductData(initialData)
        toggle()
    }

    const toggle = () => setModal(!modal);
    const previewToggle = () => setPreviewModal(!previewModal);

    const reFetchData = () => setFetchFlag(!fetchFlag)


    let searchData = useSelector((store) => {
        return store.searchReducer.search
    })
    useEffect(() => {
        console.log("🚀 ~ searchData ~ searchData:", searchData)
        axios({
            method: 'get',
            url: 'http://localhost:9999/product/getAllPaginate',
            params: {
                limit: paginate.limit,
                page: paginate.page,
                search: searchData
            }
        })
            .then((res) => {
                // console.log("----res--->", res.data);
                setData(res?.data?.data);
                setPaginate({ ...paginate, totalProduct: res?.data?.count });
            })
            .catch((err) => {
                console.log("-------->", err);
            });
    }, [fetchFlag, searchData]);


    const submitHandler = (data) => {
        if (Object.values(data).some(value => value === "")) {
            toast.warn("Please add product first")
            toggle()
        }
        else {
            axios({
                method: "post",
                url: `http://localhost:9999/product/create`,
                data: data,
            })
                .then((res) => {
                    console.log("-----------  res----------->", res);
                    toast.success("Product added");
                    reFetchData()
                    setProductData(initialData)
                    toggle();
                })
                .catch((err) => {
                    console.log("-------err.response.error------>", err.response);
                });
            reFetchData()
            toggle()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Product added successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    const updateHandler = (newData) => {
        console.log("========>>>", newData)
        axios({
            method: "put",
            url: `http://localhost:9999/product/update/${newData?._id}`,
            data: newData,
        })
            .then((res) => {
                reFetchData()
                setProductData(initialData)
                toggle();
            })
            .catch((err) => {
                toast.error(err.response.error);
            });
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product updated",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const deleteHandler = (id) => {
        console.log("---->", id)
        Swal.fire({
            title: "Are you sure?",
            text: "You wont to delete.... !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                axios({
                    method: 'delete',
                    url: `http://localhost:9999/product/delete/${id}`
                }).then((res) => {
                    if (data.length === 1) {
                        console.log("🚀 ~ data.length:", data.length)
                        const newPage = paginate.page - 1;
                        setPaginate({ ...paginate, page: newPage });
                        reFetchData();
                    } else {
                        reFetchData();
                    }
                }).catch((err) => {
                    console.log("-------->", err);
                    alert("error")
                });
            }
        })
    }




    const editHandler = (data) => {
        // console.log("++++++++++++++++++++++++++++++>>>>>>>>>>>>>>>>>>>>>", data)
        setProductData(data)
        toggle()
    }

    return (
        <>
            <ProductModal setUpdateMode={setUpdateMode} updateMode={updateMode} productData={productData} modal={modal} toggle={toggle} updateHandler={updateHandler} submitHandler={submitHandler} />
            <TableData updateMode={updateMode} setUpdateMode={setUpdateMode} toggle={toggle} reFetchData={reFetchData} setPaginate={setPaginate} paginate={paginate} productData={data} editHandler={editHandler} previewToggle={previewToggle} deleteHandler={deleteHandler} resetForm={resetForm} initialData={productData} />
            <PreviewModal modal={previewModal} toggle={previewToggle} />
        </>
    );
}
