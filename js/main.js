var canvas; // глобальная переменная
var step = 1;
var time_deltay = 100;

$(document).ready(function() { // функции выполняются после загрузки дом-дерева;


    //SLIDER
    var mySlides = [{
        src: {
            main: "img/logo.svg",
            cover: "img/girl_1.png"
        },
        title: 'Amanda Burrington',
        desc: 'I’m a volunteer on the G-a-P dog team – walking dogs at the center and participating in the Adventure Buddies program — and I’ve fostered a few litters of kittens in the past. (I definitely want foster again when my travel schedule permits!)',
        btnTitle: 'Action Button',
        button: {
            text: 'about Amanda',
            url: false, // URL
            class: 'Button Class(es)',
            color: '#3781ce'
        }
    }, {
        src: {
            main: "img/logo.svg",
            cover: "img/guy_1.png"
        },
        title: 'Kurt Lockwood',
        desc: 'I first started volunteering in 2015, but then ended up moving. I returned to the area at the end of 2017 and have been back in action ever since.',
        btnTitle: 'Action Button',
        button: {
            text: 'About Kurt',
            url: false, // URL
            class: 'Button Class(es)',
            color: '#3781ce'
        }
    }, {
        src: {
            main: "img/logo.svg",
            cover: "img/girl_2.png"
        },
        title: 'Ingrid Lewis',
        desc: 'I’ve basically been an animal lover since I was born, and for my entire childhood I planned on becoming a veterinarian. ',
        btnTitle: 'Action Button',
        button: {
            text: 'About Ingrid',
            url: false, // URL
            class: 'Button Class(es)',
            color: '#3781ce'
        }
    }, ]

    $('.slide-container').slideWiz({
        file: mySlides,
        auto: true,
        speed: 5000,
        type: 'slice'
    });
    drawLoadB();
});



// ЗАГРУЗКА "ПРЯЧУЩЕЙСЯ" КНОКПИ ПРОГРЕССА
function drawLoadB() {
    //DRAW PROGRESS BAR IN CANVAS
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

    canvas.font = "bold 34px Arial";
    canvas.textAlign = "center";
    canvas.fillStyle = "white";
    canvas.fillText("75%", 255, 265);

    doProgress(75, 100);
}

//ПРОГРАММИРУЕМ РАБОТУ КНОПКИ ПРОГРЕССА
function writeText(text) {
    // затираем старое значение процентов
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