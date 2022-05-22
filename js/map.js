//지도
function myMap() {
    var mapCanvas = document.getElementById("map");
    var myCenter = new google.maps.LatLng(36.629324678692065, 127.45740173322012); //충북대중앙
    var mapOptions = {
        center: myCenter,
        zoom: 14
    };

    var markerdata = [
        new google.maps.LatLng(36.62563026275683, 127.4544004838527), //과건물
        new google.maps.LatLng(36.63426936439814, 127.48757506306855), //성안길점
        new google.maps.LatLng(36.642919630018554, 127.42666365026183), //지웰시티점
    ]

    var infocontent = [
        "chungbuk university brach", "Seongangil brach", "gwell city brach"
    ]

    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker=new Array;
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
    marker[0].addListener('click',() => {
        map.setZoom(18);
        map.setCenter(markerdata[0]);
      });
      marker[1].addListener('click',() => {
        map.setZoom(18);
        map.setCenter(markerdata[1]);
      });
      marker[2].addListener('click',() => {
        map.setZoom(18);
        map.setCenter(markerdata[2]);
      });
}

