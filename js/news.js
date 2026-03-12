// ニュースリスト要素
const newsList = document.querySelector(".js-news-list");

// カテゴリーボタン
const filterButtons = document.querySelectorAll(".c-news__list li");


// ニュース表示関数
function renderNews(category = "all") {

  // リスト初期化
  newsList.innerHTML = "";

  // カテゴリーで絞り込み
  const filteredNews = category === "all"
    ? news
    : news.filter(item => item.category === category);

  filteredNews.sort((a, b) => new Date(b.date) - new Date(a.date));

  filteredNews.forEach(item => {

    // 日付フォーマット
    const dateText = item.date.replaceAll("-", ".");

    const html = `
      <div class="c-news-item">

        <div class="c-news-item__data">

          <span class="c-news-item__label">
            ${item.category}
          </span>

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

    newsList.insertAdjacentHTML("beforeend", html);

  });

}


// 初期表示
renderNews();


// カテゴリーフィルター
filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    const category = button.textContent.trim().toLowerCase();

    // active削除
    filterButtons.forEach(btn => btn.classList.remove("is-active"));

    // active追加
    button.classList.add("is-active");

    renderNews(category);

  });

});

filterButtons[0].classList.add("is-active");