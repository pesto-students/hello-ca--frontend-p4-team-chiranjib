import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";

import TopicsLoader from "./TopicsLoader";
import Button from "../../../../components/Button";

import "./style.scss";

import useTopics from "./useTopics";

const Topics = (props) => {
  const {
    isTopicsLoading,
    topics,
    selectedTopics,
    handleTopicsSelection,
    startCall,
    updateSpecilizaions,
  } = useTopics();

  return (
    <Grid container className="topics-wrapper">
      <Grid item xs={12} md={6}>
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

        {props?.user?.data?.user_type === "USER" ? (
          <Button
            label={"Get Started"}
            className="get-started-btn"
            onClick={startCall}
            disabled={selectedTopics.length === 0}
          />
        ) : props?.user?.data?.user_type === "CA" ? (
          <Button
            label={"Update Specialization"}
            className="get-started-btn"
            onClick={updateSpecilizaions}
            disabled={selectedTopics === props?.user?.data?.specialization}
          />
        ) : null}
      </Grid>

      <Grid xs={6}>{/* Image */}</Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      // getUserDetails: getUserDetails,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
