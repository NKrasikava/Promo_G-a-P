var canvas; // глобальная переменная
var step = 1;
var time_delay = 100;
var DonateProgress_value = 0;
var IntervalId;
var doProgress_run = false;


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
    $("#help").click(ShowDonateForm);
    $("#DonateForm").on('submit', ProcessDonate);
    $("#loader").on('click', StartRocket);
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
                $("#smoke").css("display", "block");
                doProgress_run = false;
            }, 2000);
        });

        // hide smoke after 1 second after rocket start
        setTimeout(function() {
            $("#smoke").css("display", "none");
            doProgress_run = false;
        }, 1000);

    }
}

function ShowDonateForm() {
    if (doProgress_run) {
        return;
    }

    DonateProgress_value = 75;
    $("#DonateForm").css("display", "block");
    $("#loader").css("display", "block");

    drawEmptyProgress();
    doProgress(0, DonateProgress_value);
}

function ProcessDonate(event) {
    if (doProgress_run) {
        return;
    }

    event.preventDefault(); //  чтобы не перерисовывать страницу

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
    canvas.fillStyle = "black"; //большой круг
    canvas.beginPath();
    canvas.arc(250, 250, 90, 0, 360, false); // координаты центра, радиус, начальный угол и конечный, высчитанные по формуле перевода градусов в радианы (y*PI/180)
    canvas.fill();

    canvas.strokeStyle = 'white'; //остаток круга
    canvas.beginPath();
    canvas.arc(250, 250, 70, 0, 360, false); // координаты центра, радиус, начальный угол и конечный, высчитанные по формуле перевода градусов в радианы (y*PI/180)
    canvas.stroke();

    writeTextProgress("0%")
}

//ПРОГРАММИРУЕМ РАБОТУ КНОПКИ ПРОГРЕССА
function writeTextProgress(text) {
    // затираем старое значение процентов
    canvas.fillStyle = "black"; //большой круг
    canvas.beginPath();
    canvas.arc(250, 250, 60, 0, 360, false); // координаты центра, радиус, начальный угол и конечный, высчитанные по формуле перевода градусов в радианы (y*PI/180)
    canvas.fill();

    // пишем новое значение
    canvas.font = "36px Arial";
    canvas.fillStyle = "white";
    canvas.fillText(text, 210, 263);
}

function drawProgress(go, end) {
    // пересчитаем проценты в градусы
    var goDegree = (360 / 100) * go - 90;
    var endDegree = (360 / 100) * (end) - 90;

    // дорисовываем проценты от значения go до значения end
    canvas.strokeStyle = '#df2020';
    canvas.beginPath();
    canvas.arc(250, 250, 70, goDegree * Math.PI / 180, endDegree * Math.PI / 180, false);
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