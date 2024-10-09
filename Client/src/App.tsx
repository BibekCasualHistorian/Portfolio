import { useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SkillsExperiences from "./components/Skills&Experience";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  const handleTheme = () => {
    console.log("handleTheme", theme);
    setTheme((prevState) => {
      return prevState === "light" ? "dark" : "light";
    });
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={theme == "dark" ? "bg-theme-dark" : "bg-theme-light"}>
      <div className={` min-h-screen flex flex-col`}>
        <Navbar theme={theme} handleTheme={handleTheme} />
        <Main />
      </div>
      <AboutMe />
      <SkillsExperiences />
      {/* <Experience /> */}
      {/* <MySkills /> */}
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
