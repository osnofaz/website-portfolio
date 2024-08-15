import React, { useState } from "react";
import { AiOutlineUp } from "react-icons/ai";
import styled from "styled-components";
function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
  });
  return (
    <Div>
      <a href="# " className={`${visible ? "block" : "none"}`}>
        <AiOutlineUp />
      </a>
    </Div>
  );
}

const Div = styled.div`
  max-width: 100vw;
  .none {
    opacity: 0;
    visibility: hidden;
  }
  a {
    position: fixed;
    bottom: 40px;
    right: 40px;
    background-color: var(--dark-text);
    padding: 1rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease-in-out;
    z-index: 1;
    svg {
      color: var(--dark-footer);
      font-size: 1.3rem;
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
      left: 85vw;
      right: initial;
      bottom: 50px;
      padding: 1rem;

      }

      @media only screen and (max-width: 960px) {
        left: 85w;
  
        }
  }
`;

export default ScrollToTop;