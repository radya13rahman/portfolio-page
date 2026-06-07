import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Calendar } from "lucide-react";

export function CalEmbed() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      cal("ui", { theme: "light", hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  // Cal's modal-box has a 20px margin (gap at the bottom on phones).
  // Inject a style into its (open) shadow root so the modal goes
  // full-screen and touches the bottom edge on small screens.
  useEffect(() => {
    const css =
      "@media (max-width:767px){.modal-box{margin:0!important;inset:auto 0 0 0!important;transform:none!important;width:100%!important;max-width:100%!important;height:auto!important;max-height:92dvh!important;border-radius:0!important;overflow:hidden!important;}.modal-box .body{width:100%!important;}}";
    const inject = (el: Element) => {
      const sr = (el as HTMLElement).shadowRoot;
      if (sr && !sr.querySelector("style[data-rad-modal]")) {
        const s = document.createElement("style");
        s.setAttribute("data-rad-modal", "");
        s.textContent = css;
        sr.appendChild(s);
      }
    };
    const scan = () => document.querySelectorAll("cal-modal-box").forEach(inject);
    scan();
    const obs = new MutationObserver(scan);
    obs.observe(document.body, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Phones: open Cal as a full-screen modal so the inline iframe
          doesn't trap page scrolling on small screens. */}
      <div className="min-[768px]:hidden w-full flex justify-center">
        <button
          type="button"
          data-cal-link="radya-rahman/30min"
          data-cal-config='{"layout":"month_view","theme":"light"}'
          className="inline-flex items-center gap-[10px] bg-white text-black text-[15px] font-medium px-[28px] py-[16px] rounded-[99999px] hover:opacity-90 transition-opacity"
        >
          <Calendar className="size-[18px]" />
          Book a 30-min call
        </button>
      </div>

      {/* Tablet/desktop: inline embed (room to scroll around it). */}
      <div
        data-lenis-prevent
        className="hidden min-[768px]:block w-full max-w-full overflow-x-hidden isolate"
        style={{ overscrollBehavior: "contain" }}
      >
        <Cal
          calLink="radya-rahman/30min"
          style={{ width: "100%", height: "100%", minHeight: 600, margin: 0, padding: 0 }}
          config={{ layout: "month_view", theme: "light" }}
        />
      </div>
    </>
  );
}
