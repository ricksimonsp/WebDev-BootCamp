const testScores = {
    Keenan: 80,
    Damon: 67,
    Kim: 89,
    Shawn: 91,
    Rick: 72,
    Dwayne: 77,
    Nadia: 83,
    Elvira: 97,
    Diedre: 81,
    Vonnie: 60
}

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}
