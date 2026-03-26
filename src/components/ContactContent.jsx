import { useState } from "react";

import styled from "styled-components";

import ContactForm from "./ContactForm";

import Link from "./Link";

import { device } from "../styles/breakpoints";

import { EmailIcon, GithubIcon, LinkedinIcon } from "./Icons";

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

  & span {
    font-size: 1rem;
    line-height: 1.6;
  }

  & span:last-of-type {
    display: none;

    a {
      display: block;
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
          <Link $text href="mailto:vanjakarakas@gmail.com">
            vanjakarakas@gmail.com
          </Link>
          <span>
            <Link $iconLg href="mailto:vanjakarakas@gmail.com">
              <EmailIcon />
            </Link>
          </span>
        </div>
        <div>
          <span>LinkedIn:</span>
          <Link $text href="https://linkedin.com/in/vanjakarakas">
            linkedin.com/in/vanjakarakas
          </Link>

          <span>
            <Link $iconLg href="https://linkedin.com/in/vanjakarakas">
              <LinkedinIcon />
            </Link>
          </span>
        </div>
        <div>
          <span>GitHub:</span>

          <Link $text href="https://github.com/VanjaKar98">
            github.com/VanjaKar98
          </Link>

          <span>
            <Link $iconLg href="https://github.com/VanjaKar98">
              <GithubIcon />
            </Link>
          </span>
        </div>
      </StyledAddress>
      <ContactForm isActive={isActive} activePopupHandle={activePopupHandle} />
    </>
  );
}
