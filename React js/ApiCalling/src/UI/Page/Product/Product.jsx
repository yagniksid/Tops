import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Product.css"
import ProductModal from '../../Component/Modal/ProductModal';
import TableData from '../TableData';
import Swal from "sweetalert2"

const initialData = {
  title: "",
  description: "",
  brand: "",
  category: [],
  price: "",
  gender: "",
  discountPercentage: "",
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
    if (Object.values(data).some(value => value === "")) {
      toast.warn("Please add product first")
      toggle()
    }
    // if (data.title === "") {
    //   toast.warn("Please add product first")
    //   toggle()
    // }
    else {
      axios({
        method: "post",
        url: `http://localhost:9999/product/create`,
        data: data,
      })
        .then((res) => {
          console.log("-----------  res----------->", res);
          toast.success("Product added");
          // setAddProduct(initialData);
          reFetchData()
          toggle();
        })
        .catch((err) => {
          console.log(
            "-----------  err.response.error----------->",
            err.response.error
          );
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
        console.log("-----------  res----------->", res);
        reFetchData()
        setProductData(initialData)
        toggle();
      })
      .catch((err) => {
        console.log(
          "-----------  err.response.error----------->",
          err.response.error
        );
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
        })
          .then((res) => {
            reFetchData()
          })
          .catch((err) => {
            console.log("-------->", err);
            alert("error")
          });
      }
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
