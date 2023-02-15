import React, {useState} from "react";

import GeneralForm3 from "./GeneralForm3";

import { formLayout3 } from "../layouts/formLayout3";

const Form4 = () => {
    const [errorFields, setErrorFields] = useState([]);


    const handleChange = (e,field)=>{
      if(!e.target.value.length)return;

        if(field.id === 'email'){
            if(!e.target.value.includes('@'))setErrorFields('email');
            else setErrorFields([]);
        }

    }

  return (
    <>
        <GeneralForm3 layout={formLayout3}  onChange = {handleChange} errorFields = {errorFields} setErrorFields={setErrorFields}/>
    </>
  );
};

export default Form4;
