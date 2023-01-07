import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TopicsLoader from "./TopicsLoader";

import Button from "../../../../components/Button";

import "./style.scss";

import { getTopics } from "../../../../api";

const Topics = () => {
  const [topics, setTopics] = useState(null);
  const [isTopicsLoading, setIsTopicsLoading] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState([]);

  const getTopicsWrapper = async () => {
    setIsTopicsLoading(true);

    try {
      const response = await getTopics();

      setIsTopicsLoading(false);
      if (response?.data?.status === 200) {
        setTopics(response?.data?.topics);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTopicsWrapper();
  }, []);

  const handleTopicsSelection = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(
        selectedTopics.filter((selectedTopic) => selectedTopic !== topic)
      );
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const startCall = () => {
    //  start call.
    console.log(selectedTopics);
  };

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
