import { AppRoutes } from "./app/routes";
import { PAGE_META, headElementsFor, type PageMeta } from "./app/seo";

const META_BY_PATH: Record<string, PageMeta> = Object.fromEntries(
  Object.values(PAGE_META).map((m) => [m.path, m]),
);

// Called by vite-prerender-plugin at build time — once per route in
// `additionalPrerenderRoutes` — to produce static HTML for crawlers and a
// faster first paint. Browser-only logic lives in useEffect hooks, which do
// not run during this server render.
// react-dom/server and the static router are imported dynamically so they are
// split into build-only chunks and never shipped to the client bundle.
export async function prerender({ url }: { url: string }) {
  const { renderToString } = await import("react-dom/server");
  const { StaticRouter } = await import("react-router");

  const html = renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>,
  );

  // Page-specific <head> — kept in src/app/seo.ts alongside the client-side
  // hook so the static tags and client navigation never drift apart.
  const meta = META_BY_PATH[url.replace(/(.)\/$/, "$1")] ?? PAGE_META.home;

  return {
    html,
    head: {
      lang: "en",
      title: meta.title,
      elements: new Set(headElementsFor(meta)),
    },
  };
}
