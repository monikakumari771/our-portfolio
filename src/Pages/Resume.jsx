import React from "react";
import { RxThickArrowRight } from "react-icons/rx";
import Lineprogress from "../Component/Resume/Lineprogress";
import Circleprogress from "../Component/Resume/Circleprogress";

function Resume() {
  return (
    <>
      <section id="resume">
        <h1>Resume</h1>
        <div className="line"></div>
        <div className="education-cont">
          <div className="left">
            <h2>Education</h2>
            <div className="educ-box" div data-aos="fade-up">
              <div className="educ-matrix">
                <h3>Matriculation</h3>
              </div>
              <div className="cbse">
                <span className="color-box">2019 </span>

                <span>CBSE</span>
              </div>
              <div className="icons">
                <div className="react-icon">
                  <RxThickArrowRight />
                  <p>DAV Public School, Barhi</p>
                </div>
              </div>
              <div className="para">
                <RxThickArrowRight />

                <p>60%</p>
              </div>
            </div>
            <div className="educ-box" div data-aos="fade-up">
              <div className="educ-matrix">
                <h3>Intermediate</h3>
              </div>
              <div className="cbse">
                <span className="color-box">2021</span>
                <span>JAC</span>
              </div>

              <div className="icons">
                <div className="react-icon">
                  <RxThickArrowRight />
                  <p>Inter Sciecne College, Hazaribagh</p>
                </div>
                <div className="react-icon">
                  <RxThickArrowRight />
                  <p>PCMB</p>
                </div>
              </div>
              <div className="para">
                <RxThickArrowRight className="react-icon" />

                <p>68%</p>
              </div>
            </div>
            <div className="educ-box" div data-aos="fade-up">
              <div className="educ-matrix">
                <h3>Graduation</h3>
              </div>
              <div className="cbse">
                <span className="color-box">2024</span>
                <span>K.B.W</span>
              </div>

              <div className="icons">
                <div className="react-icon">
                  <RxThickArrowRight />
                  <p>K.B Women's College, Hazaribagh</p>
                </div>
                <div className="react-icon">
                  <RxThickArrowRight />
                  <p>BCA</p>
                </div>
              </div>
              <div className="para">
                <RxThickArrowRight className="react-icon" />

                <p>8.3 SGPA</p>
              </div>
            </div>

            <Lineprogress />
          </div>

          <div className="right">
            <h2>Experience</h2>
            <div className="educ-box" div data-aos="fade-up">
              <div className="educ-matrix">
                <h3> Junior Frontend-Developer</h3>
              </div>
              <div className="cbse">
                <span className="color-box">
                  Efficientem Engineering Pvt.Ltd
                </span>

                <span>REACT </span>
              </div>
              <div className="icons">
                <div className="react-icon">
                  <RxThickArrowRight />
                  <p>3 year as Freelance Frontend Developer</p>
                </div>
              </div>
              <div className="para">
                <RxThickArrowRight />

                <p>
                  <RxThickArrowRight />
                  Frontend Development – Building responsive and dynamic UIs
                  with React.js. <br />
                  Mobile Development – Creating cross-platform apps using React
                  Native. <br />
                </p>
              </div>
            </div>
            <div className="educ-box" div data-aos="fade-up">
              <div className="educ-matrix">
                <h3>Web Developer</h3>
              </div>
              <div className="cbse">
                <span className="color-box">
                  Intership At Tprosysit IT OPC Pvt Ltd
                </span>

                <span>REACT JS</span>
              </div>
              <div className="icons">
                <div className="react-icon">
                  <RxThickArrowRight />
                  <p>
                    Working for Government Project i.e Uttar Pradesh Metro
                    Railway Corporation
                  </p>
                </div>
              </div>
              <div className="para">
                <RxThickArrowRight />

                <p>Used React Redux ,various Component and materials ui</p>
              </div>
            </div>

            <div className="educ-box" div data-aos="fade-up">
              <div className="educ-matrix">
                <h3>Graphics Designer</h3>
              </div>
              <div className="cbse">
                <span className="color-box">2 year</span>
                <span>CANVA</span>
              </div>

              <div className="icons">
                <div className="react-icon">
                  <RxThickArrowRight />
                  <p>Created 3D models, renderings and video animations.</p>
                </div>
                <div className="react-icon">
                  <RxThickArrowRight />
                  <p>
                    Produced drawing and layouts and assisted clients throughout
                    the projects.
                  </p>
                </div>
              </div>
              <div className="para">
                <RxThickArrowRight className="react-icon" />

                <p>
                  Produced drawing and layouts and assisted clients throughout
                  the projects.
                </p>
              </div>
            </div>
            <Circleprogress />
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
