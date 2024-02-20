import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Button from "../Reusable Components/Button";

const ContactUs = () => {
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
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label htmlFor="name" >Name</label>
      <input
        type="text"
        name="user_name"
        value={formData.user_name}
        onChange={handleInputChange}
        required
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        value={formData.user_email}
        onChange={handleInputChange}
        required
      />
      <label>Message</label>
      <textarea
        name="message"
        value={formData}
        onChange={handleInputChange}
        required />
      <Button
        type="submit"
      >
        Submit
      </Button>
    </form>
  )
}

export default ContactUs;