"use client";

import Image from "next/image";
import Link from "next/link";
import { Book } from "@/_types";
import { checkForRankingChanges } from "@/_utilities";
import { useState } from "react";
import BuyBookLayer from "./BuyBookLayer";

const BookItem = (props: Book) => {
  const [buyLayer, setBuyLayer] = useState(false);
  const onClick = () => {
    setBuyLayer((prev) => !prev);
  };
  return (
    <>
      <li className={"rank-" + props.rank}>
        <span>
          <b>{props.rank}</b> {checkForRankingChanges(props.rank, props.rank_last_week, props.weeks_on_list)}
        </span>
        {props.book_image && (
          <figure>
            <Image src={props.book_image} width={330 / 2} height={490 / 2} alt="" priority={true} />
          </figure>
        )}
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <p>
          {props.description}
          {props.book_review_link && <Link href={props.book_review_link}>...more</Link>}
          <em>{`(${props.publisher})`}</em>
        </p>
        {props.buy_links && (
          <div>
            <button onClick={onClick}>[Buy Book]</button>
            {buyLayer && <BuyBookLayer buyLinks={props.buy_links} />}
          </div>
        )}
      </li>
      <style jsx>{`
        li {
          padding: 0.5rem 0 2rem 0;
          box-shadow: 3px 3px 9px rgba(var(--background-start-rgb), 1),
            inset 0 0 15px rgba(var(--background-start-rgb), 1);
          border-radius: 3rem 4px 4px 4px;
          border: 1px solid rgba(var(--foreground-rgb), 0.3);
          background-color: rgba(var(--background-end-rgb), 1);
        }
        li span {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          font-size: 0.9rem;
        }
        li span b {
          font-size: 1.3rem;
          font-weight: bold;
        }
        h2 {
          font-size: 1.3rem;
          letter-spacing: -1px;
          margin-bottom: 3px;
          text-align: center;
          font-weight: bolder;
          padding: 0.5rem 1rem;
          line-height: 1;
        }
        h3 {
          font-size: 0.9rem;
          padding: 0 1rem 0.5rem 1rem;
          margin-bottom: 0.5rem;
          line-height: 1;
          border-bottom: 1px solid rgba(var(--foreground-rgb), 0.4);
          text-align: center;
        }
        p {
          font-size: 0.9rem;
          padding: 0 1rem;
          letter-spacing: 0.5px;
          line-height: 1.5;
        }
        p em {
          display: block;
          font-size: 0.8rem;
        }
        li.rank-1 {
          grid-column: 1 / 3;
        }
        li.rank-2 {
          grid-column: 3 / 5;
        }
        li div {
          position: relative;
        }
        li div button {
          font-weight: bold;
        }
        li figure {
          display: flex;
          justify-content: center;
          margin: 0.5rem 0;
        }
        button {
          margin-top: 0.5rem;
          padding: 0 1rem;
        }
      `}</style>
      <style jsx global>{`
        li.rank-1 figure img,
        li.rank-2 figure img {
          width: 17rem;
          height: auto;
        }
        li figure img {
          width: 100%;
          height: auto;
        }
      `}</style>
    </>
  );
};

export default BookItem;
