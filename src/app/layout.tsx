
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ProvidersLayout from "./Providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Santu Solutions | Solutions technologiques pour les entreprises",
  description:
    "ESN et cabinet technologique : Cloud & DevOps, développement web & mobile, conseil, formation et solutions numériques sur mesure pour entreprises et institutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

 
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <ProvidersLayout>
          
          {children}
         </ProvidersLayout>
      </body>
    </html>
  );
}
