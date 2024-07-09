import React from 'react';
import "./index.scss"
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Project/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ScrollArrow from './components/ScrollArrow/ScrollArrow';
import Experience from './components/Experience/Experience';




function App() {
    return (
        <div className="App">
            
            <Navbar/>
            <Header/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Experience/>
            <Contact/>
            <Footer/>
            <ScrollArrow direction="up" targetId="home" />
            
            
            
        </div>
    );
}

export default App;
