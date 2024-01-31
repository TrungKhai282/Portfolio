/* eslint-disable @next/next/no-img-element */
import React from "react";
import style from "../index.module.scss";
import Link from "next/link";

import GithubIcon from "@/assets/icons/github.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import clsx from "clsx";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.info}>
          <div className={style.left}>
            <img src="/sign.png" alt="" />
          </div>
          <div className={style.right}>
            <p>+84365472802</p>
            <p>khainguyentrantrung@gmail.com</p>
            <div className={style.social}>
              <Link
                href={"https://github.com/TrungKhai282"}
                target="_blank"
                className={style.iconItem}
              >
                <GithubIcon />
              </Link>
              <Link
                href={"https://linkedin.com/in/khaitrung2822001"}
                target="_blank"
                className={style.iconItem}
              >
                <LinkedinIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className={style.navbar}>
          <div className={clsx(style.listNav, "animate__animated")}>
            <Link href={"/"} className={style.navItem}>
              Home
            </Link>
            <Link href={"/about"} className={style.navItem}>
              About
            </Link>
            <Link href={"/tech-stack"} className={style.navItem}>
              Tech Stack
            </Link>
            <Link href={"/project"} className={style.navItem}>
              Project
            </Link>
            <Link href={"/contact"} className={style.navItem}>
              Contact
            </Link>
          </div>
          <p>
            Built by <span>Trung Khai</span> with <span>Love</span> &{" "}
            <span>Coffee</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
