"use client";

import { listBorder } from "@/_styles";
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
          display: inline-flex;
          padding: 1rem;
          font-size: 1.2rem;
          letter-spacing: 0.5px;
          transition: 0.2s ease-in-out all;
        }
        li:hover {
          top: -2px;
          box-shadow: 3px 3px 7px rgba(var(--foreground-rgb), 0.6);
          @media (prefers-color-scheme: dark) {
            box-shadow: none;
          }
        }
        li:active {
          top: 2px;
          box-shadow: 1px 1px 5px rgba(var(--foreground-rgb), 0.6);
          @media (prefers-color-scheme: dark) {
            box-shadow: none;
          }
        }
      `}</style>
      <style jsx>{listBorder}</style>
    </>
  );
};

export default LinkButton;
