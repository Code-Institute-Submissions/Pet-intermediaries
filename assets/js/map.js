function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                    lat: -25.363, lng: 131.044
                }
            });


            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

             var locations = [
                 { lat: 39.592039, lng: 116.191440 },
                 { lat: 53.2734, lng: -7.77832031},
                 { lat: 51.0834196, lng: 10.4234469},
                 { lat: 39.7837304, lng: -100.4458825},
                 { lat: 46.7985624, lng: 8.2319736},
                 { lat: 45.709097, lng: -68.8590201},
                 { lat: 36.7014634, lng: -118.755997},
                 { lat: 48.030568, lng: 2.259556},
                 { lat: 14.8971921, lng: 100.83273},
                 { lat: 32.6475314, lng: 54.5643516}
                
            ];


            var markers = locations.map(function(location, i){
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });
var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
});
        
}
