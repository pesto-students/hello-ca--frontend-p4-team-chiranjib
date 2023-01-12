import React from "react";

import Tabs from "../../../../components/Tabs";

import useHistoryHook from "./useHistory.hook";

import "./style.scss";

import CallHistory from "./CallHistory";
import RechargeHistory from "./RechargeHistory";
import PayoutHistory from "./PayoutHistory";

const History = () => {
  const { tabs, activeTab, handleTabChange } = useHistoryHook();

  return (
    <div className="history-container">
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        handleTabChange={handleTabChange}
      />
      <div className="table-wrapper">
        {activeTab === "CALL_HISTORY" ? (
          <CallHistory />
        ) : activeTab === "RECHARGE_HISTORY" ? (
          <RechargeHistory />
        ) : activeTab === "PAYOUT_HISTORY" ? (
          <PayoutHistory />
        ) : null}
      </div>
    </div>
  );
};

export default History;
