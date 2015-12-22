angular.module('templates', [])
  .run(['$templateCache',
    function($templateCache) {
      $templateCache.put('graphNode',
      '<g>' +
        '<rect/>' +
        '<g transform="translate(30, 0)">' +
          '<text class="name"></text>' +
          '<text class="country"></text>' +
        '</g>' +
        '<g transform="translate(235, 15)">' +
          '<text class="icon beneficiary"></text>' +
          '<text class="icon company"></text>' +
        '</g>' +
        '<g class="connection-port">' +
          '<circle class="outer"></circle>' +
          '<circle class="inner"></circle>' +
        '</g>' +
        '<g class="remove-element">' +
          '<path class="cross" transform="translate(235, 15)"/>' +
        '</g>' +
      '</g>'
      );
    }
  ]);
