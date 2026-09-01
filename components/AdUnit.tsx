"use client";

import { useEffect, useRef, useState } from "react";
import { ADSENSE_CLIENT } from "@/lib/site";

type AdUnitProps = {
  slot: string;
  format?: string;
  layout?: string;
  style?: React.CSSProperties;
  fullWidthResponsive?: boolean;
  className?: string;
  /** 광고가 로드되기 전 자리를 잡아둘 높이. 미게재로 판명되면 0으로 접힙니다. */
  minHeight?: string;
  /** 개발 모드 회색 박스에 함께 표시할 설명 */
  devLabel?: string;
};

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

export default function AdUnit({
  slot,
  format = "auto",
  layout,
  style = { display: "block" },
  fullWidthResponsive = true,
  className = "",
  minHeight,
  devLabel,
}: AdUnitProps) {
  const insRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);
  const [unfilled, setUnfilled] = useState(false);
  const isDev = process.env.NODE_ENV === "development";

  useEffect(() => {
    if (isDev) return;
    if (pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}

    const ins = insRef.current;
    if (!ins) return;

    // 채울 광고가 없으면 애드센스가 data-ad-status="unfilled" 를 붙입니다.
    // 그대로 두면 빈 자리가 그대로 남아서, 감지되면 높이를 0으로 접습니다.
    const observer = new MutationObserver(() => {
      if ((ins as HTMLElement).dataset.adStatus === "unfilled") {
        setUnfilled(true);
      }
    });
    observer.observe(ins, { attributes: true, attributeFilter: ["data-ad-status"] });
    return () => observer.disconnect();
  }, [isDev]);

  if (isDev) {
    return (
      <div
        style={{ minHeight: minHeight ?? "250px", maxWidth: "100%" }}
        className={`bg-gray-200 flex items-center justify-center rounded text-gray-500 text-xs ${className}`}
      >
        slot: {slot}
        {devLabel ? ` / ${devLabel}` : ""}
      </div>
    );
  }

  return (
    <div
      className={className}
      style={
        unfilled
          ? { height: 0, overflow: "hidden" }
          : minHeight
            ? { minHeight, maxWidth: "100%" }
            : undefined
      }
    >
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={style}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        {...(layout ? { "data-ad-layout": layout } : {})}
        {...(fullWidthResponsive ? { "data-full-width-responsive": "true" } : {})}
      />
    </div>
  );
}
