app.directive('innerHtmlBind', function() {
  return {
    restrict: 'A',
    scope: {
      inner_html: '=innerHtml'
    },
    link: function(scope, element, attrs) {
      scope.inner_html = element.html();
    }
  }
})

app.controller('SerketSauceController', ['$http', '$scope', '$modal', '$log', function($http, $scope, $modal, $log) {
  var self = this;
  self.data = [];
  var geocoder;
  var map;

  $http.get('http://www.serket.uk/pharmacies/pharmacylist-format').success(function(data) {
    self.data = data.data;
  });

  self.uniqueSearch = function(data) {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var mapOptions = {
      zoom: 8,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    var address = data[7];
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });

    google.maps.event.addDomListener(window, 'load', initialize);
  }

  $scope.open = function(data) {

    var modalInstance = $modal.open({
      template: $scope.modal_html_template,
      controller: ModalInstanceCtrl,
      resolve: {
        items: function() {
          return 'hello';
        }
      }
    });

    modalInstance.result.then(function(selectedItem) {
      $scope.selected = selectedItem;
    }, function() {
      $log.info('Modal dismissed at: ' + new Date());
    });

    self.uniqueSearch(data);
  }
}]);

var ModalInstanceCtrl = function($scope, $modalInstance) {

  $scope.selected = {
    item: 'hello'
  };

  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
};
