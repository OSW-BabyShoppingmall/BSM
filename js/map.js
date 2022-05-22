//지도
var map;
var markerdata = [
    new google.maps.LatLng(36.62563026275683, 127.4544004838527), //과건물
    new google.maps.LatLng(36.63426936439814, 127.48757506306855), //성안길점
    new google.maps.LatLng(36.642919630018554, 127.42666365026183), //지웰시티점

]

function myMap() {
    var mapCanvas = document.getElementById("map");
    var myCenter = new google.maps.LatLng(36.629324678692065, 127.45740173322012); //충북대중앙
    var mapOptions = {
        center: myCenter,
        zoom: 13
    };
    map = new google.maps.Map(mapCanvas, mapOptions);



    var infocontent = [
        "chungbuk university brach", "Seongangil brach", "gwell city brach"
    ]

    var marker = new Array;
    for (var i = 0; i < markerdata.length; i++) {
        marker[i] = new google.maps.Marker({
            position: markerdata[i],
            map: map
        });

        infowindow = new google.maps.InfoWindow({
            content: infocontent[i],
        });
        infowindow.open(map, marker[i]);
    }
    marker[0].addListener('click', () => {
        map.setZoom(18);
        map.setCenter(markerdata[0]);
    });
    marker[1].addListener('click', () => {
        map.setZoom(18);
        map.setCenter(markerdata[1]);
    });
    marker[2].addListener('click', () => {
        map.setZoom(18);
        map.setCenter(markerdata[2]);
    });
}

//사용자 위치 정보
const API_KEY = "0cb4b482380f8d4681ee2f0068b0a36a";

function onGeOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = "latitude:" + lat + "   " + "longitude:" + lon;
    })
    var user_center = new google.maps.LatLng(lat ,lon)
    var user_marker = new google.maps.Marker({
        position: user_center,
        map: map
    });
};

function onGeoError() {
    alert("Can't find you. No position with you");
}