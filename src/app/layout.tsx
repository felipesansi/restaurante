import type { Metadata } from "next";
import {Montserrat } from "next/font/google";
import "./globals.css";
import { Menu } from "./conponents/Nav";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToyApp",
  description: "Restaurante que oferece uma experiência única;",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-b">
      <body className={montserrat.className}>
        <Menu/>
        {children}</body>
    </html>
  );
}
