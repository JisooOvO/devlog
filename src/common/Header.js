import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSetInnerWidth } from "./hooks";
import { MD } from "./utils";
import MenuIcon from "../Images/MenuIcon";
import { Icon } from "./styled";
import { useRecoilState } from "recoil";
import { atomIsHambergurButtonClick } from "./atom";
import CloseIcon from "../Images/CloseIcon";
import { useCallback, useEffect, useState } from "react";

const StlyedLink = styled(Link)`
  width: max-content;
  .title {
    font-size: 1.75rem;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
  }
  .description {
    color: #707070;
  }
`;

const HeaderContainer = styled.header`
  width: calc(100% - 8rem);
  height: 5rem;
  position: fixed;
  top: 0;
  z-index: 999;
  padding: 1rem 4rem 1rem 4rem;
  border-bottom: 1px solid #d9d9d9;
  background-color: #d9d9d9;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavContainer = styled.ul`
  display: flex;
  gap: 1rem;
`;

const NavList = styled(Link)`
  height: 1.5rem;
  box-sizing: border-box;
  font-size: large;

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #46bd87;
  }

  &.selected {
    border-bottom: 2px solid #46bd87;
  }
`;

const HamburgerNavContainer = styled.div`
  width: 100%;
  height: 10rem;
  padding: 2rem 4rem 2rem 4rem;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 888;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);

  &.open {
    transform: translateY(7rem);
    transition-duration: 1s;
  }

  &.close {
    transform: translateY(-7rem);
    transition-duration: 1s;
  }
`;

const itemList = [
  { id: 1, name: "Home", selected: true, url: "/" },
  { id: 2, name: "Language", selected: false, url: "/language" },
  {
    id: 3,
    name: "Stack",
    selected: false,
    url: "/stack",
  },
  { id: 4, name: "Project", selected: false, url: "/project" },
];

const Nav = ({ func, navigate }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const location = window.location.href;
    const pathname = location.slice(location.indexOf("#") + 1);

    if (location.indexOf("#") !== -1) {
      itemList.forEach((item) => {
        if (
          item.url ===
          pathname.slice(
            0,
            pathname.indexOf("/", 2) !== -1
              ? pathname.indexOf("/", 2)
              : undefined,
          )
        )
          item.selected = true;
        else item.selected = false;
      });
    }

    console.log(
      pathname.slice(
        0,
        pathname.indexOf("/", 2) !== -1 ? pathname.indexOf("/", 2) : undefined,
      ),
    );
    console.log(itemList);

    setList(
      itemList?.map((item) => (
        <NavList
          onClick={func}
          to={item.url}
          key={item.id}
          className={item.selected ? "selected" : ""}
        >
          {item.name}
        </NavList>
      )),
    );
  }, [func, navigate]);

  return <NavContainer className="nav-container">{list}</NavContainer>;
};

const HamburgerButton = ({
  isHambergurButtonClick,
  setIsHambergurButtonClick,
}) => {
  function handleClick() {
    const menu = document.querySelector(".menu");
    const hamburger = document.querySelector(".hamburger");

    menu.classList.add("clicked");

    if (!isHambergurButtonClick) {
      hamburger.classList.add("open");
      hamburger.classList.remove("close");
    } else {
      hamburger.classList.remove("open");
      hamburger.classList.add("close");
    }

    setTimeout(() => {
      setIsHambergurButtonClick(!isHambergurButtonClick);
      menu.classList.remove("clicked");
    }, 500);
  }

  return (
    <Icon
      className={"menu"}
      icon={isHambergurButtonClick ? <CloseIcon /> : <MenuIcon />}
      func={handleClick}
    />
  );
};

const HamburgerNav = () => {
  return (
    <HamburgerNavContainer className={"hamburger close"}>
      카테고리 들어갈 자리
    </HamburgerNavContainer>
  );
};

const Header = () => {
  const innerWidth = useSetInnerWidth();
  const [isHambergurButtonClick, setIsHambergurButtonClick] = useRecoilState(
    atomIsHambergurButtonClick,
  );
  const navigate = useNavigate();

  const handleClick = useCallback((event) => {
    const { target } = event;
    const { childNodes } = document.querySelector(".nav-container");

    for (const node of childNodes) {
      node.classList.remove("selected");
      if (target.tagName === "P") {
        childNodes[0].classList.add("selected");
      }
      if (target === node) {
        target.classList.add("selected");
      }
    }
  }, []);

  useEffect(() => {
    if (innerWidth < MD) {
      setIsHambergurButtonClick(false);
    }
  }, [innerWidth, setIsHambergurButtonClick]);

  return (
    <>
      <HeaderContainer>
        <StlyedLink id="home" to={"/"} onClick={handleClick}>
          <p className="title">DevLog 📚</p>
          <p className="description">차근히 배워가는중</p>
        </StlyedLink>
        {innerWidth >= MD ? (
          <Nav func={handleClick} navigate={navigate} />
        ) : (
          <HamburgerButton
            isHambergurButtonClick={isHambergurButtonClick}
            setIsHambergurButtonClick={setIsHambergurButtonClick}
          />
        )}
      </HeaderContainer>
      {innerWidth >= MD ? "" : <HamburgerNav />}
    </>
  );
};

export default Header;
