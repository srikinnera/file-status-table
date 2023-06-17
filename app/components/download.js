import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class Download extends Component {
  @service fileSource;

  get getIsDiabled() {
    return this.fileSource.selectedCount() === 0;
  }

  @action
  handleDownload() {
    const message = this.fileSource.selectedFiles.map((file) => {
      if (file.status === 'available')
        return `
            File: ${file.name}  
            Path: ${file.path}  
            Device: ${file.device}`
    }).filter(e => e);
    if(this.fileSource.selectedFiles.some(file => file.status === 'available')){
    alert(
      `Files selected that are available for download: ${message}`);
    }
    else {
      alert('Files not available to download')
    }
  }
}
