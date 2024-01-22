import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table } from 'reactstrap';
import "./Product.css"
import ProductModal from '../../Component/Modal/ProductModal';
import TableData from '../TableData';

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

export default function Product() {
  const [modal, setModal] = useState(false);
  let [fetchFlag, setFetchFlag] = useState(true)
  let [data, setData] = useState([])
  let [productData, setProductData] = useState(initialData)


  const toggle = () => setModal(!modal);
  const reFetchData = () => setFetchFlag(!fetchFlag)

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:9999/product/getAll',
    })
      .then((res) => {
        console.log("------->", res.data);
        setData(res?.data?.data);
      })
      .catch((err) => {
        console.log("-------->", err);
      });
  }, [fetchFlag]);


  const submitHandler = (data) => {
    console.log("🚀 ~ submitHandler ~ data:", data)
    console.log("========>>>", data)
    axios({
      method: "post",
      url: `http://localhost:9999/product/create`,
      data: data,
    })
      .then((res) => {
        console.log("-----------  res----------->", res);
        toast.success("product added");
        setAddProduct(initialData);
        reFetchData()
        toggle();
      })
      .catch((err) => {
        console.log(
          "-----------  err.response.error----------->",
          err.response.error
        );
        toast.error(err.response.error);
      });
      reFetchData()
    toggle()
  }

  const updateHandler = (newData) => {
    console.log("========>>>", newData)
    axios({
      method: "put",
      url: `http://localhost:9999/product/update/${newData?._id}`,
      data: newData,
    })
      .then((res) => {
        console.log("-----------  res----------->", res);
        alert("product added");
        reFetchData()
        toggle();
      })
      .catch((err) => {
        console.log(
          "-----------  err.response.error----------->",
          err.response.error
        );
        toast.error(err.response.error);
      });
  }

  const deleteHandler = (id) => {
    console.log("---->", id)
    axios({
      method: 'delete',
      url: `http://localhost:9999/product/delete/${id}`
    })
      .then((res) => {
        alert(" Product Deleted....!")
        reFetchData()
      })
      .catch((err) => {
        console.log("-------->", err);
        alert("error")
      });
  }

  const editHandler = (data) => {
    console.log("data", data)
    setProductData(data)
    toggle()
  }

  return (
    <>
      <ProductModal productData={productData} modal={modal} toggle={toggle} updateHandler={updateHandler} submitHandler={submitHandler} />
      <TableData toggle={toggle} reFetchData={reFetchData} productData={data} editHandler={editHandler} deleteHandler={deleteHandler} />
    </>
  );
}
