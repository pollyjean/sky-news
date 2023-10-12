import { getBookList } from "@/app/_api";
import BookList from "@/app/_components/BookList";
import { BookListInfo } from "@/app/_types";

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

const page = ({ params }: generateMetadataProps) => {
  const id = params.id;
  return (
    <>
      <BookList id={id} />
    </>
  );
};

export default page;
