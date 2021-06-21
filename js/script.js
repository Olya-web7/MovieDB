/*
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const background = document.querySelector('.promo__bg'),
    adv = document.querySelectorAll('.promo__adv img'),
    genre = document.querySelector('.promo__genre'),
    list = document.querySelector('.promo__interactive-list'),
    btn = document.querySelector('button'),
    input = document.querySelector('.adding__input');

background.style.backgroundImage = 'url("img/bg.jpg")';

adv.forEach(element => {
    element.remove();
});
genre.textContent = 'DRAMA';
list.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    list.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film} 
    <div class="delete"></div>
    </li>`;
});

btn.addEventListener('click', addFilm);

function addFilm(e) {
    e.preventDefault;
    movieDB.movies.push(input.value);
}
/*1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;*/