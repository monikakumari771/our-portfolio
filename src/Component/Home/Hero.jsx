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
                Im a WebDeveloper with learing experience of 2 year. Currently
                pursing BCA from Vinoba Bhave University. I am very passionate
                about improving my coding skill & developing website and
                applications.
                <br />
                <br />
                Working for myself to imporve my skills.
              </p>
              <div className="hero-secbutton">
                <Link to="https://drive.google.com/file/d/1Ph8MwEXgNpJnL6eJ2wdBOGBtV5GlbwHY/view?usp=sharing">
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
