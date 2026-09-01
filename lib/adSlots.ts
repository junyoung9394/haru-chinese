/**
 * 하루중국어 전용 애드센스 광고 단위입니다.
 * 세 개 모두 반응형 디스플레이(data-ad-format="auto") 단위입니다.
 */
export const AD_UNITS = {
  /** 중국어_web_디스플레이 */
  display: "5295955015",
  /** 중국어_web_수평 */
  horizontal: "3186842598",
  /** 중국어_web_수직 */
  vertical: "4771387002",
} as const;

/** 페이지 안의 배치 위치별로 어떤 단위를 쓸지 정합니다. */
export const AD_SLOTS = {
  home_top: AD_UNITS.display,
  content_mid: AD_UNITS.horizontal,
  content_bottom: AD_UNITS.display,
  sidebar: AD_UNITS.vertical,
  quiz_between: AD_UNITS.display,
  hanzi_mid: AD_UNITS.horizontal,
  hanzi_bottom: AD_UNITS.display,
} as const;
