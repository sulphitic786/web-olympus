import React, { useState, ChangeEvent, FormEvent } from "react";
import object from "../assets/imgs/object.png";
import axios from 'axios';
import Swal from "sweetalert2";

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

const Contact_Us: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle form input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:4000/api/contact/add',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : JSON.stringify(formData)
    };
    
    await axios.request(config)
    .then((response) => {
      Swal.fire({
        text: "Response has been sent successfully!",
        icon: "success"
      });
      console.log("response", response);
      setLoading(false);
      setFormData({
        fullName: "",
        email: "",
        subject: "Questions",
        message: "",
      });
    })
    .catch((error) => {
      setLoading(false);
      Swal.fire({
        text: "Error while sending response!",
        icon: "error"
      });
      console.log(error);
    });
    
};
  

  return (
    <>
      <div className="row mx-auto bg-black justify-content-center contact-us">
        <div className="col-md-6 col-12">
          <div className="content">
            <h1>Contact Us</h1>
            <p className="pt-2">
              Book a call or write us to discover our different options. Whether it's membership for
              recurring missions or more "classic" quotes for big projects, we have the right
              package for you.
            </p>
            <form className="pt-4 contact-us-form" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="form-label text-white mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control focus-none"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Input your full name here"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control focus-none"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Input your email here"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="form-label text-white mb-2">
                  Subject
                </label>
                <select
                  className="form-select"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                >
                  <option value="Questions">Questions</option>
                  <option value="Inquiry">Inquiry</option>
                  <option value="Feedback">Feedback</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="form-label text-white mb-2">
                  Message
                </label>
                <textarea
                  className="form-control textarea-msg"
                  id="message"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Input your message here"
                ></textarea>
              </div>
              <div className="mb-4">
                <input
                  type="submit"
                  disabled={loading}
                  className={`form-control submit-button ${loading? "text-warning": "text-white"}`}
                  aria-describedby="emailHelp"
                  value={loading ? "Loading... " : "submit"}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-4 col-12">
          <div className="imgs d-flex justify-content-center">
            <img src={object} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact_Us;
