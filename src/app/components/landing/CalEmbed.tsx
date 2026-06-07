import Cal from "@calcom/embed-react";

export function CalEmbed() {
  return (
    <div
      data-lenis-prevent
      className="w-full max-w-full overflow-x-hidden isolate"
      style={{ overscrollBehavior: "contain" }}
    >
      <Cal
        calLink="radya-rahman/30min"
        style={{ width: "100%", height: "100%", minHeight: 600, margin: 0, padding: 0 }}
        config={{ layout: "month_view", theme: "light" }}
      />
    </div>
  );
}
