import React from "react";
import "./style.scss";
import LoaderDotsGif from "../../../assets/img/loader-gif.gif";

const LoaderDots = ({ className = "" }) => {
  return (
    <div className={`loader-dots-container ${className}`}>
      <img src={LoaderDotsGif} alt="Loader Gif" />
    </div>
  );
};

export default LoaderDots;
