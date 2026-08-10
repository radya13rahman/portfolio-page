import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import MotionPage from "./pages/MotionPage";

/**
 * Route table shared by the client entry (BrowserRouter) and the build-time
 * prerender (StaticRouter). Each path here is emitted as its own static HTML
 * file — see `additionalPrerenderRoutes` in vite.config.ts.
 */
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/motion" element={<MotionPage />} />
    </Routes>
  );
}
