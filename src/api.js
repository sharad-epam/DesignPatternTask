import { chainPromiseError } from "./ErrorSingleton";
import "./styles/main.scss";
let resultHtml = "";
const getResults = (
  { author, title, description, publishedAt, urlToImage },
  index
) => {
  const item = index === 0 ? `${author}` : "";
  resultHtml += `<div><result-info author="${item}" title="${title}" desc="${description}" publish="${publishedAt}" img="${urlToImage}"></result-info></div>`;
};

function createNews(data) {
  let newsId = document.getElementById("news");
  data.articles.length > 0
    ? (document.getElementById("newsBtn").style.display = "none")
    : "";
  data.articles.map((item, index) => getResults(item, index));
  newsId.insertAdjacentHTML("afterend", resultHtml);
}

//For Get method
export default class getFactory {
  constructor(props) {
    if (props.type === "get") {
      return fetch(props.proxy.url)
        .then(res => res.json())
        .then(data => createNews(data))
        .catch(err =>
          chainPromiseError.error("Error trying to fetch News Data!")
        );
    }
  }
}
