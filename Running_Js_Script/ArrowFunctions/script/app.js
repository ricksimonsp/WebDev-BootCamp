/*setTimeout(() => {
    console.log('Hello!')
}, 3000)*/

/*setInterval(() => {
    console.log(Math.random())
}, 2000);*/

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going on 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

movies.some(movie => movie.year > 2015)



const goodMovies = movies.filter(m => m.score > 80)

const badMovies = movies.filter(m => m.score < 80)

const recentMovies = movies.filter(m => m.year > 2000)

 



const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

exams.every(score => score >= 75)


