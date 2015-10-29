app.controller('SerketSauceController', ['$http', function($http) {
  var self = this;
  self.data = [];

  $(document).ready( function () {
    $('#table_id').DataTable();
} );

  $http.get('http://www.serket.uk/pharmacies/pharmacylist-format').success(function(data) {
    self.data = data.data;
  });
}]);
