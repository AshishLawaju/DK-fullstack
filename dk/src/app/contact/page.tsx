"use client";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SlEnvolope } from "react-icons/sl";
import { FiPhone } from "react-icons/fi";
import { LuMapPin } from "react-icons/lu";
import { FaFacebook, FaGoogle, FaInstagram, FaTiktok } from "react-icons/fa6";
import { ErrorMessage, Field, Form, Formik, validateYupSchema } from "formik";

import { log } from "console";
import { actionAsyncStorage } from "next/dist/client/components/action-async-storage-instance";
import { todoSchemas } from "../../schema/contact.schema";
export default function Home() {
  //@ts-ignore
  const onSubmit = async (values, actions) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Submitted:", values);
      alert("Form submitted successfully!");

      actions.resetForm();
    } catch (error) {
      console.error("Error during form submission:", error);
    }
    /* 
    
    (values, actions) => {
                console.log(values);
                console.log("submitted !");
                alert("submitted !  ");
                actions.resetForm();
              }
    */
  };

  const fieldClass =
    "w-full lg:w-[270px] h-[44px] rounded-lg outline-none py-3 px-2 border border-[#a5a5a5] lg:mt-2 ";
  return (
    <section className="bg-dark-background pt-2 lg:pt-[64px]">
      <div className="container py-16 flex  justify-between lg:items-center max-lg:flex-col">
        <div className="text-[#d9d9d9]">
          <h2 className="font-semibold text-3xl text-[#efefef]">
            Let&apos;s get in touch
          </h2>
          <p className="mt-3">
            Your trusted partner in connecting skilled <br /> professionals with
            rewarding career <br /> opportunities across Nations.
          </p>
          <div className="font-light text-[14px] mt-6">
            <div className="flex gap-4 items-center">
              <SlEnvolope className="text-blue" /> info@dkrecruitmentspzoo.com
            </div>
            <div className="flex gap-4 items-center mt-4">
              <FiPhone className="text-blue" /> +48 690650653
            </div>
          </div>
          <div>
            <h3
              className="
          font-semibold text-[22px] mt-10 text-[#efefef]"
            >
              Address
            </h3>
            <div className="text-[14px] font-light flex gap-4 items-center mt-3">
              <LuMapPin className="text-blue" /> Czeremchowa 3, 52-200 Wrocław,
              Poland
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[22px] mt-10 text-[#efefef]">
              Social Media
            </h3>
            <div className="flex gap-6 items-center mt-4">
              <FaFacebook />
              <FaGoogle />
              <FaTiktok />
              <FaInstagram />
            </div>
          </div>
        </div>
        <div className="">
          
          <div className="mt-10 bg-[#f8f8f8] p-8 rounded-lg max-w-[684px]x">
            <Formik
              initialValues={{
                fullname: "",
                email: "",
                message: "",
                contactnumber: "",
                contactmethod: "",
                acceptedTos: false,
              }}
              validationSchema={todoSchemas}
              onSubmit={onSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="flex  gap-6">
                    <div className="flex flex-col gap-6 lg:flex-row justify-between w-full">
                      <div className="flex flex-col ">
                        <label htmlFor="title">Full Name</label>
                        <Field
                          type="text"
                          name="fullname"
                          className={`${fieldClass}`}
                        />
                        <ErrorMessage
                          name="fullname"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div className="flex flex-col ">
                        <label htmlFor="title">Email Address</label>
                        <Field
                          type="email"
                          name="email"
                          className={`${fieldClass}`}
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex  max-lg:mt-6 ">
                    <div className="flex flex-1 flex-col gap-6  lg:flex-row justify-between w-full ">
                      <div className="flex flex-col">
                        <label htmlFor="contactnumber">Contact Number</label>
                        <Field
                          type="text"
                          name="contactnumber"
                          className={`${fieldClass}`}
                        />
                        <ErrorMessage
                          name="contactnumber"
                          component="div"
                          className="text-red-500"
                        />
                      </div>

                      <div className="flex flex-1 flex-col ">
                        <label htmlFor="contactmethod">Contact Method</label>

                        <Field
                          name="contactmethod"
                          component="select"
                          className={`${fieldClass}  w-min-[600px]`}
                        >
                          <option value="">select method</option>
                          <option value="SMS">SMS</option>
                          <option value="Email">Email</option>
                          <option value="Phone">Phone</option>
                        </Field>
                        <ErrorMessage
                          name="contactmethod"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="max-lg:mt-6 flex flex-col   ">
                    <label htmlFor="title">Message</label>
                    <Field
                      // type=""
                      as="textarea"
                      name="message"
                      className={` w-full h-[150px]   rounded-lg outline-none py-3 px-2 border border-[#a5a5a5] lg:mt-2 `}
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex gap-2 flex-col ">
                    <div className="flex items-center  gap-2 ">

                    <Field type="checkbox" name="acceptedTos" />
                   
                    <label htmlFor="title" className="text-[14px] max-sm:mt-4">
                      I agree with DK Recruitment{" "}
                      <span className="text-blue">Privacy policy</span>.
                    </label>
                    </div>
                    <ErrorMessage
                      name="acceptedTos"
                      component="div"
                      className="text-red-500"
                    /> 
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-blue btn w-[160px] h-12 mt-12 text-white rounded-lg mx-auto   "
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
