"use client";

import { useEffect, useState } from "react";
import { BestSellersListInfo } from "@/_types";
import { getBestSellerList } from "@/_api";
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
      <ul>
        {bestSeller?.map((item) => (
          <LinkButton key={item.list_name_encoded} link={item.list_name_encoded} name={item.list_name} />
        ))}
      </ul>
      <style jsx>{`
        ul {
          display: flex;
          flex-wrap: wrap;
          gap: 2.4rem 2rem;
          padding-top: var(--paragraph-margin);
        }
      `}</style>
    </>
  );
};

export default BestSellerList;
