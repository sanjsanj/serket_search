app.controller('SerketSauceController', ['$http', function($http) {
  var self = this;
  self.data = [];

  $http.get('http://www.serket.uk/pharmacies/pharmacylist-format').success(function(data) {
    self.data = data.data;
  });
}]);
