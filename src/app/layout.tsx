import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BookMyScreen | Book Movie Tickets Online",
  description:
    "Discover movies, explore cinemas and book your movie tickets with BookMyScreen.",
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