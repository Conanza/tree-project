class DirectoryService {
  constructor ($compile, $rootScope) {
    this.$compile = $compile;
    this.$rootScope = $rootScope;
  }

  createDirectory (el, children) {
    children.forEach(child => {
      if (child.type === 'folder') {
        let folder = angular.element(`<folder name="${child.name}"></folder>`);
        let scope = this.$rootScope.$new();

        if (child.children) {
          this.createDirectory(folder, child.children);
        }

        el.append(this.$compile(folder)(scope));
      } else if (child.type === 'file') {
        let file = angular.element(`<file name="${child.name}"></file>`);
        let scope = this.$rootScope.$new();
        el.append(this.$compile(file)(scope));
      }
    });
  }
}

angular
  .module('explorer')
  .service('DirectoryService', DirectoryService);
