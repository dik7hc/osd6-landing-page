import Achievements from "@/components/achivements";
import HeroSection from "@/components/hero";
import Highlights from "@/components/hightlights";
import Opex from "@/components/opex";
import PortfolioTabs from "@/components/portfolios-tabs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GS/OSD | Bosch tại Việt Nam",
  description: "Khám phá những công nghệ tiên tiến và giải pháp đáng tin cậy từ Bosch. Chúng tôi tạo ra công nghệ có ích cho cuộc sống tại Việt Nam.",
  keywords: "Bosch, Việt Nam, công nghệ, sáng tạo, đáng tin cậy, automotive, mobility, industrial technology, consumer goods, energy",
  openGraph: {
    title: "Công nghệ sáng tạo và đáng tin cậy | Bosch tại Việt Nam",
    description: "Khám phá những công nghệ tiên tiến và giải pháp đáng tin cậy từ Bosch. Chúng tôi tạo ra công nghệ có ích cho cuộc sống tại Việt Nam.",
    images: [
      {
        url: "https://www.bosch.com.vn/media/like_a_bosch/20230508_live_likeabosch/07_live_likeabosch_teaser_1920x1080_res_992x558.webp",
        width: 1920,
        height: 1080,
        alt: "Bosch Vietnam - Live Like A Bosch",
      },
    ],
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Công nghệ sáng tạo và đáng tin cậy | Bosch tại Việt Nam",
    description: "Khám phá những công nghệ tiên tiến và giải pháp đáng tin cậy từ Bosch. Chúng tôi tạo ra công nghệ có ích cho cuộc sống tại Việt Nam.",
    images: ["https://www.bosch.com.vn/media/like_a_bosch/20230508_live_likeabosch/07_live_likeabosch_teaser_1920x1080_res_992x558.webp"],
  },
};

export default function Home() {
  return (
    <main>
      <div className="mx-auto mb-0 max-w-7xl px-4 py-16 sm:px-6 md:mb-10 lg:px-8 ">
        <HeroSection />
        <PortfolioTabs />
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" >
        <Achievements />
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Highlights />
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8" >
        <Opex />
      </div>
      {/* <ContactSection /> */}
    </main>
  );
}
