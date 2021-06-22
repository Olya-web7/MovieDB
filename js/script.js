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

movieDB.movies.forEach((movie, i) => {
    if (movie.length > 21) {
        movie = movie.slice(0, 20) + '...';
    }

})

/*3) При клике на мусорную корзину - элемент будет удаляться из списка*/
const deleteBtn = document.querySelectorAll('.delete');
const listFilm = document.querySelectorAll('.promo__interactive-list');
deleteBtn.forEach(i => {

    i.addEventListener('click', (i) => {
        console.log(listFilm[i]);
        // e.currentTarget.remove();
    })
});
// const checkbox = document.querySelector('.yes').previousElementSibling;
// checkbox.addEventListener('click', e => {
//     if (e.target) {
//         console.log("Добавляем любимый фильм");
//     }
// });