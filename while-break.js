// var i = 0;
// while (i < 10) {
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
//     i++;
// }

// for (var i = 0; i <= 20; i++) {
//     console.log(i);
//     if (i == 10) {
//         break;
//     }
// }


var numbers = [22, 20, 10, 6, 90, 99, 100, 200, 80];

// for (var i = 0; i < numbers.length; i++) {
//     var number = numbers[i];
//     console.log(number);
//     if (number > 90) {
//         break;
//     }
// }

for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 90) {
        continue;
    }
    
console.log(number);
}