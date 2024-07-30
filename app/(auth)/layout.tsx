import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import ToasterContext from "@context/ToasterContext";
import AuthProvider from "@context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth Only Oscars",
  description: "Next.js 14 Auth Cine project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
<AuthProvider>
<ToasterContext/>
{children}
</AuthProvider>
        {children}</body>
    </html>
  );
}