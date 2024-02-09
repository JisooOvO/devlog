export const categoryList = [
  {
    id: "main1",
    name: "🏆 Language",
    url: "/language",
    sub: [
      {
        id: "main1-1",
        name: "Javascript",
        url: "/language/javascript",
        sub: [
          {
            id: 1,
            name: "basic",
            url: "/language/javascript/basic",
            list: [
              {
                id: 1,
                name: "자바스크립트 기초",
                url: "/language/javascript/basic/1",
              },
            ],
          },
        ],
      },
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
        url: "/stack/framework",
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
        url: "/stack/library",
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
