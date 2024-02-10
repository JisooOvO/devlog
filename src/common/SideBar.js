import { Link } from "react-router-dom";
import styled from "styled-components";
import { categoryList } from "./categoryList";

const SideBarContainer = styled.section`
  width: 22rem;
  height: calc(100vh - 7rem);
  position: fixed;
  top: 7rem;
  padding: 4rem;
  background-color: #f9f9f8;
  overflow-y: scroll;

  &.hamburger {
    width: 100%;
    height: 100%;
    overflow-y: visible;
    position: static;
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
`;

const SubCategory = styled.li`
  width: fit-content;
  margin-bottom: 1.5rem;
  margin-left: 1rem;
  padding-inline-start: 0px;

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
`;

const ThirdCategory = styled.ul`
  &.hidden {
    display: none;
  }
`;

const ThirdTitle = styled(SubTitle)`
  width: fit-content;
  display: flex;
  font-weight: 300;
  color: rgb(64, 160, 43);
  margin-top: 1.5rem;
  padding-inline-start: 0.5rem;
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
  padding-inline-start: 2.5rem;
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

const SideBar = ({ className }) => {
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
    <SideBarContainer className={className}>
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
                    <p>{sub.name}</p>
                    <Button onClick={handleFold}>▼</Button>
                  </ThirdTitle>
                  {sub.list?.map((list) => (
                    <List to={list.url} key={list.id}>
                      {list.name}
                    </List>
                  ))}
                </ThirdCategory>
              ))}
            </SubCategory>
          ))}
        </MainCategory>
      ))}
    </SideBarContainer>
  );
};

export default SideBar;
