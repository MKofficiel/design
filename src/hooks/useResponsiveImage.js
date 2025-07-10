import { useEffect, useState } from "react";

export default function useResponsiveImage() {
  const [screen, setScreen] = useState(getScreenType());

  function getScreenType() {
    const width = window.innerWidth;
    if (width < 640) return "mobile";
    if (width < 1024) return "tablet";
    return "desktop";
  }

  useEffect(() => {
    function handleResize() {
      setScreen(getScreenType());
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return screen;
}
