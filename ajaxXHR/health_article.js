//create
let xhr = new XMLHttpRequest();
let url = "./health_article.json";
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

    //add h3
    let waysHeader = document.createElement("h3");
    waysHeader.textContent = "Ways to Achieve:";

    //create ul and li then append li to ul
    let waysList = document.createElement("ul");
    article.ways_to_achieve.forEach((way) => {
      var listItem = document.createElement("li");
      listItem.textContent = way;
      waysList.appendChild(listItem);
    });

    let benefitsHeader = document.createElement("h3");
    benefitsHeader.textContent = "Benefits:";
    // create ul and li then append  li to ul
    let benefitsList = document.createElement("ul");
    article.benefits.forEach(function (benefit) {
      let listItem = document.createElement("li");
      listItem.textContent = benefit;
      benefitsList.appendChild(listItem);
    });

    //div -> title -> description -> header
    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);
    articlesDiv.appendChild(articleDiv);
  });
}
