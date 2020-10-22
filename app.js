function myFunction() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    let num = getRandomInt(1, 3);

    switch(num) {
        case 1:
            answer = "Heads";
            break;
        case 2:
            answer = "Tails";
            break;
    }

    document.getElementById('coin').innerHTML = answer;
}