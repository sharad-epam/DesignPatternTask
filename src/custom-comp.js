class ResultInfo extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const wrapper = document.createElement("div");

    const author = document.createElement("h1");
    author.setAttribute("class", "author");
    author.textContent = this.getAttribute("author");

    const title = document.createElement("div");
    title.setAttribute("class", "title");
    title.textContent = this.getAttribute("title");

    const desc = document.createElement("div");
    desc.setAttribute("class", "desc");
    desc.textContent = this.getAttribute("desc");

    const publish = document.createElement("div");
    publish.setAttribute("class", "publish");
    publish.textContent = this.getAttribute("publish");

    const img = document.createElement("div");
    img.setAttribute("class", "img");

    let imgUrl;
    this.hasAttribute("img") ? (imgUrl = this.getAttribute("img")) : "No Image";

    let pic = document.createElement("img");
    pic.setAttribute("class", "pic");
    pic.src = imgUrl;
    img.appendChild(pic);

    const style = document.createElement("style");
    style.innerHTML = `
      .news {
        display: flex;
        flex-direction: column;
      }
      .author {
        text-align: center;
        border-bottom: 5px solid #dfe6e9;
      }
      .title {
        font-size: 20px;
        color: #636e72;
        border-bottom: 1px solid;
        padding: 10px;
      }
      .desc {
        padding: 10px;
        color: #2d3436;
        font-size: 20px;
      }
      .publish {
        padding: 10px;
        font-size: 15px;
        border-bottom: 1px solid;
        width: 10%;
        color: #2f3542;
      }
      @media only screen and (max-width: 500px) {
        .publish {
          width: 50%;
        }
        .pic {
          width:100%
        }
      }
      
    `;
    let news = document.createElement("div");
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(news);
    news.appendChild(author);
    news.appendChild(title);
    news.appendChild(desc);
    news.appendChild(publish);
    news.appendChild(img);
    news.appendChild(pic);
  }
}

customElements.define("result-info", ResultInfo);
