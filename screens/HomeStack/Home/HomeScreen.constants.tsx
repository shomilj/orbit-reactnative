export const SAMPLE_DATA = [
  {},
  {
    id: "6",
    header: "TEST CELL",
    data: [
      {
        type: "TEXT",
        data: { content: "Header 1", style: "h1" },
      },
      {
        type: "TEXT",
        data: { content: "Header 2", style: "h2" },
      },
      {
        type: "TEXT",
        data: { content: "Header 3", style: "h3" },
      },
      {
        type: "TEXT",
        data: { content: "Header 4", style: "h4" },
      },
      {
        type: "TEXT",
        data: { content: "Header 5", style: "h5" },
      },
      {
        type: "TEXT",
        data: { content: "Body", style: "body" },
      },

      {
        type: "TEXT",
        data: { content: "Header", style: "header" },
      },
      {
        type: "TEXT",
        data: { content: "Footer", style: "footer" },
      },
    ],
  },
  {
    id: "5",
    header: "UC BERKELEY COVID CASES",
    data: [
      {
        type: "TEXT",
        data: {
          content: "There are 415 positive cases in the City of Berkeley.",
          style: "h2",
        },
      },
      {
        type: "TEXT",
        data: {
          content: "Last Updated 10/10 at 11:00 PM",
          style: "footer",
        },
      },
      {
        type: "BUTTON",
        data: {
          title: "Book a COVID Test",
          actionType: "WEB",
          actionContent: "https://etang.berkeley.edu/",
        },
      },
      {
        type: "BUTTON",
        data: {
          title: "COVID-19 Data Dashboard",
          actionType: "WEB",
          actionContent:
            "http://calviz.berkeley.edu/t/COVIDRecoveryPublic/views/UHSCovidData/UHSDashboard",
        },
      },
    ],
  },
  {
    id: "2",
    header: "CRIME AT UC BERKELEY",
    data: [
      {
        type: "TEXT",
        data: {
          content: "8:06 PM • Burglarly at Shattuck & Hearst",
          style: "body",
        },
      },
      {
        type: "TEXT",
        data: {
          content: "8:08 PM • Fire at Hearst Mining Building",
          style: "body",
        },
      },
      {
        type: "TEXT",
        data: {
          content: "8:10 PM • Man Wielding Knife at Sproul",
          style: "body",
        },
      },
      {
        type: "TEXT",
        data: {
          content: "View All Events →",
          style: "footer",
        },
      },
    ],
    actionType: "DETAIL",
    actionContent: "d7d4ee79254bf138f351aa23e60e5cd4ef3713c1",
  },
  {
    id: "1",
    header: "SPRING BREAK COUNTDOWN",
    data: [
      {
        type: "TEXT",
        data: {
          content: "There are 32 days until Spring Break.",
          style: "h2",
        },
      },
    ],
  },
  {
    id: "4",
    header: "CAFE 3 MENU - BREAKFAST (10/11)",
    data: [
      {
        type: "TEXT",
        data: {
          content: "Entrees",
          style: "h4",
        },
      },
      {
        type: "TEXT",
        data: {
          content: "Scrambled Eggs, Tater Tots (VG)",
          style: "body",
        },
      },
      {
        type: "TEXT",
        data: {
          content: "Plant Forward",
          style: "h4",
        },
      },
      {
        type: "TEXT",
        data: {
          content:
            "Vegan Chilaquiles (VG), Mung Bean Patties (VG), Seasoned Black Beans (VG)",
          style: "body",
        },
      },
      {
        type: "TEXT",
        data: {
          content: "Breakfast",
          style: "h4",
        },
      },
      {
        type: "TEXT",
        data: {
          content: "Oatmeal, Assorted Danishes and Scones, Oranges, Bananas",
          style: "body",
        },
      },
    ],
  },
];
