import React from "react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages (now Sections)
import AboutPage from "./pages/AboutPage";
import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";
import MusicPage from "./pages/MusicPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-dark bg-light overflow-x-hidden selection:bg-accent selection:text-white">
      <Navbar />

      <main className="flex-grow pt-20">
        <section id="about" className="min-h-screen flex items-center justify-center p-0">
          <AboutPage />
        </section>
        
        <section id="education" className="bg-white">
          <EducationPage />
        </section>
        
        <section id="experience" className="bg-light">
          <ExperiencePage />
        </section>
        
        <section id="music" className="bg-[#FAFAFA]">
          <MusicPage />
        </section>
        
        <section id="skills" className="bg-white">
          <SkillsPage />
        </section>
        
        <section id="contact" className="bg-white">
          <ContactPage />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
