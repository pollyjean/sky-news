import { BestSellerList, Header } from "@/_components";

const page = () => {
  return (
    <>
      <Header />
      <main>
        <h1>
          The New York Times
          <br /> Best Seller Explorer
        </h1>
        <BestSellerList />
      </main>
    </>
  );
};

export default page;
