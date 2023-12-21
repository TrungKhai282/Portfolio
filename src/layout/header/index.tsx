import React from "react";
import style from "../index.module.scss";
import Link from "next/link";

import GithubIcon from "@/assets/icons/github.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>Portfolio</div>
        <div className={style.navbar}>
          <div className={style.navList}>
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
          <div className={style.navIconList}>
            <Link href={"/"} className={style.iconItem}>
              <GithubIcon />
            </Link>
            <Link href={"/"} className={style.iconItem}>
              <LinkedinIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
