// ==========================================================
// 1. БАЗА ДАННЫХ ПЕРСОНАЖЕЙ (Заглушки для всех 20 персонажей)
// ==========================================================

const charactersData = {
    // 1. Райан
    ryan: {
        name: "Райан",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 2. Кевин Оливерс
    kevin: {
        name: "Кевин Оливерс",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 3. Лия Айнетдинова
    liya: {
        name: "Лия Айнетдинова",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 4. Миранда Щупс
    miranda: {
        name: "Миранда Щупс",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 5. Михаэль Брауберк
    michael: {
        name: "Михаэль Брауберк",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 6. Дейзи Долл
    daisy: {
        name: "Дейзи Долл",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 7. Джонатан Круз
    jonathan: {
        name: "Джонатан Круз",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 8. Дерек Миллорд
    derek: {
        name: "Дерек Миллорд",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 9. Фредерик Флауерс
    frederick: {
        name: "Фредерик Флауерс",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 10. Артём Найдерс
    artem: {
        name: "Артём Найдерс",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 11. Алана Роджер
    alana: {
        name: "Алана Роджер",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 12. Эмма Хьюстон
    emma: {
        name: "Эмма Хьюстон",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 13. Эвелин Минлин
    evelyn: {
        name: "Эвелин Минлин",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 14. Канаде Минлин
    kanade: {
        name: "Канаде Минлин",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 15. Изабелла Табрис
    isabella: {
        name: "Изабелла Табрис",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 16. Кэндис Хироушу
    candice: {
        name: "Кэндис Хироушу",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 17. Вильгельм Вонка
    wilhelm: {
        name: "Вильгельм Вонка",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 18. Мисс Кендивумен (Элеонора Сандес)
    eleanor: {
        name: "Мисс Кендивумен (Элеонора Сандес)",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 19. Мишель (Эльвира Энтвистл)
    michelle: {
        name: "Мишель (Эльвира Энтвистл)",
        age: "—", height: "—", weight: "—", zodiac: "—", birthday: "—",
        orientation: "—", mbti: "—", worldview: "—", temperament: "—", status: "—",
        character: "—", bio: "—", favColor: "—", favFood: "—", favDrink: "—",
        favBooks: "—", favMovies: "—", favMusic: "—", facts: "—"
    },
    // 20. Доктор Трайк (Райден Трайк)
    raidan: {
        name: "Доктор Трайк (Райден Трайк)",
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
    // Если поле пустое ("—"), скрипт подставит его. Если данных нет, можно подставить "Неизвестно".
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
}

// Вешаем клик на каждую кнопку
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const charId = button.dataset.character; // Получаем ID (например, "ryan")
        const charData = charactersData[charId]; // Ищем в базе

        if (charData) {
            fillDialog(charData); // Заполняем
            dialog.showModal();   // Открываем
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