import {useState} from 'react';
import { InputNumber } from 'primereact/inputnumber';


const WeightSelector = () => {
   const [value, setValue] = useState(50);
    return (
<InputNumber inputId="horizontal" value={value} onValueChange={(e) => setValue(e.value) } showButtons buttonLayout="horizontal" step={10}
decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" suffix="lbs"/>
)
}
export default WeightSelector;