import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prosite",
  description: "Created By Grovyo Platforms Ltd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
