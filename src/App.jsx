import { useState } from "react";

import BackgroundContainer from "./components/BackgroundContainer";

import Header from "./components/Header";

import Main from "./components/Main";

import { createGlobalStyle } from "styled-components";

import { device } from "./styles/breakpoints";

const GlobalStyles = createGlobalStyle`

:root {
  --bg-primary: #0b0b12;
  --bg-secondary: rgb(255 255 255 / 0.06);
  --bg-tertiary: rgb(229 231 235 / 0.3);
  --col-primary: #e5e7eb;
  --col-secondary: #c6a6ed;
  --col-tertiary: rgb(229 231 235 / 0.3);
  --border-primary: rgb(168 85 247 / 0.12);
  --underline: #c6a6ed;
  --glow: rgb(84 68 176 / 0.8);
}

html{
  min-height: 100%;
  box-sizing: border-box;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
}

body {
  position: relative;
  width:100vw;
  height:100dvh;
  font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--col-primary);
  background: var(--bg-primary);
  background-size: 100%;
  background-repeat: no-repeat; 
  overflow:hidden; 
}

div#root{
width:100%;
height:100%;
max-height:100dvh;
display:flex;
flex-direction:column;
align-items:center;
gap:0.5rem;
}

ul,li,button,address,a, input, textarea{
  all:unset;
}

p{
font-size: 1rem;
line-height: 1.6;
margin: 0;
}

h2{
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 1.3;
}


h3{
  font-size: 1.4rem;   
  letter-spacing: 0.02em; 
  margin-bottom: 1.5rem;
  
  &::first-letter{
    text-transform: uppercase;
  }
}

h4{
  font-size: 1.2rem;
  text-transform: capitalize;
  margin-bottom: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

span{
  svg{
    display:block;
    width:2rem;
    height:2rem;
    color:currentColor;
    }
}

@media ${device.desktopL} {
  html{
  font-size:16px;
  }
}

@media ${device.desktop} {
  html{
  font-size:15px;
  }
}

@media ${device.tablet} {
  html{
  font-size:14px;
  }
}

@media ${device.mobile} {
  html{
  font-size:13px;
  }

  div#root{
  gap:0.5rem;}
}

@media ${device.mobileLandscape} {

  html{
    font-size:12px;
  }

  h3{
   margin-bottom: 1rem;
    } 
}
`;

function App() {
  const [activeBtn, setActiveBtn] = useState("home");

  function handleActiveBtn(active) {
    setActiveBtn(active);
  }

  return (
    <>
      <GlobalStyles />
      <BackgroundContainer />
      <Header activeBtn={activeBtn} handleActiveBtn={handleActiveBtn} />
      <Main activeBtn={activeBtn} />
    </>
  );
}

export default App;
