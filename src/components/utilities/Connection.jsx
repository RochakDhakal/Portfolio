import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Connection() {
  const [online, setOnline] = useState(navigator.onLine);
  const userOnline = () => {
    toast.success("You are back online", {
      theme: "dark",
    });
  };

  const userOffline = () => {
    toast.warning("You are offline", {
      theme: "dark",
    });
  };

/**
 * The function `handleOnlineStatusChange` checks if the user's online status has changed and calls
 * appropriate functions based on the current and new online status.
 */
  const handleOnlineStatusChange = () => {
    if (!online && navigator.onLine) {
      userOnline();
    } else if (online && !navigator.onLine) {
      userOffline();
    }
    setOnline(navigator.onLine);
  };

  // Add event listeners for online and offline events
  useEffect(() => {
    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    // Cleanup by removing event listeners when the component unmounts
    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, [online]);

  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default Connection;
