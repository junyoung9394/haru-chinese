export const BASE_URL = "https://chinese.luckygrampus.com";
export const SITE_NAME = "하루중국어";
export const SITE_EMOJI = "🏮";
export const APP_NAME = "HSK 완전정복";
export const APP_PACKAGE = "com.junyoung.hskvoca";
export const CONTACT_EMAIL = "junyoung9394@gmail.com";
export const ADSENSE_CLIENT = "ca-pub-8518556382646891";

/** UTM이 붙은 Play 스토어 링크 — campaign만 바꿔 쓰세요 */
export function playStoreUrl(campaign: string): string {
  const referrer = `utm_source=cn-site&utm_medium=web&utm_campaign=${campaign}`;
  return `https://play.google.com/store/apps/details?id=${APP_PACKAGE}&referrer=${encodeURIComponent(referrer)}`;
}
