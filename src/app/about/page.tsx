import { pageMetadata } from "@/lib/seo";
import StructuredData from "../_components/StructuredData";
import WindowsSpace from "../_components/WindowsSpace";

export const metadata = pageMetadata("/about");

const page = () => {
  return (
    <>
      <StructuredData path="/about" />
      <WindowsSpace />
    </>
  );
};

export default page;
