angular.module('app', ['ngResource', 'angular-jointjs-graph']);

angular.module('app')
  .run(['$http',
    function($http) {
      $http.defaults.headers.common.Accept = 'application/json';
    }
  ]);
