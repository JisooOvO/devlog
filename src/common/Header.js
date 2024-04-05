import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useIntersectionObserver, useSetInnerWidth } from "./hooks";
import { MD } from "./utils";
import MenuIcon from "../Images/MenuIcon";
import { Icon } from "./styled";
import { useRecoilState, useSetRecoilState } from "recoil";
import { atomIsHambergurButtonClick, atomIsObserve } from "./atom";
import CloseIcon from "../Images/CloseIcon";
import { useCallback, useEffect, useState } from "react";
import SideBar from "./SideBar";

const StlyedLink = styled(Link)`
  width: max-content;
  .blog-name {
    color: white;
    font-size: 1.75rem;
    font-family: "iceJaram-Rg";
    font-weight: 400;
    letter-spacing: 2px;
    margin-bottom: 0.5rem;
    padding-inline-start: 0px;
  }
  .description {
    letter-spacing: 1px;
    color: white;
    padding-inline-start: 0px;

    @media (max-width: ${MD + "px"}) {
      font-size: smaller;
      letter-spacing: 0;
    }
  }
`;

const HeaderContainer = styled.header`
  width: calc(100vw - 4rem);
  height: 5rem;
  position: relative;
  z-index: 999;
  padding: 1rem 2rem;
  border-bottom: 1px solid #d9d9d9;
  background: linear-gradient(to right, rgb(67, 124, 205), rgb(69, 214, 202));
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
  color: white;
  font-weight: 500;
  box-sizing: border-box;
  font-size: large;

  &:hover {
    cursor: pointer;
    border-bottom: 3px solid #447ecd;
  }

  &.selected {
    border-bottom: 3px solid #447ecd;
  }
`;

const HamburgerNavContainer = styled.div`
  width: 100%;
  height: 40rem;
  position: absolute;
  top: 0;
  background-color: #f9f9f8;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 777;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);

  &::-webkit-scrollbar {
    width: 5px;
  }

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
  { id: 1, name: "Home", selected: false, url: "" },
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
    const pathname = window.location.pathname.slice(7);

    itemList.forEach((item) => {
      if (item.url !== "" && pathname.startsWith(item.url))
        item.selected = true;
      else item.selected = false;
    });

    if (pathname === "/" || pathname === "") itemList[0].selected = true;

    setList(
      itemList?.map((item) => (
        <NavList
          onClick={func}
          to={item.url}
          key={item.id}
          className={item.selected === true ? "selected" : ""}
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
  const handleClick = useCallback(
    (event) => {
      const menu = document.querySelector(".menu");
      const hamburger = document.querySelector(".hamburger");
      const flag = event.target.closest(".menu");

      if (hamburger.classList.contains("close") && !flag) return;

      menu.classList.add("clicked");

      if (!isHambergurButtonClick && flag) {
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
    },
    [isHambergurButtonClick, setIsHambergurButtonClick],
  );

  useEffect(() => {
    const board = document.querySelector("#board");
    board?.addEventListener("click", handleClick);

    return () => {
      board?.removeEventListener("click", handleClick);
    };
  }, [handleClick]);

  return (
    <Icon
      className={"menu"}
      icon={isHambergurButtonClick ? <CloseIcon /> : <MenuIcon />}
      func={handleClick}
    />
  );
};

const HamburgerNav = ({ setIsHambergurButtonClick }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const hamburgerNav = document.querySelector("#hamburger-nav");
    hamburgerNav.classList.add("close");
    setIsHambergurButtonClick(false);
  }, [navigate, setIsHambergurButtonClick]);
  return (
    <HamburgerNavContainer id="hamburger-nav" className={"hamburger close"}>
      <SideBar className={"hamburger"} />
    </HamburgerNavContainer>
  );
};

const Header = () => {
  const { targetRef, isObserve } = useIntersectionObserver({
    threshold: 0,
  });
  const setIsObserve = useSetRecoilState(atomIsObserve);
  const innerWidth = useSetInnerWidth();
  const [isHambergurButtonClick, setIsHambergurButtonClick] = useRecoilState(
    atomIsHambergurButtonClick,
  );
  const navigate = useNavigate();

  const handleClick = useCallback((event) => {
    const { target } = event;

    if (target.className === "description") {
      window.open("https://github.com/JisooOvO", "_blank");
    }
  }, []);

  useEffect(() => {
    setIsObserve(isObserve);
  }, [isObserve, setIsObserve]);

  useEffect(() => {
    if (innerWidth < MD) {
      setIsHambergurButtonClick(false);
    }
  }, [innerWidth, setIsHambergurButtonClick]);

  useEffect(() => {
    const board = document.querySelector("#board");
    const sideBar = document.querySelector("#side-bar");

    if (!sideBar?.classList.contains("hidden")) {
      board?.classList.remove("unfold");
    } else {
      board?.classList.add("unfold");
    }
  }, [navigate]);

  return (
    <>
      <HeaderContainer ref={targetRef}>
        <StlyedLink id="home" to={"/"} onClick={handleClick}>
          <p className="blog-name">My Devlog</p>
          <p className="description">https://github.com/JisooOvO</p>
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
      {innerWidth >= MD ? (
        <SideBar />
      ) : (
        <HamburgerNav setIsHambergurButtonClick={setIsHambergurButtonClick} />
      )}
    </>
  );
};

export default Header;
