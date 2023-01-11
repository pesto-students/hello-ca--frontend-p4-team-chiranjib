import React from "react";

import Table from "../../../../components/Table";

const RechargeHistory = () => {
  return (
    <Table
      columns={[
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
      ]}
      data={[
        {
          totalAmount: 1000,
          mins: "30",
          createdAt: "1 OCT 2022, 12PM",
          paymentStatus: "success",
        },
        {
          totalAmount: 1000,
          mins: "30",
          createdAt: "1 OCT 2022, 12PM",
          paymentStatus: "failed",
        },
      ]}
    />
  );
};

export default RechargeHistory;
