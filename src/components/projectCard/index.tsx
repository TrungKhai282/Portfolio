/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./index.module.scss";
import clsx from "clsx";

type PropsType = {
  className: string;
  title: string;
  desc: string;
  imageUrl: string;
};

const ProjectCard = (props: PropsType) => {
  const { className, title, desc, imageUrl } = props;

  return (
    <div className={clsx(style.card, className)}>
      <div className={style.cardImage}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={style.cardInfo}>
        <div className={style.title}>{title}</div>
        <div className={style.desc}>{desc}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
