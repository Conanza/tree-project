function file ($rootScope) {
  return {
    restrict: 'E',
    scope: {
      name: '@',
      privacy: '=?'
    },
    templateUrl: 'file.html',
    link: (scope, el, attrs, ctrl) => {
      scope.selected = false;

      scope.toggleSelect = ev => {
        ev.stopPropagation();
        $rootScope.$broadcast('unselectAll', scope.$id);
        scope.selected = !scope.selected;
      };

      scope.$on('unselectAll', (ev, id) => {
        if (id === scope.$id) return;
        scope.selected = false;
      });
    }
  };
}

angular
  .module('explorer')
  .directive('file', file);
