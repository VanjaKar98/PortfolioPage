import logo from "../assets/images/logo.png";

import styled, { keyframes } from "styled-components";

const logoSwing = keyframes`
0% {
    transform:rotate(0);
  }
25% {
  transform:rotate(25deg);
  }
75% {
  transform:rotate(-25deg);
  }
100% {
   transform:rotate(0);
  }
`;

const StyledLogo = styled.span`
  display: block;
  width: 4rem;
  height: 4rem;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${logo});
  background-size: 100% 100%;
  animation: ${logoSwing} 120s infinite linear;
`;

export default function Logo() {
  return <StyledLogo />;
}
