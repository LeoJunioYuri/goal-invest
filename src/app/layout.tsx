import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/Footer";
import { ThemeProvider } from "./utils/ThemeContext";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react"

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

// Metadata
export const metadata: Metadata = {
  title: "Goal Invest",
  description: "Faça previsões sobre suas finanças!",
  themeColor: "#000000", 
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/src/app/public/icons/investingIcon.png",
    apple: "/src/app/public/icons/investingIcon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/src/app/public/icons/investingIcon.png" />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

