//SLIDER

$(document).ready(function() { // функции выполняются после загрузки дом-дерева;

    var mySlides = [{
            src: {
                main: "img/logo.svg",
                cover: "img/girl_1.png"
            },
            title: 'Slide 1',
            desc: 'Description 1',
            btnTitle: 'Action Button',
            button: {
                text: 'Button Text',
                url: false, // URL
                class: 'Button Class(es)',
                color: '#3781ce'
            }
        }, {
            src: {
                main: "img/logo.svg",
                cover: "img/guy_1.png"
            },
            title: 'Slide 2',
            desc: 'Description 2',
            btnTitle: 'Action Button',
            button: {
                text: 'Button Text',
                url: false, // URL
                class: 'Button Class(es)',
                color: '#3781ce'
            }
        }, {
            src: {
                main: "img/4.png",
                cover: "img/girl_2.png"
            },
            title: 'Slide 3',
            desc: 'Description 3',
            btnTitle: 'Action Button',
            button: {
                text: 'Button Text',
                url: false, // URL
                class: 'Button Class(es)',
                color: '#3781ce'
            }
        },
        // more slides here
    ]

    $('.slide-container').slideWiz({
        file: mySlides,
        auto: true,
        speed: 5000,
        type: 'slice'
    });

});