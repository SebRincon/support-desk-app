import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkinStatus, setCheckinStatus] = useState(true);

  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
    setCheckinStatus(false);
  }, [user]);

  return { loggedIn, checkinStatus };
};
