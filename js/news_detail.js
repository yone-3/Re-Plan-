const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const article = news.find(item => item.id === id);

if (article) {

    const title = document.querySelector(".js-news-title");
    const date = document.querySelector(".js-news-date");
    const desc = document.querySelector(".js-news-desc");

    title.textContent = article.title;

    const dateText = article.date.replaceAll("-", ".");
    date.textContent = dateText;
    date.setAttribute("datetime", article.date);

    desc.textContent = article.desc;

}