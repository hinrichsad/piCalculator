function randomNum() {

    var myInput = document.querySelector("#pointNum").value;

    insidePoint = 0;
    totalPoint = 0;

    for (var i = 0; i <= myInput; i++) {
        for (var j = 0; j <= myInput; j++) {

            var x = Math.random();
            var y = Math.random();

            var distance = Math.pow(x, 2) + Math.pow(y, 2);
            if (distance < 1) {
                insidePoint++;
            }

            totalPoint++;
        }
    }
    return 4 * insidePoint / totalPoint;
}

var finalPi = document.querySelector("#finalPi");
var submit = document.querySelector("#submit")

var element = document.createElement("div");
element.textContent = "Pi is estimated at ";
finalPi.appendChild(element);

submit.addEventListener("click", console.log("clicked"))