import { SelectButton } from 'primereact/selectbutton';
import React, { useState } from 'react';

const TeenGirlShoeSizeOption = () => {
    const [value1, setValue1] = useState('1');
    const shirtOptions = ['6','6.5', '7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12'];

    const justifyTemplate = (option) => {
        return <i className={option.icon}></i>;
    }

    return (
        <div>
            <div className="card">
                <h5>Teen Girl Shoe Size Options</h5>
                <SelectButton value={value1} options={shirtOptions} onChange={(e) => setValue1(e.value)} />
            </div>
        </div>
    );
}
export default TeenGirlShoeSizeOption;