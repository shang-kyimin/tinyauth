import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/utils";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TinyAuth",
  description: "Free authentication service for side projects: ideal for not only testing and development but also in production.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-theme bg-no-repeat bg-cover bg-center antialiased mx-auto px-8 sm:px-4", manrope.className)}>
        {children}
      </body>
    </html>
  );
}
