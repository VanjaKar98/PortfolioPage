import styled from "styled-components";

const StyledPopup = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: grayscale(1) blur(4px);

  & div {
    padding: 2rem;
    color: var(--col-secondary);
    background: var(--bg-secondary);
    border: 2px solid var(--border-primary);
    border-radius: 0.4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    & p {
      font-size: 1rem;
    }
  }
`;

export default function FormPopup({ message }) {
  return (
    <StyledPopup>
      <div>
        <p>{message}</p>
      </div>
    </StyledPopup>
  );
}
