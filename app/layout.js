import { Inter } from "next/font/google";
import Image from "next/image";

import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FinnovateAI",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/finnovateai_logo5.png" sizes="any" />
          {/* <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Unna:ital,wght@1,400&display=swap"
            rel="stylesheet"
          />

        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-blue-50 py-6">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <p className="text-base font-medium">Developed by Vishwasjeet Kumar Gupta</p>
                <Image
                  src="/vishwasjeet.jpg"
                  alt="Vishwasjeet Kumar Gupta"
                  width={50}
                  height={50}
                  className="rounded-full shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </footer>

        </body>
      </html>
    </ClerkProvider>
  );
}
