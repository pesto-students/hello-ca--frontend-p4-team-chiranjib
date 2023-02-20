import { useState } from "react";

import { startCall } from "../../../../api";

const useStartAudioCallHook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const startAudioCall = async (data) => {
    setIsLoading(true);
    try {
      const payload = {
        mobile: data.caller,
        topics: data.topics,
        timeLimit: data.timeLimit,
      };
      const response = await startCall(payload);
      if (response.status === 200) {
        setResponse(response.data);
      } else {
        setError(response.data);
      }
      setIsLoading(false);
    } catch (error) {
      console.log("Start Audio Call Error", error);
      setError(error);
      setIsLoading(error);
    }
  };

  return {
    startAudioCall,
    response,
    error,
    isLoading,
  };
};

export default useStartAudioCallHook;
