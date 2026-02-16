import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Alexander Neumann",
  description: "I'm Alexander Neumann,a graphic designer and coder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
