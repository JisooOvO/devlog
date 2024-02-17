import styled from "styled-components";
import UpArrowIcon from "../Images/UpArrowIcon";

const StyledScrollButton = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: white;
  position: fixed;
  z-index: 999;
  right: 3rem;
  bottom: 3rem;
  border: 2px solid #04d4ff;
  fill: #04d4ff;
  border-radius: 50%;
  box-shadow: 2px 1px 4px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const ScrollButton = () => {
  return (
    <StyledScrollButton
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <UpArrowIcon />
    </StyledScrollButton>
  );
};

export default ScrollButton;
