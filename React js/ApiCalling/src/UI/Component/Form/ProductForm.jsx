import React, { useEffect, useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import Select from "react-select";

const options = [
    { value: 'formal', label: 'Formal' },
    { value: 'casual', label: 'Casual' },
    { value: 'shoes', label: 'Shoes' }
]

const colorArry = ["red", "green", "white", "black", "blue"]

const genderArry = ["male", "female", "other"]
const sizeArry = ["42", "43", "45"]

export default function ProductForm({ toggle, productData, updateHandler, submitHandler }) {
    let [addProduct, setAddProduct] = useState(productData)
    let [discountPercentage, setDiscountPercentage] = useState(0);

    useEffect(() => {
        setAddProduct(productData)
    }, [productData])

    const selectHandler = (selectedData, key) => {
        const updated = addProduct[key].includes(selectedData)
        if (updated) {
            let data = addProduct[key].filter((e) => e !== selectedData)
            setAddProduct({ ...addProduct, [key]: data })
        } else {
            setAddProduct({ ...addProduct, [key]: [...addProduct[key], selectedData] });
        }
    };

    const showCategory = (selected) => {

        let select = selected.map((e) => {
            return e.label
        })
        console.log("🚀 ~ select ~ select:", select)
        setAddProduct({ ...addProduct, category: select })
    }
    const submitData = () => {
        submitHandler(addProduct)
    }

    const updateData = () => {
        updateHandler(addProduct)
    }
    console.log("🚀 ~ updateData ~ addProduct:", addProduct)

    const handleDiscountChange = (e) => {
        setDiscountPercentage(e.target.value);
        setAddProduct({ ...addProduct, discountPercentage: e.target.value });
    };
    return (
        <>
            <Form>
                {
                    [{ key: "title", type: "text" }, { key: "description", type: "text" }, { key: "brand", type: "text" },
                    { key: "price", type: "number" }].map(({ key, type }) => {
                        return (
                            <FormGroup>
                                <Label for="exampleTitle" className='text-capitalize'>
                                    {key}
                                </Label>
                                <Input
                                    id="exampleTitle"
                                    value={addProduct[key]}
                                    placeholder={`Enter your ${key}`}
                                    type={type}
                                    onChange={(e) => { setAddProduct({ ...addProduct, [key]: e?.target?.value }) }}
                                />
                            </FormGroup>
                        )
                    })

                }
                <FormGroup>
                    <Label for="exampleSelect">Category</Label>
                    <Select options={options} isMulti
                        value={addProduct.category.map((e) => ({ label: e.toUpperCase().charAt(0) + e.slice(1), value: e }))}
                        onChange={(selected) => showCategory(selected)}
                    />
                </FormGroup>
                <FormGroup tag="fieldset">
                    <div className='d-flex'>
                        <Label>Gender</Label>
                        {
                            genderArry.map((e, i) => {
                                return (
                                    <div key={i}>
                                        <Input
                                            name="radio1"
                                            type="radio"
                                            // checked={addProduct?.genderArry?.includes(e)}
                                            onChange={() => { setAddProduct({ ...addProduct, gender: e }) }}
                                            className='ms-2 me-1'
                                        />
                                        <Label className='pe-2'>
                                            {e}
                                        </Label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </FormGroup>

                <FormGroup>
                    <Label for="exampleRange">Discount Percentage</Label>
                    <div className='d-flex'>
                        <Input
                            type="range"
                            name="range"
                            id="exampleRange"
                            min="0"
                            max="100"
                            value={discountPercentage}
                            onChange={handleDiscountChange}
                        />
                        <span className="ms-2">{discountPercentage}%</span>
                    </div>

                </FormGroup>

                <FormGroup>
                    <div>
                        <div>
                            <Label for="exampleSelect">
                                Color
                            </Label>
                        </div>
                        <div className='d-flex flex-wrap'>
                            {
                                colorArry.map((e, i) => {
                                    return (
                                        <div key={i} style={{ display: "flex", gap: "5px", alignItems: 'center', flexDirection: "row" }}>

                                            <Input
                                                id="exampleSelect"
                                                name="select"
                                                type="checkbox"
                                                checked={addProduct?.color?.includes(e)}
                                                onChange={() => { selectHandler(e, "color") }}
                                                className='ms-2 me-1'
                                            />

                                            <div style={{
                                                width: "15px",
                                                height: "15px",
                                                backgroundColor: e,
                                                borderRadius: "7.5px",
                                                border: "1px solid black"
                                            }}>
                                            </div>
                                            <lable className='text-capitalize pe-2'>{e}</lable>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </FormGroup>

                <FormGroup>
                    <div >
                        <Label for="exampleSelect">
                            Size
                        </Label>
                        <div className='d-flex'>
                            {
                                sizeArry.map((e, i) => {
                                    return (
                                        <div key={i}>
                                            <Input
                                                id="exampleSelect"
                                                name="select"
                                                type="checkbox"
                                                value="42"
                                                checked={addProduct.size.includes(e)}
                                                onChange={() => selectHandler(e, "size")}
                                                className='ms-2 me-1'
                                            />
                                            <Label className='pe-2'>{e}</Label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </FormGroup>

                <FormGroup>
                    <Label for="exampleTitle" className='text-capitalize'>
                        Thumbnail
                    </Label>
                    <Input
                        id="exampleTitle"
                        value={addProduct.thumbnail}
                        placeholder="Enter Url"
                        type="text"
                        onChange={(e) => { setAddProduct({ ...addProduct, thumbnail: e?.target?.value }) }}
                    />
                </FormGroup>

                <div className='d-flex gap-3 justify-content-end' >
                    <Button color="success" onClick={submitData}>
                        Submit
                    </Button>
                    <Button onClick={updateData}>Update</Button>
                    <Button color="danger" onClick={toggle}>
                        Cancel
                    </Button>
                </div>
            </Form>
        </>
    )
}
