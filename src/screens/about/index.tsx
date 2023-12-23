import React from "react";
import style from "./index.module.scss";
import WorkTag from "@/components/workTag";
import clsx from "clsx";

const AboutScreen = () => {
  return (
    <div
      className={clsx(style.aboutScreen, "animate__animated animate__fadeIn")}
    >
      <div className={style.frame}>
        <div
          className={clsx(
            style.title,
            "animate__animated animate__bounceInUp delay100"
          )}
        >
          About me
        </div>
        <p className="animate__animated animate__bounceInUp delay100">
          Currently, as a Frontend Engineer with more than 2 years of
          experience, I always bring as much value as possible to the projects I
          participate in. For me programming is a joy. I am still developing
          myself every day, learning many new skills. In the future I want to
          become a Fullstack Js Engineer. Furthermore, I hope I can take on more
          important positions in the business such as Project Manager or
          Technical Architect
        </p>
        <div
          className={clsx(
            style.title,
            "animate__animated animate__bounceInUp delay200"
          )}
        >
          Work Exprerience
        </div>
        <WorkTag
          name="Frontend Engineer"
          tag="Full time"
          company="Bitto Solution"
          location="Ho Chi Minh City, Viet Nam"
          time="11/2021 - Present"
          className="animate__animated animate__bounceInUp delay200"
        />
        <div
          className={clsx(
            style.title,
            "animate__animated animate__bounceInUp delay300"
          )}
        >
          Education
        </div>
        <WorkTag
          name="Bachelor's degree in information technology"
          // tag="Full time"
          company="FPT Polytechnic"
          location="Ho Chi Minh City, Viet Nam"
          time="9/2019 - 12/2021"
          className="animate__animated animate__bounceInUp delay300"
        />
      </div>
    </div>
  );
};

export default AboutScreen;
