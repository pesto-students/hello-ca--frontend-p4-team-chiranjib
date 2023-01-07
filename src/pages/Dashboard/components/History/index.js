import React from "react";

import Tabs from "../../../../components/Tabs";

import useHistoryHook from "./useHistory.hook";

import "./style.scss";
import CallHistory from "./CallHistory";
import RechargeHistory from "./RechargeHistory";

const History = () => {
  const { tabs, activeTab, handleTabChange } = useHistoryHook();

  return (
    <div className="history-container">
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        handleTabChange={handleTabChange}
      />
      {activeTab === "CALL_HISTORY" ? <CallHistory /> : <RechargeHistory />}
    </div>
  );
};

export default History;
