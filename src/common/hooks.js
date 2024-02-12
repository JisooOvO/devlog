import { useEffect, useRef, useState } from "react";

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
    }, 50);

    return () => clearInterval(intervalId);
  }, [target]);

  return text;
};

export const useIntersectionObserver = (options) => {
  const [isObserve, setIsObserve] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const target = targetRef.current;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsObserve(entry.isIntersecting);
    }, options);

    if (targetRef.current) {
      observer.observe(target);
    }

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [options]);

  return { targetRef, isObserve };
};
