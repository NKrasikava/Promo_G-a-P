//SLIDER

$(document).ready(function() { // функции выполняются после загрузки дом-дерева;

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