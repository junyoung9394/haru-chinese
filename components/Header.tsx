"use client";

import Link from "next/link";
import { useRef, useState } from "react";

type NavItem =
  | { href: string; label: string; subtitle?: string; dropdown?: never }
  | { href?: never; label: string; subtitle?: never; dropdown: { href: string; label: string; subtitle: string }[] };

const navItems: NavItem[] = [
  { href: "/", label: "홈" },
  { href: "/pinyin", label: "병음", subtitle: "拼音" },
  { href: "/tones", label: "성조", subtitle: "声调" },
  {
    label: "시험",
    dropdown: [
      { href: "/hsk", label: "HSK 시험", subtitle: "汉语水平考试" },
      { href: "/tsc", label: "TSC 말하기", subtitle: "口语考试" },
      { href: "/hsk/3", label: "HSK 3급 학습", subtitle: "初中级 3级" },
      { href: "/hsk/4", label: "HSK 4급 학습", subtitle: "中级 4级" },
      { href: "/hsk/5", label: "HSK 5급 학습", subtitle: "中高级 5级" },
      { href: "/hsk/6", label: "HSK 6급 학습", subtitle: "高级 6级" },
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

function DropdownMenu({ item, onClose }: { item: Extract<NavItem, { dropdown: unknown[] }>; onClose?: () => void }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = `dropdown-${item.label}`;

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
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center gap-1 hover:text-red-600 transition-colors py-1"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={handleKeyDown}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
      >
        {item.label}
        <svg aria-hidden="true" className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div id={menuId} role="menu" className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg py-1 min-w-[190px] z-50">
          {item.dropdown.map((sub) => (
            <Link
              key={sub.href}
              href={sub.href}
              role="menuitem"
              onClick={() => { setOpen(false); onClose?.(); }}
              onKeyDown={(e) => { if (e.key === "Escape") setOpen(false); }}
              className="flex flex-col px-4 py-2.5 hover:bg-red-50 hover:text-red-600 transition-colors focus:outline-none focus:bg-red-50 focus:text-red-600"
            >
              <span className="text-sm font-medium">{sub.label}</span>
              <span className="text-xs text-gray-400 mt-0.5">{sub.subtitle}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-red-600 tracking-tight">
          <span aria-hidden="true">🏮</span> 하루중국어
        </Link>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-gray-700">
          {navItems.map((item) =>
            item.dropdown ? (
              <DropdownMenu key={item.label} item={item} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center hover:text-red-600 transition-colors"
              >
                <span>{item.label}</span>
                {item.subtitle && (
                  <span className="text-[10px] text-gray-400 font-normal leading-tight">{item.subtitle}</span>
                )}
              </Link>
            )
          )}
          <Link
            href="/app-download"
            className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
          >
            앱 다운로드
          </Link>
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block w-5 h-0.5 bg-gray-700 transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-1.5" : "mb-1"}`}></span>
          <span className={`block w-5 h-0.5 bg-gray-700 transition-opacity duration-200 mb-1 ${menuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-5 h-0.5 bg-gray-700 transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-3 text-sm font-medium text-gray-700">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <button
                    className="w-full flex items-center justify-between py-2 hover:text-red-600 transition-colors"
                    onClick={() => setMobileOpen(mobileOpen === item.label ? null : item.label)}
                  >
                    <span>{item.label}</span>
                    <svg className={`w-3 h-3 transition-transform ${mobileOpen === item.label ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileOpen === item.label && (
                    <div className="pl-3 flex flex-col gap-1 pb-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => { setMenuOpen(false); setMobileOpen(null); }}
                          className="flex items-center justify-between py-1.5 text-gray-600 hover:text-red-600 transition-colors"
                        >
                          <span>{sub.label}</span>
                          <span className="text-xs text-gray-400">{sub.subtitle}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between py-2 hover:text-red-600 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  {item.subtitle && <span className="text-xs text-gray-400">{item.subtitle}</span>}
                </Link>
              )
            )}
            <Link
              href="/app-download"
              className="mt-2 bg-red-600 text-white px-4 py-2 rounded-full text-center hover:bg-red-700 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              앱 다운로드
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
