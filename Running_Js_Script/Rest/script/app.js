/*function sum(...nums) {
    return nums.reduce((total, el) => total + el)
}

function raceResults(gold, silver, ...everyOneElse) {
    console.log(`GOLD MEDALS GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyOneElse}`)
}

const scores = [998, 758, 699, 454, 378, 255];

const hightScore = scores[0];
const secondHightScore = scores[1];

const [gold, silver, bronze, ...loosers] = scores;
*/

const user = {
    email: 'dick@gmail.com',
    password: 'AndIsGood73!',
    firstName: 'Andrew',
    lastName: 'Dickenson',
    born: 1909,
    died: 2001,
    bio: 'Andrew Dickenson was one of the greates person ever! You would not believe!',
    city: 'Almadova',
    province: 'Sastrovia'
}

const { email } = user;

const { born: birthYear } = user;

