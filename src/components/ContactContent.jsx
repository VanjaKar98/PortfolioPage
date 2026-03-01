import { useState } from "react";

import styled from "styled-components";

import ContactForm from "./ContactForm";

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
    transition: color 0.5s linear;
    color: var(--col-secondary);

    &:hover {
      cursor: pointer;
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
          Email:
          <a href="mailto:vanjakarakas@gmail.com">vanjakarakas@gmail.com</a>
        </div>
        <div>
          LinkedIn:
          <a href="https://linkedin.com/in/vanjakarakas" target="_blank">
            linkedin.com/in/vanjakarakas
          </a>
        </div>

        <div>
          GitHub:
          <a href="https://github.com/VanjaKar98" target="_blank">
            github.com/yourusername
          </a>
        </div>
      </StyledAddress>
      <ContactForm isActive={isActive} activePopupHandle={activePopupHandle} />
    </>
  );
}
