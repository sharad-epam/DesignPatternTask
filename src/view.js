let resultHtml = "";
const getResults = (
  { author, title, description, publishedAt, urlToImage },
  index
) => {
  const item = index === 0 ? `${author}` : "";
  resultHtml += `<div><result-info author="${item}" title="${title}" desc="${description}" publish="${publishedAt}" img="${urlToImage}"></result-info></div>`;
};

export const createNews = data => {
  let newsId = document.getElementById("news");
  data.articles.length > 0
    ? (document.getElementById("newsBtn").style.display = "none")
    : "";
  data.articles.map((item, index) => getResults(item, index));
  newsId.insertAdjacentHTML("afterend", resultHtml);
};
