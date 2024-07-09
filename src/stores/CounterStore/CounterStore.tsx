type IconName = "twitter" | "facebook" | "instagram";

type CounterData = {
  id: number;
  number: string;
  text: string;
};

type Icons = {
  id: number;
  iconName: IconName;
};

type CounterStore = {
  counterTitle: string;
  counterDesc: string;
  counterData: CounterData[];
  icons: Icons[];
};

export const counterStore: CounterStore = {
  counterTitle: "Track Your Order",
  counterDesc: "Enter your Track Id For Instant Search",
  counterData: [
    { id: 1, number: "60", text: "Years Experience" },
    { id: 2, number: "2500+", text: "Professional Workers" },
    { id: 3, number: "80%", text: "Areas Covered" },
    { id: 4, number: "205+", text: "Countries Covered" },
    { id: 5, number: "180+", text: "Corporate Clients" },
    { id: 6, number: "450+", text: "Owned Vehicles" },
  ],
  icons: [
    { id: 1, iconName: "twitter" },
    { id: 2, iconName: "facebook" },
    { id: 3, iconName: "instagram" },
  ],
};
