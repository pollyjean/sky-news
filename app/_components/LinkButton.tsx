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
          display: inline-flex;
          padding: 0.5rem;
          font-size: 1.2rem;
          letter-spacing: 0.5px;
          box-shadow: 2px 2px 10px rgba(var(--foreground-rgb), 0.2);
        }
        li:hover {
          box-shadow: 2px 2px 5px rgba(var(--foreground-rgb), 0.6);
        }
      `}</style>
      <style jsx>{listBorder}</style>
    </>
  );
};

export default LinkButton;
