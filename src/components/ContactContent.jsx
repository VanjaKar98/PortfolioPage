import { useState } from "react";

import styled from "styled-components";

import ContactForm from "./ContactForm";

import { device } from "../styles/breakpoints";

const EmailIcon = () => (
  <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 18" fill="none">
    <rect
      x="2"
      y="4"
      width="20"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      rx="2"
    />
    <path
      d="M2 6L12 14L22 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

const GithubIcon = () => (
  <svg
    width="1.5rem"
    height="1.5rem"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .5C5.65.5.5 5.78.5 12.3c0 5.22 3.44 9.65 8.21 11.22.6.11.82-.27.82-.6v-2.12c-3.34.74-4.04-1.64-4.04-1.64-.55-1.43-1.34-1.81-1.34-1.81-1.1-.77.08-.75.08-.75 1.22.09 1.86 1.29 1.86 1.29 1.08 1.9 2.84 1.35 3.53 1.03.11-.8.42-1.35.76-1.66-2.66-.31-5.46-1.36-5.46-6.04 0-1.33.46-2.41 1.22-3.26-.12-.31-.53-1.56.12-3.24 0 0 1-.33 3.3 1.24a11.2 11.2 0 016 0C17.9 3.42 18.9 3.75 18.9 3.75c.65 1.68.24 2.93.12 3.24.76.85 1.22 1.93 1.22 3.26 0 4.69-2.8 5.73-5.47 6.03.43.38.82 1.13.82 2.28v3.38c0 .33.22.71.83.59A11.82 11.82 0 0023.5 12.3C23.5 5.78 18.35.5 12 .5z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1s2.49 1.12 2.49 2.5zM.21 8.09H4.8V24H.21zM8.52 8.09h4.4v2.17h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.48 3.05 5.48 7.02V24h-4.59v-7.74c0-1.85-.03-4.23-2.58-4.23-2.58 0-2.97 2.02-2.97 4.1V24H8.52z" />
  </svg>
);

const StyledAddress = styled.address`
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  & div {
    display: flex;
    align-items: flex-start;
    gap: 5px;
  }

  & a {
    color: var(--col-secondary);

    &:hover {
      cursor: pointer;
    }
  }

  span {
    font-size: 1rem;
    line-height: 1.6;
  }

  & span:last-of-type {
    display: none;
    width: 1.75rem;
    height: 1.75rem;

    a {
      display: block;
      width: 100%;
      height: 100%;

      svg {
        transform: scale(0.75);
      }
    }

    @media ${device.mobile}, ${device.mobileLandscape} {
      display: block;
    }
  }

  @media ${device.mobile}, ${device.mobileLandscape} {
    flex-direction: row;
    gap: 2rem;
  }

  span:first-of-type,
  a:first-of-type {
    @media ${device.mobile}, ${device.mobileLandscape} {
      display: none;
    }
  }
`;

export default function ContactContent() {
  const [isActive, setActive] = useState(false);

  function activePopupHandle(state) {
    setActive(state);
  }

  return (
    <>
      <p>Feel free to reach out via email, LinkedIn, or GitHub:</p>
      <StyledAddress>
        <div>
          <span>Email:</span>
          <a href="mailto:vanjakarakas@gmail.com">vanjakarakas@gmail.com</a>
          <span>
            <a href="mailto:vanjakarakas@gmail.com">
              <EmailIcon />
            </a>
          </span>
        </div>
        <div>
          <span>LinkedIn:</span>
          <a href="https://linkedin.com/in/vanjakarakas" target="_blank">
            linkedin.com/in/vanjakarakas
          </a>
          <span>
            <a href="https://linkedin.com/in/vanjakarakas" target="_blank">
              <LinkedinIcon />
            </a>
          </span>
        </div>
        <div>
          <span>GitHub:</span>
          <a href="https://github.com/VanjaKar98" target="_blank">
            github.com/yourusername
          </a>
          <span>
            <a href="https://github.com/VanjaKar98" target="_blank">
              <GithubIcon />
            </a>
          </span>
        </div>
      </StyledAddress>
      <ContactForm isActive={isActive} activePopupHandle={activePopupHandle} />
    </>
  );
}
