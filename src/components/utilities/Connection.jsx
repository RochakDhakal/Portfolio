import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Connection() {
  const onLineStatus = () => {
    toast.success("You Seem To Be Offline", {
      theme: "dark",
    });
  };
  useEffect(() => {
    () => {
      window.addEventListener("offline", () => console.log("Offline"));
    };
  },[]);
  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default Connection;
