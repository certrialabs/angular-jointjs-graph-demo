angular.module('app')
  .factory('BeneficiaryCallbacks', [
    function() {
      return {
        modelUpdateCallback: function(jointModel) {
          jointModel.attr('.icon.beneficiary', { display: 'block' });
          jointModel.attr('rect', { fill: 'lightblue' });
        }
      };
    }
  ]);
