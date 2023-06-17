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
    alert(
      `Files selected for download:` +
        this.fileSource.selectedFiles.map((file) => {
          if (file.status === 'available')
            return `
                File: ${file.name}  
                Path: ${file.path}  
                Device: ${file.device}`;
        })
    );
  }
}
