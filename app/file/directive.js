function file () {
  return {
    restrict: 'E',
    scope: {
      name: '@',
      privacy: '=?'
    },
    templateUrl: 'file.html',
    link: (scope, el, attrs, ctrl) => {
      console.log(scope);
    }
  };
}

angular
  .module('explorer')
  .directive('file', file);
