import React, { useState } from 'react';

export default function Checklist() {
    // Step 1: Create React state to track checkbox value
    const [checkedItems, setCheckedItems] = useState({});

    // Step 2: Function to update checkbox value based on event.target.checked
    const handleChange = (event) => {
        setCheckedItems({ ...checkedItems, [event.target.name]: event.target.checked });
    };

    return (
        <div>
            <h2>Checklist</h2>
            <form>
                {/* Step 3: Add checkbox input element to JSX code with onChange function */}
                <label>
                    <input
                        type="checkbox"
                        name="option1"
                        checked={checkedItems['option1'] || false}
                        onChange={handleChange}
                    />
                    Option 1
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="option2"
                        checked={checkedItems['option2'] || false}
                        onChange={handleChange}
                    />
                    Option 2
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="option3"
                        checked={checkedItems['option3'] || false}
                        onChange={handleChange}
                    />
                    Option 3
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="option4"
                        checked={checkedItems['option4'] || false}
                        onChange={handleChange}
                    />
                    Option 4
                </label>
                <br />
            </form>
            <h3>Selected Options:</h3>
            <ul>
                {/* Step 4: Display selected options dynamically */}
                {Object.keys(checkedItems).map((key) => (
                    checkedItems[key] && <li key={key}>{key}</li>
                ))}
            </ul>
        </div>
    );
}

