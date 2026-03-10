const topNews = document.querySelector(".js-top-news");

if (topNews) {

    // 新しい順に並び替え
    const sortedNews = [...news].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });

    // 最新3件
    const latestNews = sortedNews.slice(0, 3);

    latestNews.forEach(item => {

        const dateText = item.date.replaceAll("-", ".");

        const html = `
      <div class="c-news-item">

        <div class="c-news-item__data">
          <span class="c-news-item__label">${item.category}</span>

          <time datetime="${item.date}" class="c-news-item__time">
            ${dateText}
          </time>
        </div>

        <p class="c-news-item__title">
          <a href="./news_detail.html?id=${item.id}">
            ${item.title}
          </a>
        </p>

      </div>
    `;

        topNews.insertAdjacentHTML("beforeend", html);

    });

}