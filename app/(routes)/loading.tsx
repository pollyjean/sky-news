import { Header } from "@/_components";

export default function Loading() {
  return (
    <>
      <Header />
      <main style={{ height: "80vh" }}>
        <h1 style={{ opacity: 0.5 }}>Loading...</h1>
      </main>
    </>
  );
}
