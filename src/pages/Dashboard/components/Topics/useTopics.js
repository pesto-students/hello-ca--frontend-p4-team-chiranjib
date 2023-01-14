import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTopics } from "../../../../api";

const useTopics = () => {
  const [topics, setTopics] = useState(null);
  const [isTopicsLoading, setIsTopicsLoading] = useState(false);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [showCallConnectedModal, setCallConnectedModal] = useState(false);

  const user = useSelector((state) => state.user);

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
    setCallConnectedModal(true);
  };

  const closeCallModal = () => {
    setCallConnectedModal(false);
  };

  const updateSpecilizaions = () => {
    //  start call.
    console.log(selectedTopics);
  };

  useEffect(() => {
    getTopicsWrapper();
  }, []);

  useEffect(() => {
    if (user?.data) {
      //    Setting default specilizations
      setSelectedTopics(user?.data?.specialization);
    }
  }, [user?.data]);

  return {
    isTopicsLoading,
    topics,
    selectedTopics,
    handleTopicsSelection,
    startCall,
    updateSpecilizaions,
    showCallConnectedModal,
    closeCallModal,
  };
};

export default useTopics;
