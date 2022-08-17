import { SelectButton } from 'primereact/selectbutton';
import React, { useState } from 'react';

const WomensWaistSizeOption = () => {
    const [value1, setValue1] = useState('1');
    const shirtOptions = ['extra small','small', 'med', 'large', 'extra large', '1x', '2x', '3x', '4x'];

    const justifyTemplate = (option) => {
        return <i className={option.icon}></i>;
    }

    return (
        <div>
            <div className="card">
                <h5>Womens Waist Size Options</h5>
                <SelectButton value={value1} options={shirtOptions} onChange={(e) => setValue1(e.value)} />
            </div>
        </div>
    );
}
export default WomensWaistSizeOption;