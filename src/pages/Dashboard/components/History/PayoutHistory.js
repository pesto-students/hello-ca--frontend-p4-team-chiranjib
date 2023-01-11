import React from "react";

import Table from "../../../../components/Table";

const PayoutHistory = () => {
  return (
    <Table
      columns={[
        {
          label: "Date/Time",
          accessor: "createdAt",
        },
        {
          label: "Amount Paid",
          accessor: "amountPaid",
          component: (props) => <p>₹ {props?.row?.amountPaid}</p>,
        },
        {
          label: "Ref.Number",
          accessor: "referenceNumber",
        },
        {
          label: "Bank",
          accessor: "bankName",
        },
      ]}
      data={[
        {
          createdAt: "1 OCT 2022, 12PM",
          amountPaid: 1000,
          referenceNumber: 1234,
          bankName: "HDFC Bank",
        },
        {
          createdAt: "1 OCT 2022, 12PM",
          amountPaid: 1000,
          referenceNumber: 1234,
          bankName: "HDFC Bank",
        },
      ]}
    />
  );
};

export default PayoutHistory;
