function folder () {
  return {
    restrict: 'E',
    scope: {
      name: '@',
      private: '=?'
    },
    transclude: true,
    templateUrl: 'folder.html',
    link: (scope, el, attrs, ctrl) => {
      console.log(scope);
    }
  };
}

angular
  .module('explorer')
  .directive('folder', folder);
