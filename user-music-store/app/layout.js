import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Providers } from "@/lib/provider";
import { Navbar } from "@/components/global/navbar";
import { Footer } from "@/components/global/footer";
import Banner from "@/components/global/banner";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Dj Stage",
  description: "Dj Stage store",
  icons: {
    icon: "/Logo.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <Providers>
          <Toaster position="top-center" reverseOrder={false} />
          <Banner />
          <Navbar />
          <div className="">
            {children}
          </div>
          <Footer />
        </Providers>
        <Script src="https://colt-analytics.vercel.app/api/tracker?token=1dd824f9-a77e-436e-947b-49770da375bc" />
      </body>
    </html>
  );
}
