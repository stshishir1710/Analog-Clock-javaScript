var second = 0;
var minit = 0;
var hour = 0;
var d = new Date();
setInterval(
    function(){
        d = new Date();
        second = d.getSeconds() * 6;
        minit = d.getMinutes() * 6;
        hour = d.getHours() * 30 + Math.round(minit / 12) ;
        document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
        document.getElementById("minit-hand").style.transform = "rotate(" + minit + "deg)";
        document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";
    },1000
);
