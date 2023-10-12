import { BASE_URL } from "../_types";

export const getBestSellerList = () => {
  return fetch(`${BASE_URL}/lists`, { cache: "no-store" });
};

export const getBookList = (name: string) => {
  return fetch(`${BASE_URL}/list?name=${name}`, { cache: "no-store" });
};
