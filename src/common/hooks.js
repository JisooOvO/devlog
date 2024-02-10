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

export const useTyping = (target) => {
  const [text, setText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText((prevText) => {
        const nextText = target?.pop();
        if (nextText) return prevText + nextText;
        else return prevText;
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, [target]);

  return text;
};
