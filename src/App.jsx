import React from "react";
import Header from "./components/Header";
import TopContainer from "./components/TopContainer";
import SkillContainer from "./components/SkillContainer";
import ProjectContainer from "./components/ProjectContainer";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const App = () => {
  return (<>
    <div className="div overflow-x-hidden">
      <Header />
      <TopContainer />
      <SkillContainer/>
      <ProjectContainer/>
      <Experience/>
      <Contact/>
    </div>
  </>);
}

export default App;