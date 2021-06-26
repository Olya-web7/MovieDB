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

const poster = document.querySelector('.promo__bg'),
    adv = document.querySelectorAll('.promo__adv img'),
    genre = document.querySelector('.promo__genre'),
    list = document.querySelector('.promo__interactive-list'),
    btn = document.querySelector('button'),
    input = document.querySelector('.adding__input'),
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('[type="checkbox"]');

addForm.addEventListener('submit', (event) => {
    event.preventDefault;
    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {
        if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0,22)}...`;
        }
        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
        createMovieList(movieDB.movies, list);
    }
    event.target.reset();
 });

const makeChanges = () => {
    genre.textContent = 'DRAMA';
    poster.style.backgroundImage = 'url("img/bg.jpg")';
}
const deleteAdv = (arr) => {
    arr.forEach(element => {
        element.remove();
    });
}

const sortArr = (arr) => {
    arr.sort();
}

function createMovieList (films, parent) {
    parent.innerHTML = "";
    sortArr(films);

    films.forEach((film, i) => {
        parent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film} 
    <div class="delete"></div>
    </li>`;
    });
    if (favorite) {
        console.log('favourite');
    }
    }
document.querySelectorAll('.delete').forEach((btn, i)=> {
    btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i,1);
    });
    createMovieList(movieDB.movies, parent);
})
deleteAdv(adv);
makeChanges();
createMovieList();


