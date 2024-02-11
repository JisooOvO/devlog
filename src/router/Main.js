import styled, { keyframes } from "styled-components";
import { Board, Icon } from "../common/styled";
import { useEffect, useRef, useState } from "react";
import { useTyping } from "../common/hooks";
import { MD } from "../common/utils";
import RightArrow from "../Images/RightArrow";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const blink = keyframes`
  50%{
    border-right: none;
  }
`;

const huerotate = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg)
  }
`;

const standup = keyframes`
  0% {
    opacity: 0;
    transform: perspective(2500px) rotateX(-90deg);
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg);
    pointer-events: all;
  }
`;

const slide = keyframes`
  0%{
    transform: translateX(100vw);
  }
  100%{
    transform: translateX(0);
  }
`;

const reverseSlide = keyframes`
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(100vw);
  }`;

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
  font-weight: 600;
  pointer-events: none;
  margin-bottom: 2rem;

  @media (max-width: ${MD + "px"}) {
    font-size: 2rem;
  }
`;

const TypingText = styled.p`
  width: fit-content;
  overflow: hidden;
  letter-spacing: 5px;
  line-height: 1.75rem;
  font-size: larger;
  border-right: 2px solid #00d4ff;
  white-space: nowrap;
  animation: ${blink} 0.75s step-end infinite;

  &&.done {
    border-right: none;
  }

  @media (max-width: ${MD + "px"}) {
    display: inline;
    white-space: pre-line;
    border-right: none;
  }
`;

const BlinkIcon = styled(Icon)`
  animation: ${fadeIn} 0.75s linear infinite;
`;

const IconWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 3.2rem;
  right: 2rem;
  transform: translateY(-50%);
  border: 1px solid #717171;
  border-radius: 50%;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
`;

const DescriptionContainer = styled.div`
  margin-bottom: 5rem;
`;

const StyledTitle = styled(IntroContainer)``;

const MyInfoContainer = styled.section`
  position: relative;
  opacity: 0;
  pointer-events: none;
  margin-bottom: 5rem;
  transform-origin: 50% 50%;
  animation: ${standup} 0.4s ease forwards;
  animation-delay: 8s;
`;

const MyInfoBox = styled.article`
  font-size: 1.25rem;
  line-height: 2.5rem;
  border: 2px solid transparent;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(to right, rgb(67, 124, 205), rgb(69, 214, 202));
  background-origin: border-box;
  background-clip: content-box, border-box;
  border-radius: 0.75rem;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
  animation: ${huerotate} 6s infinite linear;
`;

const SubTitle = styled.h2`
  width: 10rem;
  font-weight: 600;
  color: #447ecd;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #447ecd;
`;

const DateWrapper = styled.p`
  font-size: 1rem;
`;

const InnerBox = styled.div`
  padding: 1rem 2rem 2rem 2rem;
`;

const EduDetail = styled.p`
  position: relative;
  padding: 0.5rem;
  color: #fd1348;
  border: 2px solid #fd1348;
  border-radius: 1rem;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
  &::after {
    content: "Click!";
    position: absolute;
    font-weight: 600;
    font-size: larger;
    color: #57e689;
    top: -1.5rem;
    left: -1rem;
    animation: ${fadeIn} 0.75s infinite;
  }
`;

const DetailBox = styled(MyInfoBox)`
  position: absolute;
  top: 0;
  z-index: 99;
  animation: ${slide} 1s ease-in;
  display: block;

  &.close {
    animation: ${reverseSlide} 1s ease-in forwards;
  }

  @media (max-width: ${MD + "px"}) {
    font-size: medium;
  }
`;

const DetailList = styled.li`
  margin-left: 1rem;
  padding-inline-start: 15px;
  list-style-type: "•";
`;

const Lists = styled.ul`
  margin-bottom: 1rem;
`;

const MyStackContainer = styled(MyInfoContainer)`
  z-index: -1;
  animation-delay: 10s;
