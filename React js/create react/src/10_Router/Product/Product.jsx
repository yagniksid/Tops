import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Product() {
    const navigate = useNavigate()
    const redirect = (e) => {
        navigate(`/product/${e}`)
    }

    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <div style={{
                    width: "80%",
                    backgroundColor: "skyblue",
                    display: "flex",
                    justifyContent: "space-evenly",
                    padding: "20px"
                }}>
                    {[1, 2, 3, 4, 5].map((e, i) => {
                        return <div
                            role='button'
                            onClick={() => redirect(e)}
                            style={{
                                width: "100px",
                                border: "2px solid black",
                                borderRadius: "10px",
                                display: "flex",
                                justifyContent: "center", backgroundColor: "white"
                            }} key={i}>{e}</div>
                    })}
                </div>
            </div>
        </>
    )
}
