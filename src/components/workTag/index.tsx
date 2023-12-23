import React from "react";
import style from "./index.module.scss";
import clsx from "clsx";

type PropsType = {
  className?: string;
  name: string;
  tag?: string;
  company: string;
  location: string;
  time: string;
};

const WorkTag = (props: PropsType) => {
  return (
    <div className={clsx(style.workTag, props.className || "")}>
      <div className={style.top}>
        <div className={style.name}>{props.name}</div>
        {props.tag && <div className={style.tag}>{props.tag}</div>}
      </div>
      <div className={style.bottom}>
        <div className={style.left}>
          <div className={style.company}>🏢 {props.company}</div>
          <div className={style.location}>📌 {props.location}</div>
        </div>
        <div className={style.right}>
          <div className={style.time}>🗓️ {props.time}</div>
        </div>
      </div>
    </div>
  );
};

export default WorkTag;
