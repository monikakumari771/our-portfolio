import React from "react";
import { CgWebsite } from "react-icons/cg";
import { TbDeviceMobile } from "react-icons/tb";
import { TbFileCertificate } from "react-icons/tb";
import { Link } from "react-router-dom";

function Help() {
  return (
    <>
      <section id="Help-section">
        <div className="LeftSectionHelp">
          <div className="left">
            <Link to="/Projects">
              <div className="box">
                <div className="box1">
                  <CgWebsite size={40} />
                </div>

                <div className="left-desc">
                  <h1>Website</h1>
                  <p>10+ project</p>
                </div>
              </div>
            </Link>
            <Link to="/Projects">
              <div className="box">
                <div className="box2">
                  <TbDeviceMobile size={40} />
                </div>
                <div className="left-desc">
                  <h1>Mobile App</h1>
                  <p>1+ project</p>
                </div>
              </div>
            </Link>
            <Link to="/Education">
              <div className="box">
                <div className="box3">
                  <TbFileCertificate size={40} />
                </div>
                <div className="left-desc">
                  <h1>Certification</h1>
                  <p>10+</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="right">
            <h1>What do I help ?</h1>
            <div className="underline"></div>
            <br />

            <p>
              I make websites that are easy to use, meet the client's needs, and
              work well even as they grow. I pay close attention to every little
              thing to make sure they work fast and are reliable.
              <br />
              <br />
              With a creative and analytical mindset, I thrive on tackling
              complex challenges and delivering innovative solutions. Through
              this website, I invite you to explore my work and learn more about
              my skills, experiences, and accomplishments.
            </p>
            <div className="right-cont">
              <div className="First-cont">
                <h1>20+</h1>
                <p>project Complete</p>
              </div>
              <div className="Second-cont">
                <h1>20+</h1>
                <p>Happy Client</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Help;
