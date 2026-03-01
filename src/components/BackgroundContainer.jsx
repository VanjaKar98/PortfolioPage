import styled from "styled-components";

import backgroundImage from "../assets/images/background.png";

const StyledBackgroundContainer = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100vh;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, var(--bg-primary), transparent 100%);
  }
`;

const StyledImage = styled.img`
  display: block;
  width: 100%;
`;

export default function BackgroundContainer() {
  return (
    <StyledBackgroundContainer>
      <StyledImage src={backgroundImage} alt=""></StyledImage>
    </StyledBackgroundContainer>
  );
}
