import "./App.css";
import Footer from "./Component/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import ContactUs from "./Pages/ContactUs";
import Projects from "./Pages/Projects";
import Home from "./Pages/Home";
import Education from "./Pages/Education";
import Resume from "./Pages/Resume";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/Projects" element={<Projects />} />
          <Route exact path="/Education" element={<Education />} />
          <Route exact path="/Resume" element={<Resume />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
