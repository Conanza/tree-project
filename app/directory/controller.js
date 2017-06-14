function directoryCtrl (DataService) {
  this.$onInit = () => {
    this.data = DataService.fetchData();
  };
}

angular
  .module('explorer')
  .controller('DirectoryDirCtrl', directoryCtrl);
