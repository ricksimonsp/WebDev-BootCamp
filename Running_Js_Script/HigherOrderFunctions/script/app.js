/*function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f()
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

callTwice(rollDie);*/

/* function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function() {
            console.log('Congrats, I am a good function!');
            console.log('You win a million dollars!! Fuck!!');
        }
    } else {
        return function() {
            alert('You have been infected by a computer virus!!')
            alert('Stop trying to close this window! You asshole!!');
            alert('Stop trying to close this window! You asshole!!');
            alert('Stop trying to close this window! You asshole!!');
            alert('Stop trying to close this window! You asshole!!');
        }
    }
}*/

/*function makeBetweenFunc (min, max){
    return function(num){
        return num >= min && num <= max;
    }
}*/

/*const myMath = {
    PI: 3.14159,
    square: function(num) {
        return num * num;
    },
    cube: function(num) {
        return num ** 3;
    }
}*/

const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}