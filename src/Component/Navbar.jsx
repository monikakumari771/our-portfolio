import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [showMediaIcons, SetShowMediaIcons] = useState(false);
  const gotoTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <section id="navbar-sec">
        <div className="nav-class">
          <div className="left">
            <img className="img" src="./assets/Images/Monikalogo.png" />
          </div>
          <div className={showMediaIcons ? "show" : "right"}>
            <ul>
              <Link to="/" onClick={gotoTop}>
                <li>Home</li>
              </Link>
              <Link to="/Resume" onClick={gotoTop}>
                <li>Resume</li>
              </Link>
              <Link to="/Projects" onClick={gotoTop}>
                <li>Project</li>
              </Link>
              <Link to="/Education" onClick={gotoTop}>
                <li>Education/Certificate</li>
              </Link>
              <Link to="/contact" onClick={gotoTop}>
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          {/* hamburget menu start */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => SetShowMediaIcons(!showMediaIcons)}>
              {showMediaIcons ? (
                <RxCross2 size={30} />
              ) : (
                <GiHamburgerMenu size={30} />
              )}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
