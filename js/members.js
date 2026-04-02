const members = [
    {
        id: 1,
        yourName: "YUI",
        nameFurigana: "ユイ",
        symbol: "核・起源・記憶",
        color: "ミルキーホワイト",
        copy: "最初の私は、今もここにいる",
        photoImg: "01yui_square.jpg",
        btnPhoto: "01yui-maru.png"
    },
    {
        id: 2,
        yourName: "Mira",
        nameFurigana: "ミラ",
        symbol: "自己認識・鏡",
        color: "シルバー",
        copy: "映る私が、本当の私",
        photoImg: "02mira_square.jpg",
        btnPhoto: "02mira-maru.png"
    },
    {
        id: 3,
        yourName: "Noa",
        nameFurigana: "ノア",
        symbol: "声・共鳴",
        color: "アクアブルー",
        copy: "この声が、あなたを再生する",
        photoImg: "03noa_square.jpg",
        btnPhoto: "03noa-maru.png"
    },
    {
        id: 4,
        yourName: "Rio",
        nameFurigana: "リオ",
        symbol: "運動・再構築",
        color: "ネオンブルー",
        copy: "壊れた体ほど、美しく踊れる",
        photoImg: "04rio_square.jpg",
        btnPhoto: "04rio-maru.png"
    },
    {
        id: 5,
        yourName: "Aya",
        nameFurigana: "アヤ",
        symbol: "記憶・思考",
        color: "パープル",
        copy: "私は分裂した、だから賢い",
        photoImg: "05aya_square.jpg",
        btnPhoto: "05aya-maru.png"
    },
    {
        id: 6,
        yourName: "Haru",
        nameFurigana: "ハル",
        symbol: "回復・安心",
        color: "ライトグリーン",
        copy: "治らない傷なんて、ないよ",
        photoImg: "06haru_square.jpg",
        btnPhoto: "06haru-maru.png"
    },
    {
        id: 7,
        yourName: "Sena",
        nameFurigana: "セナ",
        symbol: "影・孤立",
        color: "ダークグレー",
        copy: "切り離されたのは、弱さだけ",
        photoImg: "07sena_square.jpg",
        btnPhoto: "07sena-maru.png"
    }, {
        id: 8,
        yourName: "Luna",
        nameFurigana: "ルナ",
        symbol: "未来・無限",
        color: "クリアピンク",
        copy: "増えるって、楽しいよ？",
        photoImg: "08luna_square.jpg",
        btnPhoto: "08luna-maru.png"
    }
]



// thumbnail
const photoContainer = document.querySelector('.c-members-photos');

members.forEach(member => {
    const img = document.createElement('img');

    img.src = `./image/${member.btnPhoto}`;
    img.alt = member.nameFurigana;
    img.dataset.id = member.id;

    photoContainer.appendChild(img);
});

// main
function renderMember(member) {
    const mainImg = document.querySelector('.c-mem__img');
    const nameId = document.querySelector('.c-mem__name--id');
    const name = document.querySelector('.c-mem__name--name');
    const infoList = document.querySelector('.c-mem__info--list');

    mainImg.src = `./image/${member.photoImg || 'noimage.jpg'}`;
    mainImg.alt = member.nameFurigana;

    nameId.textContent = `Re:${String(member.id).padStart(2, '0')}`;
    name.textContent = `${member.nameFurigana} -${member.yourName}-`;

    infoList.innerHTML = `
    <div class="c-mem__info">
        <dt class="c-mem__info--cate">シンボル</dt>
        <dd>${member.symbol}</dd>
     </div>
     <div class="c-mem__info">
        <dt class="c-mem__info--cate">メンバーカラー</dt>
        <dd>${member.color}</dd>
    </div>
     <div class="c-mem__info">
        <dt class="c-mem__info--cate">キャッチコピー</dt>
        <dd>${member.copy}</dd>
     </div>
    `;
}

// click
const thumbnails = document.querySelectorAll('.c-members-photos img');

thumbnails.forEach(img => {
    img.addEventListener('click', () => {

        // active削除
        thumbnails.forEach(el => el.classList.remove('is-active'));

        // active付与
        img.classList.add('is-active');

        const memberId = Number(img.dataset.id);
        const member = members.find(m => m.id === memberId);

        renderMember(member);
    });
});

// 初期表示
renderMember(members[0]);

// 初期active
document.querySelector('.c-members-photos img')
    .classList.add('is-active');