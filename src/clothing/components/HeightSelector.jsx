import {useState} from 'react';
import { InputNumber } from 'primereact/inputnumber';


const HeightSelector = () => {
   const [value, setValue] = useState();
    return (
        <div>
    <label htmlFor="height">Height</label>
        <InputNumber inputId="height" value={value} onValueChange={(e) => setValue(e.value)} suffix="in" />

        </div>
    
)
}
export default HeightSelector;