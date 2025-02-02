import React from "react";
import { IoPeople } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsFillPenFill } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

function Touch() {
  return (
    <>
      <section id="touch-sec">
        <div className="touch-cont">
          <div className="left" div data-aos="fade-up">
            <h1>Get In Touch</h1>
            <div className="underline"></div>
            <p>We are there for you! How can I help?</p>
            <form id="form">
              <div className="input-box">
                <IoPeople size={22} />

                <input type="text" name="name" placeholder="Enter your Name" />
              </div>
              <br />
              <div className="input-box">
                <MdEmail size={22} />

                <input type="text" name="name" placeholder="Enter  Email" />
              </div>
              <br />
              <div className="text-area">
                <BsFillPenFill size={22} />

                <textarea
                  rows={4}
                  cols={20}
                  placeholder="Write Something about your query"
                ></textarea>
              </div>
              <br />
            </form>

            <button className="btn">
              <span>Send</span>
            </button>
          </div>
          <div className="right">
            <img
              className="img"
              src="./assets/Images/Images (3)/contact-us.jpg"
            />
            <div className="icons" div data-aos="fade-right">
              <Link
                to="https://www.linkedin.com/in/monika-kumari-2a17a4253/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <span className="icon1">
                  <ImLinkedin fontSize={30} />
                </span>
              </Link>
              <Link to="https://github.com/monikakumari771/portfolio">
                <span className="icon2">
                  <FaGithub size={30} />
                </span>
              </Link>
              <span className="icon1">
                <BsTwitter size={30} />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Touch;
