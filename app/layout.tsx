import Script from "next/script";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ADSENSE_CLIENT, BASE_URL } from "@/lib/site";

const DESCRIPTION =
  "병음과 성조, HSK 단어와 문법, 중국 문화를 초보자도 쉽게 배울 수 있는 중국어 학습 사이트입니다.";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f7f9" },
    { media: "(prefers-color-scheme: dark)", color: "#101114" },
  ],
};

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
    <html lang="ko" className="h-full">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          crossOrigin="anonymous"
        />
        <meta name="naver-site-verification" content="ae72a0008a0a09620f33057a4cb40c619177bb01" />
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
        <Script src="/site-analytics.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
