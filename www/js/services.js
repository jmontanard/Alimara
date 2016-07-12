angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.factory("errorService", function ($route, $location) {
  return {
    checkAndReturnError: function (a, b, c) {
      if (a.status === 401) {
        (function () {
          return $location.path("/accounts/login");
        }());
        return;
      }
      if (a.status === 404)
        return;

      alert("Error \n *" + a.data.message);

    }
  }
})
