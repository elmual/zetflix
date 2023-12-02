let numberOfFilms = prompt('Neche kinoya baxmisiniz?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for (let i = 0; i < numberOfFilms; i++) {
    let answer1 = prompt('Axirinci baxdiginiz film');
    let answer2 = prompt('Nech bal ile qiymetlendirirsiniz?');

    if (answer1 != '' && answer1 != null && answer2 != '' && answer2 != null) {
        personalMovieDB.movies[answer1] = answer2;
    } else {
        console.log('Sehv bas verdi');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Az fiilme baxmisiniz');
} else if (personalMovieDB.count < 30) {
    console.log('Klassik film izleyicisi');
} else if (personalMovieDB > 30) {
    console.log('Siz kinomensiniz');
} else {
    console.log('Sehv bas verdi');
}

console.log(personalMovieDB);

let netice = ` Siz ${numberOfFilms} kinoya baxmisiniz. Sizin axirinci baxdiginiz  kinosudur. Siz bu kinonu  bal ile qiymetlendirdiniz`;

document.getElementById('kino').innerHTML = netice;
