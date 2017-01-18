	//this is just the basic API call for the initial map.  More detailed features are on the app.js version.

      function initMap() {
        var bradford = {lat: 53.79109279999999, lng: -1.8487566000000015};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: bradford
        });
        var marker = new google.maps.Marker({
          position: bradford,
          map: map
        });
      }


// // street view 

// function initialize() {
//   var birthplace = {lat: 53.791665, lng: -1.848581};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: birthplace,
//     zoom: 14
//   });
//   var panorama = new google.maps.StreetViewPanorama(
//       document.getElementById('pano'), {
//         position: birthplace,
//         pov: {
//           heading: 34,
//           pitch: 10
//         }
//       });
//   map.setStreetView(panorama);
// }

// overlays on street view

// var panorama;

// function initMap() {
//   var birthplace = {lat: 53.795, lng: -1.759};

//   // Set up the map
//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: birthplace,
//     zoom: 18,
//     streetViewControl: false
//   });

  // Set up the markers on the map
  // var cafeMarker = new google.maps.Marker({
  //     position: {lat: 53.791665, lng: -1.848581},
  //     map: map,
  //     icon: 'https://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=cafe|FFFF00',
  //     title: 'Cafe'
  // });

  // var bankMarker = new google.maps.Marker({
  //     position: {lat: 40.729681, lng: -73.991138},
  //     map: map,
  //     icon: 'https://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=dollar|FFFF00',
  //     title: 'Bank'
  // });

  // var busMarker = new google.maps.Marker({
  //     position: {lat: 40.729559, lng: -73.990741},
  //     map: map,
  //     icon: 'https://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=bus|FFFF00',
  //     title: 'Bus Stop'
  // });

  // We get the map's default panorama and set up some defaults.
//   // Note that we don't yet set it visible.
//   panorama = map.getStreetView();
//   panorama.setPosition(birthplace);
//   panorama.setPov(/** @type {google.maps.StreetViewPov} */({
//     heading: 265,
//     pitch: 0
//   }));
// }

// function toggleStreetView() {
//   var toggle = panorama.getVisible();
//   if (toggle == false) {
//     panorama.setVisible(true);
//   } else {
//     panorama.setVisible(false);
//   }
// }