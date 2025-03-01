"use client";

import Banner from "@/components/global/banner";
import { Navbar } from "@/components/global/navbar";
import { BestSelling } from "@/components/best-selling";
import { Types } from "@/components/types";
import { Slide } from "@/components/slide";
import { Features } from "@/components/features";
import { WhatsappButton } from "@/components/global/whatsapp-button";
import { Testimonial } from "@/components/testimonial";
import { TrendingInGuitars } from "@/components/trending-in-guitars";
import { TrendingInPianos } from "@/components/trending-in-pianos";
import { TrendingInDrums } from "@/components/trending-in-drums";
import { TrendingInProAudio } from "@/components/trending-in-pro-audio";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";
import { NewsArticles } from "@/components/news-articles";

export default function Home() {

  return (
    <>
      <GoogleAnalytics gaId="G-27HTVW5LYH" />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-27HTVW5LYH`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-27HTVW5LYH', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <main>
        <Slide />
        <Features />
        <Types />
        <BestSelling />
        <NewsArticles />
        {/* <TrendingInGuitars />
        <TrendingInPianos />
        <TrendingInDrums />
        <TrendingInProAudio /> */}
        <Testimonial />
        <WhatsappButton />
      </main>
    </>
  );
}
