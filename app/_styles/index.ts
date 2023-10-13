import css from "styled-jsx/css";

export const listBorder = css`
  li {
    border: var(--handwrite-border);
    box-shadow: var(--handwrite-box), 2px 2px 10px rgba(var(--foreground-rgb), 0.2);
    border-radius: var(--handwrite-radius);
  }
`;

export const mainContainer = css`
  main {
    position: relative;
    z-index: 2;
    max-width: 60rem;
    width: 95%;
    min-height: 80vh;
    margin: 0 auto 6rem auto;
    padding: 2rem 1.5rem 3rem 1.5rem;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
    background-color: rgb(var(--background-end-rgb));
  }
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
    letter-spacing: -2px;
  }
  p {
    font-size: 1.2rem;
    letter-spacing: 1px;
    color: rgba(var(--foreground-rgb), 0.8);
  }
`;
