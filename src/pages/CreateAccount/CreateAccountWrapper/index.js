import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import "./style.scss";

import Logo from "../../../components/Logo";
import Tabs from "../../../components/Tabs";
import CreateCa from "../CreateCa";
import CreateUser from "../CreateUser";

const CreateAccountForm = () => {
  const [activeTab, setActiveTab] = useState("I_AM_USER");

  return (
    <div className="create-account-wrapper">
      <Logo />

      <Typography component="h1" variant="h1" sx={{ mb: 1 }}>
        Create new Account
      </Typography>

      <p className="register-text">
        Already Registered? <Link to="/login">Login</Link>
      </p>

      <div className="tabs-container">
        <Tabs
          tabs={[
            {
              label: "I am User",
              slug: "I_AM_USER",
            },
            {
              label: "I am CA",
              slug: "I_AM_CA",
            },
          ]}
          activeTab={activeTab}
          handleTabChange={(tab) => setActiveTab(tab.slug)}
          type="button-group"
        />
      </div>

      {activeTab === "I_AM_USER" ? <CreateUser /> : <CreateCa />}
    </div>
  );
};

export default CreateAccountForm;
