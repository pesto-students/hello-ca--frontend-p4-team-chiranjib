/**
 *
 * Usage
 * <Tabs
 *      tabs={[{label: "tab1", slug: "TAB1"}, {label: "tab2", "slug: "TAB2"}]}
 *      activeTab={"TAB1"}
 *      handleTabChange={handleTabChange}
 * />
 *
 * const handleTabChange = (tabObj) => {
 *      console.log(tabObj);    //  {label: "tab1", slug: "TAB1"}
 *      setState(tabObj.slug);
 * }
 *
 */

import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const Tabs = ({ tabs, activeTab, handleTabChange, type }) => {
  return (
    <div className={`tabs-wrapper${type === "button-group" ? "-button-group" : "-tab-group"}`}>
      {tabs.map((tab) => (
        <div
          className={`tab ${tab.slug === activeTab && "active-tab"}`}
          onClick={() => handleTabChange(tab)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};

export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
  handleTabChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

Tabs.defaultProps = {
  type: "tab-group",
  tabs: [],
  activeTab: "",
  handleTabChange: () => {},
};
