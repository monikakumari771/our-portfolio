import { FaStar } from "react-icons/fa";
import data from "../data.json";
import { Link } from "react-router-dom";

function Projects() {
  const projects = data.projects;

  return (
    <>
      <section id="project-sec">
        <div className="project-cont" div data-aos="fade-up">
          <div className="left">
            <h1>Projects & Experience</h1>
            <div className="underline"></div>
            <p>
              You can find all of my projects on my profile on Github. You can
              view my activities, contributions and code on these projects. Some
              of these are completed and some are in progress. You can also
              leave comments on the profile and start a discussion. I am always
              looking for new projects and Ideas. You can also reach out to me
              on any of the social media channels mentioned below.
            </p>
            <Link to="https://github.com/monikakumari771/portfolio">
              <button className="button-btn">
                <span>
                  <FaStar color="orange" fontSize={22} />
                </span>
                <span>Start me on Github</span>
              </button>
            </Link>
          </div>
          <div className="right">
            <img className="img" src="./assets/Images/Images (3)/project.jpg" />
          </div>
        </div>
      </section>
      {/* project-container start */}
      <section id="project-container">
        <div className="projects" div data-aos="fade-up">
          {projects.map((items) => {
            return (
              <div className="project1">
                <img className="img" src={items.image} />
                <h1>{items.title}</h1>
                <p>{items.desc}</p>
                <div className="mini-heading">
                  <h2>{items.category}</h2>
                  <h2>{items.date}</h2>
                </div>
                <div className="buttons">
                  <Link to={items.code} target="_blank">
                    <button>
                      <span>Project Code</span>
                    </button>
                  </Link>
                  <Link to={items.live} target="_blank">
                    <button>
                      <span>Live Demo</span>
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Projects;
