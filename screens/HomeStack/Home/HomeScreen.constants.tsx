export const SAMPLE_DATA = [
  {},
  // {
  //   id: "6",
  //   header: "TEST CELL",
  //   data: [
  //     {
  //       type: "TEXT",
  //       data: { content: "Header 1", style: "h1" },
  //     },
  //     {
  //       type: "TEXT",
  //       data: { content: "Header 2", style: "h2" },
  //     },
  //     {
  //       type: "TEXT",
  //       data: { content: "Header 3", style: "h3" },
  //     },
  //     {
  //       type: "TEXT",
  //       data: { content: "Header 4", style: "h4" },
  //     },
  //     {
  //       type: "TEXT",
  //       data: { content: "Header 5", style: "h5" },
  //     },
  //     {
  //       type: "TEXT",
  //       data: { content: "Body", style: "body" },
  //     },

  //     {
  //       type: "TEXT",
  //       data: { content: "Header", style: "header" },
  //     },
  //     {
  //       type: "TEXT",
  //       data: { content: "Footer", style: "footer" },
  //     },
  //   ],
  // },

  {
    id: "5",
    documentId: "ffff",
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
    id: "5",
    documentId: "ffff",
    header: "Trending on r/Berkeley",
    data: [
      {
        type: "TEXT",
        data: { content: "Posted by u/lpaiasdis 5 hours ago", style: "h5" },
      },
      {
        type: "TEXT",
        data: {
          content:
            "What unique opportunities did you have from attending Berkeley?",
          style: "body",
        },
      },
      {
        type: "TEXT",
        data: { content: "Posted by u/capitan 57 minutes ago", style: "h5" },
      },
      {
        type: "TEXT",
        data: {
          content:
            "Difficulty connecting to Emotional Therapy: An EECS Perspective",
          style: "body",
        },
      },
      {
        type: "TEXT",
        data: { content: "Posted by u/bleeeeeep 5 hours ago", style: "h5" },
      },
      {
        type: "TEXT",
        data: { content: "Date ideas", style: "body" },
      },
      {
        type: "BUTTON",
        data: {
          title: "READ MORE ON REDDIT",
          actionType: "WEB",
          actionContent: "https://www.reddit.com/r/berkeley/",
        },
      },
    ],
  },
  {
    id: "5",
    documentId: "ffff",
    header: "Upcoming Games (Men's Basketball)",
    data: [
      {
        type: "TEXT",
        data: { content: "Thursday, January 1 at 12:00 PM", style: "h5" },
      },
      {
        type: "TEXT",
        data: { content: "California at UCLA", style: "body" },
      },
      {
        type: "TEXT",
        data: { content: "Thursday, January 1 at 12:00 PM", style: "h5" },
      },
      {
        type: "TEXT",
        data: { content: "Stanford", style: "body" },
      },
      {
        type: "TEXT",
        data: { content: "Thursday, January 1 at 12:00 PM", style: "h5" },
      },
      {
        type: "TEXT",
        data: { content: "California at USC", style: "body" },
      },
      {
        type: "TEXT",
        data: { content: "View All Games →", style: "footer" },
      },
    ],
  },
  {
    id: "5",
    documentId: "ffff",
    header: "The Daily Californian",
    data: [
      {
        type: "TEXT",
        data: {
          content: "Officer-Involved Shooting occurs in Tang Center Courtyard",
          style: "h2",
        },
      },
      {
        type: "TEXT",
        data: {
          content:
            "Berkeley Police Department officers responded to a robbery report Saturday that led to an officer-involved shooting.",
          style: "body",
        },
      },
      {
        type: "TEXT",
        data: {
          content: "Read more →",
          style: "footer",
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
        type: "BUTTON",
        data: {
          title: "Request a BearWalk",
          actionType: "WEB",
          actionContent: "https://www.reddit.com/r/berkeley/",
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
    documentId: "ffff",
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
    documentId: "ffff",
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

  {
    id: "5",
    documentId: "ffff",
    header: "Getting Around Campus",
    data: [
      {
        type: "TEXT",
        data: {
          content:
            "Welcome to Berkeley! Here are some tools to help you find your way around campus.",
          style: "h3",
        },
      },
      {
        type: "BUTTON",
        data: {
          title: "Campus Map",
          actionType: "WEB",
          actionContent: "https://www.reddit.com/r/berkeley/",
        },
      },
      {
        type: "BUTTON",
        data: {
          title: "Around Me",
          actionType: "WEB",
          actionContent: "https://www.reddit.com/r/berkeley/",
        },
      },
      {
        type: "BUTTON",
        data: {
          title: "Dwinelle navigator",
          actionType: "WEB",
          actionContent: "https://www.reddit.com/r/berkeley/",
        },
      },
    ],
  },

  {
    id: "5",
    documentId: "ffff",
    header: "CS 61C Office Hour Queue",
    data: [
      {
        type: "TEXT",
        data: {
          content: "The estimated wait time is 8-12 minutes.",
          style: "h2",
        },
      },
      {
        type: "TEXT",
        data: {
          content: "Join the Queue →",
          style: "footer",
        },
      },
    ],
  },
];
