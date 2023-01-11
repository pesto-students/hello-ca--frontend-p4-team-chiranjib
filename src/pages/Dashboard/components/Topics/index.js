import React from "react";
import Grid from "@mui/material/Grid";

import TopicsLoader from "./TopicsLoader";
import Button from "../../../../components/Button";

import "./style.scss";

import useTopics from "./useTopics";

const Topics = () => {
  const {
    isTopicsLoading,
    topics,
    selectedTopics,
    handleTopicsSelection,
    startCall,
  } = useTopics();

  return (
    <Grid container className="topics-wrapper">
      <Grid item xs={6}>
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

        <Button
          label={"Get Started"}
          className="get-started-btn"
          onClick={startCall}
          disabled={selectedTopics.length === 0}
        />
      </Grid>

      <Grid xs={6}>{/* Image */}</Grid>
    </Grid>
  );
};

export default Topics;
