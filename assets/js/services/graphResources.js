angular.module('app')
  .factory('GraphResources', ['$resource',
    function($resource) {
      return {
        graph: function() {
          var url = '/graph';
          return $resource(url + '/:id', { id: '@id' }, { update: { method: 'PUT' } });
        },
        companies: function() {
          var url = '/company';
          return $resource(url + '/:id', { id: '@id' }, { update: { method: 'PUT' } });
        },
        beneficiaries: function() {
          var url = '/beneficiary';
          return $resource(url + '/:id', { id: '@id' }, { update: { method: 'PUT' } });
        },
        relations: function() {
          var url = '/ownershipRelation';
          return $resource(url + '/:id', { id: '@id' }, { update: { method: 'PUT' } });
        }
      };
    }
  ]);
