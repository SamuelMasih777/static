import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import icon from "@/public/images/vectorNavigator.png"

export const metadata: Metadata = {
  title: "MyRik",
  description: "Developed @ MyRik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href={icon.src} />
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
