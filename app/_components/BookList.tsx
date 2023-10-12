"use client";

import { useEffect, useState } from "react";
import { BookListInfo, BookListResults } from "../_types";
import { getBookList } from "../_api";

interface BookListProp {
  id: string;
}

const BookList = ({ id }: BookListProp) => {
  const [bookList, setBookList] = useState<BookListResults>();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      const { results } = await (await getBookList(id)).json();
      setBookList(results);
      setIsLoading(true);
    })();
  }, [id]);
  return (
    <>
      {isLoading && (
        <ul>
          {bookList?.books?.map((item) => (
            <li key={item.amazon_product_url}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default BookList;
