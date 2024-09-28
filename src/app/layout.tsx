import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavLinks from "./ui/dashboard/nav-links";
import { Header } from "./ui/header";

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

export const metadata: Metadata = {
  title: "Food store",
  description: "Welcome to our food store",
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
        <div className="grid min-h-screen grid-rows-[4rem_1fr]">
          <Header />
          <main className="bg-gray-100">{children}</main>
          <footer className="sticky bottom-0 z-50 flex items-center justify-around border-t bg-white py-2 shadow">
            <NavLinks />
          </footer>
        </div>
      </body>
    </html>
  );
}
