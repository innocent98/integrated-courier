type IconName = "air" | "courier" | "sea" | "train";

type HomeIntroService = {
  id: number;
  icon: IconName;
  title: string;
};

type AwesomeServices = {
  id: number;
  img: string;
  text: string;
};

type HomeStore = {
  introTitle: string;
  introDesc: string;
  homeIntroService: HomeIntroService[];
  awesomeServices: AwesomeServices[];
};

export const homeStore: HomeStore = {
  introTitle: "WE DELIVER ON TIME",
  introDesc:
    "Join the millions getting bargain deals on shipping cars, furniture, freight, and more..",
  homeIntroService: [
    { id: 1, icon: "air", title: "Book Your Air Freight" },
    { id: 2, icon: "courier", title: "Book Your Road Freight" },
    { id: 3, icon: "sea", title: "Book Your Sea Freight" },
    { id: 4, icon: "train", title: "Book Your Train Freight" },
  ],
  awesomeServices: [
    { id: 1, img: "/jpgs/air.jpg", text: "Air Freight" },
    { id: 2, img: "/jpgs/sea.jpg", text: "Sea Freight" },
    { id: 3, img: "/jpgs/road.jpg", text: "Road Freight" },
    { id: 4, img: "/jpgs/courier.jpg", text: "Courier Services" },
    { id: 5, img: "/pngs/train.png", text: "Fast Freight" },
    { id: 6, img: "/jpgs/truck.jpg", text: "Track Cargo" },
  ],
};
