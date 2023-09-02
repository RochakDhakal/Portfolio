import React, { useEffect, useState } from "react";

function CustomCursor() {
  const [mouseAxis, setMouseAxis] = useState({
    x: null,
    y: null,
  });
  useEffect(() => {
    const mouseMovement = (e) => {
      setMouseAxis({
        x: e.clientX - 20,
        y: e.clientY - 20,
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
          className="hidden lg:block fixed h-5 w-5 p-5 border-2 backdrop-blur border-white rounded-full z-50 pointer-events-none"
          style={{ top: mouseAxis.y, left: mouseAxis.x }}
        >
          <div className="fixed top-3 cursor-none left-3 h-2 w-2 p-2 bg-green-500 backdrop-invert rounded-full z-50"></div>
        </div>
    </>
  );
}

export default CustomCursor;
