"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type SubItem = { href: string; label: string; subtitle: string };

type NavItem =
  | { href: string; label: string; subtitle?: string; dropdown?: never }
  | { href?: never; label: string; subtitle?: never; dropdown: SubItem[] };

const navItems: NavItem[] = [
  { href: "/", label: "홈" },
  { href: "/pinyin", label: "병음", subtitle: "拼音" },
  { href: "/tones", label: "성조", subtitle: "声调" },
  {
    label: "시험",
    dropdown: [
      { href: "/hsk", label: "HSK 시험", subtitle: "汉语水平考试" },
      { href: "/tsc", label: "TSC 말하기", subtitle: "口语考试" },
      { href: "/hsk/3", label: "HSK 3급 학습", subtitle: "初等 3级" },
      { href: "/hsk/4", label: "HSK 4급 학습", subtitle: "中等 4级" },
      { href: "/hsk/5", label: "HSK 5급 학습", subtitle: "中等 5级" },
      { href: "/hsk/6", label: "HSK 6급 학습", subtitle: "中等 6级" },
      { href: "/hsk/7-9", label: "HSK 7~9급 학습", subtitle: "高等 7-9级" },
    ],
  },
  {
    label: "학습",
    dropdown: [
      { href: "/travel", label: "여행 중국어", subtitle: "旅游汉语" },
      { href: "/basic", label: "기본 소통 중국어", subtitle: "基础汉语" },
      { href: "/vocabulary", label: "기초 단어", subtitle: "基础词汇" },
      { href: "/hanzi", label: "기초 한자", subtitle: "简体汉字" },
      { href: "/business", label: "비즈니스 중국어", subtitle: "商务汉语" },
    ],
  },
  { href: "/culture", label: "중국 문화", subtitle: "中国文化" },
  { href: "/quiz", label: "퀴즈" },
];

/** 모바일 가로 스크롤 내비에 쓰는 평탄화된 목록 */
const flatItems: { href: string; label: string }[] = navItems.flatMap((item) =>
  item.dropdown
    ? item.dropdown.map((sub) => ({ href: sub.href, label: sub.label.replace(/ 학습$/, "").replace(/ 시험$/, "") }))
    : [{ href: item.href, label: item.label }]
);

/** 현재 경로와 가장 구체적으로 일치하는 href */
function useActiveHref() {
  const pathname = usePathname() ?? "/";
  let best = "";
  for (const { href } of flatItems) {
    const match = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
    if (match && href.length > best.length) best = href;
  }
  return best;
}

function DropdownMenu({ item, activeHref }: { item: Extract<NavItem, { dropdown: unknown[] }>; activeHref: string }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = `dropdown-${item.label}`;
  const isActive = item.dropdown.some((sub) => sub.href === activeHref);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen((v) => !v);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        className={`nav-link ${isActive ? "is-active" : ""}`}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={handleKeyDown}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
      >
        {item.label}
        <svg aria-hidden="true" className={`w-3 h-3 opacity-60 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div id={menuId} role="menu" className="pop pop-in p-1.5 min-w-[220px]">
            {item.dropdown.map((sub) => (
              <Link
                key={sub.href}
                href={sub.href}
                role="menuitem"
                aria-current={sub.href === activeHref ? "page" : undefined}
                onClick={() => setOpen(false)}
                onKeyDown={(e) => { if (e.key === "Escape") setOpen(false); }}
                className={`flex items-center justify-between gap-4 rounded-[10px] px-3 py-2.5 transition-colors hover:bg-gray-100 focus:outline-none focus-visible:bg-gray-100 ${
                  sub.href === activeHref ? "text-red-600" : "text-gray-800"
                }`}
              >
                <span className="text-sm font-semibold">{sub.label}</span>
                <span className="text-xs text-gray-400" lang="zh-Hans">{sub.subtitle}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const activeHref = useActiveHref();
  const scrollRef = useRef<HTMLDivElement>(null);

  // 모바일 내비에서 현재 메뉴가 보이도록 가로 스크롤 위치 맞추기
  useEffect(() => {
    const box = scrollRef.current;
    const el = box?.querySelector<HTMLElement>('[aria-current="page"]');
    if (!box || !el) return;
    const target = el.offsetLeft - box.clientWidth / 2 + el.clientWidth / 2;
    box.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [activeHref]);

  return (
    <header className="site-header sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-5 h-14 sm:h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="하루중국어 홈">
          <span
            aria-hidden="true"
            lang="zh-Hans"
            className="grid place-items-center w-8 h-8 rounded-[10px] bg-red-600 text-white text-[15px] font-extrabold shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
          >
            中
          </span>
          <span className="text-[17px] font-extrabold tracking-[-0.03em] text-gray-900">하루중국어</span>
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="주요 메뉴">
          {navItems.map((item) =>
            item.dropdown ? (
              <DropdownMenu key={item.label} item={item} activeHref={activeHref} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={item.href === activeHref ? "page" : undefined}
                className="nav-link"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <Link href="/app-download" className="btn btn-primary btn-sm shrink-0">
          <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 20h14" />
          </svg>
          앱 다운로드
        </Link>
      </div>

      {/* 모바일·태블릿: 가로 스크롤 내비 */}
      <nav className="lg:hidden max-w-5xl mx-auto" aria-label="주요 메뉴 (모바일)">
        <div ref={scrollRef} className="scroll-nav flex gap-1 px-3 pb-2.5">
          {flatItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.href === activeHref ? "page" : undefined}
              className="nav-link !text-[13.5px] !py-1.5"
            >
              {item.label}
            </Link>
          ))}
          <span aria-hidden="true" className="shrink-0 w-4" />
        </div>
      </nav>
    </header>
  );
}
