/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "./index.module.scss";
import Info from "@/common/info.json";
import clsx from "clsx";

const TeachStackScreen = () => {
  return (
    <div
      className={clsx(
        style.techStackScreen,
        "animate__animated animate__fadeIn"
      )}
    >
      <div className={style.title}>
        My tech stack
        <p>Technologies I’ve been working with recently</p>
      </div>
      <div className={style.techList}>
        {Info.techStack.map((item, index) => (
          <div key={item.name} className={style.item}>
            <img
              className={`animate__animated animate__bounceIn animate__fast delay${
                index + 1
              }00`}
              src={item.imgUrl}
              alt=""
            />
            <div
              className={clsx(
                style.name,
                "animate__animated animate__fadeInUp animate__faster"
              )}
            >
              <span>{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachStackScreen;
