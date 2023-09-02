import { useState } from "react";
import "./App.css";
import Navbar from "./components/header/Navbar";
import Name from "./components/body/Name";
import Intro from "./components/body/Intro";
import Skills from "./components/body/Skills";
import Projects from "./components/body/Projects";
import Experience from "./components/body/Experience";
import Contact from "./components/body/Contact";
import Footer from "./components/footer/Footer";
import GoToTop from "./components/utilities/GoToTop";
import CustomCursor from "./components/utilities/CustomCursor";
import Connection from "./components/utilities/Connection";
function App() {
  return (
    <>
      <Navbar />
      <Name />
      <Intro />
      <Projects />
      <GoToTop/> {/* Function: Scroll to Page Top */}
      <Skills />
      <Experience />
      <Contact />
      <Footer/>
      <CustomCursor/>{/* Function : Custom Cursor  */}
      <Connection/>{/* Online Status */}
    </>
  );
}

export default App;
