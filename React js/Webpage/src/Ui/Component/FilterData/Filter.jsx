import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BE_URL } from '../../../../config'
import { toast } from 'react-toastify'

export default function Filter() {
    let [data, setData] = useState([])
    useEffect(() => {
        axios({
            method: "get",
            url: `${BE_URL}/product/getAll`,
            params: {

            }.then((res) => {
                console.log("🚀 ~ useEffect ~ res:", res)

            }).catch((err) => {
                console.log("🚀 ~ useEffect ~ err:", err)
                toast.error("Error occured while fetching data")
            })
        })
    })

    return (
        <div>

        </div>
    )
}
