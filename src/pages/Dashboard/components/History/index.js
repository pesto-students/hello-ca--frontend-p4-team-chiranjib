import React from "react";

import Tabs from "../../../../components/Tabs";
import Table from "../../../../components/Table";

import useHistoryHook from "./useHistory.hook";

import "./style.scss";

const History = () => {
  const { tabs, activeTab, handleTabChange, data, isLoading } =
    useHistoryHook();

  const columns =
    activeTab === "CALL_HISTORY"
      ? [
          {
            label: "Date/Time",
            accessor: "createdAt",
          },
          {
            label: "Duration",
            accessor: "duration",
          },
          {
            label: "Topics",
            accessor: "topics",
          },
          {
            label: "Listen",
            accessor: "audioTrack",
          },
        ]
      : activeTab === "RECHARGE_HISTORY"
      ? [
          {
            label: "Date/Time",
            accessor: "createdAt",
          },
          {
            label: "Total Amount",
            accessor: "totalAmount",
            component: (props) => <p>₹ {props?.row?.totalAmount}</p>,
          },
          {
            label: "Mins",
            accessor: "mins",
          },
          {
            label: "Status",
            accessor: "paymentStatus",
            component: (props) => (
              <p
                style={{
                  color:
                    props?.row?.paymentStatus === "success" ? "green" : "red",
                  margin: 0,
                }}
              >
                {props?.row?.paymentStatus}
              </p>
            ),
          },
        ]
      : activeTab === "PAYOUT_HISTORY"
      ? [
          {
            label: "Date/Time",
            accessor: "createdAt",
          },
          {
            label: "Amount Paid",
            accessor: "amount",
            component: (props) => (
              <p style={{ margin: "0px" }}>
                ₹ {props?.row?.amount + props?.row?.tax}
              </p>
            ),
          },
          {
            label: "Ref.Number",
            accessor: "reference_number",
          },
          {
            label: "Direction",
            accessor: "direction",
          },
        ]
      : [];

  return (
    <div className="history-container">
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        handleTabChange={handleTabChange}
      />

      <Table columns={columns} data={data} isLoading={isLoading} />
    </div>
  );
};

export default History;
