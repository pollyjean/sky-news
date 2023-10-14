import css from "styled-jsx/css";

export const listBorder = css`
  li {
    border: var(--handwrite-border);
    box-shadow: 2px 2px 10px rgba(var(--foreground-rgb), 0.3);
    border-radius: var(--handwrite-radius);
  }
`;

export const mainContainer = css`
  main {
    position: relative;
    z-index: 2;
    max-width: 80rem;
    width: 95%;
    min-height: 80vh;
    margin: 0 auto 6rem auto;
    padding: 3rem 3rem 4rem 3em;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);
    background-color: rgb(var(--background-end-rgb));
  }
  h1 {
    font-size: 4rem;
    line-height: 1;
    text-align: center;
    margin: 0 3rem 4rem;
    letter-spacing: -3px;
  }
  p {
    font-size: 1.2rem;
    letter-spacing: 1px;
    margin: 0 3rem 4rem;
    color: rgba(var(--foreground-rgb), 0.8);
  }
`;
