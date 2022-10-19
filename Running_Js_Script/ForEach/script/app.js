/*const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const doubles = numbers.map(function(num) {
    return num * 2;
})*/

/*const fullNames = [
    {first: 'Albus', last: 'Dumbledore'},
    {first: 'Harry', last: 'Potter'},
    {first: 'Hermione', last: 'Granger'}
];

const firstNames = fullNames.map(function (prime) {
    return prime.first;
})*/

/*const square = (x) => {
    return x * x;
}

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}*/




const movies = [
    {
        title: 'Amadeus',
        score: 66
    },
    {
        title: 'Stand by me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    },
    {
        title: 'Alien',
        score: 90
    }
]

const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))