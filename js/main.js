var canvas; // глобальная переменная
var step = 1;
var time_delay = 100;
var DonateProgress_value = 0;
var IntervalId;
var doProgress_run = false;

var circle_x;
var circle_y;
var black_radius;
var text_area_radius;


$(document).ready(function() { // функции выполняются после загрузки дом-дерева;
    /*LOADER_LOGO - срабатывает предзагрузчик в формате .gif*/
    $('#before-load').find('span').fadeOut().end().delay(100).fadeOut('slow');

    /*Вешаем обработчик события на кнопку с идентификатором tune*/
    document.getElementById("tune").onclick = function() {
        var myaudio = document.getElementById("myaudio");
        if (myaudio.paused == true) {
            document.getElementById("myaudio").play();
            this.style.backgroundColor = "#3FBAD8";
            this.style.color = "white";
            $('#icon-sound').removeClass('fa fa-volume-off fa-3x').addClass('fa fa-volume-up fa-3x');

            //this здесь является самой кнопкой, так как функция является дочерней кнопке
        } else if (myaudio.paused == false) {
            document.getElementById("myaudio").pause();
            this.style.backgroundColor = "white"; //Цвет кнопки можно изменить напрямую, без всяких картинок.
            this.style.color = "black"; //Заодно меняем цвет текста для читабельности
            $('#icon-sound').removeClass('fa fa-volume-up fa-3x').addClass('fa fa-volume-off fa-3x');
        }
    }

    //SLIDER
    var mySlides = [{
        src: {
            main: "img/logo.svg",
            cover: "img/girl_1.png"
        },
        title: 'Amanda Burrington',
        desc: 'I’m a volunteer on the G-a-P dog team – walking dogs at the center and participating in the "Little noses" program. ',
        btnTitle: 'Action Button',
        button: {
            text: 'Saved by Amanda',
            url: 'https://unsplash.com/search/photos/dog',
            class: 'Button Class(es)',
            color: '#3781ce'
        }
    }, {
        src: {
            main: "img/logo.svg",
            cover: "img/guy_1.png"
        },
        title: 'Kurt Lockwood',
        desc: 'I started volunteering in 2015 and since that time have no chance to stop helping homeless dogs. ',
        btnTitle: 'Action Button',
        button: {
            text: 'Saved by Kurt',
            url: 'https://unsplash.com/search/photos/canine',
            class: 'Button Class(es)',
            color: '#3781ce'
        }
    }, {
        src: {
            main: "img/logo.svg",
            cover: "img/girl_2.png"
        },
        title: 'Ingrid Lewis',
        desc: 'I’ve basically been an animal lover since I was born. So now I am here and try to do my best! ',
        btnTitle: 'Action Button',
        button: {
            text: 'Saved by Ingrid',
            url: 'https://unsplash.com/search/photos/pet',
            class: 'Button Class(es)',
            color: '#3781ce'
        }
    }, ]

    $('.slide-container').slideWiz({
        file: mySlides,
        auto: true,
        speed: 6000,
        type: 'slice'
    });


    // Press Help BUTTON
    $("#help").on('click', ShowDonateForm);
    $("#DonateForm").on('submit', ProcessDonate);
    $("#loader").on('click', StartRocket);


    // Draw the map with Minsk location
    var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
        source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([27.56667,53.9]),
        zoom: 6
    })
    });


});

// Launch the rocket
function StartRocket() {
    if (DonateProgress_value == 100) {
        $("#loader").css("display", "none");
        $("#DonateForm").css("display", "none");
        var defaultBottom = $("#rocketdog").css("bottom");
        $("#rocketdog").animate({
            bottom: "100vh"
        }, 3000, function() {
            setTimeout(function() {
                $("#rocketdog").css("bottom", defaultBottom);
                // return hidden smoke (see the comment below)
                $("#smoke").css("display", "none");
                $("#flame").css("display", "none");
                doProgress_run = false;
            }, 2000);
        });

        // hide smoke after 1 second after rocket start
        $("#smoke").css("display", "none");

    }
}

