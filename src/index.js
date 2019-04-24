import newsFeed from "./api.js";
const API_KEY = `720c0314e8b2423eb7e1ffca5a1eeeb1`;
const channel = "bbc-news";

let handler = {
  get(target, key) {
    return key ? target[key] : "";
  }
};
let target = {};
let proxy = new Proxy(target, handler);
proxy.url = `https://newsapi.org/v1/articles?source=${channel}&apiKey=${API_KEY}`;

const newsBtn = document.getElementById("newsBtn");

newsBtn.addEventListener("click", () => {
  let head = document.getElementsByTagName("head")[0];
  let script = document.createElement("script");
  script.type = "module";
  script.src = "/src/custom-comp.js";
  head.appendChild(script);

  newsFeed({ proxy, type: "get" });
});
