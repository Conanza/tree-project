function folder ($rootScope) {
  return {
    restrict: 'E',
    scope: {
      name: '@',
      privacy: '=?'
    },
    transclude: true,
    templateUrl: 'folder.html',
    link: (scope, el, attrs, ctrl) => {
      scope.open = false;
      scope.selected = false;

      scope.toggleOpen = ev => {
        ev.stopPropagation();
        scope.open = !scope.open;
        scope.toggleSelect(ev);
      };

      scope.toggleSelect = ev => {
        ev.stopPropagation();
        $rootScope.$broadcast('unselectAll');
        scope.selected = !scope.selected;
      };

      scope.$on('unselectAll', () => scope.selected = false);
    }
  };
}

angular
  .module('explorer')
  .directive('folder', folder);
