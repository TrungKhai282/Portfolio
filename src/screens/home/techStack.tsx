import React from "react";
import style from "./index.module.scss";

const listIcon = [
  "html",
  "css",
  "js",
  "ts",
  "nodejs",
  "reactjs",
  "nextjs",
  "redux",
  "tailwind",
  "sass",
  "antd",
  "git",
  "github",
  "vscode",
];

const TechStack = () => {
  return (
    <div className={style.techStack}>
      <div className={style.title}>
        <p>My Tech Stack</p>
        <span>Technologies I’ve been working with recently</span>
      </div>
      <div className={style.techList}>
        {listIcon.map((item) => (
          <div key={item} className={style.item}>
            <img src={`/stackIcon/${item}.svg`} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default TechStack;
