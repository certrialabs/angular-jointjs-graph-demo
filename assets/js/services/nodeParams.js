angular.module('app')
  .factory('NodeParams', [
    function() {
      return {
        get: function(backendModelParams) {
          var showBeneficiaryIcon = backendModelParams.entityIdentifier === 'beneficiary',
              emptyValues = ['null', 'undefined'];

          if (!backendModelParams.name || _.contains(emptyValues, backendModelParams.name)) {
            backendModelParams.name = '\u003cname\u003e';
          }

          if (!backendModelParams.country || _.contains(emptyValues, backendModelParams.country)) {
            backendModelParams.country = '\u003ccountry\u003e';
          }

          return {
            attrs: {
              '.icon.beneficiary': {
                display: showBeneficiaryIcon ? 'block': 'none',
                text: '\ue60f'
              },
              '.icon.company': {
                display: showBeneficiaryIcon ? 'none': 'block',
                text: '\ue6a0'
              },
              '.name': { text: backendModelParams.name, 'x': '30px', 'y': '19px', 'x-alignment': 'left' },
              '.country': { text: backendModelParams.country, 'x': '30px', 'y': '31px', 'x-alignment': 'left' }
            }
          };
        }
      };
    }
  ]);
