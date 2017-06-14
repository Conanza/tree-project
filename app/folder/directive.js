function folder () {
  return {
    restrict: 'E',
    scope: {
      name: '@',
      privacy: '=?'
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
