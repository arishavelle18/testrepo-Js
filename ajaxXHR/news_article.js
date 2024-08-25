//create
let xhr = new XMLHttpRequest();
let url = "./news_article.json";
let articlesDiv = document.getElementById("articles");
//open
xhr.open("GET", url, true);
xhr.responseType = "json";
xhr.onload = function () {
  var articles = xhr.response.articles;
  console.log(articles);
  displayArticles(articles);
};
xhr.send();

function displayArticles(articles) {
  articles.forEach((article) => {
    //add div
    let articleDiv = document.createElement("div");
    articleDiv.classList.add("article");

    //add h2
    let title = document.createElement("h2");
    title.textContent = article.title;

    //add p
    let description = document.createElement("p");
    description.textContent = article.description;

    //div -> title -> description -> header
    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articlesDiv.appendChild(articleDiv);
  });
}
