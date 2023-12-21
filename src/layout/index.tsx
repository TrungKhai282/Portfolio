import React from "react";
import style from "./index.module.scss";
import Header from "./header";
import Footer from "./footer";

type LayoutPropsType = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutPropsType) => {
  return (
    <div className={style.page}>
      <Header />
      <div className={style.main}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
