import { pageStructuredData } from "@/lib/seo";

export default function StructuredData({ path }: { path: string }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(pageStructuredData(path)).replace(/</g, "\\u003c"),
      }}
    />
  );
}
