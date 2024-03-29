import { Board, BufferZone } from "../common/styled";
import MarkdownLayout from "../common/MarkdownLayout";
import { atomContents } from "../common/atom";
import { Suspense, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled, { keyframes } from "styled-components";
import Loading from "../common/Loading";

const StyledCommnet = styled.div`
  .utterances {
    margin: 0;
  }
`;

const StyledIndex = styled.ul`
  height: 20rem;
  padding: 1rem;
  overflow-y: auto;
  position: fixed;
  font-size: small;
  right: 0;
  z-index: 100;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #04d4ff;
  }
`;

const StyledH1 = styled.li`
  color: rgb(210, 10, 57);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block-start: 1rem;
  margin-block-end: 1rem;

  p {
    width: 9rem;
    padding-right: 1rem;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    z-index: 100;
    text-overflow: ellipsis;
  }

  .hidden {
    opacity: 0;
    pointer-events: none;
  }

  p:hover {
    text-decoration: underline;
  }

  div {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: rgb(210, 10, 57);
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledH2 = styled(StyledH1)`
  color: rgb(254, 110, 11);
  margin-left: 0.5rem;

  div {
    background-color: rgb(254, 110, 11);
  }
`;

const StyledH3 = styled(StyledH1)`
  color: rgb(64, 160, 43);
  margin-left: 1rem;

  div {
    background-color: rgb(64, 160, 43);
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

const blink = keyframes`
  0%{
    color: #000;
  }
  100%{
    color: #fff;
  }
`;

export const LoadingMessage = styled.p`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 5rem;
  animation: ${blink} 1s ease-in alternate-reverse infinite;
`;

const InnerLoading = () => {
  return <LoadingMessage>파일을 불러오고 있습니다.</LoadingMessage>;
};

const Contents = () => {
  const [contents, setContents] = useRecoilState(atomContents);
  const navigate = useNavigate();
  const { first, second, third, fourth } = useParams();
  // const innerWidth = useSetInnerWidth();

  useEffect(() => {
    const board = document.querySelector("#board");
    const sideBar = document.querySelector("#side-bar");

    if (!sideBar?.classList.contains("hidden")) {
      board?.classList.remove("unfold");
    } else {
      board?.classList.add("unfold");
    }
  }, [navigate]);

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
      <Suspense fallback={<Loading />}>
        {fourth && contents ? <Index contents={contents} /> : ""}
        {contents ? <MarkdownLayout contents={contents} /> : <InnerLoading />}
        {fourth && contents ? <Comment /> : ""}
        <BufferZone />
      </Suspense>
    </Board>
  );
};

export default Contents;

const Index = ({ contents }) => {
  const [index, setIndex] = useState([]);

  const handleMouseEnter = () => {
    const index = document.querySelector("#index");
    const pList = index.querySelectorAll("p");

    pList.forEach((p) => p.classList.remove("hidden"));
  };

  const handleMouseLeave = () => {
    const index = document.querySelector("#index");
    const pList = index.querySelectorAll("p");

    pList.forEach((p) => p.classList.add("hidden"));
  };

  useEffect(() => {
    const handleClick = (node) => {
      node.scrollIntoView({ behavior: "smooth" });
    };

    const hTags = document.querySelectorAll("h1,h2,h3");
    hTags.forEach((node, index) => {
      let comp;
      switch (node.tagName) {
        case "H1":
          comp = (
            <StyledH1 key={`index${index}`}>
              <p
                className="hidden"
                onClick={() => {
                  handleClick(node);
                }}
              >
                {node.textContent}
              </p>
              <div></div>
            </StyledH1>
          );
          break;
        case "H2":
          comp = (
            <StyledH2 key={`index${index}`}>
              <p
                className="hidden"
                onClick={() => {
                  handleClick(node);
                }}
              >
                {node.textContent}
              </p>
              <div></div>
            </StyledH2>
          );
          break;
        case "H3":
          comp = (
            <StyledH3 key={`index${index}`}>
              <p
                className="hidden"
                onClick={() => {
                  handleClick(node);
                }}
              >
                {node.textContent}
              </p>
              <div></div>
            </StyledH3>
          );
          break;
        default:
          break;
      }
      setIndex((prev) => [...prev, comp]);
    });

    return () => {
      setIndex("");
    };
  }, [contents]);

  return (
    <StyledIndex
      id="index"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {index}
    </StyledIndex>
  );
};
