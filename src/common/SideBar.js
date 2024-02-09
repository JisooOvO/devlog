import { Link } from "react-router-dom";
import styled from "styled-components";
import { categoryList } from "./categoryList";

const SideBarContainer = styled.section`
  width: 18rem;
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
  display: block;
  font-size: 1.25rem;
  font-weight: 600;
  color: rgb(210, 10, 57);
  margin-bottom: 1.5rem;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
  &::after {
    content: " ▾";
  }
`;

const SubCategory = styled.li`
  width: fit-content;
  margin-bottom: 1.5rem;
  margin-left: 1rem;
  padding-inline-start: 0px;
`;

const SubTitle = styled(Link)`
  width: fit-content;
  display: block;
  font-size: 1.25rem;
  font-weight: 600;
  color: rgb(254, 110, 11);
  margin-left: 0.25rem;
  margin-bottom: 1rem;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
  &::before {
    content: "📁 ";
  }
`;

const ThirdCategory = styled.div`
  width: fit-content;
`;

const ThirdTitle = styled(SubTitle)`
  width: fit-content;
  font-weight: 500;
  color: rgb(64, 160, 43);
  margin-top: 1.5rem;
  padding-inline-start: 0.5rem;
  &::before {
    content: "📁 ";
  }
`;

const CategoryTitle = styled.p`
  width: fit-content;
  font-size: 1.75rem;
  letter-spacing: 1px;
  font-weight: 300;
  padding-inline-start: 0px;
  &:hover {
    cursor: default;
  }
`;

const Line = styled.hr`
  width: 15rem;
  margin-block-end: 2rem;
  margin-inline-start: 0;
`;

const List = styled(ThirdTitle)`
  padding-inline-start: 2.5rem;
  color: black;
  font-size: medium;
  &::before {
    content: "- ";
  }
`;

const SideBar = ({ className }) => {
  return (
    <SideBarContainer className={className}>
      <CategoryTitle>CATEGORY</CategoryTitle>
      <Line />
      {categoryList.map((item) => (
        <MainCategory key={item.id}>
          <MainTitle to={item.url}>{item.name}</MainTitle>
          {item.sub?.map((subItem) => (
            <SubCategory key={subItem.id}>
              <SubTitle to={subItem.url}>{subItem.name}</SubTitle>
              {subItem.sub?.map((sub) => (
                <ThirdCategory key={sub.id}>
                  <ThirdTitle to={sub.url}>{sub.name}</ThirdTitle>
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
