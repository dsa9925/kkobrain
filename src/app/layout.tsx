// index.html 역할
import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "카카오 브레인 블로그 - 클론코드",
  description: "클론 코드를 통한 프로젝트",
  themeColor: "#000000",
  viewport: { width: "device-width", initialScale: 1 },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="naver-site-verification"
          content="490363910259f4b423644aa9773ed3b629f46d7e"
        />
        <link rel="canonical" href="https://kkobrain-topaz.vercel.app"></link>
        <meta
          name="google-site-verification"
          content="LftvpRZFaPLaPPbKky-p2vIjFlp4tueQUiiXY5Jtdw8"
        />
        <GoogleAnalytics gaId="G-8LB2Q2NH49" />
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
