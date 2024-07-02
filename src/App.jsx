import React from 'react';
import "./index.scss"
import Navbar from './components/Navbar/Navbar';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import Projects from './components/Project/Projects';
import Contact from './components/Contact/Contact';




function App() {
    return (
        <div className="App">
            
            <Navbar/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Contact/>
            
            
            
        </div>
    );
}

export default App;
