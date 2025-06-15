import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart, CiLocationOn } from "react-icons/ci";

const inter = Inter({
  weight: "100", // Thin weight
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Explore BMW latest Model",
  description: "Explore BMW latest Model",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="absolute z-50 top-1  pl-30 pr-30 pt-3">
          <nav className="flex justify-between">
            <div className="flex flex-row gap-7">
              <Image
                src={
                  "https://www.bmw.in/content/dam/bmw/common/images/logo-icons/BMW/BMW_White_Logo.svg.asset.1670245093434.svg"
                }
                alt="bmw logo"
                height={50}
                width={50}
              />
              <h1 className="mt-3 text-white text-[15px] font-semibold">
                Models
              </h1>
              <h1 className="mt-3 text-white text-[15px] font-semibold">
                Electric
              </h1>
              <h1 className="mt-3 text-white text-[15px] font-semibold">
                Configurator
              </h1>
              <h1 className="mt-3 text-white text-[15px] font-semibold">
                Visit Online Shop
              </h1>
              <h1 className="mt-3 text-white text-[15px] font-semibold">
                More BMW
              </h1>
            </div>
            <div className="flex flex-row gap-6 text-white text-[20px]">
              <CgProfile className="ml-80 mt-3" />
              <IoCartOutline className=" mt-3" />
              <CiHeart className="mt-3" />
              <CiLocationOn className="mt-3" />
            </div>
          </nav>
          <div className="text-white mt-3 w-full">
            <hr />
          </div>
        </div>

        <main>{children}</main>
        <footer className="">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
