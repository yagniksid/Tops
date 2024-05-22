// import React, { useState, useEffect } from 'react';
// import { Button, Input } from 'reactstrap';
// import TableData from '../Table/TableData';

// export default function Form() {
//     const [name, setName] = useState('');
//     const [updateMode, setUpdateMode] = useState(false)
//     const [currentIndex, setCurrentIndex] = useState(null)
//     const [convertedOldData, setConvertedOldData] = useState([]);

//     useEffect(() => {
//         const storedData = JSON.parse(localStorage.getItem('name')) || [];
//         setConvertedOldData(storedData);
//     }, []);

//     const submitHandler = () => {
//         const updatedData = [...convertedOldData, { name }];
//         localStorage.setItem('name', JSON.stringify(updatedData));
//         setConvertedOldData(updatedData);
//         setName('');
//     };

//     let editData = (index, data) => {
//         console.log("🚀 ~ editData ~ data:", data)
//         setName(data.name)
//         setCurrentIndex(index)
//     }

//     let updateData = () => {
//         if (index || index === 0) {

//         }
//     }

//     let deleteData = (index) => {
//         let deleteItems = convertedOldData.filter((e, i) => i !== index)
//         setConvertedOldData(deleteItems)
//     }

//     return (
//         <div>
//             <div className='p-5 w-[40%]'>
//                 <Input
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Enter name"
//                 />
//                 <Button onClick={submitHandler} className="mt-2">{name ? "Add" : "Update"}</Button>
//             </div>
//             <div>
//                 <TableData userName={convertedOldData} editData={editData} deleteData={deleteData} />
//             </div>
//         </div>
//     );
// }


import React, { useState, useEffect } from 'react';
import { Button, Input } from 'reactstrap';
import TableData from '../Table/TableData';

export default function Form() {
    const [name, setName] = useState('');
    const [updateMode, setUpdateMode] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [convertedOldData, setConvertedOldData] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('name')) || [];
        setConvertedOldData(storedData);
    }, []);

    const submitHandler = () => {
        if (updateMode) {
            updateData();
        } else {
            const updatedData = [...convertedOldData, { name }];
            localStorage.setItem('name', JSON.stringify(updatedData));
            setConvertedOldData(updatedData);
            setName('');
        }
    };

    const editData = (index, data) => {
        setName(data.name);
        setUpdateMode(true);
        setCurrentIndex(index);
    };

    const updateData = () => {
        const updatedData = convertedOldData.map((item, index) =>
            index === currentIndex ? { name } : item
        );
        localStorage.setItem('name', JSON.stringify(updatedData));
        setConvertedOldData(updatedData);
        setName('');
        setUpdateMode(false);
        setCurrentIndex(null);
    };

    const deleteData = (index) => {
        const updatedData = convertedOldData.filter((_, i) => i !== index);
        localStorage.setItem('name', JSON.stringify(updatedData));
        setConvertedOldData(updatedData);
    };

    return (
        <div>
            <div className='p-5 w-[40%]'>
                <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                />
                <Button onClick={submitHandler} className="mt-2">
                    {updateMode ? 'Update' : 'Add'}
                </Button>
            </div>
            <div>
                <TableData userName={convertedOldData} editData={editData} deleteData={deleteData} />
            </div>
        </div>
    );
}
