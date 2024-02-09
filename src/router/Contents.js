import { Board } from "../common/styled";
import MarkdownLayout from "../common/MarkdownLayout";
import { atomContents } from "../common/atom";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";

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
    </Board>
  );
};

export default Contents;
