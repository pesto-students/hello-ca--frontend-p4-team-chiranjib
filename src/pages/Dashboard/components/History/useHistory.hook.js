import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import {
  getUserPaymentHistory,
  getCAPaymentOutHistory,
  getUserCallHistory,
  getCaCallHistory,
} from "../../../../api";

const useHistoryHook = () => {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const user = useSelector((state) => state.user);

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab.slug);
    getHistory(tab.slug);
  };

  const getHistory = async (historyType) => {
    setData([]);
    setIsLoading(true);

    try {
      let response;
      if (historyType === "RECHARGE_HISTORY") {
        response = await getUserPaymentHistory();

        if (response?.status === 200 && response?.data?.payments) {
          setData(response?.data?.payments);
        }
      } else if (historyType === "PAYOUT_HISTORY") {
        response = await getCAPaymentOutHistory();

        if (response?.status === 200 && response?.data?.payments) {
          setData(response?.data?.payments);
        }
      } else if (historyType === "CALL_HISTORY") {
        if (user?.data?.user_type === "USER") {
          response = await getUserCallHistory();

          if (response?.status === 200 && response?.data?.callLogs) {
            setData(response?.data?.callLogs);
          }
        } else if (user?.data?.user_type === "CA") {
          response = await getCaCallHistory();

          if (response?.status === 200 && response?.data?.callLogs) {
            setData(response?.data?.callLogs);
          }
        }
      }
    } catch (error) {
      console.log(`History Error ${historyType}`, error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (user?.data) {
      let newTabs = [];
      if (user?.data?.user_type === "USER") {
        newTabs = [
          {
            label: "Call History",
            slug: "CALL_HISTORY",
          },
          {
            label: "Recharge History",
            slug: "RECHARGE_HISTORY",
          },
        ];
      } else if (user?.data?.user_type === "CA") {
        newTabs = [
          {
            label: "Call History",
            slug: "CALL_HISTORY",
          },
          {
            label: "Payout History",
            slug: "PAYOUT_HISTORY",
          },
        ];
      }
      setTabs([...newTabs]);
      handleTabChange(newTabs[0]);
    }
  }, [user?.data]);

  return {
    tabs,
    activeTab,
    handleTabChange,
    data,
    isLoading,
  };
};

export default useHistoryHook;
