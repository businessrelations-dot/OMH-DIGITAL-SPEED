import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OMH Digital - Digital SEO Services powered by smart Agentic AI",
  description: "Leading digital agency in Berlin specializing in AI-powered solutions, website development, SEO marketing, and intelligent automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
