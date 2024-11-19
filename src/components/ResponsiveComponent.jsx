"use client";

import React from "react";
import useScreenSize from "./hooks/useScreenSize";

const ResponsiveComponent = ({ children }) => {
  const size = useScreenSize();

  return <>{typeof children === "function" ? children({ size }) : null}</>;
};

export default ResponsiveComponent;
