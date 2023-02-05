import React, { useEffect, useState } from "react";
import Tabs from "../../../../components/Tabs";

import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../../../store/common/User/actions";

import PersonalUpdate from "./PersonalUpdate";
import BankingUpdate from "./BankingUpdate";

const UpdateProfileModal = ({ handleClose }) => {

  const user = useSelector((state) => state.user);
  const [activeTab, setActiveTab] = useState("PERSONAL");
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("authToken") && !user?.data) {
      dispatch(getUserDetails());
    }
  }, []);

  return (
    <div className="call-modal-container">
      <div className="call-modal-header">Update Profile</div>
      <div className="call-modal-content">

      {user.data.user_type === "CA" ? (
        <div className="tabs-container">
          <Tabs
            tabs={[
              {
                label: "Personal",
                slug: "PERSONAL",
              },
              {
                label: "Banking",
                slug: "BANKING",
              },
            ]}
            activeTab={activeTab}
            handleTabChange={(tab) => setActiveTab(tab.slug)}
            type="button-group"
          />
        </div>
      ) : null}
      
      {activeTab === "PERSONAL" ? <PersonalUpdate /> : <BankingUpdate />}
         
      </div>
    </div>
  );
};

export default UpdateProfileModal; 