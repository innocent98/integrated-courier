type IconName = "sea" | "air" | "courier" | "delivery" | "train" | "track";

type Services = {
  id: number;
  icon: IconName;
  title: string;
  desc: string;
};

type ServiceStore = {
  services: Services[];
};

export const serviceStore: ServiceStore = {
  services: [
    {
      id: 1,
      icon: "sea",
      title: "Sea Freight",
      desc: "Sea freight is a shipping method that involves transporting goods by sea, typically through cargo ships or freighters. It is a cost-effective and reliable way to transport large quantities of goods over long distances.",
    },

    {
      id: 2,
      icon: "air",
      title: "Air Freight",
      desc: "Air freight is a shipping method that involves the transportation of goods by air, typically through cargo planes or commercial airlines. It is a fast and efficient way to transport goods over long distances and across international borders.",
    },

    {
      id: 3,
      icon: "courier",
      title: "Courier Services",
      desc: "Courier services are a type of delivery service that offers fast and reliable transportation of packages, documents, and other items from one location to another. These services are typically used for time-sensitive deliveries, such as legal documents, medical supplies, and retail packages.",
    },

    {
      id: 4,
      icon: "delivery",
      title: "Storage Services",
      desc: "Storage services are a type of service that offers temporary or long-term storage solutions for businesses and individuals. These services are typically used to store excess inventory, equipment, or personal belongings in a safe and secure location.",
    },

    {
      id: 5,
      icon: "train",
      title: "Fast Freight",
      desc: "Fast freight is a type of shipping service that offers expedited delivery for time-sensitive shipments. It is typically used for urgent shipments that require fast and reliable transportation, such as perishable goods, medical supplies, and high-value goods.",
    },

    {
      id: 6,
      icon: "track",
      title: "Track Your Cargo",
      desc: "Tracking your cargo is a crucial aspect of shipping that allows you to monitor the progress of your shipment from the point of origin to the final destination. Cargo tracking provides you with real-time information on the status and location of your cargo, allowing you to manage your logistics and supply chain more efficiently.",
    },
  ],
};
