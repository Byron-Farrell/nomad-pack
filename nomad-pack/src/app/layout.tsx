import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";


const robotoCondensed = Roboto_Condensed({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Nomad Pack",
  description: "Create a survival kit tailored to your next adventure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className={`${robotoCondensed.variable} antialiased bg-primary`}
    >
      <div>
        <Navbar/>
        {children}
      </div>
    </body>
    </html>
  );
}
