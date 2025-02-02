import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function Education() {
  return (
    <>
      <section id="education-sec">
        <div className="education-cont" div data-aos="fade-up">
          <div className="left">
            <h1>Education Journey</h1>
            <div className="underline"></div>
            <p>
              My education journey has been an exciting and transformative path
              that has shaped my knowledge, skills, and personal growth. From
              the early stages of my academic life to the pursuit of higher
              education, each step has played a crucial role in shaping my
              educational foundation and preparing me for future endeavors.
              <br />
              <br />
              Education Is Not The Learning Of Facts, But The Training Of The
              Mind To Think.
            </p>
            <button>Start Now</button>
          </div>
          <div className="right">
            <img className="img" src="./assets/Images/Images (3)/journey.png" />
          </div>
        </div>
      </section>
      {/* lets start section */}
      <section id="lets-section">
        <h1>Lets start</h1>
        <div className="lets-cont" div data-aos="fade-up">
          <div className="left">
            <img className="img" src="./assets/Images/dav.jpg" />
          </div>
          <div className="right">
            <div className="school-sec">
              <div className="school-image">
                <img className="img" src="./assets/Images/davlogo.jpeg" />
              </div>
              <div className="school-item">
                <h2>DAV Public School</h2>
                <h3>10th (2009-2019)</h3>
              </div>
            </div>
            <span className="item">CBSE</span>
            <p>
              National Public School is a co-education, english medium, senior
              secondary school, affiliated with CBSE and located at New Area,
              Hazaribagh, Jharkhand. The school was established in 1977 and
              managed by Laxman Kaushaliya Chandravansi Memorial Educational
              Society.
            </p>
          </div>
        </div>
        <div className="lets-cont lets-cont2" div data-aos="fade-up">
          <div className="left">
            <img className="img" src="./assets/Images/Images (3)/isc.jpg" />
          </div>
          <div className="right">
            <div className="school-sec school-sec2">
              <div className="school-image">
                <img
                  className="img"
                  src="./assets/Images/Images (3)/isclogo.png"
                />
              </div>
              <div className="school-item">
                <h2>Inter Science College</h2>
                <h3>12th (2019-2021)</h3>
              </div>
            </div>
            <span className="item">JAC - SCIENCE</span>
            <p>
              INTER SCIENCE COLLEGE HAZARIBAG is located in Rural area of
              Jharkhand state/ut of India. In Ward No.01 area of Hazaribagh
              block of Hazaribag district. The year of establishment of Inter
              Science College is 2005. Inter Science College is a Co-Educational
              school. It is a Sr. Secondary School (Class 11-12), where lowest
              class is 11th and highest class is 12th.
            </p>
          </div>
        </div>
        <div className="lets-cont" div data-aos="fade-up">
          <div className="left">
            <img className="img" src="./assets/Images/k.b.jpg" />
          </div>
          <div className="right">
            <div className="school-sec school-sec2">
              <div className="school-image school-image2">
                <img className="img" src="./assets/Images/k.blogo.jpg" />
              </div>
              <div className="school-item">
                <h2>K.B Womens College</h2>
                <h3>UG (2021-2024)</h3>
              </div>
            </div>
            <span className="item">K.B.W - BCA</span>
            <p>
              Department of Computer Application of K.B Womens College is First
              AICTE approved department in the Jharkhand. The Year of
              Establishment is 1964. K.B Womes College is funded by the agencies
              of Government of India and Jharkhand State.
            </p>
          </div>
        </div>
      </section>

      {/* /certificate sec  start*/}

      <section id="certificate">
        <h1>Certificates</h1>
        <div className="underline"></div>
        <div className="certi-cont" div data-aos="fade-up">
          <div className="certi-item1">
            <div className="freecode-image">
              <img className="img" src="./assets/Images/FreeCodeCamp.png" />
            </div>
            <div className="certi-box">
              <h2>Responsive Web Design</h2>
              <h3>- FreeCodeCamp</h3>
            </div>
            <div className="certi-date">
              <p>29th sep 2023 </p>
              <span>
                <FaArrowUpRightFromSquare size={22} color="#716d6d" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Education;
