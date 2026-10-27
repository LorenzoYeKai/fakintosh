import { notFound } from "next/navigation";
import { getPortfolioPage, portfolioPages } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import StructuredData from "../_components/StructuredData";
import WindowsSpace from "../_components/WindowsSpace";

type Props = { params: Promise<{ slug: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return portfolioPages
    .filter((page) => page.path !== "/" && page.path !== "/about")
    .map((page) => ({ slug: page.path.slice(1).split("/") }));
}

async function getPage({ params }: Props) {
  const { slug } = await params;
  const page = getPortfolioPage(`/${slug.join("/")}`);
  if (!page) notFound();
  return page;
}

export async function generateMetadata(props: Props) {
  return pageMetadata((await getPage(props)).path);
}

export default async function Page(props: Props) {
  const page = await getPage(props);
  return (
    <>
      <StructuredData path={page.path} />
      <WindowsSpace />
    </>
  );
}
