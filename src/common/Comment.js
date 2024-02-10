import { useEffect, useRef } from "react";
import { Board } from "./styled";

const Comment = () => {
  const commentsEl = useRef(null);

  useEffect(() => {
    const scriptEl = document.createElement("script");
    scriptEl.async = true;
    scriptEl.src = "https://utteranc.es/client.js";
    scriptEl.setAttribute("repo", "JisooOvO/devlog");
    scriptEl.setAttribute("issue-term", "pathname");
    scriptEl.setAttribute("theme", "github-light");
    scriptEl.setAttribute("crossorigin", "anonymous");
    commentsEl.current?.appendChild(scriptEl);
  }, []);

  return <Board ref={commentsEl}>댓글나오니</Board>;
};

export default Comment;
