var skyColor = 'white';

var phones = ['iphone', 'shaomi', 'samsung', 'lg', 'htc'];
phones[3] = 'walton';
// check oppo not exists in array

if (phones.indexOf('oppo') == -1) {
    console.log('opps! by ami jani na mobail ta k nisa');

}

// if lg is available

if (phones.indexOf('lg') != -1) {
    console.log('lg is available now');
}

// loop

var num = 0;
while (num <= 10) {
    num++;
}

for (var i = 0; i < phones.length; i++) {

}

// function

function addThreeNumbers(number1, number2, number3) {
    var total = number1 + number2 + number3;
    return total;
}

addThreeNumbers(58, 30, 10);

// Object

var microphone = {
    brand: 'blue yeti',
    price: 500,
    color: yellow,
}