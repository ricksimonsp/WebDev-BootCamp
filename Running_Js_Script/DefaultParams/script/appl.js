/*function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs];*/

const dataFromForm = {
    email: 'pichu@catmail.com',
    password: 'papailindo123',
    username: 'chicrukis'
}

const newUser = { ...dataFromForm, id: 2233, isAdmin: false }


