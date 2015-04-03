angular.module('app')
  .controller('GraphResourcesController', ['$scope', 'GraphResources',
    function($scope, GraphResources) {
      var GraphResource = GraphResources.graph(),
          eventResources = {
            entities: {
              company: GraphResources.companies(),
              beneficiary: GraphResources.beneficiaries()
            },
            entityRelations: GraphResources.relations()
          };

      GraphResource.query(function(response) {
        if (response.length === 0) {
          var graph = new GraphResource();
          graph.$save().then(function(response) {
            eventResources.graph = response;
            $scope.$broadcast('graphResources', eventResources);
          });
        } else {
          eventResources.graph = response[0];
          $scope.$broadcast('graphResources', eventResources);
        }
      });
    }
  ]);