`;

const MyProjectContainer = styled(MyStackContainer)``;

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

const Description = () => {
  const txt = useRef([
    `반갑습니다. Frontend 주니어 개발자 남지수입니다.`.split("").reverse(),
    `개발은 아이디어를 실현하는 멋진 일이라고 생각합니다.`.split("").reverse(),
    `꿈을 이루기 위해 매일 노력하겠습니다. 감사합니다.`.split("").reverse(),
  ]);
  const [test1, setTest1] = useState([]);
  const [test2, setTest2] = useState([]);
  const [test3, setTest3] = useState([]);

  useEffect(() => {
    const timefunc1 = setTimeout(() => {
      setTest1(txt.current[0]);
    }, 1500);

    const timefunc2 = setTimeout(() => {
      const text1 = document.querySelector("#text1");
      text1.classList.add("done");
      setTest2(txt.current[1]);
    }, 4300);

    const timefunc3 = setTimeout(() => {
      const text2 = document.querySelector("#text2");
      text2.classList.add("done");
      setTest3(txt.current[2]);
    }, 6000);

    return () => {
      clearTimeout(timefunc1);
      clearTimeout(timefunc2);
      clearTimeout(timefunc3);
    };
  }, []);

  const text1 = useTyping(test1);
  const text2 = useTyping(test2);
  const text3 = useTyping(test3);
  return (
    <DescriptionContainer>
      <TypingText id="text1">{text1}</TypingText>
      <TypingText id="text2">{text2}</TypingText>
      <TypingText>{text3}</TypingText>
    </DescriptionContainer>
  );
};

const MyInfo = () => {
  const handleClick = () => {
    const detailBox = document.querySelector("#detailBox");

    if (detailBox.classList.contains("close")) {
      detailBox.classList.remove("close");
      detailBox.style.display = "block";
    } else {
      detailBox.classList.add("close");
      setTimeout(() => {
        detailBox.style.display = "none";
      }, 1000);
    }
  };

  return (
    <MyInfoContainer>
      <StyledTitle>
        <Title>Information</Title>
      </StyledTitle>
      <MyInfoBox>
        <InnerBox>
          <SubTitle>학력</SubTitle>
          <DateWrapper>2014. 03. - 2016. 02.</DateWrapper>
          <p>부산동고등학교 졸업</p>
          <DateWrapper>2016. 03. - 2023. 02.</DateWrapper>
          <p>부산대학교 전자공학과 졸업</p>
          <SubTitle>교육 이수 내역</SubTitle>
          <DateWrapper>2023. 07. 31 - 2024.01.22</DateWrapper>
          <EduDetail onClick={handleClick}>
            부산대학교 산학협력단 AI활용 빅데이터 분석 풀스택 웹서비스 SW 개발자
            양성과정 수료
          </EduDetail>
        </InnerBox>
      </MyInfoBox>

      <DetailBox style={{ display: "none" }} id="detailBox" className="close">
        <IconWrapper>
          <BlinkIcon icon={<RightArrow />} func={handleClick} />
        </IconWrapper>
        <InnerBox>
          <SubTitle>훈련 과정명</SubTitle>
          <p>AI활용 빅데이터 분석 풀스택 웹서비스 SW 개발자 양성과정</p>
          <SubTitle>훈련 기간</SubTitle>
          <p>2023.07.31 ~ 2024.01.22</p>
          <SubTitle>훈련 기관</SubTitle>
          <p>부산대학교 산학협력단</p>
          <SubTitle>책임 교수</SubTitle>
          <p>홍봉희 교수(부산대학교 정보컴퓨터공학부)</p>
          <SubTitle>훈련내용</SubTitle>
          <Lists>
            풀스택 웹 서비스
            <DetailList>
              자바 기본 문법 및 정렬, 트리, 백트래킹 알고리즘 등 자료구조를
              자바로 공부하였습니다.
            </DetailList>
            <DetailList>
              HTML, CSS, 자바스크립트 관련 교육을 수강하였습니다.
            </DetailList>
            <DetailList>
              MYSQL을 이용하여 Query 및 데이터베이스에 대한 교육을
              이수하였습니다.
            </DetailList>
            <DetailList>
              React Component 의 수명주기, Hook 등 프레임워크 사용 방법을
              숙지했습니다.
            </DetailList>
            <DetailList>
              Spring Boot를 사용하여 DB 연동 및, MVC 패턴과 restFul API 로
              클라이언트와 통신하며 백엔드 관련 지식을 습득했습니다.
            </DetailList>
            <DetailList>
              Sping Boot Security 를 이용하여 JWT, OAuth2 등 사용자 및 세션
              관리에 대하여 공부하였습니다.
            </DetailList>
          </Lists>
          <Lists>
            빅데이터 및 AI 프로그래밍
            <DetailList>
              파이썬 문법을 학습하며 Numpy, 파이토치, Pandas 등 AI, 머신러닝
              관련 라이브러리를 사용한 경험이 있습니다.
            </DetailList>
          </Lists>
        </InnerBox>
      </DetailBox>
    </MyInfoContainer>
  );
};

const MyStack = () => {
  return (
    <MyStackContainer>
      <StyledTitle>
        <Title>Stack</Title>
        <p>스택 내용 넣기</p>
      </StyledTitle>
    </MyStackContainer>
  );
};

const MyProject = () => {
  return (
    <MyProjectContainer>
      <StyledTitle>
        <Title>Project</Title>
        <p>프로젝트 내용 넣기</p>
      </StyledTitle>
    </MyProjectContainer>
  );
};

const Main = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Board>
      <Intro />
      <Description />
      <MyInfo />
      <MyStack />
      <MyProject />
    </Board>
  );
};

export default Main;
