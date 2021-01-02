export const SAMPLE_DATA = [
  {
    title: "Food",
    data: [
      {
        name: "Sliver Pizzeria",
        icon: "pizza-outline",
        key: "sliverpizzeria",
        color: "#e84118",
      },
      {
        name: "Dining Hall Menu",
        icon: "fast-food-outline",
        key: "dininghall",
        color: "#e84118",
      },
    ],
  },
  {
    title: "Health & Safety",
    color: "#e84118",
    data: [
      {
        name: "Recent Crime",
        icon: "alert-circle-outline",
        key: "recentcrime",
        color: "#00a8ff",
      },
      {
        name: "City of Berkeley COVID-19",
        icon: "stats-chart-outline",
        key: "citycovid",
        color: "#00a8ff",
      },
      {
        name: "Mental Health Toolkit",
        icon: "medkit-outline",
        key: "mentalhealthtoolkit",
        color: "#00a8ff",
      },
    ],
  },
  {
    title: "Events",
    color: "#00a8ff",
    data: [
      {
        name: "Countdown",
        icon: "calendar",
        key: "countdown",
        color: "#00a8ff",
        params: [
          {
            key: "event",
            name: "Event",
            options: ["Dead Week", "First Day of Summer"],
            type: "SINGLE_SELECT",
          },
        ],
      },
    ],
  },
];
