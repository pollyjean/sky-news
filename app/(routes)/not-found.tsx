"use client";
import Link from "next/link";
import { mainContainer } from "../_styles";

export default function NotFound() {
  return (
    <>
      <main>
        <h1>Not Found</h1>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </main>
      <style jsx>{mainContainer}</style>
    </>
  );
}
