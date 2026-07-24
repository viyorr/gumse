import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://gumse-blog-growth.viyorr.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "블로그를 키우는 건 글의 개수가 아닙니다 | 금새인터랙티브",
  description: "콘텐츠 품질과 블로그 운영을 함께 관리하는 금새인터랙티브 블로그 성장 전략 제안서",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "금새인터랙티브",
    title: "블로그를 키우는 건 글의 개수가 아닙니다 | 금새인터랙티브",
    description: "콘텐츠 품질과 블로그 운영을 함께 관리하는 블로그 성장 전략 제안서",
    images: [
      {
        url: "/og-blog-growth.png",
        width: 1200,
        height: 630,
        alt: "금새인터랙티브 블로그 성장 전략 제안서",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "블로그를 키우는 건 글의 개수가 아닙니다 | 금새인터랙티브",
    description: "콘텐츠 품질과 블로그 운영을 함께 관리하는 블로그 성장 전략 제안서",
    images: ["/og-blog-growth.png"],
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
