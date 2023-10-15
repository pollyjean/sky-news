"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BookListResults } from "@/_types";
import { getBookList } from "@/_api";
import Header from "./Header";
import BookItem from "./BookItem";

const BookList = () => {
  const [, , id] = usePathname().split("/");
  const [bookList, setBookList] = useState<BookListResults>();
  useEffect(() => {
    (async () => {
      const { results } = await (await getBookList(id)).json();
      setBookList(results);
    })();
  }, [id]);
  return (
    <>
      <Header />
      <main>
        <h1>{bookList?.list_name}</h1>
        <ul>
          {bookList?.books?.map((item) => (
            <BookItem key={item.primary_isbn13} {...item} />
          ))}
        </ul>
      </main>
      <style jsx>{`
        ul {
          display: grid;
          grid-template-columns: 4fr 4fr 4fr 4fr;
          gap: 2.5rem 2rem;
        }
      `}</style>
    </>
  );
};

export default BookList;
