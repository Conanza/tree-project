function directoryCtrl (DataService) {
  this.$onInit = () => {
    this.data = DataService.fetchData();
  };

  this.handleFileSelect = ev => {
    let file = ev.target.files[0];
    DataService.readData(file).then(data => {
      console.log('dataread', data);
      console.log('json', JSON.parse(data));
      // this.data = JSON.parse(data);
    });
  };

  this.triggerFileSelect = () => this.fileSelectEl.click();
}

angular
  .module('explorer')
  .controller('DirectoryDirCtrl', directoryCtrl);
