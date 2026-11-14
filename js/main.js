// ==========================================================
// 1. БАЗА ДАННЫХ ПЕРСОНАЖЕЙ (Данные и картинки)
// ==========================================================

const charactersData = {
    // 1. Райан
    ryan: {
        name: "Райан",
        image: "images/Ryan.webp",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 2. Кевин Оливерс
    kevin: {
        name: "Кевин Оливерс",
        image: "images/Kevin.webp",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 3. Лия Айнетдинова
    liya: {
        name: "Лия Айнетдинова",
        image: "images/Lia.webp",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 4. Миранда Щупс
    miranda: {
        name: "Миранда Щупс",
        image: "images/Miranda.webp",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 5. Михаэль Брауберк
    michael: {
        name: "Михаэль Брауберк",
        image: "images/Mihaelle.webp",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 6. Дейзи Долл
    daisy: {
        name: "Дейзи Долл",
        image: "images/Daisy.webp",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 7. Джонатан Круз
    jonathan: {
        name: "Джонатан Круз",
        image: "images/Jonathan.webp",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 8. Дерек Миллорд
    derek: {
        name: "Дерек Миллорд",
        image: "images/Derek.webp",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 9. Фредерик Флауерс
    frederick: {
        name: "Фредерик Флауерс",
        image: "images/Frederik.webp",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 10. Артём Найдерс
    artem: {
        name: "Артём Найдерс",
        image: "images/Artyom.webp",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 11. Алана Роджер
    alana: {
        name: "Алана Роджер",
        image: "images/Alana.webp",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 12. Эмма Хьюстон
    emma: {
        name: "Эмма Хьюстон",
        image: "images/Emma.webp",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 13. Эвелин Минлин
    evelyn: {
        name: "Эвелин Минлин",
        image: "images/Evelin.webp",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 14. Канаде Минлин
    kanade: {
        name: "Канаде Минлин",
        image: "images/Kanade.webp",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 15. Изабелла Табрис
    isabella: {
        name: "Изабелла Табрис",
        image: "images/Isabella.webp",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 16. Кэндис Хироушу
    candice: {
        name: "Кэндис Хироушу",
        image: "images/Candys.webp",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 17. Вильгельм Вонка
    wilhelm: {
        name: "Вильгельм Вонка",
        image: "images/Vilgelm.webp",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 18. Мисс Кендивумен (Элеонора Сандес)
    eleanor: {
        name: "Мисс Кендивумен (Элеонора Сандес)",
        image: "images/Eleonora.webp",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 19. Мишель
    michelle: {
        name: "Мишель",
        image: "images/Mishelle.webp",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 20. Доктор Трайк (Райден Трайк)
    raidan: {
        name: "Доктор Трайк (Райден Трайк)",
        image: "images/Ryaden.webp",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    }
};


// ==========================================================
// 2. ЛОГИКА ОТКРЫТИЯ И ЗАПОЛНЕНИЯ МОДАЛЬНОГО ОКНА
// ==========================================================

// Находим элементы модального окна
const dialog = document.getElementById('character-dialog');
const closeBtn = document.getElementById('close-character-dialog');

// Находим все кнопки "Подробнее" на странице
const buttons = document.querySelectorAll('.character-card__button');

// Функция для подстановки данных в поля
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

    // Добавляем картинку в модальное окно
    const charImage = document.getElementById('char-image');
    if (charImage) {
        charImage.src = data.image || "images/default.jpg"; // Если картинки нет, покажет заглушку
        charImage.alt = data.name;
    }
}

// Вешаем клик на каждую кнопку
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

// Закрытие окна
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        dialog.close();
    });
}
// ==========================================
// ГАЛЕРЕЯ АРТОВ (Pinterest-style + Лайтбокс)
// ==========================================

const artImages = [
    "file-art-1.webp",
    "file-art-2.webp"
];

function renderArtGallery() {
    const gallery = document.getElementById('art-gallery');
    if (!gallery) return;

    artImages.forEach((imageName) => {
        const img = document.createElement('img');
        img.src = `images/${imageName}`;
        img.alt = "Арт WATCF";
        img.classList.add('masonry-gallery__item');
        img.loading = "lazy"; 
        
        // Добавляем клик на картинку для открытия лайтбокса
        img.addEventListener('click', () => {
            const lightbox = document.getElementById('art-lightbox');
            const lightboxImg = document.getElementById('lightbox-image');
            if (lightbox && lightboxImg) {
                lightboxImg.src = img.src; // Берем ту же картинку
                lightboxImg.alt = img.alt;
                lightbox.showModal();      // Открываем на весь экран
            }
        });

        gallery.appendChild(img);
    });
}

// Логика закрытия лайтбокса
function setupLightbox() {
    const lightbox = document.getElementById('art-lightbox');
    const closeBtn = document.getElementById('close-art-lightbox');

    if (!lightbox) return;

    // Закрытие по кнопке "крестик"
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            lightbox.close();
        });
    }

    // Закрытие по клику на фон (вне картинки)
    lightbox.addEventListener('click', (e) => {
        // Если кликнули именно по фону (dialog), а не по картинке
        if (e.target === lightbox) {
            lightbox.close();
        }
    });
}

// Запускаем все при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    renderArtGallery();
    setupLightbox();
});