import localFont from "next/font/local";
import "./globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "@/components/StoryblokProvider";
import { Inter } from 'next/font/google';
import Link from "next/link";

/* const Montserrat = localFont({
  src: "./fonts/Montserrat.ttf",
  weight: "100 900",
}); */

const inter = Inter({ subsets: ['latin'] });


/* Disable Next.JS cache */

const cachedFetch = (input, init) => {
  return fetch(input, {
    ...init,
    cache: "no-store",
  })
}

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    fetch: cachedFetch,
  }
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={`${inter.className} bg-blue-50`}>
          <header>
            <nav className="container mx-auto px-4 py-8 flex border border-gray-700 w-full justify-between">
              <Link href={"/"}>Home</Link>
              <Link href={"/tours"}>Tours</Link>
            </nav>
          </header>
          {children}
        </body>
    </html>
    </StoryblokProvider>
  );
}
