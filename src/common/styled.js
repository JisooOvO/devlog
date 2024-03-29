import styled, { keyframes } from "styled-components";
import { MD } from "./utils";

const fadeOutAndIn = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;

  &:hover {
    cursor: pointer;
  }

  &.clicked {
    animation: ${fadeOutAndIn} 1s;
  }
`;

export const Board = styled.div`
  margin-top: 4rem;
  margin-left: 37rem;
  margin-right: 8rem;

  &.unfold {
    margin-left: 8rem;
  }

  @media (max-width: ${MD + "px"}) {
    width: calc(100vw - 2rem);
    margin-left: 1rem;
    margin-right: 1rem;

    &.unfold {
      margin-left: 1rem;
    }
  }
`;

export const BufferZone = styled.div`
  height: 10rem;
`;

export const Icon = ({ className, icon, func }) => {
  return (
    <IconWrapper className={className} onClick={func}>
      {icon}
    </IconWrapper>
  );
};
