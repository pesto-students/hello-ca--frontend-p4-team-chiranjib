import { useEffect, useState } from "react";
import { getTopics } from "../../../../api";

const useTopics = () => {
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

  useEffect(() => {
    getTopicsWrapper();
  }, []);

  return {
    isTopicsLoading,
    topics,
    selectedTopics,
    handleTopicsSelection,
    startCall
  };
};

export default useTopics;
