// import { log } from "console";
// import { useField } from "formik";
// import React from "react";
// import { FiEdit } from "react-icons/fi";

// const CustomCheckBox = ({  ...props }) => {
//   const [field, meta] = useField(props);
// /* 
//   console.log("field", field);
//   console.log("meta", meta);
//  */
//   return (
//     <div className="flex gap-4">
//       {/* <label>{label}</label> */}
//       <input
//         {...field}
//         {...props}
//         className={meta.touched && meta.error ? "text-white" : ""}
//       />
//       <span>I accept terms and services.</span>
//       <div>
//         {meta.error && <div className="text-red-300">{meta.error} </div>}
//       </div>
//     </div>
//   );
// };

// export default CustomCheckBox;
