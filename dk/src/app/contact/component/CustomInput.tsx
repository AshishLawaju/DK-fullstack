/* import { log } from "console";
import { useField } from "formik";
import React from "react";
import { FiEdit } from "react-icons/fi";

const CustomInput = ({label,...props}) => {

  // const [field , meta]  = useField(props);

  
  
  return (
    <>
      <label>{label}</label>
      <input {...field}  {...props} className={meta.touched && meta.error ? "text-white" :""}/>

      <div>
        {
          meta.error && <div className="text-red-300">{meta.error} </div>
        }
      </div>
    </>
  );
};

export default CustomInput;
 */