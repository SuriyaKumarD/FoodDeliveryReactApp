import { useEffect, useState } from "react";

const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    const handlerOnline = () => {
      setIsOnline(true);
    };
    const handlerOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handlerOnline);

    window.addEventListener("offline", handlerOffline);

    return () => {
      window.removeEventListener("online", handlerOnline);
      window.removeEventListener("online", handlerOffline);
    };
  }, []);

  return isOnline;
};

export default useIsOnline;
