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
                <h3>Frontend-Developer</h3>
              </div>
              <div className="cbse">
                <span className="color-box">2 year</span>

                <span>REACT JS</span>
              </div>
              <div className="icons">
                <div className="react-icon">
                  <RxThickArrowRight />
                  <p>2 year as Freelance Frontend Developer</p>
                </div>
              </div>
              <div className="para">
                <RxThickArrowRight />

                <p>
                  I have done several projects as individual and collaborative
                  based on React js.
                </p>
              </div>
            </div>
            <div className="educ-box" div data-aos="fade-up">
              <div className="educ-matrix">
                <h3>Open Source Contribution</h3>
              </div>
              <div className="cbse">
                <span className="color-box">2 month</span>

                <span>SSOC</span>
              </div>
              <div className="icons">
                <div className="react-icon">
                  <RxThickArrowRight />
                  <p>Successfully merged several branch on github</p>
                </div>
              </div>
              <div className="para">
                <RxThickArrowRight />

                <p>Still working as Open Source Contributer</p>
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
