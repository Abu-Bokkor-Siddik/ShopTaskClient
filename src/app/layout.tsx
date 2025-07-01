/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
import "@/src/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/src/config/site";
import { fontSans } from "@/src/config/fonts";
import { Navbar } from "@/src/components/navbar";
import Uper from "../components/uper";
import Napvar from "../components/supabase/Napvar";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
          // eslint-disable-next-line prettier/prettier, react/jsx-sort-props
        )}
        suppressHydrationWarning
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Uper />
            <Navbar />

            <main className="container flex-grow">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
