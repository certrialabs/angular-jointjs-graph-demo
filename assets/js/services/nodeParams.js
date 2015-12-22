angular.module('app')
  .factory('NodeParams', [
    function() {
      return {
        defaults: {
          rect: {
            width: 260,
            height: 38,
            'stroke-width': 1,
            stroke: '#ccc'
          },
          'circle.outer': {
            cx: 15,
            cy: 19,
            r: 6
          },
          'circle.inner': {
            cx: 15,
            cy: 19,
            r: 2.5
          },
          '.cross': {
            d: 'M0,0 L10,10 M10,0 L0,10'
          }
        },
        computed: function(backendModelParams) {
          var showBeneficiaryIcon = backendModelParams.entityIdentifier === 'beneficiary',
              emptyValues = ['null', 'undefined'];

          if (!backendModelParams.name || _.contains(emptyValues, backendModelParams.name)) {
            backendModelParams.name = '\u003cname\u003e';
          }

          if (!backendModelParams.country || _.contains(emptyValues, backendModelParams.country)) {
            backendModelParams.country = '\u003ccountry\u003e';
          }

          return {
            '.icon.beneficiary': {
              display: showBeneficiaryIcon ? 'block': 'none',
              text: '\ue60f'
            },
            '.icon.company': {
              display: showBeneficiaryIcon ? 'none': 'block',
              text: '\ue6a0'
            },
            '.name': { text: backendModelParams.name, y: '19px', 'x-alignment': 'left' },
            '.country': { text: backendModelParams.country, y: '31px', 'x-alignment': 'left' }
          };
        }
      };
    }
  ]);
