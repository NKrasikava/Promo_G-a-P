var canvas; // глобальная переменная
var step = 1;
var time_deltay = 100;

// ОТРИСОВКА ПРОГРЕССА В CANVAS
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

    canvas.font = "bold 34px verdana sans-serif";
    canvas.textAlign = "center";
    canvas.fillStyle = "white";
    canvas.fillText("75%", 255, 265);

    doProgress(75, 100);
});

// ПРОГРАММИРОВАНИЕ ПРОЦЕССА ЗАГРУЗКИ
function writeText(text) {
    // затирае старое значение процентов
    canvas.fillStyle = "black"; //большой круг
    canvas.beginPath();
    canvas.arc(250, 250, 60, 0, 360, false); // координаты центра, радиус, начальный угол и конечный, высчитанные по формуле перевода градусов в радианы (y*PI/180)
    canvas.fill();

    // пишем новое значение
    canvas.fillStyle = "white";
    canvas.fillText(text, 250, 260);
}

function drawProgress(go, end) {
    // console.log("drawProgress ", new Date().getTime());
    // пересчитаем проценты в градусы
    var goDegree = (360 / 100) * go - 90;
    var endDegree = (360 / 100) * (end) - 90;

    // дорисовываем проценты от значения go до значения end
    canvas.beginPath();
    canvas.arc(250, 250, 70, goDegree * Math.PI / 180, endDegree * Math.PI / 180, false);
    canvas.stroke();

    writeText(end.toString() + "%")
}

function doProgress(go, end) {
    // в цикле задаем последовательность вызовов фенкции для обновления процентов прогресса
    var sleep = 0;
    while (go < end) {
        if (step > end - go) {
            step = end - go;
        }
        next = go + step;
        setTimeout(this.drawProgress, sleep, go, next);
        sleep += time_deltay;
        go = next;
        // console.log("go: ", go, " next: ", next, " sleep: ", sleep);
    }
    if (100 == end) {
        sleep += 5 * time_deltay;
        setTimeout(this.writeText, sleep, "Start");

    }
}