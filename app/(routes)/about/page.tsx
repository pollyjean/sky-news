"use client";

import { Header } from "@/_components";
import { mainContainer } from "@/_styles";

const page = () => {
  return (
    <>
      <Header />
      <main>
        <h1>About us</h1>
        <p>
          Welcome to the non-official explorer for The New York Times Best Seller list explorer.
          <br />
          We hope you enjoy your stay!
        </p>
      </main>
      <style jsx>{mainContainer}</style>
    </>
  );
};

export default page;
