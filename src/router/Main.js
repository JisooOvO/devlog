import styled, { keyframes } from "styled-components";
import { Board, BufferZone, Icon } from "../common/styled";
import { useEffect, useRef, useState } from "react";
import { useTyping } from "../common/hooks";
import { MD } from "../common/utils";
import RightArrow from "../Images/RightArrow";
import ReactIcon from "../Images/ReactIcon";
import CssIcon from "../Images/CssIcon";
import JavascriptIcon from "../Images/JavascriptIcon";
import PythonIcon from "../Images/PythonIcon";
import RecoilIcon from "../Images/RecoilIcon";
import TailwindIcon from "../Images/TailwindIcon";
import StyledComponentIcon from "../Images/StyledComponentIcon";
import Html5Icon from "../Images/Html5Icon";
import JavaIcon from "../Images/JavaIcon";
import SpringIcon from "../Images/SpringIcon";
import MysqlIcon from "../Images/MysqlIcon";
import GitIcon from "../Images/GitIcon";
import GithubIcon from "../Images/GithubIcon";

import project1 from "../Images/project1.gif";
import project2 from "../Images/project2.gif";
import project3 from "../Images/project3.png";

import ChartjsIcon from "../Images/ChartjsIcon";
import ReactrouterdomIcon from "../Images/ReactrouterdomIcon";
import SocketIcon from "../Images/SocketIcon";
import NotionIcon from "../Images/NotionIcon";

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
  height: 10rem;
  margin-bottom: 5rem;
`;

const StyledTitle = styled(IntroContainer)``;

const MyInfoContainer = styled.section`
  position: relative;
  margin-bottom: 5rem;
  transform-origin: 50% 50%;
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

  @media (max-width: ${MD + "px"}) {
    font-size: 1rem;
  }
`;

const SubTitle = styled.h2`
  width: fit-content;
  font-weight: 600;
  color: #447ecd;
  margin-top: 1rem;
  padding-bottom: 0.5rem;
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
  margin-top: 1rem;
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
  pointer-events: all;
`;

const MyProjectContainer = styled(MyInfoContainer)`
  pointer-events: all;
`;

const StackBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: #717171;
`;

const StackIcon = styled.div`
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  border: 1px solid #eaeaea;
  border-radius: 1rem;
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.2);
`;

const Stacks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (max-width: ${MD + "px"}) {
    grid-template-columns: none;
  }
`;

const StackCategory = styled.div`
  width: fit-content;
