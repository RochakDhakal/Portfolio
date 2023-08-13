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
function App() {

  return (
    <>
      <Navbar />
      <Name />
      <Intro />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
