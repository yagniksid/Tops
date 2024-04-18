import React from 'react';
import { useSelector } from 'react-redux';
import "./Cart.css";
import { Table } from 'reactstrap';

export default function Cart() {
    let data = useSelector((store) => {
        return store.cartReducer.cart;
    });

    // Calculate subtotal
    const calculateSubtotal = () => {
        let subtotal = 0;
        data.forEach(({ productId, count }) => {
            subtotal += productId?.price * count;
        });
        return subtotal;
    };

    // Calculate tax
    const calculateTax = () => {
        const subtotal = calculateSubtotal();
        const taxRate = 0.05; // Assuming a tax rate of 5%
        return (subtotal * taxRate)?.toFixed(2);
    };

    // Calculate total
    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        const tax = calculateTax();
        return (subtotal + parseFloat(tax))?.toFixed(2);
    };

    console.log("🚀 ~ data ~ data:", data);

    return (
        <div>
            <h1>Your Cart</h1>
            <div>
                <div>
                    <div>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>
                                        Sr no
                                    </th>
                                    <th>
                                        Image
                                    </th>
                                    <th>
                                        Title
                                    </th>
                                    <th>
                                        Description
                                    </th>
                                    <th>
                                        Quantity
                                    </th>
                                    <th>
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map(({ productId, count }, i) => {
                                    return <tr key={i}>
                                        <th scope="row">
                                            {i + 1}
                                        </th>
                                        <th scope="row">
                                            <img style={{ width: "150px", aspectRatio: "3/2", margin: "auto" }} src={productId?.thumbnail} alt="" />
                                        </th>
                                        <td>
                                            {productId?.title}
                                        </td>
                                        <td>
                                            {productId?.description}
                                        </td>
                                        <td>
                                            {count}
                                        </td>
                                        <td>
                                            ₹{(productId?.price * count).toFixed(2)}
                                        </td>
                                    </tr>
                                })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className=" flex justify-between w-75">
                    <div className="">
                        <h6>Subtotal</h6>
                        <p id="subtotal">₹{calculateSubtotal().toFixed(2)}</p>
                    </div>
                    <div className=" ">
                        <h6>Tax</h6>
                        <p id="tax">₹{calculateTax()}</p>
                    </div>
                    <hr />
                    <div className=" d-inline">
                        <h5>Total</h5>
                        <p id="total">₹{calculateTotal()}</p>
                    </div>
                    <a href="#"><button id="btn-checkout" className="shopnow"><span>Checkout</span></button></a>
                </div>
            </div>
        </div>
    );
}
