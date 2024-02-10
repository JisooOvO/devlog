import styled, { keyframes } from "styled-components";
import { Board } from "../common/styled";
import { useEffect, useRef, useState } from "react";
import { useTyping } from "../common/hooks";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const typing = keyframes`
  0% {
    width: 0;
  }
  100%{
    width: calc(10ch);
  }
`;

const blank = keyframes`
  50%{
    border-right: none;
  }
`;

const IntroContainer = styled.section`
  width: 100%;
  background: linear-gradient(to right, rgb(67, 124, 205), rgb(69, 214, 202));
  background-clip: content-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${fadeIn} 1s ease-in;
`;

const Title = styled.h1`
  font-size: 3rem;
  pointer-events: none;
  margin-bottom: 5rem;
`;

const TypingText = styled.p`
  width: fit-content;
  overflow: hidden;
  letter-spacing: 5px;
  line-height: 1.75rem;
  font-size: larger;
  border-right: 2px solid #00d4ff;
  white-space: nowrap;
  animation: ${blank} 0.75s step-end infinite;

  &&.done {
    border-right: none;
  }
`;

const Intro = () => {
  return (
    <IntroContainer>
      <Title>
        <p>WELCOME TO </p>
        <p>MY PORTFOLIO BLOG</p>
      </Title>
    </IntroContainer>
  );
};

const Main = () => {
  const test1 = useRef(
    `반갑습니다. Frontend 주니어 개발자 남지수입니다.`.split("").reverse(),
  );
  const [test2, setTest2] = useState([]);

  useEffect(() => {
    const timefunc = setTimeout(() => {
      const text1 = document.querySelector("#text1");
      text1.classList.add("done");
      setTest2(`아아아아아앙`.split("").reverse());
    }, 3500);

    return () => {
      clearTimeout(timefunc);
    };
  }, []);

  const text1 = useTyping(test1.current);
  const text2 = useTyping(test2);

  return (
    <Board>
      <Intro />
      <TypingText id="text1">{text1}</TypingText>
      <TypingText>{text2}</TypingText>
    </Board>
  );
};

export default Main;
