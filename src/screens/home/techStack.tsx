/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./index.module.scss";
import Info from "@/common/info.json";

const TechStack = () => {
  return (
    <div className={style.techStack}>
      <div className={style.title}>
        <p>My Tech Stack</p>
        <span>Technologies I’ve been working with recently</span>
      </div>
      <div className={style.techList}>
        {Info.techStack.map((item) => (
          <div key={item.name} className={style.item}>
            <img src={item.imgUrl} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default TechStack;
