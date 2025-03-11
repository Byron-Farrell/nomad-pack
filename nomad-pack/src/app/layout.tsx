import type { Metadata } from "next";
import { ThemeProvider} from "next-themes";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";


const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
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
    <html suppressHydrationWarning lang="en">
    <body
        className={`${robotoCondensed.variable} antialiased bg-gradient-to-r from-stone-900 to-gray-700`}
    >
      <ThemeProvider>
        <Navbar/>
        {children}
      </ThemeProvider>
    </body>
    </html>
  );
}
