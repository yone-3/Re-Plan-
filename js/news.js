document.addEventListener("DOMContentLoaded", () => {

    // news data
    const news = [
        { id: 1, category: "info", date: "2026-02-10", title: "Re:Plan∞ Official Website オープン" },
        { id: 2, category: "info", date: "2026-02-10", title: "SNS公式アカウント開設のお知らせ" },
        { id: 3, category: "info", date: "2026-02-20", title: "MEMBERSページ公開のお知らせ" },
        { id: 4, category: "info", date: "2026-03-01", title: "DISCOGRAPHYページ公開" },
        { id: 5, category: "release", date: "2026-03-01", title: "Re:Plan∞ デビューシングル「Re:Born, Again」リリース決定" },
        { id: 6, category: "release", date: "2026-03-01", title: "「Re:Born, Again」ジャケット写真公開（Type A）" },
        { id: 7, category: "info", date: "2026-03-05", title: "SCHEDULEページ近日公開予定" },
        { id: 8, category: "release", date: "2026-03-08", title: "「Re:Born, Again」ジャケット写真公開（Type B）" },
        { id: 9, category: "release", date: "2026-03-15", title: "「Re:Born, Again」Music Video 公開" },
        { id: 10, category: "release", date: "2026-04-01", title: "「Re:Born, Again」Music Video 公開" }
    ];

    const newsList = document.querySelector(".js-news-list");
    const filterButtons = document.querySelectorAll(".c-news__list li");

    function renderNews(category = "all") {

        newsList.innerHTML = "";

        const filteredNews = category === "all"
            ? news
            : news.filter(item => item.category === category);

        filteredNews.forEach(item => {

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

            newsList.insertAdjacentHTML("beforeend", html);

        });
    }

    renderNews();

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const category = button.textContent.toLowerCase();
            renderNews(category === "all" ? "all" : category);

        });

    });

});