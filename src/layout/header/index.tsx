"use client";
import React, { LegacyRef, useEffect, useRef, useState } from "react";
import style from "../index.module.scss";
import Link from "next/link";

import GithubIcon from "@/assets/icons/github.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import clsx from "clsx";
import CloseIcon from "@/assets/icons/close.svg";
import MenuIcon from "@/assets/icons/menu.svg";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [fixHeader, setFixHeader] = useState(false);
  const mobileMenuRef: LegacyRef<HTMLDivElement> | null = useRef(null);
  const html = document.querySelector("html");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 500) {
        setFixHeader(true);
      }

      window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
          setFixHeader(true);
        } else {
          setFixHeader(false);
        }
      });
    }

    setOpenMobileMenu(false);
  }, [window, pathname]);

  const closeMobileMenu = () => {
    mobileMenuRef.current?.classList.add("animate__fadeOut");
    setTimeout(() => {
      setOpenMobileMenu(false);
    }, 500);
  };

  useEffect(() => {
    if (html) {
      if (openMobileMenu) {
        html.style.overflow = "hidden";
      } else {
        html.style.overflow = "auto";
      }
    }
  }, [openMobileMenu, html]);

  return (
    <>
      <div
        className={clsx(style.header, "animate__animated animate__fadeInDown", {
          [style.fixed]: fixHeader,
          ["animate__slideInDown"]: fixHeader,
        })}
      >
        <div className={style.container}>
          <Link href={"/"} className={style.logo}>
            Portfolio
          </Link>
          <div className={style.navbar}>
            <div className={style.navList}>
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
            <div className={style.navIconList}>
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
            <button
              className={style.menuMobileBtn}
              onClick={() => setOpenMobileMenu(true)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
      {openMobileMenu && (
        <div
          ref={mobileMenuRef}
          className={clsx(
            style.menuMobile,
            "animate__animated animate__fadeIn"
          )}
        >
          <Link
            href={"/"}
            className={clsx(
              style.navItem,
              "animate__animated animate__bounceInUp delay200"
            )}
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className={clsx(
              style.navItem,
              "animate__animated animate__bounceInUp delay300"
            )}
          >
            About
          </Link>
          <Link
            href={"/tech-stack"}
            className={clsx(
              style.navItem,
              "animate__animated animate__bounceInUp delay400"
            )}
          >
            Tech Stack
          </Link>
          <Link
            href={"/project"}
            className={clsx(
              style.navItem,
              "animate__animated animate__bounceInUp delay500"
            )}
          >
            Project
          </Link>
          <Link
            href={"/contact"}
            className={clsx(
              style.navItem,
              "animate__animated animate__bounceInUp delay600"
            )}
          >
            Contact
          </Link>
          <div
            className={clsx(
              style.navIconList,
              "animate__animated animate__bounceInUp delay700"
            )}
          >
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
          <button
            className={clsx(
              style.close,
              "animate__animated animate__fadeIn delay800"
            )}
            onClick={closeMobileMenu}
          >
            <CloseIcon />
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
