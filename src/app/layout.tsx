import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import Script from "next/script";
import { AdsterraPopunderGate, AdsterraSmartLink, AdsterraSocialBarGate, AdsterraStickyRail } from "@/components/ads";
import { GoogleAnalyticsPageView } from "@/components/analytics/GoogleAnalyticsPageView";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { runtimeConfig } from "@/lib/runtime-config";
import { siteConfig } from "@/data/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.gameName} Codes, Tier List and Tools`,
    template: `%s | ${siteConfig.gameName}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" }
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: ["/favicon.png"]
  },
  openGraph: {
    type: "website",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: `${siteConfig.gameName} Codes and Tools`,
    description: siteConfig.description,
    images: [{ url: "/opengraph-image" }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.gameName} Codes and Tools`,
    description: siteConfig.description,
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "black-translucent"
  }
};

export const viewport: Viewport = {
  themeColor: "#101114"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const analyticsId = runtimeConfig.analyticsId;
  const analyticsIdJson = JSON.stringify(analyticsId);

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        {analyticsId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', ${analyticsIdJson}, { send_page_view: false });
              `}
            </Script>
            <Suspense fallback={null}>
              <GoogleAnalyticsPageView measurementId={analyticsId} />
            </Suspense>
          </>
        ) : null}
        <style id="ad-cls-reservation">
          {
            ".ad-shell,.ad-container,[data-ad-slot]{min-height:90px}.ad-leaderboard .ad-shell{min-height:124px}.ad-placement-native-priority .ad-shell{min-height:150px}"
          }
        </style>
        <AdsterraPopunderGate />
        <AdsterraSocialBarGate />
        <AdsterraSmartLink />
        <Navbar />
        {children}
        <AdsterraStickyRail />
        <Footer />
      </body>
    </html>
  );
}
