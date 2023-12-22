import React from "react";
import style from "./index.module.scss";
import clsx from "clsx";
import Image from "next/image";

const Personal = () => {
  return (
    <div className={style.personal}>
      <div
        className={clsx(
          style.text,
          "animate__animated animate__fadeInDown animate__slow delay500"
        )}
      >
        <p>Hi 👋,</p>
        <p>My name is</p>
        <p className={style.name}>Trung Khai</p>
        <p>I build things for web</p>
      </div>
      <div
        className={clsx(
          style.avatar,
          "animate__animated animate__fadeIn delay500 animate__slow"
        )}
      >
        <Image width={400} height={400} src="/Khai.png" alt="" />
      </div>
    </div>
  );
};

export default Personal;