`;

const StyledProjectBox = styled(MyInfoBox)`
  position: relative;
  margin-bottom: 2rem;
  border-radius: 1rem;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
  animation: none;

  #projectInner {
    display: flex;
    gap: 2rem;
    @media (max-width: ${MD + "px"}) {
      flex-direction: column;
    }
  }

  img {
    max-width: 20rem;
    max-height: 25rem;
    object-fit: fill;
    border-radius: 1rem;
  }

  #title {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  #dates {
    margin-bottom: 1rem;
  }

  #description {
    margin-bottom: 2rem;
  }

  ul {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  #stack {
    width: 2rem;
    height: 2rem;
  }

  button {
    width: 3rem;
    border: none;
    background-color: transparent;
  }

  button:hover {
    opacity: 0.6;
  }

  button:hover {
    cursor: pointer;
  }

  #button-wrapper {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    right: 0.5rem;
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
    }, 4000);

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
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    if (isClick) return;

    setIsClick(true);

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

    setTimeout(() => {
      setIsClick(false);
    }, 1000);
  };

  return (
    <MyInfoContainer>
      <StyledTitle>
        <Title>Information</Title>
      </StyledTitle>
      <MyInfoBox>
        <InnerBox>
          <SubTitle>이름</SubTitle>
          <p>남지수</p>
          <SubTitle>생년월일</SubTitle>
          <p>97. 04. 02</p>
          <SubTitle>주소지</SubTitle>
          <p>부산광역시 연제구</p>
          <SubTitle>Email / Github</SubTitle>
          <p>fdking1887@naver.com</p>
          <p>https://github.com/JisooOvO</p>
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

const Stack = ({ icon, title }) => {
  return (
    <StackBox>
      <StackIcon>{icon}</StackIcon>
      <p>{title}</p>
    </StackBox>
  );
};

const MyStack = () => {
  return (
    <MyStackContainer>
      <StyledTitle>
        <Title>Stack</Title>
      </StyledTitle>
      <Stacks>
        <StackCategory>
          <SubTitle>FRONTEND</SubTitle>
          <Stack icon={<Html5Icon />} title={"HTML5"} />
          <Stack icon={<CssIcon />} title={"CSS3"} />
          <Stack icon={<JavascriptIcon />} title={"JAVASCRIPT"} />
          <Stack icon={<ReactIcon />} title={"REACT"} />
          <Stack icon={<ReactrouterdomIcon />} title={"REACT ROUTER DOM"} />
          <Stack icon={<RecoilIcon />} title={"RECOIL"} />
          <Stack icon={<TailwindIcon />} title={"TAILWINDCSS"} />
          <Stack icon={<StyledComponentIcon />} title={"STYLED-COMPONENTS"} />
        </StackCategory>
        <StackCategory>
          <SubTitle>BACKEND</SubTitle>
          <Stack icon={<PythonIcon />} title={"PYTHON"} />
          <Stack icon={<JavaIcon />} title={"JAVA"} />
          <Stack icon={<SpringIcon />} title={"SPRING BOOT"} />
          <Stack icon={<MysqlIcon />} title={"MYSQL"} />
          <Stack icon={<SocketIcon />} title={"STOMP"} />
        </StackCategory>
        <StackCategory>
          <SubTitle>VERSION CONTROL</SubTitle>
          <Stack icon={<GitIcon />} title={"GIT"} />
          <Stack icon={<GithubIcon />} title={"GITHUB"} />
        </StackCategory>
      </Stacks>
    </MyStackContainer>
  );
};

const ProjectBox = ({ src, title, dates, description, stacks, url }) => {
  return (
    <StyledProjectBox>
      <InnerBox id="projectInner">
        <img src={src} alt="프로젝트 이미지" />
        <div>
          <SubTitle id="title">{title}</SubTitle>
          <p id="dates">{dates}</p>
          <p id="description">{description}</p>
          <ul>
            {stacks?.map((stack, idx) => (
              <li key={`stack${idx}key`}>
                <StackIcon id="stack">{stack}</StackIcon>
              </li>
            ))}
          </ul>
        </div>
        <div id="button-wrapper">
          {url[0] && (
            <button
              onClick={() => {
                window.open(url[0], "_blank_");
              }}
            >
              <GithubIcon />
            </button>
          )}
          {url[1] && (
            <button
              onClick={() => {
                window.open(url[1], "_blank_");
              }}
            >
              <NotionIcon />
            </button>
          )}
        </div>
      </InnerBox>
    </StyledProjectBox>
  );
};

const MyProject = () => {
  return (
    <MyProjectContainer>
      <StyledTitle>
        <Title>Project</Title>
      </StyledTitle>
      <ProjectBox
        src={project1}
        title={"식단 검색 및 기록 프로젝트"}
        dates={"2023.11.14 - 2023.12.12"}
        description={
          "유저별로 매일의 식단을 아침/점심/저녁별로 기록하고 월/주별 단위 칼로리/몸무게 동향을 달력 형태로 제공하는 웹 서비스입니다. Open API를 이용하여 영양 정보를 데이터베이스화하였습니다."
        }
        stacks={[
          <ReactIcon />,
          <ReactrouterdomIcon />,
          <TailwindIcon />,
          <SpringIcon />,
          <MysqlIcon />,
          <ChartjsIcon />,
        ]}
        url={[
          "https://github.com/JisooOvO/MiniProject-Frontend-DietApp",
          "https://kminiproject-healthyfit.notion.site/Healthyfit-88fa67f6947c42cfb44add1140190f58",
        ]}
      />
      <ProjectBox
        src={project2}
        title={"OCR 기반 영수증 텍스트 추출 프로젝트"}
        dates={"2023.12.19 ~ 2024.01.19"}
        description={
          "OCR을 이용하여 실물 전자 영수증의 텍스트를 추출하고 저장하는 웹 서비스입니다. Web Socket을 사용하여 유저간 채팅 기능이 포함되어있습니다."
        }
        stacks={[
          <ReactIcon />,
          <ReactrouterdomIcon />,
          <RecoilIcon />,
          <TailwindIcon />,
          <SocketIcon />,
          <SpringIcon />,
          <MysqlIcon />,
          <PythonIcon />,
        ]}
        url={[
          "https://github.com/JisooOvO/DataAnalystProject-Frontend-YoungmanProject",
          "https://youngmanproject.notion.site/AI-bb1b347feb924633902d73b60667424b",
        ]}
      />
      <ProjectBox
        src={project3}
        title={"Github Page 기반 개인 SPA 블로그 제작 프로젝트"}
        dates={"2023.02.08 ~ Proceeding"}
        description={
          "지금 보고계신 웹 페이지는 Jekeyll을 사용하지 않고 Github Page와 React만을 사용하여 제작한 개인 블로그 및 포트폴리오입니다. 포트폴리오와 공부 기록을 업로드합니다. Single Page 방식이므로 Home URL에만 URL 직접 접속이 가능합니다."
        }
        stacks={[
          <ReactIcon />,
          <ReactrouterdomIcon />,
          <StyledComponentIcon />,
          <RecoilIcon />,
          <GithubIcon />,
        ]}
        url={["https://github.com/JisooOvO/devlog"]}
      />
    </MyProjectContainer>
  );
};

const Main = () => {
  return (
    <Board id="board">
      <Intro />
      <Description />
      <MyInfo />
      <MyStack />
      <MyProject />
      <BufferZone />
    </Board>
  );
};

export default Main;
