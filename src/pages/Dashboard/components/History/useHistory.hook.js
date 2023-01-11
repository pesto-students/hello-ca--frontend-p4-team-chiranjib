import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useHistoryHook = () => {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState("CALL_HISTORY");
  const user = useSelector((state) => state.user);

  const handleTabChange = (tab) => setActiveTab(tab.slug);

  useEffect(() => {
    if (user?.data) {
      if (user?.data?.user_type === "USER") {
        setTabs([
          {
            label: "Call History",
            slug: "CALL_HISTORY",
          },
          {
            label: "Recharge History",
            slug: "RECHARGE_HISTORY",
          },
        ]);
      } else if (user?.data?.user_type === "CA") {
        setTabs([
          {
            label: "Call History",
            slug: "CALL_HISTORY",
          },
          {
            label: "Payout History",
            slug: "PAYOUT_HISTORY",
          },
        ]);
      }
    }
  }, [user?.data]);

  return {
    tabs,
    activeTab,
    handleTabChange,
  };
};

export default useHistoryHook;
