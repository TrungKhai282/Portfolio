/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./index.module.scss";
import clsx from "clsx";
import Link from "next/link";

type PropsType = {
  className: string;
  title: string;
  desc: string;
  imageUrl: string;
  id?: string | number;
};

const ProjectCard = (props: PropsType) => {
  const { className, title, desc, imageUrl, id } = props;

  return (
    <Link href={`/project/${id || 1}`} className={clsx(style.card, className)}>
      <div className={style.cardImage}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={style.cardInfo}>
        <div className={style.title}>{title}</div>
        <div className={style.desc}>{desc}</div>
      </div>
    </Link>
  );
};

export default ProjectCard;
