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
import SideBar from "./SideBar";

const StlyedLink = styled(Link)`
  width: max-content;
  .blog-name {
    font-size: 1.75rem;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
    padding-inline-start: 0px;
  }
  .description {
    color: #707070;
    padding-inline-start: 0px;
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
  height: 40rem;
  position: fixed;
  top: 0;
  background-color: white;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 888;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);

  &.open {
    transform: translateY(7rem);
    transition-duration: 1s;
  }

  &.close {
    transform: translateY(-33rem);
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
  {
    id: 4,
    name: "Computer",
    selected: false,
    url: "/computer",
  },
];

const Nav = ({ func, navigate }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const pathname = window.location.pathname;

    itemList.forEach((item) => {
      if (item.url === pathname.slice(7)) item.selected = true;
      else item.selected = false;
    });

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
      <SideBar className={"hamburger"} />
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
    const childNodes = document.querySelector(".nav-container")?.childNodes;

    if (!childNodes) return;

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
          <p className="blog-name">DevLog 📚</p>
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
      {innerWidth >= MD ? <SideBar /> : <HamburgerNav />}
    </>
  );
};

export default Header;
