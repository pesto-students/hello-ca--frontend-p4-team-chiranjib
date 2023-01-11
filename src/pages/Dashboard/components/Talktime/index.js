import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./style.scss";
import { Paper, Typography } from "@mui/material";

import Button from "../../../../components/Button";

const Talktime = (props) => {

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Payments server failed connect.');
      return;
    }

    const result = await axios.post('/payment/orders');

    if (!result) {
      alert('Server error.');
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: 'rzp_test_YiNyYHELyL02vz', // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: 'Hello CA',
      description: 'Hello CA. CA on Call',
      image: { logo },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post('/payment/success', data);

        alert(result.data.msg);
      },
      prefill: {
        name: 'bhushan Kulawade',
        email: 'bhushanjkulawade@gmail.com',
        contact: '9594996070',
      },
      notes: {
        address: 'sample address of mumbai',
      },
      theme: {
        color: '#61dafb',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }


  return (
    <Paper
      elevation={0}
      sx={{
        pr: 3,
        pl: 3,
        pb: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(to right bottom, #007FFF, #003479 120%)",
        color: "#fff",
      }}
    >
      <Typography component="span" fontSize={70} fontWeight={700}>
        {props?.user?.data?.available_talk_time || 0}
        <Typography component="span" fontSize={25}>
          min
        </Typography>
      </Typography>

      <Typography component="span" fontSize={18} sx={{ mt: -1 }}>
        Available Talk Time
      </Typography>

      <Button
        className="add-talktime-btn"
        label={"Add Talk Time"}
        variant={"secondary"}
        fullWidth
        onClick={displayRazorpay}
      />
    </Paper>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      // getUserDetails: getUserDetails,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Talktime);
