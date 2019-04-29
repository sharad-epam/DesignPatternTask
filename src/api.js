import "./styles/main.scss";
let resultHtml = "";
const getResults = (
  { author, title, description, publishedAt, urlToImage },
  index
) => {
  const item = index === 0 ? `${author}` : "";
  resultHtml += `<div><result-info author="${item}" title="${title}" desc="${description}" publish="${publishedAt}" img="${urlToImage}"></result-info></div>`;
};

const createNews = data => {
  let newsId = document.getElementById("news");
  data.articles.length > 0
    ? (document.getElementById("newsBtn").style.display = "none")
    : "";
  data.articles.map((item, index) => getResults(item, index));
  newsId.insertAdjacentHTML("afterend", resultHtml);
};
const requestWrapper = ({ url, type, body }) => {
  let config = {
    method: type,
    url,
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (body) {
    body = JSON.stringify(body);
    config = {
      ...config,
      body
    };
  } else {
    config = {
      ...config
    };
  }
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error =>
      import("./ErrorSingleton").then(module =>
        module.chainPromiseError.error(
          "Error trying to fetch News Data!" + error.message
        )
      )
    );
};
export class getFactory {
  constructor(props) {
    let config = {
      url: props.proxy.url,
      type: "GET"
    };
    requestWrapper(config).then(data => createNews(data));
  }
}

export class postFactory {
  constructor(props) {}
}

export class updateFactory {
  constructor(props) {}
}

export class deleteFactory {
  constructor(props) {}
}
export default {
  getFactory,
  postFactory,
  updateFactory,
  deleteFactory
};
