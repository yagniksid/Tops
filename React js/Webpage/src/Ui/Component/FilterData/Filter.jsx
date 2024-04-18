import React, { useState } from 'react';
import { Button } from "reactstrap";

import { Input, Label, UncontrolledAccordion } from 'reactstrap';
import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import Select from "react-select";
import Slider from 'rc-slider';



const categories = [
    { value: 'Formal', label: 'Formal' },
    { value: 'Sport', label: 'Sport' },
    { value: 'Casual', label: 'Casual' },
    { value: 'Luxury', label: 'Luxury' },
    { value: 'Classic', label: 'Classic' },
    { value: 'Smartwatch', label: 'Smartwatch' },
    { value: 'Fashion', label: 'Fashion' }
];

const colorArry = ["Black", "Blue", "Pink", "Purple", "White", "Gold", "Silver", "Diamond", "Red", "Green", "Brown"]

const sizeArray = ["25mm", "26mm", "27mm", "28mm", "29mm", "30mm", "37mm", "38mm", "39mm"]

export default function Filter({ filter, setFilter, isOpen }) {

    let [showPrice, setShowPrice] = useState(false)
    const priceShow = () => {
        setShowPrice(!showPrice)
    }


    const handleCategoryChange = (selectedOption) => {
        setFilter({ ...filter, category: selectedOption.map(option => option.value) });
    };

    const selectHandler = (selectedData, key) => {
        const updated = filter[key]?.includes(selectedData)
        if (updated) {
            let data = filter[key]?.filter((e) => e !== selectedData)
            setFilter({ ...filter, [key]: data })
        } else {
            setFilter({ ...filter, [key]: [...filter[key], selectedData] });
        }
    };

    const priceSelector = (selectedData) => {
        console.log("🚀 ~ priceSelector ~ selectedData:", selectedData)
        const priceRanges = {
            "500 to 1000": { gt: 500, lt: 1000 },
            "1000 to 2000": { gt: 1000, lt: 2000 },
            "2000 to 3000": { gt: 2000, lt: 3000 },
            "3000 to 4000": { gt: 3000, lt: 4000 },
            "4000 to 5500": { gt: 4000, lt: 5500 }
        };
        if (filter?.price?.gt === priceRanges[selectedData]?.gt && filter?.price?.lt === priceRanges[selectedData]?.lt) {
            setFilter({ ...filter, price: { gt: null, lt: null } });
        } else {
            setFilter({ ...filter, price: priceRanges[selectedData] });
        }

    }
    const DiscountSelector = (selectedData) => {
        console.log("🚀 ~ priceSelector ~ selectedData:", selectedData)
        const discountRange = {
            "0 to 10": { gt: 0, lt: 10 },
            "10 to 20": { gt: 10, lt: 20 },
            "20 to 30": { gt: 20, lt: 30 },
            "30 to 40": { gt: 30, lt: 40 },
            "40 to 50": { gt: 40, lt: 50 }
        };
        if (filter?.discountPercentage?.gt === discountRange[selectedData]?.gt && filter?.discountPercentage?.lt === discountRange[selectedData]?.lt) {
            setFilter({ ...filter, discountPercentage: { gt: null, lt: null } });
        } else {
            setFilter({ ...filter, discountPercentage: discountRange[selectedData] });
        }

    }




    return (
        <div className={` sticky-top bg-white transition-all duration-500 overflow-y-scroll ${isOpen ? 'w-80' : 'w-0'}`} style={{ top: "180px", height: "500px", zIndex: "1" }}>
            {
                isOpen &&
                <div className="ps-3">

                    <UncontrolledAccordion
                        defaultOpen={[
                            '1',
                            '2'
                        ]}
                        stayOpen
                    >
                        <AccordionItem>
                            <AccordionHeader targetId="1">
                                Price
                            </AccordionHeader>
                            <AccordionBody accordionId="1">
                                <div>
                                    <Input
                                        name="500-1000"
                                        type="checkbox"
                                        checked={filter?.price?.gt === 500 && filter?.price?.lt === 1000}
                                        onChange={() => priceSelector("500 to 1000")}
                                        className="shadow-none ms-2 me-1 text-xl"
                                    />
                                    <Label>500 to 1000</Label>
                                </div>
                                <div>
                                    <Input
                                        name="1000-2000"
                                        type="checkbox"
                                        onChange={() => priceSelector("1000 to 2000")}
                                        checked={filter?.price?.gt === 1000 && filter?.price?.lt === 2000}
                                        className="shadow-none ms-2 me-1 text-xl"

                                    />
                                    <Label>1000 to 2000</Label>
                                </div>
                                <div>
                                    <Input
                                        name="2000-3000"
                                        type="checkbox"
                                        onChange={() => priceSelector("2000 to 3000")}
                                        checked={filter?.price?.gt === 2000 && filter?.price?.lt === 3000}
                                        className="shadow-none ms-2 me-1 text-xl"

                                    />
                                    <Label>2000 to 3000</Label>
                                </div>
                                <div>
                                    <Input
                                        name="3000-4000"
                                        type="checkbox"
                                        onChange={() => priceSelector("3000 to 4000")}
                                        checked={filter?.price?.gt === 3000 && filter?.price?.lt === 4000}
                                        className="shadow-none ms-2 me-1 text-xl"

                                    />
                                    <Label>3000 to 4000</Label>
                                </div>
                                <div>
                                    <Input
                                        name="4000-5500"
                                        type="checkbox"
                                        onChange={() => priceSelector("4000 to 5500")}
                                        checked={filter?.price?.gt === 4000 && filter?.price?.lt === 5500}
                                        className="shadow-none ms-2 me-1 text-xl"

                                    />
                                    <Label>4000 to 5500</Label>
                                </div>
                                <div className='flex gap-2 pt-2'>
                                    <Input
                                        name="price"
                                        type="checkbox"
                                        checked={showPrice}
                                        onChange={() => setShowPrice(!showPrice)}
                                        className="shadow-none"
                                    />
                                    <Label>Custom Price</Label>
                                </div>
                                {showPrice &&
                                    <>
                                        <div className='flex justify-center gap-3 items-center'>
                                            <div className='w-24'>
                                                <span>Min</span>
                                                <div className='border flex items-center border-gray-500 px-2'>
                                                    <span className='border-r pe-1 border-gray-400'>₹ </span>
                                                    <span className='ps-1'>
                                                        <Input
                                                            name="price"
                                                            type="text"
                                                            value={filter.price.gt || ''}
                                                            onChange={(e) => {
                                                                const value = parseInt(e.target.value);
                                                                setFilter({
                                                                    ...filter,
                                                                    price: { ...filter?.price, gt: isNaN(value) ? 500 : value }, // Set gt to null if value is NaN
                                                                });
                                                            }}
                                                            className="shadow-none !border-none"
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                            <p className='pt-9'>TO</p>
                                            <div className='w-24'>
                                                <span>Max</span>
                                                <div className="border flex items-center border-gray-500 px-2">
                                                    <span className='border-r pe-1 border-gray-400'>₹ </span>
                                                    <span className='ps-1'>
                                                        <Input
                                                            name="price"
                                                            type="text"
                                                            value={filter.price.lt || ''}
                                                            onChange={(e) => {
                                                                const value = parseInt(e.target.value);
                                                                setFilter({
                                                                    ...filter,
                                                                    price: { ...filter?.price, lt: isNaN(value) ? 5500 : value } // Set lt to null if value is NaN
                                                                });
                                                            }}
                                                            className="shadow-none !border-none"
                                                        />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='py-3'>
                                            <Slider
                                                min={500}
                                                max={5500}
                                                range
                                                defaultValue={[500, 5500]}
                                                value={[filter.price.gt, filter.price.lt]}
                                                onChange={(values) => setFilter({ ...filter, price: { gt: values[0], lt: values[1] } })}
                                                tipFormatter={(value) => `₹ ${value}`}
                                            />
                                        </div>
                                    </>
                                }

                            </AccordionBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionHeader targetId="2">
                                Category
                            </AccordionHeader>
                            <AccordionBody accordionId="2">
                                <Select
                                    options={categories}
                                    value={categories.filter(cat => filter.category.includes(cat.value))}
                                    onChange={handleCategoryChange}
                                    isMulti
                                />
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="3">
                                Color
                            </AccordionHeader>
                            <AccordionBody accordionId="3">
                                <div className='flex flex-wrap '>
                                    {colorArry.map((color, index) => (
                                        <div key={index} className="flex gap-2" style={{ width: '50%' }}>
                                            <Input
                                                name="color"
                                                type="checkbox"
                                                checked={filter.color.includes(color)}
                                                onChange={() => selectHandler(color, "color")}
                                                className="shadow-noneF ms-2 me-1 text-xl"
                                            />
                                            {/* <div
                                                className="w-4 h-4 rounded-full border border-black"
                                                style={{ backgroundColor: color }}
                                            ></div> */}
                                            <Label className="text-capitalize">{color}</Label>
                                        </div>
                                    ))}
                                </div>
                            </AccordionBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionHeader targetId="4">
                                Size
                            </AccordionHeader>
                            <AccordionBody accordionId="4">
                                <div>
                                    {filter.mainCategory === "Women's Watches" &&
                                        <>    <div className="font-bold mb-2">Women's Sizes</div>
                                            <div className='flex flex-wrap'>
                                                {sizeArray.map((size, index) => (
                                                    (parseInt(size) >= 25 && parseInt(size) <= 30) && (
                                                        <div key={index} className="flex gap-2" style={{ width: '50%' }}>
                                                            <Input
                                                                name="size"
                                                                type="checkbox"
                                                                checked={filter.size.includes(size)}
                                                                onChange={() => selectHandler(size, "size")}
                                                                className="shadow-none ms-2 me-1 text-xl"
                                                            />
                                                            <Label className="text-capitalize">
                                                                {size}
                                                            </Label>
                                                        </div>
                                                    )
                                                ))}
                                            </div>
                                        </>
                                    }
                                    {filter.mainCategory === "Men's Watches" && <>                                               <div className="font-bold mb-2 mt-4">Men's Sizes</div>
                                        <div className='flex flex-wrap'>
                                            {sizeArray.map((size, e_id) => (
                                                (parseInt(size) >= 37 && parseInt(size) <= 39) && (
                                                    <div key={e_id} className="flex gap-2" style={{ width: '50%' }}>
                                                        <Input
                                                            name="size"
                                                            type="checkbox"
                                                            checked={filter.size.includes(size)}
                                                            onChange={() => selectHandler(size, "size")}
                                                            className="shadow-none ms-2 me-1 text-xl"
                                                        />
                                                        <Label className="text-capitalize">
                                                            {size}
                                                        </Label>
                                                    </div>
                                                )
                                            ))}
                                        </div>
                                    </>
                                    }
                                </div>

                            </AccordionBody>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionHeader targetId="5">
                                DiscountPercentage
                            </AccordionHeader>
                            <AccordionBody accordionId="5">
                                <div>
                                    <Input
                                        name="0-10"
                                        type="checkbox"
                                        checked={filter?.discountPercentage?.gt === 0 && filter?.discountPercentage?.lt === 10}
                                        onChange={() => DiscountSelector("0 to 10")}
                                        className="shadow-none ms-2 me-1 text-xl"
                                    />
                                    <Label>0 to 10</Label>
                                </div>
                                <div>
                                    <Input
                                        name="10-20"
                                        type="checkbox"
                                        checked={filter?.discountPercentage?.gt === 10 && filter?.discountPercentage?.lt === 20}
                                        onChange={() => DiscountSelector("10 to 20")}
                                        className="shadow-none ms-2 me-1 text-xl"
                                    />
                                    <Label>10 to 20</Label>
                                </div>
                                <div>
                                    <Input
                                        name="20-30"
                                        type="checkbox"
                                        checked={filter?.discountPercentage?.gt === 20 && filter?.discountPercentage?.lt === 30}
                                        onChange={() => DiscountSelector("20 to 30")}
                                        className="shadow-none ms-2 me-1 text-xl"
                                    />
                                    <Label>20 to 30</Label>
                                </div>
                                <div>
                                    <Input
                                        name="30-40"
                                        type="checkbox"
                                        checked={filter?.discountPercentage?.gt === 30 && filter?.discountPercentage?.lt === 40}
                                        onChange={() => DiscountSelector("30 to 40")}
                                        className="shadow-none ms-2 me-1 text-xl"
                                    />
                                    <Label>30 to 40</Label>
                                </div>
                                <div>
                                    <Input
                                        name="40-50"
                                        type="checkbox"
                                        checked={filter?.discountPercentage?.gt === 40 && filter?.discountPercentage?.lt === 50}
                                        onChange={() => DiscountSelector("40 to 50")}
                                        className="shadow-none ms-2 me-1 text-xl"
                                    />
                                    <Label>40 to 50</Label>
                                </div>
                            </AccordionBody>
                        </AccordionItem>
                    </UncontrolledAccordion>
                </div>
            }
        </div >
    );
}
