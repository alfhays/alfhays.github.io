(function() {
    var flag = 0;
    document.getElementById("btn").onclick = function() {


        var pokebollIMg = document.getElementById("icon01");
        if (flag == 0) {
            pokebollIMg.src = "Image/bola4.png";
            flag = 1;
        } else {
            pokebollIMg.src = "Image/bola3.png";
            flag = 0;
        }
    }
}());