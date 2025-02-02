import React from "react";
import Touch from "../Component/Home/Touch";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

function ContactUs() {
  return (
    <>
      <Touch />
      <section id="contact-us">
        <div className="contact-work" div data-aos="fade-up">
          <h1>Feel free to contact Us</h1>
          <div className="contact-icon">
            <div className="icon1">
              <IoMdCall className="items" />

              <p>+91 7667648546</p>
            </div>
            <div className="icon1">
              <MdEmail className="items" />

              <p>monikakumariyadav3907686@gmail.com</p>
            </div>
            <div className="icon1">
              <IoLocationSharp className="items" />

              <p>Hazaribagh Jharkhand 825301</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
