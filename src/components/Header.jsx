import styled from "styled-components";

import Logo from "./Logo";

import Navigation from "./Navigation";

import { device } from "../styles/breakpoints";

const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  height: 5.5rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    height: auto;
  }

  @media ${device.mobileLandscape} {
    padding: 0.5rem 1rem;
  }
`;

const StyledInner = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 2rem;
  }

  @media ${device.mobileLandscape} {
    gap: 1rem;
  }
`;

const StyledHeaderBorder = styled.div`
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background: var(--border-primary);
`;

const StyledInfoSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;

  @media ${device.desktop} {
    align-items: flex-start;
  }
`;

const StyledOwner = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 1rem;

  span {
    font-size: 0.875rem;
    font-weight: 400;
    opacity: 0.75;
  }

  @media ${device.desktop} {
    flex-direction: column;
    gap: 0.1rem;
  }
`;

export default function Header({ activeBtn, handleActiveBtn }) {
  return (
    <StyledHeader>
      <StyledInner>
        <StyledInfoSection>
          <Logo />
          <StyledOwner>
            <h2>Vanja Karakaš</h2>
            <span>Frontend developer/MEng in Geotechnics</span>
          </StyledOwner>
        </StyledInfoSection>
        <Navigation activeBtn={activeBtn} handleActiveBtn={handleActiveBtn} />
      </StyledInner>
      <StyledHeaderBorder />
    </StyledHeader>
  );
}
