import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const inter = Jost({ weight: ["300", "400", "700"],
style: ["normal", "italic"],
subsets: ["latin"], });

export const metadata: Metadata = {
  title: "Fintual Portfolio Analysis",
  description: "Test postulation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
