import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const benzin = localFont({
  src: "./fonts/benzin-extra-bold.ttf",
  variable: "--font-benzin",
});

export const metadata: Metadata = {
  title: "platnm",
  description: "A new way to share and remember music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${benzin.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
