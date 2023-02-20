import React from "react";

import Table from "../../../../components/Table";

const CallHistory = () => {
  return (
    <Table
      columns={[
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
      ]}
      data={[
        {
          topics: "tax,GST",
          duration: "10min",
          createdAt: "1 OCT 2022, 12PM",
          audioTrack: "http://www.audio-track.com",
        },
        {
          topics: "TDS",
          duration: "10min",
          createdAt: "1 OCT 2022, 12PM",
          audioTrack: "http://www.audio-track.com",
        },
      ]}
    />
  );
};

export default CallHistory;
