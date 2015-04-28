angular.module('app')
  .factory('CompanyCallbacks', [
    function() {
      return {
        modelUpdateCallback: function(jointModel) {
          jointModel.attr('.icon.company', { display: 'block' });
          jointModel.attr('rect', { fill: 'lightcoral' });
        }
      };
    }
  ]);
