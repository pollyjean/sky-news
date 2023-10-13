import Image from "next/image";
import Link from "next/link";
import { Book } from "@/_types";
import { checkForRankingChanges } from "@/_utilities";

const BookItem = (props: Book) => {
  return (
    <>
      <li className={"rank-" + props.rank}>
        <span>
          {props.rank} {checkForRankingChanges(props.rank, props.rank_last_week)},{props.rank_last_week}
        </span>
        {props.book_image && (
          <Image
            src={props.book_image}
            width={(props.book_image_width as number) / 2}
            height={(props.book_image_height as number) / 2}
            alt=""
            priority={true}
          />
        )}
        <h2>Title : {props.title}</h2>
        <h3>Author: {props.author}</h3>
        <p>
          {props.description}
          <strong>{`(${props.publisher}, ${props.price})`}</strong>
        </p>
        {props.buy_links && (
          <ul>
            {props.buy_links.map((item) => (
              <li key={item.name}>
                <Link href={item.url}>{item.name} Buy Link</Link>
              </li>
            ))}
          </ul>
        )}
      </li>
      <style jsx>{`
        li.rank-1 {
          grid-column: 1 / 3;
        }
        li.rank-2 {
          grid-column: 3 / 5;
        }
      `}</style>
    </>
  );
};

export default BookItem;
