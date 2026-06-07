import App from "./app/App.tsx";

// Called by vite-prerender-plugin at build time to produce static HTML
// for crawlers and faster first paint. Browser-only logic lives in
// useEffect hooks, which do not run during this server render.
// react-dom/server is imported dynamically so it is split into a
// build-only chunk and never shipped to the client bundle.
export async function prerender() {
  const { renderToString } = await import("react-dom/server");
  const html = renderToString(<App />);
  return { html };
}
