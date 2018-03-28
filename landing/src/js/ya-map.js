ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.980594, 30.322775],
            zoom: 16,
            controls: ['zoomControl', 'fullscreenControl']
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'БригадуНадо',
            balloonContent: 'Выборгская набережная, 61, офис 400/3'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/img/svg/map.svg',
            // Размеры метки.
            iconImageSize: [57, 76],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-15, -78]
        });

        myMap.behaviors.disable('scrollZoom');

        myMap.setCenter([59.978594, 30.322775], 16, {
            checkZoomRange: true
        });

    myMap.geoObjects
        .add(myPlacemark)
});