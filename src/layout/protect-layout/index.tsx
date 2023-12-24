"use client";

import LoadingScreen from "@/components/loading";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

type PropsType = {
  children: React.ReactNode;
};

const ProtectLayout = ({ children }: PropsType) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isFadeOut, setIsFadeOut] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsFadeOut(true);
      setTimeout(() => {
        setShouldRender(true);
      }, 800);
    }
  }, []);

  return shouldRender ? (
    children
  ) : (
    <LoadingScreen
      className={clsx({ ["animate__animated animate__fadeOut"]: isFadeOut })}
    />
  );
};

export default ProtectLayout;
