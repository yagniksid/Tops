import React, { useState } from 'react';
import { Form, Input } from 'reactstrap';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const initialData = {
    brand: "Titan",
    price: "",
    discountPercentage: "",
    category: [],
    color: [],
    size: [],
    availableStock: ""
};

export default function Filter({ isOpen }) {
    const [filter, setFilter] = useState(initialData);
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilter({ ...filter, [name]: value });
    };

    return (
        <div className={` sticky-top bg-white z-10 transition-all duration-500 ${isOpen ? 'w-64' : 'w-0'}`} style={{ top: "180px" }}>
            {
                isOpen &&
                <div className="ps-3">



                    <Form>
                        <Input
                            type="range"
                            name="price"
                            value={filter.price}
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                            placeholder="Price"
                        />
                        <Input
                            type="text"
                            name="brand"
                            value={filter.brand}
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                            placeholder="Brand"
                        />
                        <Input
                            type="number"
                            name="discountPercentage"
                            value={filter.discountPercentage}
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                            placeholder="Discount Percentage"
                        />
                        <Input
                            type="text"
                            name="category"
                            value={filter.category.join(', ')}
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                            placeholder="Category"
                        />
                        <Input
                            type="text"
                            name="color"
                            value={filter.color.join(', ')}
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                            placeholder="Color"
                        />
                        <Input
                            type="text"
                            name="size"
                            value={filter.size.join(', ')}
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                            placeholder="Size"
                        />
                        <Input
                            type="text"
                            name="availableStock"
                            value={filter.availableStock}
                            onChange={handleChange}
                            className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"
                            placeholder="Availablestock"
                        />
                    </Form>
                </div>
            }
        </div >
    );
}
