import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
};

export default function ListLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
