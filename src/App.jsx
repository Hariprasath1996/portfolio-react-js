import React from "react";
import Header from "./components/Header";
import TopContainer from "./components/TopContainer";
import SkillContainer from "./components/SkillContainer";

const App = () => {
  return (<>
    <div className="div overflow-x-hidden">
      <Header />
      <TopContainer />
      <SkillContainer/>
    </div>
  </>);
}

export default App;