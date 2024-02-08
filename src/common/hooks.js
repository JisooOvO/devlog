import { useEffect, useState } from "react";

export const useSetInnerWidth = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  function handleInnerWidthResize() {
    setInnerWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleInnerWidthResize);

    return () => {
      window.removeEventListener("resize", handleInnerWidthResize);
    };
  }, []);

  return innerWidth;
};
