export interface Player {
  id: number;
  name: string;
  subtitle: string;

  image: any;

  backgroundImage?: any;
  cutoutImage?: any;
  
    info: {
      position: string;
      height: string;
      weight: string;
    };
  
    awards: {
        key: string;
        icon: string;
        label: string;
        value: number;
      }[];
      timeline: {
        year: number;
        icon: string;
        title: string;
        description: string;
      }[];
      teams: {
        id: string;
        name: string;
        years: string;
      }[];
  
    stats: {
      basic: {
        key: string;
        label: string;
        value: number;
      }[];
  
      advanced: {
        key: string;
        label: string;
        value: number;
      }[];
    };

    
  
    bio: string;
  }
  
  export const players: Player[] = [
    {
      id: 1,
      name: "Michael Jordan",
      subtitle: "6× NBA Champion",
      image: require("../assets/images/jordan.jpg"),
      
      backgroundImage: require("../assets/images/jordan-background.png"),
      cutoutImage: require("../assets/images/jordan cut-out.png"),
  
      info: {
        position: "Shooting Guard",
        height: "6'6\"",
        weight: "216 lbs",
      },
  
      awards: [
        {
          key: "championships",
          icon: "🏆",
          label: "Championships",
          value: 6,
        },
        {
          key: "mvps",
          icon: "⭐",
          label: "MVP Awards",
          value: 5,
        },
        {
          key: "allStars",
          icon: "⭐",
          label: "All-Star",
          value: 14,
        },
        {
          key: "finalsMvps",
          icon: "🏆",
          label: "Finals MVP",
          value: 6,
        },
        {
          key: "dpoy",
          icon: "🛡️",
          label: "DPOY",
          value: 1,
        },
      ],

      timeline: [
        {
          year: 1984,
          icon: "🏀",
          title: "NBA Draft",
          description: "Drafted 3rd overall by the Chicago Bulls.",
        },
        {
          year: 1991,
          icon: "🏆",
          title: "First Championship",
          description: "Won his first NBA championship and Finals MVP.",
        },
        {
          year: 1993,
          icon: "👑",
          title: "First Three-Peat",
          description: "Led the Bulls to their third straight NBA title.",
        },
        {
          year: 1995,
          icon: "📣",
          title: "I'm Back",
          description: "Returned to the NBA after retiring to play baseball.",
        },
        {
          year: 1998,
          icon: "🐐",
          title: "The Last Shot",
          description: "Hit the iconic game-winning shot against the Utah Jazz to win his sixth championship.",
        },
      ],

      teams: [
        {
          id: "bulls",
          name: "Chicago Bulls",
          years: "1984–1993",
        },
        {
          id: "bulls-return",
          name: "Chicago Bulls",
          years: "1995–1998",
        },
        {
          id: "wizards",
          name: "Washington Wizards",
          years: "2001–2003",
        },
      ],
  
      stats: {
        basic: [
          {
            key: "ppg",
            label: "PPG",
            value: 30.1,
          },
          {
            key: "rpg",
            label: "RPG",
            value: 6.2,
          },
          {
            key: "apg",
            label: "APG",
            value: 5.3,
          },
          {
            key: "spg",
            label: "SPG",
            value: 2.3,
          },
          {
            key: "bpg",
            label: "BPG",
            value: 0.8,
          },
        ],
      
        advanced: [
          {
            key: "fgPct",
            label: "FG%",
            value: 49.7,
          },
          {
            key: "threePct",
            label: "3PT%",
            value: 32.7,
          },
          {
            key: "ftPct",
            label: "FT%",
            value: 83.5,
          },
          {
            key: "per",
            label: "PER",
            value: 27.9,
          },
          {
            key: "tsPct",
            label: "TS%",
            value: 56.9,
          },
        ],
      },
      bio:
        "Michael Jordan is widely regarded as the greatest basketball player of all time. He led the Chicago Bulls to six NBA championships and won five MVP awards.",
    },
  
    {
        id: 2,
        name: "Kobe Bryant",
        subtitle: "5× NBA Champion",
        image: require("../assets/images/kobe.jpg"),
      
        info: {
          position: "Shooting Guard",
          height: "6'6\"",
          weight: "212 lbs",
        },
      
        awards: [
            {
              key: "championships",
              icon: "🏆",
              label: "Championships",
              value: 5,
            },
            {
              key: "mvps",
              icon: "⭐",
              label: "MVP Awards",
              value: 1,
            },
            {
              key: "allStars",
              icon: "⭐",
              label: "All-Star",
              value: 18,
            },
            {
              key: "finalsMvps",
              icon: "🏆",
              label: "Finals MVP",
              value: 2,
            },
          ],

          teams: [
            {
              id: "lakers",
              name: "Los Angeles Lakers",
              years: "1996–2016",
            },
          ],

          timeline: [
            {
              year: 1996,
              icon: "🏀",
              title: "NBA Draft",
              description: "Drafted 13th overall by the Charlotte Hornets and immediately traded to the Los Angeles Lakers.",
            },
            {
              year: 2000,
              icon: "🏆",
              title: "First Championship",
              description: "Won his first NBA championship alongside Shaquille O'Neal.",
            },
            {
              year: 2006,
              icon: "🔥",
              title: "81-Point Game",
              description: "Scored 81 points against the Toronto Raptors, the second-highest scoring game in NBA history.",
            },
            {
              year: 2008,
              icon: "⭐",
              title: "League MVP",
              description: "Won the NBA Most Valuable Player Award.",
            },
            {
              year: 2010,
              icon: "🏆",
              title: "Back-to-Back Champion",
              description: "Won his fifth NBA championship and second consecutive Finals MVP.",
            },
            {
              year: 2016,
              icon: "🎤",
              title: "Final Game",
              description: "Retired after scoring 60 points in his final NBA game.",
            },
          ],
      
        stats: {
          basic: [
            {
              key: "ppg",
              label: "PPG",
              value: 25.0,
            },
            {
              key: "rpg",
              label: "RPG",
              value: 5.2,
            },
            {
              key: "apg",
              label: "APG",
              value: 4.7,
            },
            {
              key: "spg",
              label: "SPG",
              value: 1.4,
            },
            {
              key: "bpg",
              label: "BPG",
              value: 0.5,
            },
          ],
      
          advanced: [
            {
              key: "fgPct",
              label: "FG%",
              value: 44.7,
            },
            {
              key: "threePct",
              label: "3PT%",
              value: 32.9,
            },
            {
              key: "ftPct",
              label: "FT%",
              value: 83.7,
            },
            {
              key: "per",
              label: "PER",
              value: 22.9,
            },
            {
              key: "tsPct",
              label: "TS%",
              value: 55.0,
            },
          ],
        },
      
        bio:
          "Kobe Bryant spent his entire 20-year NBA career with the Los Angeles Lakers, winning five championships and becoming one of the greatest scorers in basketball history.",
      },
  
      {
        id: 3,
        name: "LeBron James",
        subtitle: "4× NBA Champion",
        image: require("../assets/images/lebron.jpg"),
      
        info: {
          position: "Small Forward",
          height: "6'9\"",
          weight: "250 lbs",
        },
      
        awards: [
            {
              key: "championships",
              icon: "🏆",
              label: "Championships",
              value: 4,
            },
            {
              key: "mvps",
              icon: "⭐",
              label: "MVP Awards",
              value: 4,
            },
            {
              key: "allStars",
              icon: "⭐",
              label: "All-Star",
              value: 21,
            },
            {
              key: "finalsMvps",
              icon: "🏆",
              label: "Finals MVP",
              value: 4,
            },
          ],

          teams: [
            {
              id: "cavaliers-1",
              name: "Cleveland Cavaliers",
              years: "2003–2010",
            },
            {
              id: "heat",
              name: "Miami Heat",
              years: "2010–2014",
            },
            {
              id: "cavaliers-2",
              name: "Cleveland Cavaliers",
              years: "2014–2018",
            },
            {
              id: "lakers",
              name: "Los Angeles Lakers",
              years: "2018–Present",
            },
          ],

          timeline: [
            {
              year: 2003,
              icon: "🏀",
              title: "NBA Draft",
              description: "Selected first overall by the Cleveland Cavaliers.",
            },
            {
              year: 2010,
              icon: "🤝",
              title: "The Decision",
              description: "Joined the Miami Heat, forming one of the NBA's most famous superteams.",
            },
            {
              year: 2012,
              icon: "🏆",
              title: "First Championship",
              description: "Won his first NBA championship and Finals MVP with the Miami Heat.",
            },
            {
              year: 2016,
              icon: "👑",
              title: "Historic Comeback",
              description: "Led Cleveland back from a 3–1 deficit to win the franchise's first NBA championship.",
            },
            {
              year: 2018,
              icon: "💜",
              title: "Joined the Lakers",
              description: "Signed with the Los Angeles Lakers as a free agent.",
            },
            {
              year: 2020,
              icon: "🏆",
              title: "Fourth Championship",
              description: "Won his fourth NBA championship and fourth Finals MVP with the Lakers.",
            },
          ],
      
        stats: {
          basic: [
            {
              key: "ppg",
              label: "PPG",
              value: 27.0,
            },
            {
              key: "rpg",
              label: "RPG",
              value: 7.5,
            },
            {
              key: "apg",
              label: "APG",
              value: 7.4,
            },
            {
              key: "spg",
              label: "SPG",
              value: 1.5,
            },
            {
              key: "bpg",
              label: "BPG",
              value: 0.7,
            },
          ],
      
          advanced: [
            {
              key: "fgPct",
              label: "FG%",
              value: 50.6,
            },
            {
              key: "threePct",
              label: "3PT%",
              value: 35.0,
            },
            {
              key: "ftPct",
              label: "FT%",
              value: 73.7,
            },
            {
              key: "per",
              label: "PER",
              value: 27.0,
            },
            {
              key: "tsPct",
              label: "TS%",
              value: 58.9,
            },
          ],
        },
      
        bio:
          "LeBron James is one of the most accomplished players in NBA history, known for his versatility, longevity, and impact on every team he has played for.",
      },
  ];