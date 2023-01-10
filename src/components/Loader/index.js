import React from "react";
import "./style.scss";

import Loader from "./InlineLoader";

const LoaderWrapper = () => {
  return (
    <div className="loader-container">
      <div className="loader-background"></div>
      <Loader />
    </div>
  );
};

export default LoaderWrapper;
