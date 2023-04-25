// IMPORT CLASSES HERE
const {Media} = require('./classes/Media');
const {Book} = require('./classes/Book');
const {Movie} = require('./classes/Movie');
const {Music} = require('./classes/Music');

// function isConstructor(Media) {
//     try {
//       new Media();
//     } catch (err) {
//       if (err.message.indexOf('is not a constructor') >= 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// console.log( isConstructor(Media))

// const movie1 = new Movie('Inception', 2010, 'Sci-Fi', 'Christopher Nolan', 148, 4.5);
// const movie2 = new Movie('The Godfather', 1972, 'Crime', 'Francis Ford Coppola', 175, 4.7);
// Media.totalMediaCount; // 2
// console.log(movie1.summary()) // "Title: Inception, Director: Christopher Nolan, Year: 2010, Genre: Sci-Fi, Rating: 4.5"
// console.log(Movie.longestMovie([movie1, movie2])) // Returns movie2


const music1 = new Music('Lemonade', 2016, 'R&B', 'Beyonce', 3949);
const music2 = new Music('Renaissance', 2022, 'R&B', 'Beyonce', 3734);
console.log(Media.totalMediaCount) // 2
console.log(music2.summary()); // "Title: Renaissance, Artist: Beyonce, Year: 2022, Genre: R&B, Length: 3734 seconds"
console.log(Music.shortestAlbum([music1, music2])); // Returns music2
// DO NOT EDIT BELOW THIS LINE
try {
    module.exports = {
        Media,
    }
} catch(e){

}

try {
    module.exports = {
        Media,
        Book,
    }
} catch(e){

}

try {
    module.exports = {
        Media,
        Book,
        Movie
    }
} catch(e){

}

try {
    module.exports = {
        Media,
        Book,
        Movie,
        Music
    }
} catch(e){

}