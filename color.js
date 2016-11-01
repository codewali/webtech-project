var b = document.querySelector('.game');
var form = document.querySelector('#form');
var correctness =1;

// form.addEventListener('submit',);

function gen() {
    var val = document.querySelector('#inp').value;
    generate(val);
}

function corrGuess() {
    alert("Clicked on the correct thing!!!");
}



function generate(num) {
    b.innerHTML = '';
    for (i = 0; i < num; i++) {
        var division = document.createElement('div');
        division.setAttribute('class', 'square');
        b.appendChild(division);
    }
    a = color();
    correctness = a[correct(a)];
    console.log(correctness);
    for (i = 0; i < a.length-1; i++) {
        if (a[i] != correctness) {
            a[i].addEventListener('click', function() {
                this.style.background = "white";
            })
        }
    }
    correctness.addEventListener("click", function() {
        b.style.background = correctness.style.background;
    });
    document.querySelector('#colorid').innerHTML = correctness.style.background;



}

function reset(count) {

}

function genColor(num) {
    var arr = []
    for (i = 0; i < num; i++) {
        var r = Math.ceil(Math.random() * 255);
        var g = Math.ceil(Math.random() * 255);
        var b = Math.ceil(Math.random() * 255);
        var str = "rgb(" + r + ", " + g + ", " + b + ")";
        arr.push(str);
    }
    return arr;

}

function color() {

    var squareCollection = document.querySelectorAll('.square');
    var arrayOfColors = genColor(squareCollection.length);
    for (i = 0; i < squareCollection.length; i++) {
        squareCollection[i].style.background = arrayOfColors[i];
    }
    return squareCollection;
}

function correct(arr) {
    var corr = Math.floor(Math.random() * arr.length);
    return corr;
}
