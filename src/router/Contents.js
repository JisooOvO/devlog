import { Board } from "../common/styled";
import MarkdownLayout from "../common/MarkdownLayout";
import { atomContents } from "../common/atom";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";

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

  return <div ref={commentsEl}></div>;
};

const Contents = () => {
  const [contents, setContents] = useRecoilState(atomContents);
  const navigate = useNavigate();
  const { first, second, third, fourth } = useParams();

  useEffect(() => {
    let url = `${first ? first : ""}${second ? "/" + second : ""}${
      third ? "/" + third : ""
    }${fourth ? "/" + fourth : ""}.md`;

    fetch(process.env.PUBLIC_URL + "/md/" + url)
      .then((res) => {
        return res.text();
      })
      .then((data) => {
        setContents(data);
      })
      .catch((e) => console.log(e));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => {
      setContents("");
    };
  }, [navigate, first, second, third, fourth, setContents]);

  return (
    <Board>
      <MarkdownLayout contents={contents}></MarkdownLayout>
      {second && contents ? <Comment /> : ""}
    </Board>
  );
};

export default Contents;
