import { useState } from "react";

const useHistoryHook = () => {
  const [activeTab, setActiveTab] = useState("CALL_HISTORY");

  const handleTabChange = (tab) => setActiveTab(tab.slug);

  const tabs = [
    {
      label: "Call History",
      slug: "CALL_HISTORY",
    },
    {
      label: "Recharge History",
      slug: "RECHARGE_HISTORY",
    },
  ];

  return {
    tabs,
    activeTab,
    handleTabChange,
  };
};

export default useHistoryHook;
