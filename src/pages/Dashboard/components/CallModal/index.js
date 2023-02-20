import React from "react";

import Timer from "../Timer";
import Button from "../../../../components/Button";

import "./style.scss";
import LoaderDots from "../../../../components/Loader/LoaderDots";

const CallModal = ({ handleClose }) => {
  return (
    <div className="call-modal-container">
      <div className="call-modal-header">Call in Progress</div>
      <div className="call-modal-content">
        <p className="find-ca-text">Finding expert CA to answer your query</p>
        <LoaderDots className="loader-dots"/>
        <ul>
          <li>Check your phone</li>
          <li>Answer call</li>
          <li>Start asking questions to experts</li>
        </ul>

        <Timer />
        <Button label="Close" className="close-btn" onClick={handleClose} />
      </div>
    </div>
  );
};

export default CallModal;
