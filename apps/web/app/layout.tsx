import { Geist, Geist_Mono } from "next/font/google";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <main className="flex-grow">
            <Providers>{children}</Providers>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
