function directory ($compile, $rootScope, DirectoryService) {
  return {
    restrict: 'E',
    scope: {},
    bindToController: true,
    controller: 'DirectoryDirCtrl',
    controllerAs: 'directory',
    templateUrl: 'directory.html',
    link: (scope, el, attrs, ctrl) => {
      ctrl.fileSelectEl = document.getElementById('hidden-file-input');

      ctrl.fileSelectEl.addEventListener('change', ctrl.handleFileSelect);

      scope.$watch(() => ctrl.data, data => {
        let foldersDiv = angular.element(document.getElementsByClassName('folders')[0]);
        let html = DirectoryService.createDirectory(data.children);

        $compile(foldersDiv.html(html))($rootScope.$new());
      });
    }
  };
}

angular
  .module('explorer')
  .directive('directory', directory);
