"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import { BookListResults } from "@/_types";
import { getBookList } from "@/_api";
import { mainContainer } from "@/_styles";

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
            <li key={item.primary_isbn13}>{item.title}</li>
          ))}
        </ul>
      </main>
      <style jsx>{mainContainer}</style>
    </>
  );
};

export default BookList;
