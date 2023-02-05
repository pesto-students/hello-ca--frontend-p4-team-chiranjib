import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE } from "../utils/constants/siteSettings";

const useUI = () => {
  const navigate = useNavigate();

  const getStarted = () => {
    if (localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN)) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return {
    getStarted,
  };
};

export default useUI;
