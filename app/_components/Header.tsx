"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  return (
    <>
      <header>
        <menu>
          <li className={`${pathname === "/" ? "active" : ""}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${pathname === "/about" ? "active" : ""}`}>
            <Link href="/about">About</Link>
          </li>
        </menu>
      </header>
      <style jsx>
        {`
          menu {
            display: flex;
            padding: 1.5rem;
            justify-content: space-around;
            position: relative;
            z-index: 1;
            border-bottom: 1px solid rgba(var(--paper-color), 0.3);
            box-shadow: 0 0 1rem rgba(var(--paper-color), 1), inset 0 0.25rem 0.25rem rgba(var(--paper-color), 1);
          }
          menu .active {
            opacity: 1;
            font-weight: bold;
          }
          menu li {
            border-bottom: 2px solid rgba(var(--ink-color), 0);
            line-height: 1.3;
            opacity: 0.95;
            transition: 0.1s ease-in all;
          }
          menu li:hover {
            border-bottom: 2px solid rgba(var(--ink-color), 0.8);
            border-radius: 2px;
          }
        `}
      </style>
    </>
  );
};

export default Header;
