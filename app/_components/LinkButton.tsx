"use client";

import Link from "next/link";

interface LinkButtonProps {
  link: string;
  name: string;
}

const LinkButton = ({ link, name }: LinkButtonProps) => {
  return (
    <>
      <li>
        <Link href={`/list/${link}`}>{name} &rarr;</Link>
      </li>
      <style jsx>{`
        li {
          position: relative;
          display: flex;
          padding: 1rem 1.2rem;
          font-size: 1.3rem;
          font-weight: 500;
          letter-spacing: -0.25px;
          transition: 0.1s ease-in-out all;
          border: 1px solid rgba(var(--ink-color), 0.8);
          box-shadow: 4px 4px 8px rgba(var(--ink-color), 0.25);
          border-radius: 4px;
        }
        li:hover {
          border: 1px solid rgba(var(--ink-color), 1);
          box-shadow: 3px 3px 5px rgba(var(--ink-color), 0.5);
        }
        li:active {
          top: 1.5px;
          left: 0.5px;
          box-shadow: 2px 2px 3px rgba(var(--ink-color), 0.3);
        }
      `}</style>
    </>
  );
};

export default LinkButton;
