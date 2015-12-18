angular.module('vario')

.factory('varioFactory' , function( $http , $rootScope ){
  return {
    
    mapLoad : function(city_id , cent_lat, cent_long , type , no_find , view){
      return $http.get($rootScope.d_name+'/get_location_2.php?city_id='+city_id+'&type='+type+'&no_find='+no_find+'&cent_lat='+cent_lat+'&cent_long='+cent_long);
    },
    markers : function(markerData , view){
      var newvariablenew = JSON.parse(JSON.stringify(markerData));
      var push3 = newvariablenew[1][0];
      var push4 = newvariablenew[1][1];
      var push5 = newvariablenew[1][2]; 
      var cent_lat =  newvariablenew[2];
      var cent_long = newvariablenew[3];
      var type =  newvariablenew[4] , i = 0;
      if(type == "map"){
        document.getElementById('new_id').style.display = 'block';
        var infoWindow = new google.maps.InfoWindow();
        var map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 12,
                        scrollwheel: false,
                        disableDoubleClickZoom: true,
                        zoomControl : true,
                        zoomControlOpt: {
                          style : 'SMALL',
                          position: 'TOP_RIGHT'
                        },
                        panControl : false,
                        streetViewControl : false,
                        mapTypeControl: false,
                        overviewMapControl: false,
                        center: new google.maps.LatLng(cent_lat, cent_long),
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                      });
          if(view == 1){
            var interval = setInterval( function(){
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(push3[i], push4[i]),
                map: map,
                animation: google.maps.Animation.DROP
              });
              (function (marker, i) {
                google.maps.event.addListener(marker, "click", function (e) {
                    infoWindow.setContent(push5[i]);
                    infoWindow.open(map, marker);
                    toggleBounce(marker);
                    setTimeout(function(){toggleBounce(marker)} , 700);
                });
              })(marker, i);
              i++;
              if (i == push5.length) {
                clearInterval(interval);
              }
            }, 50);

            function toggleBounce (marker) {
              if (marker.getAnimation() != null) {
                  marker.setAnimation(null);
              } else {
                  marker.setAnimation(google.maps.Animation.BOUNCE);
              }
            }
          }
        document.getElementById('new_1').style.display = 'none';
      } else {
        document.getElementById('new_id').style.display = 'none';
        document.getElementById('new_1').style.display = 'block';
        document.getElementById('new_1').innerHTML=newvariablenew[0];
      }
    }
  }
})