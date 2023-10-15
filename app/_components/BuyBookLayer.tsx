"use client";

import { listBox, listBoxLink } from "@/_styles";
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
      <style jsx>{listBox}</style>
      <style jsx>{listBoxLink}</style>
      <style jsx>{`
        ul {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          position: absolute;
          z-index: 2;
          top: 3.2rem;
          left: 3.4rem;
          background-color: rgba(var(--paper-color), 1);
          border: 2px solid rgba(var(--ink-color), 1);
          box-shadow: 4px 4px 12px rgba(var(--ink-color), 0.6);
          border-radius: 0 1rem 1rem 1rem;
          padding: 0.5rem;
          width: 16rem;
        }
        ul:before {
          content: "";
          position: absolute;
          top: -22px;
          left: -2px;
          width: 0;
          height: 0;
          border: 10px solid transparent;
          border-bottom: 10px solid rgba(var(--ink-color), 1);
        }
        li {
          padding: 0.25rem 0.5rem;
        }
      `}</style>
    </>
  );
};

export default BuyBookLayer;
