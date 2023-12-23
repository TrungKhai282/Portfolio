import React from "react";
import style from "./index.module.scss";
import clsx from "clsx";

const ContactScreen = () => {
  return (
    <div className={style.contactScreen}>
      <p className="animate__animated animate__bounceInUp delay100">
        For any questions please mail me:
      </p>
      <p
        className={clsx(
          style.mail,
          "animate__animated animate__bounceInUp delay200"
        )}
      >
        khainguyentrantrung@gmail.com
      </p>
    </div>
  );
};

export default ContactScreen;
