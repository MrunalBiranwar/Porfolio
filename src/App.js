import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    // Add event listener to track mouse movement
    window.addEventListener("mousemove", updateCursorPosition);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);
  return (
    <div>
    {/* Cursor Glow Effect */}
    <div
        className="cursor-glow"
        style={{
          top: `${cursorPosition.y}px`,
          left: `${cursorPosition.x}px`,
        }}
      />
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
