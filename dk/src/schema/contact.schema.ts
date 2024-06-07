import { object, string, number, date, InferType, boolean } from "yup";
import * as Yup from "yup";
let userSchema = Yup.object({
  fullname: Yup.string().required("required").min(3, "min 3 char long"),
  email: Yup.string().email("please emter valid email").required("required"),
  contactnumber: Yup.string().required("contact number is required"),
  contactmethod: Yup.string().required("required"),
  message: Yup.string().required("required"),

  acceptedTos: Yup.boolean().oneOf(
    [true],
    "Please accept the terms of services"
  ),
});

/* const todoSchemas = Yup.object({
  fullname: Yup.string().required("required").min(3, "min 3 char long"),
  email: Yup.string().email("please enter a valid email").required("required"),
  message: Yup.string().required("required"),
  contactnumber: Yup.number().required("required").min(10, "min 10 char long"),
  contactmethod: Yup.string().required("required"),
  acceptedTos: Yup.boolean().oneOf(
    [true],
    "Please accept the terms of services"
  ),
}); */
const todoSchemas = Yup.object().shape({
  fullname: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  contactnumber: Yup.string().required('Contact Number is required'),
  message: Yup.string().required('Message is required'),
  contactmethod: Yup.string().required('Contact Method is required'),
  acceptedTos: Yup.boolean().oneOf([true], 'You must accept the terms and conditions')
});

export { userSchema, todoSchemas };
