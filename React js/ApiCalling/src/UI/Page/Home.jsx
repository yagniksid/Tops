import React from 'react'
import reactimg1 from "./img.jpg"

export default function Home() {
  return (
    <div className='m-3'>
      <h1>
        <img style={{ width: "100%", borderRadius: "20px", aspectRatio: "4/1.5" }} src={reactimg1} alt="" />
      </h1>
    </div>
  )
}
