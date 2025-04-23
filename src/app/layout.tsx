import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MedCoach AI - Your Smart OSCE Practice Buddy",
  description: "Master your PLAB 2 preparation with AI-powered voice interactions, realistic scenarios, and personalized feedback.",
  keywords: ["PLAB 2", "OSCE", "Medical Education", "AI Practice", "Medical Training"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} font-sans antialiased min-h-full`}>
        {children}
      </body>
    </html>
  );
}
