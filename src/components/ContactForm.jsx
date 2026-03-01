import styled from "styled-components";

import emailjs from "@emailjs/browser";

import { useState, useEffect } from "react";

import Button from "./Button";

import FormPopup from "./FormPopup";

const StyledForm = styled.form`
  width: 25rem;
  padding: 2rem;
  background: var(--bg-secondary);
  border: 2px solid var(--border-primary);
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  & div {
    width: 100%;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  & input,
  & textarea {
    width: 100%;
    color: var(--col-secondary);
    border: 2px solid var(--border-primary);
    font-size: 1rem;
    padding-left: 10px;
    line-height: 1.6rem;
    caret-color: var(--col-secondary);
    box-sizing: border-box;
  }

  & input {
    height: 1.8rem;
  }
`;

export default function ContactForm({ isActive, activePopupHandle }) {
  const [message, setMessage] = useState("");

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const date = new Date().toLocaleDateString("hr-HR", options);
  let content;
  const url = new URL("https://69a2c8aebe843d692bd2398f.mockapi.io/contacts");

  async function formHandle(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const dataObject = Object.fromEntries(formData);
    dataObject.date = date;

    for (let prop in dataObject) {
      dataObject[prop] = dataObject[prop].trim();
    }

    const allInputsFilled = Object.values(dataObject).every(
      (value) => value.length > 0,
    );

    const emailPattern = /\S+@\S+\.\S+/;

    if (!allInputsFilled) {
      content = "All inputs are required!!";
    } else if (!emailPattern.test(dataObject.email)) {
      content = "Email format is incorrect!";
    } else {
      try {
        let response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataObject),
        });

        if (!response.ok) throw new Error();
        content = "Message was submited!";
        mailAlertHandle(event);
        event.target.reset();
      } catch (error) {
        content = "Error occurred during submission!";
      }
    }

    setMessage(content);

    activePopupHandle(true);
  }

  useEffect(() => {
    if (isActive) {
      let timeout = setTimeout(() => activePopupHandle(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [isActive]);

  function mailAlertHandle(event) {
    emailjs.sendForm(
      "service_f4wfo7e",
      "template_lia6a5k",
      event.target,
      "NCwNuX7jyEZtjVvbu",
    );
  }

  return (
    <>
      <StyledForm action="" onSubmit={formHandle}>
        <div>
          <label htmlFor="name">Your name</label>

          <input id="name" type="text" name="name" autoComplete="off" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="text" name="email" autoComplete="off" />
        </div>

        <div>
          <label htmlFor="message">Type a message</label>
          <textarea id="message" name="message" rows={5} autoComplete="off" />
        </div>

        <Button $primary type="submit">
          send
        </Button>
      </StyledForm>
      {isActive && <FormPopup message={message} />}
    </>
  );
}
