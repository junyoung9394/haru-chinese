"use client";

import { useEffect, useRef } from "react";
import { ADSENSE_CLIENT } from "@/lib/site";

type AdUnitProps = {
  slot: string;
  format?: string;
  layout?: string;
  style?: React.CSSProperties;
  fullWidthResponsive?: boolean;
  className?: string;
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
}: AdUnitProps) {
  const ref = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, []);

  return (
    <div className={className}>
      <ins
        ref={ref}
        className="adsbygoogle"
        style={style}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        {...(layout ? { "data-ad-layout": layout } : {})}
        {...(fullWidthResponsive
          ? { "data-full-width-responsive": "true" }
          : {})}
      />
    </div>
  );
}
