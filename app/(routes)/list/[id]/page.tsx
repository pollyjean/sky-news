import { getBestSellerList } from "@/_api";
import { BookList, Header } from "@/_components";
import { BestSellersListInfo } from "@/_types";

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const { results } = await (await getBestSellerList()).json();
  return results.map((item: BestSellersListInfo) => ({
    id: item.list_name_encoded,
  }));
};

const page = () => {
  return (
    <>
      <BookList />
    </>
  );
};

export default page;
