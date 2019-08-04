$(document).ready(function() {
    var elem = document.getElementById('loader'); //обратились к элементу по id в html 
    var canvas = elem.getContext('2d'); //обозначили, что контекст у нас будет двумерный (рисуем двумерную графику)

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

});

// $(document).ready(function() {
//     fillProgressBar('loader', '#f66', 80, 'Fija 1');
//     newProgressBar('myCanvas');
//     fillProgressBar('myCanvas', '#7c7', 50, 'Dinámica 1');
//     newProgressBar('myCanvas2');
//     fillProgressBar('myCanvas2', '#3375aa', 10, 'Dinámica 2');
// });

// function newProgressBar(id) {
//     var newProgress = document.createElement('div');
//     $(newProgress).addClass("progress");
//     var newContent = document.createElement('div');
//     $(newContent).addClass("content");
//     $(newContent).attr("id", id + "_div");

//     var newCanvas =
//         $('<canvas/>', {
//             'id': id
//         });
//     newCanvas.attr("width", 250);
//     newCanvas.attr("height", 250);

//     $(newProgress).append(newContent);
//     $(newProgress).append(newCanvas);
//     $('.container').append(newProgress);
// }

// function fillProgressBar(id, color, progress, text) {
//     var p = 0;
//     var interval = setInterval(function() {

//         var canvas = document.getElementById(id);
//         var context = canvas.getContext('2d');
//         var x = canvas.width / 2;
//         var y = canvas.height / 2;
//         var radius = 100;
//         var startAngle = 1.5 * Math.PI;
//         var endAngle = 1.5 * Math.PI + (2 * Math.PI) * p / 100;
//         var counterClockwise = false;

//         if (progress == null)
//             progress = 100;

//         context.clearRect(0, 0, 250, 250);

//         context.beginPath();
//         context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
//         context.lineWidth = 20;
//         context.strokeStyle = color;
//         context.stroke();

//         if (text == null)
//             text = "HOLA";

//         $('#' + id + '_div').text(text);

//         if (p == progress)
//             clearInterval(interval);
//         p++;
//     }, 10);
// }