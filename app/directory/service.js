class DirectoryService {
  constructor ($compile, $rootScope) {
    this.$compile = $compile;
    this.$rootScope = $rootScope;
  }

  createDirectory (children) {
    let html = '';

    children.forEach(child => {
      if (child.type === 'folder') {
        let folder = `<folder name="${child.name}">`;

        if (child.children) {
          folder += this.createDirectory(child.children);
        }

        html += `${folder}</folder>`;
      } else if (child.type === 'file') {
        let file = `<file name="${child.name}"></file>`;

        html += file;
      }
    });

    return html;
  }
}

angular
  .module('explorer')
  .service('DirectoryService', DirectoryService);
