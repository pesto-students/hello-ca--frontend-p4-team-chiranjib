import React from "react";

import Tabs from "../../../../components/Tabs";
import Table from "../../../../components/Table";

import useHistoryHook from "./useHistory.hook";

import { formatDateAndTime } from "../../../../utils/helpers/time";

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
            component: (props) => (
              <p
                style={{
                  margin: "0px",
                }}
              >
                {formatDateAndTime(props?.row?.createdAt)}
              </p>
            ),
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
            component: (props) => (
              <p
                style={{
                  margin: "0px",
                }}
              >
                {formatDateAndTime(props?.row?.createdAt)}
              </p>
            ),
          },
          {
            label: "Total Amount",
            accessor: "amount",
            component: (props) => (
              <p
                style={{
                  margin: "0px",
                }}
              >
                ₹ {props?.row?.amount}
              </p>
            ),
          },
          {
            label: "Mins Purchased",
            accessor: "minutes_purchased",
          },
          {
            label: "Status",
            accessor: "status_client",
            component: (props) => (
              <p
                style={{
                  color: props?.row?.status_client ? "green" : "red",
                  margin: "0px",
                }}
              >
                {props?.row?.status_client ? "Success" : "Failed"}
              </p>
            ),
          },
        ]
      : activeTab === "PAYOUT_HISTORY"
      ? [
          {
            label: "Date/Time",
            accessor: "createdAt",
            component: (props) => (
              <p
                style={{
                  margin: "0px",
                }}
              >
                {formatDateAndTime(props?.row?.createdAt)}
              </p>
            ),
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
