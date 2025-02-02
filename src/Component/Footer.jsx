import { useEffect } from "react";
import { FaCopyright } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const gotoTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <section id="footer-sec">
        <div className="footer-cont">
          <div className="top">
            <div className="left" data-aos="fade-right">
              <h1>Lets Make Something Amazing Together</h1>
              <h2>
                Start by &nbsp;
                <span className="color-box">Saying Hii</span>
              </h2>
            </div>
            <div className="right">
              <h1>Related Links</h1>
              <ul>
                <Link to="/" onClick={gotoTop}>
                  <li>
                    <MdKeyboardDoubleArrowRight className="item" />
                    Home
                  </li>
                </Link>
                <Link to="/Resume" onClick={gotoTop}>
                  <li>
                    <MdKeyboardDoubleArrowRight className="item" />
                    Resume
                  </li>
                </Link>
                <Link to="/Projects" onClick={gotoTop}>
                  <li>
                    <MdKeyboardDoubleArrowRight className="item" />
                    Project
                  </li>
                </Link>
                <Link to="/Education" onClick={gotoTop}>
                  <li>
                    <MdKeyboardDoubleArrowRight className="item" />
                    Education
                  </li>
                </Link>
                <Link to="/contact" onClick={gotoTop}>
                  <li>
                    <MdKeyboardDoubleArrowRight className="item" />
                    Contact Us
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <h3>Monika kumari</h3>
            <p>
              <FaCopyright size={15} />
              Copyright 2024 by Monika. All Right Reserved
            </p>
          </div>
          <div className="right">
            <div className="itemicon">
              <Link to="https://www.linkedin.com/in/monika-kumari-2a17a4253/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <span className="icon1">
                  <ImLinkedin fontSize={25} className="icon" />
                </span>
              </Link>
              <Link to="https://github.com/monikakumari771/portfolio">
                <span className="icon3">
                  <FaGithub size={25} className="icon" />
                </span>
              </Link>
              <span className="icon1">
                <BsTwitter size={25} className="icon" />
              </span>
              <Link to="https://www.instagram.com/itsmona771/?igsh=MWZ1aXMxZWtkZXllMg%3D%3D">
                <span className="icon2">
                  <FiInstagram size={25} className="icon" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
