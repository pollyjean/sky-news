import css from "styled-jsx/css";

export const listBox = css`
  li {
    position: relative;
    font-size: 1.3rem;
    font-weight: 500;
    letter-spacing: -0.25px;
    transition: 0.1s ease-in-out all;
    border: 1px solid rgba(var(--ink-color), 0.1);
    box-shadow: 4px 4px 8px rgba(var(--ink-color), 0.25), inset 0 0 40px rgba(var(--paper-shadow), 0.35);
    border-radius: 4px;
  }
`;

export const listBoxLink = css`
  li:hover {
    border: 1px solid rgba(var(--ink-color), 1);
    box-shadow: 3px 3px 5px rgba(var(--ink-color), 0.5), inset 0 0 40px rgba(var(--paper-shadow), 0.35);
  }
  li:active {
    top: 1.5px;
    left: 0.5px;
    box-shadow: 2px 2px 3px rgba(var(--ink-color), 0.3), inset 0 0 40px rgba(var(--paper-shadow), 0.35);
  }
`;
