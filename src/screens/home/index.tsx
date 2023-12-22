import React from "react";
import style from "./index.module.scss";
import Personal from "./personal";
import TechStack from "./techStack";
import Projects from "./projects";

const HomeScreen = () => {
  return (
    <div className={style.homeScreen}>
      <Personal />
      <TechStack />
      <Projects />
    </div>
  );
};

export default HomeScreen;
