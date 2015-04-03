angular.module('app')
  .factory('LinkCallbacks', ['JointGraph',
    function(JointGraph) {
      return {
        postDataFn: function(model) {
          var sourceModel = JointGraph.getCell(model.get('source').id),
            targetModel = JointGraph.getCell(model.get('target').id),
            sourceModelId = sourceModel.get('backendModelParams').id,
            targetModelId = targetModel.get('backendModelParams').id;

          return {
            source: sourceModelId,
            target: targetModelId
          };
        }
      };
    }
  ]);
