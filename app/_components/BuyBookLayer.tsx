"use client";

import { listBorder } from "@/_styles";
import { BuyLink } from "@/_types";
import Link from "next/link";

interface BuyBookLayerProps {
  buyLinks: BuyLink[];
}

const BuyBookLayer = ({ buyLinks }: BuyBookLayerProps) => {
  return (
    <>
      <ul>
        {buyLinks.map((item) => (
          <li key={item.name}>
            <Link href={item.url}>{item.name} &rarr;</Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        ul {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          position: absolute;
          z-index: 2;
          top: 40px;
          left: 30px;
          background-color: rgba(var(--background-end-rgb), 1);
          border: 2px solid rgba(var(--foreground-rgb), 1);
          box-shadow: 4px 4px 12px rgba(var(--foreground-rgb), 0.6);
          @media (prefers-color-scheme: dark) {
            box-shadow: none;
          }
          border-radius: 0 1rem 1rem 1rem;
          padding: 0.5rem;
          width: 15rem;
        }
        ul:before {
          content: "";
          position: absolute;
          top: -22px;
          left: -2px;
          width: 0;
          height: 0;
          border: 10px solid transparent;
          border-bottom: 10px solid rgba(var(--foreground-rgb), 1);
        }
        li {
          padding: 0.25rem;
        }
        li:hover {
          box-shadow: 3px 3px 10px rgba(var(--foreground-rgb), 0.6);
          @media (prefers-color-scheme: dark) {
            box-shadow: 3px 3px 10px rgba(var(--foreground-rgb), 0.6);
          }
        }
      `}</style>
      <style jsx>{listBorder}</style>
    </>
  );
};

export default BuyBookLayer;
