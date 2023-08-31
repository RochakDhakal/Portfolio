import React, { useEffect, useState } from "react";

function CustomCursor() {
  const [mouseAxis, setMouseAxis] = useState({
    x: -20,
    y: -20,
  });
  useEffect(() => {
    const mouseMovement = (e) => {
      console.log(e);
      setMouseAxis({
        x: e.clientX-20,
        y: e.clientY-20,
      });
    };
    window.addEventListener("mousemove", mouseMovement);
    return () => {
      window.removeEventListener("click", mouseMovement);
    };
  }, []);
  return (
    <div
      className="hidden md:block fixed h-5 w-5 p-5 border-2 backdrop-blur border-white rounded-full z-50 pointer-events-none"
      style={{ top: mouseAxis.y, left: mouseAxis.x}}
    >
      <div
        className="hidden md:block fixed top-3 left-3 h-2 w-2 p-2 bg-green-500 backdrop-invert rounded-full z-50 pointer-events-none"
      ></div>
    </div>
  );
}

export default CustomCursor;
