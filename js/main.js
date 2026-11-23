// ==========================================================
// 1. БАЗА ДАННЫХ ПЕРСОНАЖЕЙ
// ==========================================================

const charactersData = {
    ryan: { name: "Райан", image: "images/Ryan.webp", age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—", orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—", character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—", favBooks: "—", favMovies: "—", favMusic: "—", facts: "—" },
    kevin: { name: "Кевин Оливерс", image: "images/Kevin.webp", age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—", orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—", character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—", favBooks: "—", favMovies: "—", favMusic: "—", facts: "—" },
    liya: { name: "Лия Айнетдинова", image: "images/Lia.webp", age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—", orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—", character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—", favBooks: "—", favMovies: "—", favMusic: "—", facts: "—" },
    miranda: { name: "Миранда Щупс", image: "images/Miranda.webp", age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—", orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—", character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—", favBooks: "—", favMovies: "—", favMusic: "—", facts: "—" },
    michael: { name: "Михаэль Брауберк", image: "images/Mihaelle.webp", age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—", orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—", character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—", favBooks: "—", favMovies: "—", favMusic: "—", facts: "—" },
    daisy: { name: "Дейзи Долл", image: "images/Daisy.webp", age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—", orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—", character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—", favBooks: "—", favMovies: "—", favMusic: "—", facts: "—" },
    jonathan: { name: "Джонатан Круз", image: "images/Jonathan.webp", age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—", orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—", character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—", favBooks: "—", favMovies: "—", favMusic: "—", facts: "—" },
    derek: { name: "Дерек Миллорд", image: "images/Derek.webp", age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—", orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—", character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—", favBooks: "—", favMovies: "—", favMusic: "—", facts: "—" },
    frederick: { name: "Фредерик Флауерс", image: "images/Frederik.webp", age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—", orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—", character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—", favBooks: "—", favMovies: "—", favMusic: "—", facts: "—" },
    artem: { name: "Артём Найдерс", image: "images/Artyom.webp", age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—", orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—", character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—", favBooks: "—", favMovies: "—", favMusic: "—", facts: "—" },
    alana: { name: "Алана Роджер", image: "images/Alana.webp", age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—", orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—", character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—", favBooks: "—", favMovies: "—", favMusic: "—", facts: "—" },
    emma: { name: "Эмма Хьюстон", image: "images/Emma.webp", age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—", orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—", character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—", favBooks: "—", favMovies: "—", favMusic: "—", facts: "—" },
    evelyn: { name: "Эвелин Минлин", image: "images/Evelin.webp", age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—", orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—", character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—", favBooks: "—", favMovies: "—", favMusic: "—", facts: "—" },
    kanade: { name: "Канаде Минлин", image: "images/Kanade.webp", age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—", orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—", character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—", favBooks: "—", favMovies: "—", favMusic: "—", facts: "—" },
    isabella: { name: "Изабелла Табрис", image: "images/Isabella.webp", age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—", orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—", character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—", favBooks: "—", favMovies: "—", favMusic: "—", facts: "—" },
    candice: { name: "Кэндис Хироушу", image: "images/Candys.webp", age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—", orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—", character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—", favBooks: "—", favMovies: "—", favMusic: "—", facts: "—" },
    wilhelm: { name: "Вильгельм Вонка", image: "images/Vilgelm.webp", age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—", orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—", character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—", favBooks: "—", favMovies: "—", favMusic: "—", facts: "—" },
    eleanor: { name: "Мисс Кендивумен (Элеонора Сандес)", image: "images/Eleonora.webp", age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—", orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—", character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—", favBooks: "—", favMovies: "—", favMusic: "—", facts: "—" },
    michelle: { name: "Мишель", image: "images/Mishelle.webp", age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—", orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—", character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—", favBooks: "—", favMovies: "—", favMusic: "—", facts: "—" },
    raidan: { name: "Доктор Трайк (Райден Трайк)", image: "images/Ryaden.webp", age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—", orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—", character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—", favBooks: "—", favMovies: "—", favMusic: "—", facts: "—" }
};


// ==========================================================
// 2. ЛОГИКА МОДАЛЬНОГО ОКНА ПЕРСОНАЖЕЙ
// ==========================================================

const dialog = document.getElementById('character-dialog');

if (dialog) {
    const closeBtn = document.getElementById('close-character-dialog');
    const buttons = document.querySelectorAll('.character-card__button');

    function fillDialog(data) {
        const fill = (id, value) => {
            const el = document.getElementById(id);
            if (el) el.textContent = value || "—";
        };

        fill('char-name', data.name);
        fill('char-age', data.age);
        fill('char-height', data.height);
        fill('char-weight', data.weight);
        fill('char-zodiac', data.zodiac);
        fill('char-birthday', data.birthday);
        fill('char-orientation', data.orientation);
        fill('char-mbti', data.mbti);
        fill('char-worldview', data.worldview);
        fill('char-temperament', data.temperament);
        fill('char-status', data.status);
        fill('char-character', data.character);
        fill('char-bio', data.bio);
        fill('char-fav-color', data.favColor);
        fill('char-fav-food', data.favFood);
        fill('char-fav-drink', data.favDrink);
        fill('char-fav-books', data.favBooks);
        fill('char-fav-movies', data.favMovies);
        fill('char-fav-music', data.favMusic);
        fill('char-facts', data.facts);

        const charImage = document.getElementById('char-image');
        if (charImage) {
            charImage.src = data.image || "images/default.jpg";
            charImage.alt = data.name;
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const charId = button.dataset.character;
            const charData = charactersData[charId];

            if (charData) {
                fillDialog(charData);
                dialog.showModal();
            } else {
                console.warn('Персонаж не найден в базе:', charId);
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            dialog.close();
        });
    }
}

// ==========================================================
// 3. ГАЛЕРЕЯ АРТОВ (ВЕРТИКАЛЬНАЯ ЛЕНТА БЕЗ ЛАЙТБОКСА)
// ==========================================================

const artImages = [
    "file-art-1.webp",
    "file-art-2.webp"
];

function renderArtGallery() {
    const gallery = document.getElementById('art-gallery');
    if (!gallery) return;

    gallery.innerHTML = '';

    artImages.forEach((imageName) => {
        const card = document.createElement('div');
        card.className = 'arts-feed__card';

        const img = document.createElement('img');
        img.src = `images/${imageName}`;
        img.alt = "Арт WATCF";
        img.classList.add('arts-feed__img');
        img.loading = "lazy";
        // Добавили сглаживание для четкости
        img.style.imageRendering = 'auto'; 

        card.appendChild(img);
        gallery.appendChild(card);
    });
}

// ==========================================================
// 4. ЗАПУСК
// ==========================================================

document.addEventListener('DOMContentLoaded', () => {
    renderArtGallery();
});