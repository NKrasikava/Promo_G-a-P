var canvas; // глобальная переменная
var step = 5;
var time_deltay = 1000;

$(document).ready(function() { //обработчик события загрузки страницы
    var elem = document.getElementById('loader'); //обратились к элементу по id в html 
    canvas = elem.getContext('2d'); //обозначили, что контекст у нас будет двумерный (рисуем двумерную графику)

    canvas.lineWidth = 12; //толщина линии окружности
    canvas.lineCap = "round"; // скругления окончания линии
    canvas.fillStyle = "black"; //большой круг
    canvas.beginPath();
    canvas.arc(250, 250, 90, 0, 360, false); // координаты центра, радиус, начальный угол и конечный, высчитанные по формуле перевода градусов в радианы (y*PI/180)
    canvas.fill();

    canvas.strokeStyle = 'white'; //остаток круга
    canvas.beginPath();
    canvas.arc(250, 250, 70, 0, 360, false); // координаты центра, радиус, начальный угол и конечный, высчитанные по формуле перевода градусов в радианы (y*PI/180)
    canvas.stroke();

    canvas.strokeStyle = 'red'; // прогресс
    canvas.beginPath();
    canvas.arc(250, 250, 70, -90 * Math.PI / 180, 180 * Math.PI / 180, false); // координаты центра, радиус, начальный угол и конечный, высчитанные по формуле перевода градусов в радианы (y*PI/180)
    canvas.stroke();

    canvas.font = "bold 44px verdana sans-serif";
    canvas.textAlign = "center";
    canvas.fillStyle = "white";
    canvas.fillText("75%", 255, 265);

    doProgress(75, 92);
});

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function drawProgress(go, end) {
    console.log("drawProgress ", new Date().getTime());
    // while (go <= end) {
    // sleep(2000);
    var goDegree = (360 / 100) * go - 90;
    var endDegree = (360 / 100) * (end) - 90;
    canvas.beginPath();
    canvas.arc(250, 250, 70, goDegree * Math.PI / 180, endDegree * Math.PI / 180, false); // координаты центра, радиус, начальный угол и конечный, высчитанные по формуле перевода градусов в радианы (y*PI/180)
    // console.log("goDegree: ", goDegree, " next: ", next);
    canvas.stroke();
    // console.log("go: ", go, " next: ", go + step);
    //     go = go + step;
    // }
}

function doProgress(go, end) {
    var sleep = 0;
    while (go < end) {
        // sleep(2000);
        // var goDegree = (360 / 100) * go - 90;
        // var next = (360 / 100) * (go + step) - 90;
        // canvas.beginPath();
        // canvas.arc(250, 250, 70, goDegree * Math.PI / 180, next * Math.PI / 180, false); // координаты центра, радиус, начальный угол и конечный, высчитанные по формуле перевода градусов в радианы (y*PI/180)
        // console.log("goDegree: ", goDegree, " next: ", next);
        // canvas.stroke();

        //sleep(200);
        if (step > end - go) {
            step = end - go;
        }
        next = go + step;
        setTimeout(this.drawProgress, sleep, go, next);
        sleep += time_deltay;

        go = next;
        //drawProgress(go, end)
        console.log("go: ", go, " next: ", next, " sleep: ", sleep);

    }
}