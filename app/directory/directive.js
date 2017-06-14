function directory ($compile, DirectoryService) {
  return {
    restrict: 'E',
    scope: {},
    bindToController: true,
    controller: 'DirectoryDirCtrl',
    controllerAs: 'directory',
    templateUrl: 'directory.html',
    link: (scope, el, attrs, ctrl) => {
      scope.$watch(() => ctrl.data, data => {
        let directoryDiv = angular.element(document.getElementById('directory'));
        DirectoryService.createDirectory(directoryDiv, data.children);
        // let html = DirectoryService.createDirectory(null, data.children);

        // directoryDiv.html(html);
      });
    }
  };
}

angular
  .module('explorer')
  .directive('directory', directory);
