"use client";

import { useEffect, useState } from "react";
import { BestSellersListInfo } from "../_types";
import { getBestSellerList } from "../_api";
import Link from "next/link";

const LinkList = () => {
  const [bestSeller, setBestSeller] = useState<BestSellersListInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      const { results } = await (await getBestSellerList()).json();
      setBestSeller(results);
      setIsLoading(true);
    })();
  }, []);
  return (
    <>
      {isLoading && (
        <ul>
          {bestSeller.map((item) => (
            <li key={item.list_name_encoded}>
              <Link href={`/list/${item.list_name_encoded}`}>{item.list_name} &rarr;</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default LinkList;
