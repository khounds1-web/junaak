import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Junaak — A Material Study",
  description:
    "Junaak is a material-led textile study exploring softness, texture, drape and comfort.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
