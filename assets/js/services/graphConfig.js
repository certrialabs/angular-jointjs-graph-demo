angular.module('app')
  .factory('GraphConfig', [
    function() {
      return {
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
      };
    }
  ]);
