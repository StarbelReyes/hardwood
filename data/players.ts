export const players = [
    {
      id: 1,
      name: "Michael Jordan",
      subtitle: "6× NBA Champion",
      image: require("../assets/images/jordan.jpg"),
    },
    {
      id: 2,
      name: "Kobe Bryant",
      subtitle: "5× NBA Champion",
      image: require("../assets/images/kobe.jpg"),
    },
    {
      id: 3,
      name: "LeBron James",
      subtitle: "4× NBA Champion",
      image: require("../assets/images/lebron.jpg"),
    },
  ];
  
  export type Player = (typeof players)[number];