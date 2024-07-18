import type { Metadata } from "next";
import { Inter, Lato, Open_Sans, Raleway, Roboto } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "700",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: "700",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Integrated Courier Service",
  description:
    "Integrated Courier service provides customers and businesses worldwide with a broad portfolio of transportation, e-commerce and business services. the company offers integrated business solutions utilizing its flexible, efficient, and intelligent global network. Consistently ranked among the world's most admired and trusted employers, Integrated Courier service inspires its more than 100,000 employees to remain focused on safety, the highest ethical and professional standards and the needs of their customers and communities.",
  openGraph: {
    title: "Integrated Courier Service",
    description:
      "Integrated Courier service provides customers and businesses worldwide with a broad portfolio of transportation, e-commerce and business services. the company offers integrated business solutions utilizing its flexible, efficient, and intelligent global network. Consistently ranked among the world's most admired and trusted employers, Integrated Courier service inspires its more than 100,000 employees to remain focused on safety, the highest ethical and professional standards and the needs of their customers and communities.",
    url: "https://www.integratedcurrierservice.online",
    siteName: "Integrated Courier Service",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${raleway.variable} ${lato.variable} ${openSans.variable} ${inter.className} ${roboto.variable} font-sans`}
    >
      <body>{children}</body>
    </html>
  );
}
