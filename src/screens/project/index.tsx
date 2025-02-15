import React from "react";
import style from "./index.module.scss";
import Info from "@/common/info.json";
import ProjectCard from "@/components/projectCard";
import clsx from "clsx";

const ProjectScreen = () => {
  return (
    <div
      className={clsx(style.projectScreen, "animate__animated animate__fadeIn")}
    >
      <div className={style.title}>
        Projects
        <p>The projects I have participated in building so far</p>
      </div>
      <div className={style.listProject}>
        {Info.project
          .filter((item) => !item.hidden)
          .map((item, index) => (
            <ProjectCard
              key={item.name}
              className={clsx(
                style.item,
                `animate__animated animate__bounceIn animate__fast delay${
                  index + 1
                }00`
              )}
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

export default ProjectScreen;
