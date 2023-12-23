/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import React from "react";
import style from "./index.module.scss";
import Info from "@/common/info.json";
import Link from "next/link";

type PropsType = {
  id: string;
};

const ProjectDetailScreen = ({ id }: PropsType) => {
  const project = Info.project[Number(id) - 1];

  return (
    <div
      className={clsx(style.aboutScreen, "animate__animated animate__fadeIn")}
    >
      <div
        className={clsx(
          style.left,
          "animate__animated animate__fadeInLeft delay100"
        )}
      >
        <div className={style.title}>Description</div>
        <p>{project.desc}</p>
        <div className={style.title}>Responsibility</div>
        <ul>
          {project.responsibility.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className={style.title}>Tech stack</div>
        <ul>
          {project.techs.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div
        className={clsx(
          style.right,
          "animate__animated animate__fadeInRight delay100"
        )}
      >
        <div className={style.image}>
          <img src={project.img} alt={project.name} />
        </div>
        <div className={style.info}>
          <div className={style.name}>{project.name}</div>
          <div className={style.position}>
            My Position: <span>{project.position}</span>
          </div>
          {project.link && (
            <div className={style.visit}>
              Visit: 👉🏻{" "}
              <Link target="_blank" href={project.link}>
                Click here
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailScreen;
