import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Product() {
  let [allData, setAllData] = useState([])
  const navigate = useNavigate([])
  const redirect = (e) => {
    navigate(`/product2/${e}`)
  }
  useEffect(() => {
    axios({
      method: "get",
      url: 'https://fakestoreapi.com/products'
    }).then((res) => {
      console.log("----res--->", res.data);
      setAllData(res.data)
    }).catch((err) => {
      console.log("---err--->", err);
    })
  }, [])
  return (
    <>
      <div className='d-flex justify-content-center '>
        <div className='d-flex justify-content-evenly flex-wrap' style={{
          width: "100vw",
          backgroundColor: "lightblue",
          padding: "20px"
        }}>
          {allData.map((e, i) => {
            return <div
              role='button'
              onClick={() => redirect(e.id)}
              style={{
                width: "200px",
                backgroundColor: "white"
              }} className='border border-dark rounded-3 d-flex justify-content-center align-items-center ' key={i}>
              {e.id},
              <img style={{
                width: "100px",
                height: "100px"
              }} src={e.image} alt="" />
            </div>
          })}
        </div>
      </div>
    </>
  )
}

// {[1, 2, 3, 4, 5, 6].map((e, i) => {
//   return <div
//     role='button'
//     onClick={() => redirect(e)}
//     style={{
//       width: "100px",
//       backgroundColor: "white"
//     }} className='border border-dark rounded-3 d-flex justify-content-center align-items-center ' key={i}>{e}</div>
// })}