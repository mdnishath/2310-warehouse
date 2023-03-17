import React, { useEffect, useState } from "react";

const useMobileScreen = () => {
  const [windowDimension, setWindowDimension] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimension;
};

export default useMobileScreen;
