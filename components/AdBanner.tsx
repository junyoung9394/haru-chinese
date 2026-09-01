import AdUnit from "./AdUnit";

type Variant = "banner" | "sidebar" | "quiz";

type AdBannerProps = {
  slotId: string;
  variant: Variant;
  className?: string;
};

/** 로드 전 자리를 잡아둘 높이. 미게재로 판명되면 AdUnit 이 0으로 접습니다. */
const minHeights: Record<Variant, string> = {
  banner: "250px",
  sidebar: "600px",
  quiz: "150px",
};

export default function AdBanner({ slotId, variant, className = "" }: AdBannerProps) {
  return (
    <AdUnit
      slot={slotId}
      minHeight={minHeights[variant]}
      devLabel={variant}
      className={className}
    />
  );
}
