"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BestSellersListInfo } from "@/_types";
import { getBestSellerList } from "@/_api";
import { listBorder, mainContainer } from "@/_styles";

const BestSellerList = () => {
  const [bestSeller, setBestSeller] = useState<BestSellersListInfo[]>([]);
  useEffect(() => {
    (async () => {
      const data = await (await getBestSellerList()).json();
      setBestSeller(data.results);
    })();
  }, []);
  return (
    <>
      <main>
        <h1>The New York Times Best Seller Explorer</h1>
        <ul>
          {bestSeller?.map((item) => (
            <li key={item.list_name_encoded}>
              <Link href={`/list/${item.list_name_encoded}`}>{item.list_name} &rarr;</Link>
            </li>
          ))}
        </ul>
        <style jsx>{`
          ul {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem 1rem;
          }
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
        <style jsx>{mainContainer}</style>
      </main>
    </>
  );
};

export default BestSellerList;
