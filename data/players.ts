export interface Player {
    id: number;
    name: string;
    subtitle: string;
    image: any;
  
    position: string;
    height: string;
    weight: string;
  
    championships: number;
    mvps: number;
  
    bio: string;
  }

  export const players: Player[] = [
    {
        id: 1,
        name: "Michael Jordan",
        subtitle: "6× NBA Champion",
        image: require("../assets/images/jordan.jpg"),
      
        position: "Shooting Guard",
        height: "6'6\"",
        weight: "216 lbs",
        championships: 6,
        mvps: 5,
      
        bio: "Michael Jordan is widely regarded as the greatest basketball player of all time. He led the Chicago Bulls to six NBA championships and won five MVP awards.",
      },
      {
        id: 2,
        name: "Kobe Bryant",
        subtitle: "5× NBA Champion",
        image: require("../assets/images/kobe.jpg"),
      
        position: "Shooting Guard",
        height: "6'6\"",
        weight: "212 lbs",
      
        championships: 5,
        mvps: 1,
      
        bio: "Kobe Bryant spent his entire 20-year NBA career with the Los Angeles Lakers, winning five championships and becoming one of the greatest scorers in basketball history.",
      },
      {
        id: 3,
        name: "LeBron James",
        subtitle: "4× NBA Champion",
        image: require("../assets/images/lebron.jpg"),
      
        position: "Small Forward",
        height: "6'9\"",
        weight: "250 lbs",
      
        championships: 4,
        mvps: 4,
      
        bio: "LeBron James is one of the most accomplished players in NBA history, known for his versatility, longevity, and impact on every team he has played for.",
      },
  ];
  
