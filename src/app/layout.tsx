import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "./_components/Navbar";
import Folder from "./_components/Folder";
import File from "./_components/File";
import { folders } from "@/folders";
import React from "react";
import { Analytics } from "@vercel/analytics/next";
import WindowStoreProvider from "./_components/WindowStoreProvider";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...pageMetadata("/"),
  metadataBase: new URL(site.url),
  applicationName: site.name,
  authors: [{ name: site.owner, url: site.url }],
  creator: site.owner,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" h-screen w-screen">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full w-full relative overflow-hidden`}
        style={{
          backgroundImage: `url('/images/wallpaper.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <WindowStoreProvider>
          <Navbar />
          <div className="p-2 flex flex-wrap gap-4 md:flex-col md:items-end">
            <Folder
              name="Fakintosh HD"
              icon="/images/macintosh.png"
              id={-1}
              textColor="#ffffff"
            />
            {folders["desktop"].map((file, index) => (
              <React.Fragment key={index}>
                {file.type === "file" ? (
                  <File
                    name={file.name}
                    icon={file.icon}
                    id={file.id}
                    link={file.link}
                    textColor="#ffffff"
                  />
                ) : (
                  <Folder
                    name={file.name}
                    icon={file.icon}
                    id={file.id}
                    textColor="#ffffff"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
          <main>{children}</main>
        </WindowStoreProvider>
        <Analytics />
      </body>
    </html>
  );
}
