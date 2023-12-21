import React from "react";
import style from "../index.module.scss";
import Link from "next/link";

import GithubIcon from "@/assets/icons/github.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.info}>
          <div className={style.left}>Portfolio</div>
          <div className={style.right}>
            <p>+84365472802</p>
            <p>khainguyentrantrung@gmail.com</p>
            <div className={style.social}>
              <Link href={"/"} className={style.iconItem}>
                <GithubIcon />
              </Link>
              <Link href={"/"} className={style.iconItem}>
                <LinkedinIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className={style.navbar}>
          <div className={style.listNav}>
            <Link href={"/"} className={style.navItem}>
              Home
            </Link>
            <Link href={"/"} className={style.navItem}>
              About
            </Link>
            <Link href={"/"} className={style.navItem}>
              Tech Stack
            </Link>
            <Link href={"/"} className={style.navItem}>
              Project
            </Link>
            <Link href={"/"} className={style.navItem}>
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
