import React from "react";
import style from "./index.module.scss";
import clsx from "clsx";

const LoadingScreen = ({ className }: { className: string }) => {
  return (
    <div className={clsx(style.loadingScreen, className)} id="loadingScreen">
      <div className={style.animate}>
        <p>
          <span className="animate__animated animate__zoomIn animate__infinite animate_slower delay100"></span>
        </p>
        <p>
          <span className="animate__animated animate__zoomIn animate__infinite animate_slower delay200"></span>
        </p>
        <p>
          <span className="animate__animated animate__zoomIn animate__infinite animate_slower delay300"></span>
        </p>
      </div>
      <p className="animate__animated animate__pulse animate__infinite">
        {"<TrungKhai.portfolio/>"}
      </p>
    </div>
  );
};

export default LoadingScreen;
