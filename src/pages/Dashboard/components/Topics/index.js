import React from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import InfoIcon from "@mui/icons-material/Info";

import TopicsLoader from "./TopicsLoader";
import Button from "../../../../components/Button";
import Modal from "../../../../components/Modal";
import CallModal from "../CallModal";

import "./style.scss";

import useTopics from "./useTopics";

const Topics = () => {
  const {
    isTopicsLoading,
    topics,
    selectedTopics,
    handleTopicsSelection,
    startCall,
    updateSpecilizaions,
    showCallConnectedModal,
    closeCallModal,
  } = useTopics();

  const user = useSelector((state) => state.user);

  return (
    <Grid container className="topics-wrapper">
      <Grid item xs={12} md={7}>
        <Grid container spacing={1}>
          {isTopicsLoading ? (
            <TopicsLoader />
          ) : (
            topics &&
            Object.keys(topics)?.map((topic) => (
              <Grid item xs={4}>
                <div
                  className={`topic ${
                    selectedTopics.includes(topic) ? "selected" : ""
                  }`}
                  onClick={() => handleTopicsSelection(topic)}
                >
                  {topics[topic]}
                </div>
              </Grid>
            ))
          )}
        </Grid>

        {user?.data?.user_type === "USER" ? (
          <Button
            label={"Get Started"}
            className="get-started-btn"
            onClick={startCall}
            disabled={selectedTopics.length === 0}
          />
        ) : user?.data?.user_type === "CA" ? (
          <>
            <Button
              label={"Update Specialization"}
              className="get-started-btn"
              onClick={updateSpecilizaions}
              disabled={selectedTopics === user?.data?.specialization}
            />
            <Typography className="ca-info-text">
              <InfoIcon className="ca-info-icons" fontSize="sm" />
              You will get calls based on your specialization selection
            </Typography>
          </>
        ) : null}
      </Grid>

      <Grid xs={12} md={5}>
        {/* Image */}
      </Grid>

      <Modal
        open={showCallConnectedModal}
        handleClose={closeCallModal}
        showCloseBtn
      >
        <CallModal handleClose={closeCallModal} />
      </Modal>
    </Grid>
  );
};

export default Topics;
