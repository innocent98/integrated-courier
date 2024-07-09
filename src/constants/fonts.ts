import { Inter, Lato, Open_Sans, Raleway } from "next/font/google";

// Load Raleway, Lato, and Open Sans fonts
const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: "100",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export { raleway, lato, openSans, inter };
