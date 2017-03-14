var pubCrawl = angular.module('pubCrawl', []);

function mainController($scope, $http) {
  $scope.tavernData = {};

  $http.get('/api/taverns')
    .success(function(data) {
      $scope.taverns = data;
    })
    .error(function() {
      console.log('Error: ', data);
    });

  $scope.createTavern = function() {
    $http.post('/api/taverns', $scope.tavernData)
      .success(function(data) {
        $scope.tavernData = {};
        $scope.taverns = data;
      })
      .error(function(data) {
        console.log('Error: ', data);
      });
  };

  $scope.deleteTavern = function(id) {
    $http.delete('/api/taverns/'+id)
      .success(function(data) {
        $scope.taverns = data;
      })
      .error(function() {
        console.log('Error: ', data);
      });
  };
}