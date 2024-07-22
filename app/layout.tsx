import type { Metadata } from "next";
import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export const metadata: Metadata = {
  title: "TechGigs | Custom Software Solutions for Business Success",
  description:
    "Need the best IT solution agency for your Business - TechGigs delivers innovative ERP, payroll, hospital, and restaurant management systems.Transform your operations today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` `}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
