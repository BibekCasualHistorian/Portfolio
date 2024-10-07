import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SkillsExperiences from "./components/Skills&Experience";

function App() {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <Navbar />
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
