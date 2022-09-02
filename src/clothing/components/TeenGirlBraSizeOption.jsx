import { SelectButton } from 'primereact/selectbutton';
import React, { useState } from 'react';

const TeenGirlBraSizeOption = () => {
    const [value1, setValue1] = useState('1');
    const BraSizeOptions = ['34A','34B', '34C', '36A', '36B', '36C', '38A', '38B', '38C','40A','40B','40C',];

    const justifyTemplate = (option) => {
        return <i className={option.icon}></i>;
    }

    return (
        <div>
            <div className="card">
                <h5>Teen Girl Bra Size Options</h5>
                <SelectButton value={value1} options={BraSizeOptions} onChange={(e) => setValue1(e.value)} />
            </div>
        </div>
    );
}
export default TeenGirlBraSizeOption;