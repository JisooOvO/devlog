import { Link } from "react-router-dom";
import styled from "styled-components";
import { categoryList } from "./categoryList";
import { useEffect, useState } from "react";
import { MD } from "./utils";
import { useSetInnerWidth } from "./hooks";
import { BufferZone } from "./styled";
import { useRecoilValue } from "recoil";
import { atomIsObserve } from "./atom";

const SideBarContainer = styled.section`
  width: 22rem;
  height: calc(100vh);
  position: ${(props) => (props.$isObserve ? "absolute" : "fixed")};
  z-index: 777;
  top: ${(props) => (props.$isObserve ? "7rem" : "0rem")};
  padding: 4rem;
  background-color: #f9f9f8;
  overflow-y: scroll;

  &.hamburger {
    width: 100%;
    height: 100%;
    overflow-y: visible;
    position: static;
  }

  &.hidden {
    display: none;
  }
`;

const MainCategory = styled.ul`
  width: fit-content;
  margin-bottom: 4rem;
`;

const MainTitle = styled(Link)`
  width: fit-content;
  display: flex;
  font-size: 1.25rem;
  font-weight: 400;
  color: rgb(210, 10, 57);
  margin-bottom: 1.5rem;
  & p:hover {
    cursor: pointer;
    opacity: 0.6;
  }
  &::before {
    content: "•";
    margin-right: 0.5rem;
  }
`;

const SubCategory = styled.li`
  width: fit-content;
  margin-bottom: 1.5rem;

  &.hidden {
    display: none;
  }
`;

const SubTitle = styled(Link)`
  width: fit-content;
  display: flex;
  font-size: 1.25rem;
  font-weight: 400;
  color: rgb(254, 110, 11);
  margin-left: 0.25rem;
  margin-bottom: 1rem;
  & p:hover {
    cursor: pointer;
    opacity: 0.6;
  }
  &::before {
    content: "•";
    margin-right: 0.5rem;
  }
`;

const ThirdCategory = styled.ul`
  &.hidden {
    display: none;
  }

  .list {
    display: none;
  }
`;

const ThirdTitle = styled(SubTitle)`
  width: fit-content;
  display: flex;
  font-weight: 300;
  color: rgb(64, 160, 43);
  margin-top: 1.5rem;
  margin-left: 1rem;
  &::before {
    content: "•";
    margin-right: 0.5rem;
  }
`;

const CategoryTitle = styled.p`
  width: fit-content;
  font-size: 1.75rem;
  letter-spacing: 1px;
  font-weight: 300;
  pointer-events: none;
  padding-inline-start: 0px;
`;

const Line = styled.hr`
  width: 15rem;
  margin-block-end: 2rem;
  margin-inline-start: 0;
`;

const List = styled(ThirdTitle)`
  display: block;
  white-space: nowrap;
  padding-inline-start: 0.5rem;
  color: black;
  font-size: medium;
  &:hover {
    opacity: 0.6;
  }
  &::before {
    content: "- ";
  }
  &.hidden {
    display: none;
  }
`;

const Button = styled.button`
  font-size: large;
  color: inherit;
  border: none;
  background-color: inherit;

  &:hover {
    cursor: pointer;
  }
`;

const Number = styled.span`
  margin-left: 0.25rem;
  font-size: medium;
`;

const StyledHideButton = styled.p`
  font-size: 2rem;
  color: #447ecd;
  display: flex;
  align-items: start;
  padding: 0;
  position: fixed;
  border: none;
  left: 1rem;
  top: ${(props) => (props.$isObserve === false ? "0.5rem" : "7.5rem")};
  z-index: 888;

  &:hover {
    cursor: pointer;
  }
`;

const HideButton = ({ setIsFold }) => {
  const isObserve = useRecoilValue(atomIsObserve);
  const handleClick = () => {
    setIsFold(true);
    const sideBar = document.querySelector("#side-bar");
    const board = document.querySelector("#board");
    sideBar.classList.add("hidden");
    board.classList.add("unfold");
  };
  return (
    <StyledHideButton $isObserve={isObserve} onClick={handleClick}>
      ◀
    </StyledHideButton>
  );
};

const OpenButton = ({ setIsFold }) => {
  const isObserve = useRecoilValue(atomIsObserve);
  const handleClick = () => {
    setIsFold(false);
    const sideBar = document.querySelector("#side-bar");
    const board = document.querySelector("#board");
    sideBar.classList.remove("hidden");
    board.classList.remove("unfold");
  };
  return (
    <StyledHideButton $isObserve={isObserve} onClick={handleClick}>
      ▶
    </StyledHideButton>
  );
};

const SideBar = ({ className }) => {
  const innerWidth = useSetInnerWidth();
  const [isFold, setIsFold] = useState(false);
  const isObserve = useRecoilValue(atomIsObserve);

  useEffect(() => {
    const board = document.querySelector("#board");
    const sideBar = document.querySelector("#side-bar");
    if (board?.classList.contains("unfold")) {
      sideBar.classList.add("hidden");
    }
  }, [isObserve]);

  useEffect(() => {
    const sideBar = document.querySelector("#side-bar");
    if (sideBar.classList.contains("hidden")) {
      setIsFold(true);
    }
  }, [innerWidth]);

  function handleFold(event) {
    event.preventDefault();

    const { target } = event;

    if (target.innerText === "▼") target.innerText = "▲";
    else target.innerText = "▼";

    const { childNodes } = target.closest("#main");

    for (let i = 1; i < childNodes.length; i++) {
      childNodes[i].classList.toggle("hidden");
    }
  }

  return (
    <>
      {innerWidth >= MD ? (
        isFold ? (
          <OpenButton setIsFold={setIsFold} />
        ) : (
          <HideButton setIsFold={setIsFold} />
        )
      ) : (
        ""
      )}
      <SideBarContainer
        id="side-bar"
        className={className}
        $isObserve={isObserve}
      >
        <CategoryTitle>CATEGORY</CategoryTitle>
        <Line />
        {categoryList.map((item) => (
          <MainCategory id="main" key={item.id}>
            <MainTitle to={item.url}>
              <p>{item.name}</p>
              <Button onClick={handleFold}>▼</Button>
            </MainTitle>
            {item.sub?.map((subItem) => (
              <SubCategory id="main" key={subItem.id}>
                <SubTitle to={subItem.url}>
                  <p>{subItem.name}</p>
                  <Button onClick={handleFold}>▼</Button>
                </SubTitle>
                {subItem.sub?.map((sub) => (
                  <ThirdCategory id="main" key={sub.id}>
                    <ThirdTitle to={sub.url}>
                      <p>
                        {sub.name}
                        <Number>{"(" + sub.list?.length + ")"}</Number>
                      </p>
                      <Button onClick={handleFold}>▲</Button>
                    </ThirdTitle>
                    {sub.list?.map((list) => (
                      <List to={list.url} key={list.id} className="hidden">
                        {list.name}
                      </List>
                    ))}
                  </ThirdCategory>
                ))}
              </SubCategory>
            ))}
          </MainCategory>
        ))}
        <BufferZone />
      </SideBarContainer>
    </>
  );
};

export default SideBar;
