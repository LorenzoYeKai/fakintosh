import assert from "node:assert/strict";

// Run against `next start` to check what crawlers receive without JavaScript.
const base = process.argv[2] ?? "http://127.0.0.1:3000";
const production = "https://www.lorenzoye.com";
const pages = [
  ["/", "Welcome to my desktop!", "ProfilePage"],
  ["/about", "Welcome to my desktop!", "ProfilePage"],
  ["/skills", "My skills and tools", "WebPage"],
  ["/contacts", "ye.lorenzo1@gmail.com", "ContactPage"],
  ["/projects", "ninfa.io", "CollectionPage"],
  ["/projects/graveyard", "Anime Song Quiz", "CollectionPage"],
  ["/projects/graveyard/readme", "Welcome to the Graveyard", "WebPage"],
  ["/projects/anime-song-quiz", "A quiz game where you have to listen", "WebPage"],
  ["/projects/calcisticamente-parlando", "Calcisticamente Parlando Podcast", "WebPage"],
  ["/projects/save-the-day", "A silly clicker game", "WebPage"],
];

async function get(path) {
  const response = await fetch(new URL(path, base));
  assert.equal(response.status, 200, `${path}: HTTP status`);
  return response;
}

function attribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];
}

function metadata(html, key) {
  const tag = [...html.matchAll(/<meta\b[^>]*>/g)]
    .map(([value]) => value)
    .find((value) => attribute(value, "name") === key || attribute(value, "property") === key);
  return tag ? attribute(tag, "content") : undefined;
}

const titles = new Set();
const linksByPage = new Map();

for (const [path, content, schemaType] of pages) {
  const html = await (await get(path)).text();
  const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
  assert(body.includes(content), `${path}: existing content in initial HTML`);
  assert(body.includes("<main>"), `${path}: main landmark`);
  const windowTag = body.match(/<div\b[^>]*class="[^"]*desktop-window-initial[^"]*"[^>]*>/)?.[0];
  assert(windowTag, `${path}: initial desktop window`);
  assert(!windowTag.includes("display:none"), `${path}: content visible before hydration`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert(title && !titles.has(title), `${path}: unique title`);
  titles.add(title);
  assert(metadata(html, "description"), `${path}: description`);
  assert.equal(metadata(html, "twitter:card"), "summary_large_image");
  assert(metadata(html, "robots")?.includes("index, follow"), `${path}: indexing allowed`);

  const canonical = path === "/about" ? "/" : path;
  const canonicalTag = [...html.matchAll(/<link\b[^>]*>/g)]
    .map(([value]) => value)
    .find((value) => attribute(value, "rel") === "canonical");
  assert.equal(new URL(attribute(canonicalTag ?? "", "href")).href, production + canonical);
  assert.equal(new URL(metadata(html, "og:url")).href, production + canonical);
  assert(metadata(html, "og:image")?.startsWith(production + "/opengraph-image"));

  const json = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  assert(json, `${path}: JSON-LD present`);
  const structured = JSON.parse(json);
  assert.equal(structured["@context"], "https://schema.org");
  const page = structured["@graph"].find((item) => item["@type"] === schemaType);
  assert.equal(page?.url, production + path);
  const person = structured["@graph"].find((item) => item["@type"] === "Person");
  assert.equal(person?.name, "Lorenzo Ye");
  assert(person?.sameAs.includes("https://www.linkedin.com/in/lorenzo-ye-kai/"));
  assert.equal(page?.about["@id"], person["@id"]);

  linksByPage.set(path, [...body.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map((match) => match[1]));
  console.log(`PASS ${path}: content, visibility, metadata, canonical, JSON-LD`);
}

// Every indexable section must be reachable through real links from the homepage.
const reachable = new Set(["/"]);
const queue = ["/"];
for (const path of queue) {
  for (const href of linksByPage.get(path) ?? []) {
    if (linksByPage.has(href) && !reachable.has(href)) {
      reachable.add(href);
      queue.push(href);
    }
  }
}
assert.equal(reachable.size, pages.length, "All portfolio routes reachable through links");

const sitemap = await (await get("/sitemap.xml")).text();
const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]).sort();
assert.deepEqual(locations, pages.filter(([path]) => path !== "/about").map(([path]) => production + path).sort());
const robots = await (await get("/robots.txt")).text();
assert.match(robots, /User-Agent: \*\s+Allow: \//);
assert(robots.includes(`Sitemap: ${production}/sitemap.xml`));

const imageResponse = await get("/opengraph-image");
assert(imageResponse.headers.get("content-type")?.includes("image/png"));
const png = Buffer.from(await imageResponse.arrayBuffer());
assert.equal(png.toString("ascii", 1, 4), "PNG");
assert.equal(png.readUInt32BE(16), 1200);
assert.equal(png.readUInt32BE(20), 630);
assert((await get("/pdf/cv.pdf")).headers.get("content-type")?.includes("application/pdf"));

const missing = await fetch(new URL("/this-page-does-not-exist", base));
assert.equal(missing.status, 404);
assert((await missing.text()).includes('content="noindex"'));
console.log("PASS crawl graph, sitemap, robots, social image, CV, and unknown URL handling");
