import React from "react";
import style from "./index.module.scss";

const LoadingScreen = () => {
  return (
    <div className={style.loadingScreen}>
      <p className="animate__animated animate__pulse animate__infinite">
        {"<TrungKhai.portfolio/>"}
      </p>
    </div>
  );
};

export default LoadingScreen;
