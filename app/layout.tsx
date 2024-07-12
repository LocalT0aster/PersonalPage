import { exo2 } from "@/components/fonts";
import Creds from "@/components/index/Creds";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LocalT0aster Homepage",
  description: "LocalT0aster's personal page homework.",
  authors: [{ name: "LocalT0aster", url: "https://github.com/LocalT0aster/" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${exo2.className} font-350 bg-stone-950 text-neutral-50 overflow-x-hidden`}>
        {children}
        <footer>
          <Creds />
        </footer>
      </body>
    </html>
  );
}
