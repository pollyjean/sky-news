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
            position: relative;
            z-index: 1;
            display: flex;
            padding: 1rem;
            justify-content: space-around;
            font-size: 1.5rem;
            border-bottom: 1px solid rgba(var(--foreground-rgb), 0.1);
            border-radius: 2px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            background-color: rgba(var(--background-end-rgb), 1);
          }
          menu .active {
            opacity: 1;
            font-weight: bold;
          }
          menu li {
            border-bottom: 3px solid rgba(var(--foreground-rgb), 0);
            opacity: 0.7;
          }
          menu li:hover {
            border-bottom: 3px solid rgba(var(--foreground-rgb), 0.8);
            border-radius: 3px;
          }
        `}
      </style>
    </>
  );
};

export default Header;
