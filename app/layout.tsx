import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ADSENSE_CLIENT, BASE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const DESCRIPTION =
  "병음과 성조, HSK 단어와 문법, 중국 문화를 초보자도 쉽게 배울 수 있는 중국어 학습 사이트입니다.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "HSK 중국어 | 하루중국어",
    template: "%s | 하루중국어",
  },
  description: DESCRIPTION,
  keywords: [
    "중국어",
    "중국어 공부",
    "병음",
    "성조",
    "HSK",
    "HSK 1급",
    "HSK 4급",
    "중국어 단어",
    "중국어 문법",
    "중국어 초보",
    "중국 문화",
    "하루중국어",
  ],
  authors: [{ name: "하루중국어" }],
  creator: "하루중국어",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: BASE_URL,
    siteName: "하루중국어",
    title: "HSK 중국어 | 하루중국어",
    description: DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HSK 중국어 | 하루중국어",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HSK 중국어 | 하루중국어",
    description: DESCRIPTION,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "하루중국어",
  url: BASE_URL,
  description: DESCRIPTION,
  inLanguage: "ko",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/quiz?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} h-full`}>
      <head>
        {/* TODO: 네이버 서치어드바이저에 chinese.luckygrampus.com 등록 후 인증 태그 추가
            <meta name="naver-site-verification" content="..." /> */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-gray-50 font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
