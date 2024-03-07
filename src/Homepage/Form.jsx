import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Button from "../Reusable Components/Button";
import { RiCustomerService2Fill } from "react-icons/ri";
import { ImEarth } from "react-icons/im";

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l0m87c6",
        "template_obrt5jo",
        form.current,
        "wmiUGRrY6F7td9YrH"
      )
      .then(
        () => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Email inquiry has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
          setFormData({
            user_name: "",
            user_email: "",
            contactNumber: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email. Please try again."); // Provide feedback to the user
        }
      );
  };

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    contactNumber: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="h-auto mb-20 md:mb-0 xmd:mx-0 mx-20">
      <div className="px-2 flex-1 p-10 xxsm:justify-start">

        <form ref={form} onSubmit={sendEmail} className="w-3/5 xmd:w-full mx-auto bg-white p-10 xmd:p-1 xmd:py-10">
          <h1 className="text-3xl font-playfair text-center mb-10 text-[#804B00] xmd:text-2xl">
            Reach us now!
          </h1>
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="fullname"
              className="uppercase font-opensans text-[12px] xxsm:text-[10px] tracking-widest text-[#424242] p-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="fullname"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
              className="appearance-none border-0 border-b-[1px] border-[#d9d9d9] bg-transparent py-2 px-4 text-[#424242] text-sm leading-tight tracking-wider focus:outline-none focus:border-[#F0AF59] pb-0 pl-0 xxsm:ml-2"
            />
          </div>
          <div className="flex gap-5 xmd:gap-0">
            <div className="mb-4 w-screen flex flex-col">
              <label
                htmlFor="email"
                className="uppercase font-opensans text-[12px] xxsm:text-[10px] tracking-widest text-[#424242] p-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleInputChange}
                className="appearance-none border-0 border-b-[1px] border-[#d9d9d9] bg-transparent py-2 px-4 text-[#424242] text-sm leading-tight tracking-wider focus:outline-none focus:border-[#F0AF59] pb-0 pl-0 xxsm:ml-2"
              />
            </div>
            
            <div className="mb-4 w-screen flex flex-col">
              <label
                htmlFor="contact"
                className="uppercase font-opensans text-[12px] xxsm:text-[10px] tracking-wider text-[#424242] p-2"
              >
                Contact No. *
              </label>
              <input
                type="number"
                id="contact"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                className="appearance-none border-0 border-b-[1px] border-[#d9d9d9] bg-transparent py-2 px-4 text-[#424242] text-sm leading-tight tracking-wider focus:outline-none focus:border-[#F0AF59] pb-0 pl-0 xxsm:ml-2"
              />
            </div>
          </div>
          <div className="mb-8 flex flex-col">
            <label
              htmlFor="message"
              className="uppercase font-opensans text-[12px] xxsm:text-[10px] tracking-widest text-[#424242] p-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              value={formData.message}
              name="message"
              onChange={handleInputChange}
              rows="4"
              className="appearance-none border-0 border-b-[1px] border-[#d9d9d9] bg-transparent py-2 px-4 text-[#424242] text-sm tracking-wide leading-tight focus:outline-none focus:border-[#F0AF59] pb-0 pl-0 resize-none xxsm:ml-2"
            />
          </div>
          <div className="mt-2 mx-auto text-center ">
            <Button
              type="submit"
              className="max-w-[200px] h-[35px] !text-[12px] xxsm:text-[10px] tracking-wide font-opensans uppercase text-[#fff] bg-[#804B00] rounded xxsm:ml-2"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
 {/**
         <div className="flex flex-col flex-1 justify-center items-center p-10  xxsm:items-start xxsm:ml-2">
        <div className="flex flex-col gap-10">
          <div className="flex gap-5">
            <div>
              <RiCustomerService2Fill
                size={55}
                className="text-[#CEAA77] opacity-[58%]"
              />
            </div>
            <div className="pl-1 flex flex-col">
              <h2 className="font-semibold font-opensans text-base text-[#424242] pb-1">
                Contact Us
              </h2>
              <p className="text-sm text-[#424242] font-opensans">
                +63 917 872 9368
              </p>
              <p className="text-sm text-[#424242] font-opensans">
                weddings@lascasasweddings.com
              </p>
            </div>
          </div>
          <div className="flex gap-5 ">
            <div className="">
              <ImEarth size={45} className="text-[#CEAA77] opacity-[58%]" />
            </div>
            <div className="pl-3 flex flex-col justify-center">
              <h2 className="font-semibold font-opensans text-base text-[#424242] pb-1">
                Our Website
              </h2>
              <p className="text-sm text-[#424242] font-opensans">
                www.lascasasweddings.com
              </p>
            </div>
          </div>
        </div>
      </div>
*/}
    </div>
  );
};

export default Form;
