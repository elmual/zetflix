let numberOfFilms = prompt('Neche kinoya baxmisiniz?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

let answer1 = prompt('Axirinci baxdiginiz film');
let answer2 = prompt('Nech bal ile qiymetlendirirsiniz?');


personalMovieDB.movies[answer1] = answer2;

console.log(personalMovieDB);

let netice = ` Siz ${numberOfFilms} kinoya baxmisiniz. Sizin axirinci baxdiginiz ${answer1} kinosudur. Siz bu kinonu ${answer2} bal ile qiymetlendirdiniz`;

document.getElementById('kino').innerHTML = netice;
