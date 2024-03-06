import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
// config
// components
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gray"}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
