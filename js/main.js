/*global console*/

var letter = "";
var output;

while (letter === "") {
        var letter = prompt("Please input a letter");
        console.log(letter);
}

for (i = 0; i < 10; i += 1) {
    for (k = 0; k <= i; k+=1) {
        document.write(letter);
    }
    document.write("<br>");
}
