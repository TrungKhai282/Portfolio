"use client";

import LoadingScreen from "@/components/loading";
import React, { useEffect, useState } from "react";

type PropsType = {
  children: React.ReactNode;
};

const ProtectLayout = ({ children }: PropsType) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShouldRender(true);
    }
  }, []);

  return shouldRender ? children : <LoadingScreen />;
};

export default ProtectLayout;
