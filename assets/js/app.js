angular.module('app', ['ngResource', 'angular-jointjs-graph', 'templates']);

angular.module('angular-jointjs-graph')
  .config(['JointGraphConfigProvider',
    function(JointGraphConfigProvider) {
      JointGraphConfigProvider.init({
        modelIdKey: 'id',
        entityModelProperties: {
          beneficiary: ['name', 'country'],
          company: ['name', 'country']
        },
        linkModelProperties: [],
        entityCreationCallbacks: {
          beneficiary: 'BeneficiaryCallbacks',
          company: 'CompanyCallbacks'
        },
        entityMarkupParams: 'NodeParams',
        linkMarkupParams: 'LinkParams',
        linkCreationCallbacks: 'LinkCallbacks'
      });
    }
  ]);

angular.module('app')
  .run(['$http',
    function($http) {
      $http.defaults.headers.common.Accept = 'application/json';
    }
  ]);
