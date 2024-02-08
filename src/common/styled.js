import styled, { keyframes } from "styled-components";

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

export const Icon = ({ className, icon, func }) => {
  return (
    <IconWrapper className={className} onClick={func}>
      {icon}
    </IconWrapper>
  );
};
