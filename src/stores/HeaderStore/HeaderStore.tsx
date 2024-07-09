type Links = {
  id: number;
  text: string;
  url: string;
};

type FooterStore = {
  headerTitle: string;
  links: Links[];
};

export const headerStore: FooterStore = {
  headerTitle: "Integrated Courier Service",
  links: [
    { id: 1, text: "Home", url: "/" },
    { id: 2, text: "About", url: "/about" },
    { id: 3, text: "Services", url: "/services" },
    { id: 4, text: "Contact", url: "/contact" },
    { id: 5, text: "Track & Trace", url: "/track" },
  ],
};
