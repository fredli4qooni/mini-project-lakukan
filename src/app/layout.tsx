import type { Metadata } from "next";
import "./globals.css";
import { GlobalHeader } from "@/components/organisms/GlobalHeader";
import { GlobalFooter } from "@/components/organisms/GlobalFooter";

export const metadata: Metadata = {
  title: "Exclusive E-Commerce",
  description: "Best Swim Suits and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-black">
        <GlobalHeader />
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}