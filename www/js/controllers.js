angular.module('app.controllers', [])
//.constant('APIENDPOINT', 'https://aldagrim.alwaysdata.net/api/v1/')
  .constant('APIENDPOINT', 'http://127.0.0.1:8000/api/v1/')



  .controller('assajosCtrl', function($scope, $http, APIENDPOINT) {
  $http.get(APIENDPOINT + '/event/');
})

.controller('assaigDetailCtrl', function($scope, $http, APIENDPOINT) {
  $http.get(APIENDPOINT + '/event');
})

.controller('loginCtrl', function($log, $scope, $http, APIENDPOINT, $location,$state) {
  $scope.sendform = function(user) {

    $http.post(APIENDPOINT + 'user/login/', JSON.stringify({ username: user.mail, password: user.password }))
      .success(function (data, status, headers, config) {
          $log.log(JSON.stringify(data));
          window.localStorage['username'] = data.username;
          window.localStorage['key']= data.key;
          $http.defaults.headers.common['Authorization'] = 'ApiKey ' +
            data.username + ':' + data.key;
        $state.go('tabs.assajos');
        })
      .error(function (data, status, headers, config) {
          $log.error(JSON.stringify(data));
          //$scope.errorMsg = response.reason;
        $state.go('login');
        })
  };
})

.controller('signinCtrl', function($log, $scope, $http, APIENDPOINT, $state, $filter){
  $scope.sendform = function(user) {
    $http.post(APIENDPOINT + 'castellerauth/?mail=' + user.email + '&birthday=' + $filter('date')(user.birthday, "yyyy-MM-dd"))
      .then(function (response) {
        $log.log(response);
        $state.go('login')
        },
        function (response) {
          $log.error(response);
          $state.go('signin');
        });
  };
});
