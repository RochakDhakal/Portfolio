import React, { useEffect, useState } from "react";

function CustomCursor() {
  const [mouseAxis, setMouseAxis] = useState({
    x: -20,
    y: -20,
  });
  useEffect(() => {
    const mouseMovement = (e) => {
      setMouseAxis({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMovement);
    return () => {
      window.removeEventListener("click", mouseMovement);
    };
  }, []);
  return (
    <>
      <div
        className="hidden lg:block fixed cursor-none  pointer-events-none border-gray-500 border h-3 w-3 p-4 z-50 rounded-full duration-200 transition-all ease-linear"
        style={{ top: mouseAxis.y - 9, left: mouseAxis.x - 9 }}
      ></div>
      <div
        className="hidden lg:block fixed cursor-none h-2 w-2 p-2 backdrop-invert rounded-full z-50 pointer-events-none"
        style={{ top: mouseAxis.y, left: mouseAxis.x }}
      ></div>
    </>
  );
}

export default CustomCursor;
