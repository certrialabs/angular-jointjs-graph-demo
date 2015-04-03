angular.module('app')
  .factory('LinkParams', [
    function() {
      return {
        get: function() {
          return {
            canCreateLink: function(sourceView, targetView) {
              var sourceType = sourceView.model.get('backendModelParams').entityIdentifier,
                targetType = targetView.model.get('backendModelParams').entityIdentifier,
                beneficiaryToBeneficiary =
                  sourceType === 'beneficiary' &&
                  targetType === 'beneficiary',
                companyToBeneficiary =
                  sourceType === 'company' &&
                  targetType === 'beneficiary',
                areSameEntity =
                  sourceView.model.get('id') ===
                  targetView.model.get('id');

              return !(beneficiaryToBeneficiary || companyToBeneficiary || areSameEntity);
            }
          };
        }
      };
    }
  ]);
