import "./app.scss";
import Topbar from "./components/topbar/topbar.jsx";
import Intro from "./components/intro/intro.jsx";
import Projects from "./components/projects/projects.jsx";
import Skills from "./components/skills/skills.jsx";
import Contact from "./components/contact/contact.jsx";
import Menu from "./components/menu/menu.jsx";
import Works from "./components/works/works.jsx"
import About from "./components/about/about.jsx";
import { useState } from "react";
import ProjectApi from "./components/ProjectApi/ProjectApi";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";



function App() {
  const [state,setState]= useState(false);
 

  return (
 <div className="app">
   <Topbar setState={setState} state={state} />
   <Menu setState={setState} state={state} />
 <div className="sections">
 <Router>
  <Routes>
  <Route path="/portfolio" element={[
                <Intro />,
                <About/>,
                <Skills/>,
                <Works/>,
                <Projects/>,
                <Contact/>
                ]}
          />
  <Route path="/projects" element={<ProjectApi/>}/>
  </Routes>
 </Router>
 
  </div>
  </div>

  );
}

export default App;
