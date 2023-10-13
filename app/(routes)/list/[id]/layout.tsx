import { getBookList } from "@/_api";
import { BookListInfo } from "@/_types";

interface generateMetadataProps {
  params: { id: string };
}

export const generateMetadata = async ({ params }: generateMetadataProps) => {
  const id = params.id;
  const { results }: BookListInfo = await (await getBookList(id)).json();
  return {
    title: results?.display_name,
  };
};

export default function ListLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
