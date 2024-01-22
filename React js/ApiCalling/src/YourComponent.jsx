import React, { useState } from 'react';

const YourComponent = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
        setSelectedCategories(selectedOptions);
    };

    return (
        <div>
            <label>Select Categories:</label>
            <select multiple value={selectedCategories} onChange={handleCategoryChange}>
                <option value="formal">Formal</option>
                <option value="casual">Casual</option>
                <option value="shoes">Shoes</option>
                {/* Add more options as needed */}
            </select>

            {/* Display all selected categories in an input field */}
            <div>
                <label>All Selected Categories:</label>
                <input
                    type="text"
                    readOnly
                    value={selectedCategories.join(', ')}
                />
            </div>
        </div>
    );
};

export default YourComponent;
