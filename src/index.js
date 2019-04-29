import { api } from "./DataFactory";
import { getResults } from "./view";
const API_KEY = `e6dd7b8d8c95452d928c02be508072cd`;
const channel = "bbc-news";

let handler = {
  get(target, key) {
    console.log(target.url);
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

  api({ proxy, type: "get" });
});
