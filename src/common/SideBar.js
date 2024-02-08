import { Link } from "react-router-dom";
import styled from "styled-components";

const SideBarContainer = styled.section`
  width: 15rem;
  height: calc(100vh - 7rem);
  position: fixed;
  top: 7rem;
  padding: 4rem;
  background-color: #f9f9f8;
  overflow-y: scroll;
`;

const MainCategory = styled.ul`
  margin-bottom: 4rem;
`;

const MainTitle = styled(Link)`
  display: block;
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  &:hover {
    cursor: pointer;
  }
  &::after {
    content: " ▾";
  }
`;

const SubCategory = styled.li`
  margin-bottom: 1.5rem;
  margin-left: 2.5rem;
  margin-bottom: 2rem;
  list-style-type: "📁";
`;

const SubTitle = styled(Link)`
  display: block;
  font-size: medium;
  font-weight: 400;
  margin-left: 0.25rem;
  margin-bottom: 1rem;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const ThirdCategory = styled.div``;

const ThirdTitle = styled(SubTitle)`
  font-weight: 300;
`;

const CategoryTitle = styled.p`
  width: 100%;
  font-size: 1.75rem;
  letter-spacing: 1px;
  font-weight: 300;
`;

const Line = styled.hr`
  margin-bottom: 2rem;
`;

const categoryList = [
  {
    id: "main1",
    name: "🏆 Language",
    url: "/language",
    sub: [
      { id: "main1-1", name: "Javascript", url: "/language/javascript" },
      { id: "main1-2", name: "Java", url: "/language/java" },
      { id: "main1-3", name: "Python", url: "/language/python" },
    ],
  },
  {
    id: "main2",
    name: "🎁 Stack",
    url: "/stack",
    sub: [
      {
        id: "main2-1",
        name: "Framework",
        sub: [
          { id: "main2-1-1", name: "React", url: "/stack/framework/react" },
          {
            id: "main2-1-2",
            name: "Spring Boot",
            url: "/stack/framework/spring_boot",
          },
        ],
      },
      {
        id: "main2-2",
        name: "Library",
        url: "/library",
        sub: [
          {
            id: "main2-2-1",
            name: "Styled-Components",
            url: "/stack/library/styled-components",
          },
          {
            id: "main2-2-2",
            name: "React-query",
            url: "/stack/library/react-query",
          },
        ],
      },
    ],
  },
  {
    id: "main3",
    name: "⛳ Project",
    url: "/project",
    sub: [
      //   { id: "main3-1", name: "test1" },
      //   { id: "main3-2", name: "test2" },
    ],
  },
];

const SideBar = () => {
  return (
    <SideBarContainer>
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
