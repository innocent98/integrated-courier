type UsefulLinks = {
  id: number;
  text: string;
  url: string;
};

type FooterStore = {
  mailTitle: string;
  mailContent: string;
  aboutTitle: string;
  aboutContent: string;
  phone: string;
  mail: string;
  usefulLinks: UsefulLinks[];
};

export const footerStore: FooterStore = {
  mailTitle: "Mailing List",
  mailContent: "Sign up for our mailing list to get latest updates and offers.",
  aboutTitle: "About Us",
  aboutContent:
    "Freight delivery courier service is a global supplier of transport and logistics solutions",
  phone: "0044 123 456",
  mail: "info@crestcourier.com",
  usefulLinks: [
    { id: 1, text: "About Us", url: "/about" },
    { id: 2, text: "Services", url: "/services" },
    { id: 3, text: "Track & Trace", url: "/track" },
    { id: 4, text: "Company", url: "/" },
    { id: 5, text: "Contact Us", url: "/contact" },
  ],
};
