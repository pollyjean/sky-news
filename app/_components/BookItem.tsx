"use client";

import Image from "next/image";
import Link from "next/link";
import { Book } from "@/_types";
import { checkForRankingChanges } from "@/_utilities";
import { useState } from "react";
import BuyBookLayer from "./BuyBookLayer";
import { listBox } from "@/_styles";

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
      <style jsx>{listBox}</style>
      <style jsx>{`
        li {
          border-radius: 4px var(--paragraph-margin) 4px 4px;
          padding: 0 0 var(--paragraph-margin) 0;
        }
        li span {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding: 0 var(--paragraph-margin);
          border-bottom: 1px solid rgba(var(--ink-color), 0.4);
        }
        li span b {
          font-size: 2rem;
          font-weight: bold;
        }
        h2 {
          font-size: 1.5rem;
          letter-spacing: -1px;
          text-align: center;
          font-weight: bolder;
          padding: var(--paragraph-margin);
          line-height: 1;
        }
        h3 {
          font-size: 0.9rem;
          padding: 0 var(--paragraph-margin) var(--paragraph-margin);
          line-height: 1;
          border-bottom: 1px solid rgba(var(--ink-color), 0.2);
          text-align: center;
        }
        p {
          font-size: 1.25rem;
          padding: var(--paragraph-margin);
          letter-spacing: 0.5px;
          line-height: 1.5;
        }
        p em {
          display: block;
          font-size: 0.95rem;
        }
        li.rank-1 {
          grid-column: 1 / 3;
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
          margin: 0;
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
