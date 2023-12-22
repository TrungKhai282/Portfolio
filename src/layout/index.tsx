import React from "react";
import style from "./index.module.scss";
import Header from "./header";
import Footer from "./footer";
import ProtectLayout from "./protect-layout";

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
    </div>
  );
};

export default Layout;
