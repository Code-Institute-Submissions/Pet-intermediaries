

function initMap() {
            var map = new google.maps.Map(document.getElementById("dogmap"), {
                zoom: 3,
                center: {
                    lat: 46.619261,
                    lng: -33.134766
                }
            });
            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

             var locations = [
                
            ];


            var markers = locations.map(function(location, i){
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

             var markerCluster = new MarkerClusterer(dogmap, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
              } );
        }