function ShowDonateForm() {
    if (doProgress_run) {
        return;
    }

    DonateProgress_value = 75;
    $("#DonateForm").css("display", "block");
    $("#loader").css("display", "block");
    $("#smoke").css("display", "block");
    $("#flame").css("display", "block");

    drawEmptyProgress();
    doProgress(0, DonateProgress_value);
}

function ProcessDonate(event) {
    event.preventDefault(); //  чтобы не перерисовывать страницу

    if (doProgress_run) {
        return;
    }

    var donate_val = $("input[name=Amount]").val();

    if (donate_val > 0) {
        Next_val = DonateProgress_value + parseInt(donate_val);
        if (Next_val > 100) {
            Next_val = 100;
        }
        doProgress(DonateProgress_value, Next_val);
        DonateProgress_value = Next_val;
    }
}

// ЗАГРУЗКА "ПРЯЧУЩЕЙСЯ" КНОКПИ ПРОГРЕССА
function drawEmptyProgress() {
    var elem = document.getElementById('loader'); //обратились к элементу по id в html 
    canvas = elem.getContext('2d'); //обозначили, что контекст у нас будет двумерный (рисуем двумерную графику)

    canvas.lineWidth = 12; //толщина линии окружности
    canvas.lineCap = "round"; // скругления окончания линии

    // вычисляем положение сентра и радиусы
    circle_x = elem.width / 2;
    circle_y = elem.height / 2;

    // выберем радиус по меньшей из сторон
    if (elem.width < elem.height) {
        black_radius = elem.width / 2;
    } else {
        black_radius = elem.height / 2;
    }

    // учтем ширину самой линии
    black_radius = black_radius - canvas.lineWidth / 2;
    // и тут учтем ширину самой линии
    text_area_radius = black_radius - canvas.lineWidth / 2;

    canvas.fillStyle = "black"; //большой круг
    canvas.beginPath();
    canvas.arc(circle_x, circle_y, black_radius, 0, 360, false); // координаты центра, радиус, начальный угол и конечный, высчитанные по формуле перевода градусов в радианы (y*PI/180)
    canvas.fill();

    canvas.strokeStyle = 'white'; //остаток круга
    canvas.beginPath();
    canvas.arc(circle_x, circle_y, black_radius, 0, 360, false); // координаты центра, радиус, начальный угол и конечный, высчитанные по формуле перевода градусов в радианы (y*PI/180)
    canvas.stroke();

    writeTextProgress("0%");
}

//ПРОГРАММИРУЕМ РАБОТУ КНОПКИ ПРОГРЕССА
function writeTextProgress(text) {
    // затираем старое значение процентов
    canvas.fillStyle = "black"; //большой круг
    canvas.beginPath();
    canvas.arc(circle_x, circle_y, text_area_radius, 0, 360, false); // координаты центра, радиус, начальный угол и конечный, высчитанные по формуле перевода градусов в радианы (y*PI/180)
    canvas.fill();

    // пишем новое значение
    canvas.font = "36px Arial";
    canvas.fillStyle = "white";
    canvas.fillText(text, circle_x / 1.5, circle_y);
}

function drawProgress(go, end) {
    // пересчитаем проценты в градусы
    var goDegree = (360 / 100) * go - 90;
    var endDegree = (360 / 100) * (end) - 90;

    // дорисовываем проценты от значения go до значения end
    canvas.strokeStyle = '#df2020';
    canvas.beginPath();
    canvas.arc(circle_x, circle_y, black_radius, goDegree * Math.PI / 180, endDegree * Math.PI / 180, false);
    canvas.stroke();

    writeTextProgress(end.toString() + "%")
}

function doProgress(go, end) {
    // в цикле задаем последовательность вызовов фенкции для обновления процентов прогресса
    doProgress_run = true;
    IntervalId = setInterval(function() {

        if (step > end - go) {
            step = end - go;
        }
        next = go + step;
        drawProgress(go, next);
        go = next;

        if (100 == next || go == end) {

            if (100 == next) {
                setTimeout(function() {
                    writeTextProgress("Start");
                }, 1000, );
            }

            clearInterval(IntervalId);
            doProgress_run = false;
        }

    }, 50);
}