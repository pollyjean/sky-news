"use client";

import { useEffect, useState } from "react";
import { BestSellersListInfo } from "@/_types";
import { getBestSellerList } from "@/_api";
import { mainContainer } from "@/_styles";
import LinkButton from "./LinkButton";

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
            <LinkButton key={item.list_name_encoded} link={item.list_name_encoded} name={item.list_name} />
          ))}
        </ul>
        <style jsx>{`
          ul {
            display: flex;
            flex-wrap: wrap;
            gap: 2.5rem 2rem;
          }
        `}</style>
        <style jsx>{mainContainer}</style>
      </main>
    </>
  );
};

export default BestSellerList;
