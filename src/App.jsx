import React from "react";
import Header from "./components/Header";
import TopContainer from "./components/TopContainer";
import SkillContainer from "./components/SkillContainer";
import ProjectContainer from "./components/ProjectContainer";
import Experience from "./components/Experience";

const App = () => {
  return (<>
    <div className="div overflow-x-hidden">
      <Header />
      <TopContainer />
      <SkillContainer/>
      <ProjectContainer/>
      <Experience/>
    </div>
  </>);
}

export default App;