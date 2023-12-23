import React from "react";
import style from "./index.module.scss";
import ProjectCard from "@/components/projectCard";
import Info from "@/common/info.json";

const Projects = () => {
  return (
    <div className={style.project}>
      <div className={style.title}>
        <p>Projects</p>
        <span>The projects I have participated in building so far</span>
      </div>
      <div className={style.listProject}>
        {Info.project.map((item, index) => (
          <ProjectCard
            key={item.name}
            className={style.item}
            title={item.name}
            desc={item.desc}
            imageUrl={item.img}
            id={index + 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
