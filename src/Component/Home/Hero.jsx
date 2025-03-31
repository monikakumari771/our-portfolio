import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Aos from "aos";
import { Link } from "react-router-dom";
function Hero() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <>
      <section id="hero-sec">
        <div className="hero-class">
          <div className="left">
            <img
              data-aos="fade-up"
              className="img"
              src="./assets/Images/monika.png"
            />
          </div>
          <div className="right">
            <div className="hero-container" data-aos="fade-up">
              <div className="heading">
                <h1>
                  <span className="color-box">Hi, this is</span>
                </h1>
                <h2>Monika Kumari</h2>
              </div>
              {/* <h3>Frontend Developer</h3> */}
              <TypeAnimation
                className="frontend"
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "Frontend Developer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "Web Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
              <p className="para">
                Im a WebDeveloper with learing experience of 3 year. Creative
                and detail-oriented Frontend Web Developer with expertise in
                React, JavaScript, HTML, and CSS. Skilled in building
                responsive, user-friendly interfaces. Seeking to contribute
                technical and creative skills to deliver web solutions for
                business.
                <br />
                <br />
                Working for myself to imporve my skills.
              </p>
              <div className="hero-secbutton">
                <Link to="https://drive.google.com/file/d/1OCFj3LySpDDndt-hHGxww5hOObVCfkux/view?usp=sharing">
                  <button className="btn1">
                    <span>Download CV</span>
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="btn2">
                    <span>Contact</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
