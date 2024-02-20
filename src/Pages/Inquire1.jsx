import { useState, useRef } from "react";
import Header from "../components/Header";
import img from "../assets/inquiry/InquiryCover.png";
import Button from "../Reusable Components/Button";
import emailjs from "@emailjs/browser";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";

const Inquire = () => {

  const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_l0m87c6",
        "template_zbeyfun",
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
            couple: "",
            weddingDate: "",
            numberOfGuests: "",
            ceremonyTime: "",
            weddingDestination: "Local",
            ceremonyType: "Signature wedding",
            others: '',
          });


        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email. Please try again."); // Provide feedback to the user
        }
      );
  };
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    contactNumber: "",
    couple: "",
    weddingDate: "",
    numberOfGuests: "",
    ceremonyTime: "",
    weddingDestination: "Local",
    ceremonyType: "Signature wedding",
    others: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Fade triggerOnce id="inquire" className="relative">
      <Header className="!mb-0 relative">
        <img src={img} className="w-full object-cover" />
        <div className="absolute top-1/3">
          <h1 className="font-playfair p-10 text-3xl text-[#fff] xmd:text-5xl xxsm:text-xl xmd:p-5">
            Connect with Us!
          </h1>
        </div>
      </Header>
      {/* <div className="mb-20 ">
        <h1 className="text-center text-4xl font-playfair text-[#2d2d2d] mb-5">
          Connect with us!
        </h1>
        <p className="text-center font-opensans text-base">
          Start by filling out the form below and we'll get the process started!
        </p>
      </div> */}

      <div className="flex justify-center items-center mb-20 mt-14">
        <div className="max-w-[52rem] w-full xxsm:mx-5">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex xxsm:flex-col">
              <div className="mb-4 mr-4 w-full">
                <label
                  htmlFor="name"
                  className="block text-gray-600 text-sm font-medium"
                >
                  Name:<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  className="border rounded-sm w-full p-2 border-[#DADADA]"
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="email"
                  className="block text-gray-600 text-sm font-medium"
                >
                  Email:<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  className="border rounded-sm w-full p-2 border-[#DADADA]"
                  required
                />
              </div>
            </div>
            <div className="flex xxsm:flex-col">
              <div className="mb-4 mr-4 w-full">
                <label
                  htmlFor="contact"
                  className="block text-gray-600 text-sm font-medium"
                >
                  Contact number:<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="border rounded-sm w-full p-2 border-[#DADADA]"
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="address"
                  className="block text-gray-600 text-sm font-medium"
                >
                  Name of couple:<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="couple"
                  name="couple"
                  value={formData.couple}
                  onChange={handleInputChange}
                  className="border rounded-sm w-full p-2 border-[#DADADA]"
                  required
                />
              </div>
            </div>
            {/* <div className="flex xxsm:flex-col">
              <div className="mb-4 mr-4 w-full">
                <label
                  htmlFor="groomName"
                  className="block text-gray-600 text-sm font-medium"
                >
                  Name of groom:<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="groomName"
                  name="groomName"
                  value={formData.groomName}
                  onChange={handleInputChange}
                  className="border rounded-sm w-full p-2 border-[#DADADA]"
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="groomAge"
                  className="block text-gray-600 text-sm font-medium"
                >
                  Age of groom:<span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  id="groomAge"
                  name="groomAge"
                  value={formData.groomAge}
                  onChange={handleInputChange}
                  className="border rounded-sm w-full p-2 border-[#DADADA]"
                  min={18}
                  max={125}
                  required
                />
              </div>
            </div>
            <div className="flex xxsm:flex-col">
              <div className="mb-4 mr-4 w-full">
                <label
                  htmlFor="brideName"
                  className="block text-gray-600 text-sm font-medium"
                >
                  Name of bride:<span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="brideName"
                  name="brideName"
                  value={formData.brideName}
                  onChange={handleInputChange}
                  className="border rounded-sm w-full p-2 border-[#DADADA]"
                  required
                />
              </div>
              <div className="mb-4 w-full">
                <label
                  htmlFor="brideAge"
                  className="block text-gray-600 text-sm font-medium"
                >
                  Age of bride:<span className="text-red-600">*</span>
                </label>
                <input
                  type="number"
                  id="brideAge"
                  name="brideAge"
                  value={formData.brideAge}
                  onChange={handleInputChange}
                  className="border rounded-sm w-full p-2 border-[#DADADA]"
                  min={18}
                  max={125}
                  required
                />
              </div>
            </div> */}
            <div className="mb-4">
              <label
                htmlFor="weddingdate"
                className="block text-gray-600 text-sm font-medium"
              >
                Date of wedding:<span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                id="weddingdate"
                name="weddingDate"
                value={formData.weddingDate}
                onChange={handleInputChange}
                className="border rounded-sm w-full p-2 border-[#DADADA]"
                min={today}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="ceremonytime"
                className="block text-gray-600 text-sm font-medium"
              >
                Time of ceremony:<span className="text-red-600">*</span>
              </label>
              <input
                type="time"
                id="ceremonytime"
                name="ceremonyTime"
                value={formData.ceremonyTime}
                onChange={handleInputChange}
                className="border rounded-sm w-full p-2 border-[#DADADA]"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="numofguest"
                className="block text-gray-600 text-sm font-medium"
              >
                Estimated Number of Guests:<span className="text-red-600">*</span>
              </label>
              <input
                type="number"
                id="numofguest"
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleInputChange}
                className="border rounded-sm w-full p-2 border-[#DADADA]"
                max={300}
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="destination"
                className="block text-gray-600 text-sm font-medium"
              >
                Wedding Destination:<span className="text-red-600">*</span>
              </label>
              <select
                type="radio"
                id="destination"
                name="weddingDestination"
                value={formData.weddingDestination}
                onChange={handleInputChange}
                className="border rounded-sm w-full p-2 border-[#DADADA]"
              >
                <option value=""></option>
                <option value="Las Casas Bataan">Las Casas Bataan</option>
                <option value="Las Casas QC">Las Casas QC</option>
                <option value="VS Hotel">VS Hotel</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="ceremonytype"
                className="block text-gray-600 text-sm font-medium"
              >
                Type of ceremony:<span className="text-red-600">*</span>
              </label>
              <select
                type="radio"
                id="ceremonytype"
                name="ceremonyType"
                value={formData.ceremonyType}
                onChange={handleInputChange}
                className="border rounded-sm w-full p-2 border-[#DADADA]"
              >
                <option value=""></option>
                <option value="Catholic">Catholic</option>
                <option value="Christian">Christian</option>
                <option value="Civil">Civil</option>
                <option value="Others">Others</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="ceremonytype"
                className="block text-gray-600 text-sm font-medium"
              >
                Others:
              </label>
              <input
                  type="text"
                  id="others"
                  name="others"
                  value={formData.others}
                  onChange={handleInputChange}
                  placeholder="Please add here your additional inquiries"
                  className="border rounded-sm w-full p-2 border-[#DADADA]"
                  required
                />
            </div>
            <div className="">
              <Button type="submit" className="!w-[100px] !text-[12px]">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Fade>
  );
};

export default Inquire;
