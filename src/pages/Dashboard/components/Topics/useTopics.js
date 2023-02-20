/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTopics } from "../../../../api";

import useStartAudioCallHook from "./useStartAudioCall.hook";

import { getUserDetails } from "../../../../store/common/User/actions";

const useTopics = () => {
  const [topics, setTopics] = useState(null);
  const [isTopicsLoading, setIsTopicsLoading] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [showCallConnectedModal, setCallConnectedModal] = useState(false);

  const dispatch = useDispatch();

  const {
    startAudioCall,
    isLoading: startCallLoading,
    response: startCallResponse,
    error: startCallError,
  } = useStartAudioCallHook();

  const user = useSelector((state) => state.user);

  const getTopicsWrapper = async () => {
    setIsTopicsLoading(true);

    try {
      const response = await getTopics();

      setIsTopicsLoading(false);
      if (response?.data?.status === 200) {
        setTopics(response?.data?.topics || {});
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleTopicsSelection = (topic) => {
    if (selectedTopics?.includes(topic)) {
      setSelectedTopics(
        selectedTopics?.filter((selectedTopic) => selectedTopic !== topic)
      );
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const startCall = () => {
    startAudioCall({
      caller: user?.data?.mobile,
      timeLimit: user?.data?.available_talk_time,
      topics: selectedTopics?.join(",") || "",
    });
  };

  const closeCallModal = () => {
    setCallConnectedModal(false);
    dispatch(getUserDetails());
  };

  const updateSpecilizaions = () => {
    //  start call.
    console.log(selectedTopics);
  };

  useEffect(() => {
    if (startCallResponse?.Call?.Status === "in-progress") {
      setCallConnectedModal(true);
    }
  }, [startCallResponse, startCallError]);

  useEffect(() => {
    getTopicsWrapper();
  }, []);

  useEffect(() => {
    if (user?.data && topics) {
      let specialization = [];
      if (user?.data?.user_type === "CA") {
        //    Setting default specilizations
        specialization = user?.data?.specialization;
      } else {
        //    Setting default first topic as selected Topic
        const topicsKeys = Object.keys(topics || {});
        specialization = [topicsKeys[0]];
      }
      setSelectedTopics(specialization);
    }
  }, [user?.data, topics]);

  return {
    isTopicsLoading,
    topics,
    selectedTopics,
    handleTopicsSelection,
    startCall,
    updateSpecilizaions,
    showCallConnectedModal,
    closeCallModal,
    startCallLoading,
  };
};

export default useTopics;
