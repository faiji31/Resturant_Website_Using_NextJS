import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import CartProviderContext from "@/context/CartProviderContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Safelo Resturant",
  description: "Best Fast Food in Town",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <header className="px-3 py-4 justify-between flex gap-5 items-center bg-amber-700">
          <Link href="/">
            <img src="/logo.jpg" alt="Logo" className="w-[80px]" />
          </Link>
          <div className="space-x-5">
            <Link className="p-3 b-2 bg-red-500 font-bold rounded text-black hover:bg-amber-950 duration-200 " href="/foods">Foods</Link>
            <Link className="p-3 b-2 bg-red-500 font-bold rounded text-black hover:bg-amber-950 duration-200 " href="/reviews">Reviews</Link>
          </div>

        </header>
        
        <main className="px-5 py-8">
          <CartProviderContext> {children}</CartProviderContext>
        </main>


      </body>
    </html>
  );
}
