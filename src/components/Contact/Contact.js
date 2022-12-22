import React, { useRef } from "react";
import "./Contact.css";
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef()    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e4t9ty5', 'template_t5zo4rq', form.current, 'OqUGDjEGRpEcEuQs7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert("Message Sent Successfully");
      e.target.reset();
  };
  return (
    <div className="contact-container container" id="contact">
      <div className="contact-header text-center">
        <h2>Contact Us</h2>
        <p className="mt-2">
          Individuals / Corporates / Education Institutions
        </p>
      </div>
      <div className="contact-content row">
        <div className="contact-text col-lg-6 col-md-6 col-sm-12">
        <h1 className="text-header text-center">
            We'd Love <br></br> to Hear <br></br> From{" "}
            <span className="highlight">You</span>
          </h1>
          <h3 className="text-footer text-center">Please contact us to book an appointment <br></br> and for collaborations.</h3>
        </div>
        <div className="contact-form col-lg-6 col-md-6 col-sm-12">
          <form ref={form} onSubmit={sendEmail} className="components-form">
            <div className="compo1">
            <label className="labels">Your name / Name of the Organisation</label>
            <input
              type="text"
              name="name"
              required
              className="w-100 input"
              />
            </div>
            <div className="compo1">
            <label className="labels">Email</label>
            <input type="email" name="email" required className="w-100 input" />
            </div>
            <div className="compo1">
            <label className="labels">Subject</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-100 input" type="text" />
            </div>
            <div className="btnSection">
                <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
