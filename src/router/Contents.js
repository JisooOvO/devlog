import { Board, BufferZone } from "../common/styled";
import MarkdownLayout from "../common/MarkdownLayout";
import { atomContents } from "../common/atom";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const StyledCommnet = styled.div`
  .utterances {
    margin: 0;
  }
`;

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

  return <StyledCommnet ref={commentsEl}></StyledCommnet>;
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
    <Board id="board">
      <MarkdownLayout contents={contents}></MarkdownLayout>
      {second && contents ? <Comment /> : ""}
      <BufferZone />
    </Board>
  );
};

export default Contents;
