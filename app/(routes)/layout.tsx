import "../_styles/globals.css";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

const handWriting = Playfair_Display({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "The New York Times Best Seller",
    template: "%s | The New York Times Best Seller",
  },
  description: "explorer for The New York Times Best Seller list",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={handWriting.className}>{children}</body>
    </html>
  );
}
