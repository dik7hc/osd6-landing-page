import { boschsans, boschUiIconFont } from '@/lib/bosch-fonts';
import type { Metadata } from "next";
import "./globals.css";
import Footer from '@/components/footer';
import Header from '@/components/header';

export const metadata: Metadata = {
  title: "GS/OSD6 | Bosch tại Việt Nam",
  description: "Chuyển đổi mô hình",
  keywords: "Bosch, Việt Nam, công nghệ, sáng tạo, đáng tin cậy",
  authors: [{ name: "Bosch Global" }],
  creator: "Bosch Global",
  publisher: "Bosch Global",
  robots: "index, follow",
  openGraph: {
    title: "Công nghệ sáng tạo và đáng tin cậy",
    description: "Chuyển đổi mô hình",
    url: "https://www.bosch.com.vn/",
    siteName: "Bosch tại Việt Nam",
    images: [
      {
        url: "https://assets.bosch.com/media/global/fallback/fallback-16x9.jpg",
        width: 1200,
        height: 675,
        alt: "Bosch Vietnam",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@BoschGlobal",
    creator: "@BoschGlobal",
    title: "Công nghệ sáng tạo và đáng tin cậy",
    description: "Chuyển đổi mô hình",
    images: ["https://assets.bosch.com/media/global/fallback/fallback-16x9.jpg"],
  },
  alternates: {
    canonical: "https://www.bosch.com.vn/",
    languages: {
      "vi-VN": "https://www.bosch.com.vn/",
      "en-VN": "https://www.bosch.com.vn/en/",
    },
  },
  icons: {
    icon: [
      { url: "/media/tech/tech_images/favicon.ico", type: "image/x-icon" },
      { url: "/media/tech/tech_images/favicon-png.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/media/tech/tech_images/favicon.ico",
  },
  other: {
    "theme-color": "#ffffff",
    "msapplication-tap-highlight": "no",
    "msapplication-TileColor": "#ffffff",
    "DCSext.wtg_lang": "vi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" itemScope itemType="https://schema.org/WebSite">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta itemProp="name" content="Bosch tại Việt Nam" />
        <meta itemProp="url" content="https://www.bosch.com.vn/" />
        <meta property="fb:app_id" content="966242223397117" />
        <meta property="article:publisher" content="https://www.facebook.com/OfficialBoschVietnam" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://dock.ui.bosch.tech/" />
        <link rel="preconnect" href="https://assets.bosch.com" />

        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />

        {/* Humans.txt */}
        <link rel="author" href="/humans.txt" />

        {/* Preload fonts */}
        <link rel="preload" href="/fonts/boschsans_regular.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/boschsans_bold.woff2" as="font" type="font/woff2" crossOrigin="" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Bosch Vietnam",
              "legalName": "Robert Bosch Engineering and Business Solutions Vietnam Co., Ltd.",
              "url": "https://www.bosch.com.vn/",
              "logo": "https://assets.bosch.com/media/global/bosch_logo_res_260x85.webp",
              "description": "Bosch là nhà cung cấp hàng đầu về công nghệ và dịch vụ trên toàn cầu. Chúng tôi tạo ra công nghệ có ích cho cuộc sống.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "VN",
                "addressLocality": "Ho Chi Minh City",
                "streetAddress": "Bitexco Financial Tower, Level 12A, 2 Hai Trieu Street, District 1"
              },
              "sameAs": [
                "https://www.facebook.com/OfficialBoschVietnam",
                "https://www.linkedin.com/company/bosch",
                "https://twitter.com/BoschGlobal"
              ]
            })
          }}
        />

        {/* Preload fonts */}
        <link rel="preload" href="/fonts/boschsans_regular.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/boschsans_bold.woff2" as="font" type="font/woff2" crossOrigin="" />

        {/* Preload hero images */}
        <link
          rel="preload"
          as="image"
          imageSrcSet="https://www.bosch.com.vn/media/like_a_bosch/20230508_live_likeabosch/07_live_likeabosch_teaser_1920x1080_res_992x558.webp, https://www.bosch.com.vn/media/like_a_bosch/20230508_live_likeabosch/07_live_likeabosch_teaser_1920x1080_res_1984x1116.webp 2x"
          media="(max-width: 767px)"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          imageSrcSet="https://www.bosch.com.vn/media/like_a_bosch/20230508_live_likeabosch/07_live_likeabosch_teaser_1920x1080_res_992x558.webp, https://www.bosch.com.vn/media/like_a_bosch/20230508_live_likeabosch/07_live_likeabosch_teaser_1920x1080_res_1984x1116.webp 2x"
          media="(min-width: 768px) and (max-width: 991px)"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          imageSrcSet="https://www.bosch.com.vn/media/like_a_bosch/20230508_live_likeabosch/07_live_likeabosch_teaser_1920x1080_res_800x450.webp, https://www.bosch.com.vn/media/like_a_bosch/20230508_live_likeabosch/07_live_likeabosch_teaser_1920x1080_res_1600x900.webp 2x"
          media="(min-width: 992px) and (max-width: 1199px)"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          imageSrcSet="https://www.bosch.com.vn/media/like_a_bosch/20230508_live_likeabosch/07_live_likeabosch_teaser_1920x1080_res_992x558.webp, https://www.bosch.com.vn/media/like_a_bosch/20230508_live_likeabosch/07_live_likeabosch_teaser_1920x1080_res_1984x1116.webp 2x"
          media="(min-width: 1200px)"
          type="image/webp"
        />
      </head>
      <body
        className={`${boschsans.variable} ${boschUiIconFont.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
