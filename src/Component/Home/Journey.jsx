import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function Journey() {
  return (
    <>
      <section id="journey-sec">
        <div className="journey-cont">
          <div className="left">
            <h1>My Journey</h1>
            <div className="underline"></div>
            <img className="flag-img" src="./assets/Images/flag.png" />
          </div>
          <div className="right">
            <div className="details-box">
              <div className="right-cont">
                <ul>
                  <h2>Matriculation</h2>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        className="icon"
                        size={"22px"}
                      />
                    </span>
                    <p> Completed in 2019</p>
                  </li>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        size={"22px"}
                        className="icon"
                      />
                    </span>
                    <p> DAV Public School Barhi</p>
                  </li>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        size={"22px"}
                        className="icon"
                      />
                    </span>
                    <p> Central Board of Secondary Education</p>
                  </li>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        size={"22px"}
                        className="icon"
                      />
                    </span>
                    <p> Percentage : 60%</p>
                  </li>
                </ul>
              </div>
              <div className="right-cont" div data-aos="fade-up">
                <ul>
                  <h2>Intermediate</h2>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        size={"22px"}
                        className="icon"
                      />
                    </span>
                    <p> 2019 - 2021</p>
                  </li>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        size={"22px"}
                        className="icon"
                      />
                    </span>
                    <p>Inter Science College Hazaribagh. </p>
                  </li>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        size={"22px"}
                        className="icon"
                      />
                    </span>
                    <p> Jharkhand Academic Council (JAC)</p>
                  </li>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        size={"22px"}
                        className="icon"
                      />
                    </span>
                    <p> Percentage : 68%</p>
                  </li>
                </ul>
              </div>
              <div className="right-cont" div data-aos="fade-up">
                <ul>
                  <h2> Graduation</h2>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        size={"22px"}
                        className="icon"
                      />
                    </span>
                    <p> 2021 - 2024</p>
                  </li>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        size={"22px"}
                        className="icon"
                      />
                    </span>
                    <p> K.B Women's College Hazaribagh</p>
                  </li>
                  <li>
                    <span className="icon-item">
                      <IoIosArrowDroprightCircle
                        size={"22px"}
                        className="icon"
                      />
                    </span>
                    <p> SGPA : 8.24</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Journey;
