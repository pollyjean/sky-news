"use client";

import { listBox, listBoxLink } from "@/_styles";
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
      <style jsx>{listBox}</style>
      <style jsx>{listBoxLink}</style>
      <style jsx global>{`
        main li a {
          padding: 1rem 1.2rem;
        }
      `}</style>
    </>
  );
};

export default LinkButton;
