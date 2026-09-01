# 하루중국어 (haru-chinese)

`haru-japanese`(하루일본어)와 같은 구조로 만든 중국어 학습 사이트입니다.
Next.js 16 (App Router, Turbopack) + Tailwind CSS 4 기반이며, HSK 완전정복 앱(`com.junyoung.hskvoca`)으로 연결됩니다.

## 실행

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 프로덕션 빌드
npm run lint
```

## 페이지 구성

| 경로 | 내용 | 일본어판 대응 |
| --- | --- | --- |
| `/` | 홈 — 성조·병음·HSK 1급 미리보기 | `/` |
| `/pinyin` | 병음 성모 21 + 운모 36, 표기 규칙 | `/hiragana` |
| `/tones` | 4성·경성, 성조 변화 규칙 | `/katakana` |
| `/hsk` | HSK 급수 체계 + 1급 단어·문법 | `/jlpt` |
| `/hsk/[level]` | HSK 2~6급 단어·문법 (SSG) | `/jlpt/n1~n4` |
| `/tsc` | TSC 말하기 시험 가이드 | `/jpt` |
| `/vocabulary` | 주제별 기초 단어 | `/vocabulary` |
| `/hanzi` | 간체자 기초 한자 + 번체자 비교 | `/kanji` |
| `/travel` `/basic` `/business` | 상황별 회화 | 동일 |
| `/culture`, `/culture/[slug]` | 중국 문화 12편 (SSG) | 동일 |
| `/quiz` | 병음·성조·HSK 단어 퀴즈 | `/quiz` |
| `/app-download` `/privacy` `/contact` | 안내 페이지 | 동일 |
| `/sitemap.xml` `/robots.txt` `/rss.xml` | SEO 라우트 | 동일 |

## 콘텐츠 수정 위치

모든 학습 콘텐츠는 `data/` 안에 있습니다. 페이지 파일은 건드릴 일이 거의 없습니다.

- `data/pinyin.ts` — 성모·운모·성조·성조 변화 규칙
- `data/hsk.ts` — 급수별 단어와 문법, 급수 메타정보(`hskLevels`)
- `data/hanzi.ts` — 급수별 간체자, 간체화 사례
- `data/phrases.ts` — 여행·기본·비즈니스 회화
- `data/culture.ts` — 중국 문화 상세 글

`hskLevels` 에 급수를 추가하면 `/hsk`, `/hsk/[level]`, 사이트맵이 자동으로 따라갑니다.
`cultureItems` 에 글을 추가하면 목록·상세·사이트맵·RSS가 자동으로 반영됩니다.

## 사이트 설정

`lib/site.ts` 한 곳에서 관리합니다.

- `BASE_URL` — `https://chinese.luckygrampus.com`
- `ADSENSE_CLIENT` — 일본어판과 동일한 퍼블리셔 ID
- `playStoreUrl(campaign)` — UTM(`utm_source=cn-site`)이 붙은 Play 스토어 링크

광고 슬롯 ID는 `lib/adSlots.ts` 와 `components/AdSlot.tsx` 에 있습니다. 현재는 일본어판 슬롯을 그대로 씁니다.

## 배포 전 체크리스트

- [ ] Vercel 프로젝트 생성 후 `chinese.luckygrampus.com` 도메인 연결
- [ ] AdSense에 `chinese.luckygrampus.com` 사이트 추가 (승인 전까지 광고 미노출)
- [ ] Google Search Console에 등록하고 `sitemap.xml` 제출
- [ ] 네이버 서치어드바이저 등록 후 `app/layout.tsx` 의 인증 태그 TODO 채우기
- [ ] Play 스토어 유입 확인 (`utm_source=cn-site`)
