import moviehubSiteThumb from "../assets/images/projects/moviehub_thumbnail.png";

import jobSiteThumb from "../assets/images/projects/jobsite_thumbnail.png";

import consultSiteThumb from "../assets/images/projects/consultpage_thumbnail.png";

import financeAppThumb from "../assets/images/projects/financeapp_thumbnail.png";

import weatherAppThumb from "../assets/images/projects/weatherapp_thumbnail.png";

export const projects = [
  {
    id: 1,
    title: "moviehub site",
    desc: "movie review page",
    img: moviehubSiteThumb,
    tech: ["html", "css", "js"],
    url: "https://vanjakar98.github.io/MovieHub-site/",
  },

  {
    id: 2,
    title: "job site",
    desc: "job searching site",
    img: jobSiteThumb,
    tech: ["html", "scss", "js"],
    url: "https://vanjakar98.github.io/JobSite/",
  },

  {
    id: 3,
    title: "consult page",
    desc: "consult page visual",
    img: consultSiteThumb,
    tech: ["html", "scss", "js"],
    url: "https://vanjakar98.github.io/ConsultPage/",
  },

  {
    id: 4,
    title: "personal finance app",
    desc: "app for tracking spendings",
    img: financeAppThumb,
    tech: ["html", "styled", "react"],
    url: "https://vanjakar98.github.io/PersonalFinanceApp/",
  },

  {
    id: 5,
    title: "weather forecast application",
    desc: "app for weather forecast",
    img: weatherAppThumb,
    tech: ["html", "scss", "react", "recharts"],
    url: "https://vanjakar98.github.io/WeatherApp/",
  },
];
