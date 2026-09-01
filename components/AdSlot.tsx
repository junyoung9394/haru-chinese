import AdUnit from "./AdUnit";
import { AD_UNITS } from "@/lib/adSlots";

type AdSlotProps = {
  type?: "horizontal" | "vertical" | "inArticle" | "relaxed";
  className?: string;
};

/**
 * 발급받은 단위가 모두 반응형 디스플레이라, 본문 중간(inArticle)과
 * 글 하단(relaxed)도 디스플레이 단위를 씁니다.
 * 나중에 인아티클·관련 콘텐츠 단위를 만들면 여기만 바꾸면 됩니다.
 */
const SLOT_BY_TYPE = {
  horizontal: AD_UNITS.horizontal,
  vertical: AD_UNITS.vertical,
  inArticle: AD_UNITS.display,
  relaxed: AD_UNITS.display,
} as const;

export default function AdSlot({
  type = "horizontal",
  className = "",
}: AdSlotProps) {
  return (
    <AdUnit slot={SLOT_BY_TYPE[type]} format="auto" className={className} />
  );
}
