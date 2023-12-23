import React from "react";
import style from "./index.module.scss";
import Header from "./header";
import Footer from "./footer";
import ProtectLayout from "./protect-layout";
import TopLoader from "./top-loader";

type LayoutPropsType = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutPropsType) => {
  return (
    <div className={style.page}>
      <ProtectLayout>
        <Header />
        <div className={style.main}>{children}</div>
        <Footer />
      </ProtectLayout>
      <TopLoader />
    </div>
  );
};

export default Layout;
