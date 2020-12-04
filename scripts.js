var submit = $("#submit");

submit.on("click", function randomNum() {

            var myInput = $("#pointNum").val();
            var pi = 0;

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
            
            pi = 4 * insidePoint / totalPoint;

            var finalPi = $("#finalPi");

            console.log(pi);
            finalPi.text(pi);
        });