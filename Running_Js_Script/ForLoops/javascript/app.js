//console.log(1)
//console.log(2)
//console.log(3)
//console.log(4)
//console.log(5)
//console.log(6)
//console.log(7)
//console.log(8)
//console.log(9)
//console.log(10)

//for (let i = 1; i <= 10; i++) {
//    console.log(i);
//}

//for (let i = 0; i <= 20; i += 2) {
//    console.log(i);
//}

//for (let i = 100; i >=0; i -= 10) {
//    console.log(i);
//}

//for (let i = 25; i >= 0; i -= 5) {
//    console.log(i);
//}

//const animals = ['lions', 'tigers', 'bears'];
//for (let i = 0; i < animals.length; i++) {
//    console.log(i, animals[i]);
//}

//const people = ['Scooby', 'Velma', 'Daphne', 'Shaggy', 'Fred'];
//for (let i = 0; i < people.length; i++) {
//    console.log(people[i].toUpperCase());
//}

//for (let i = 1; i <= 10; i++) {
//    console.log(`i is: ${i}`)
//    for (let j = 1; j < 4; j++) {
//        console.log(`      j is: ${j}`)
//    }
//}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}

