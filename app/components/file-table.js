import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class FileTable extends Component {
  @service fileSource;
  @tracked files = [];

  constructor() {
    super(...arguments);
    this.fileSource.setFiles([
      {
        name: 'smss.exe',
        device: 'Stark',
        path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
        status: 'scheduled',
        isChecked: false,
      },

      {
        name: 'netsh.exe',
        device: 'Targaryen',
        path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe',
        status: 'available',
        isChecked: false,
      },

      {
        name: 'uxtheme.dll',
        device: 'Lannister',
        path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll',
        status: 'available',
        isChecked: false,
      },

      {
        name: 'cryptbase.dll',
        device: 'Martell',
        path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll',
        status: 'scheduled',
        isChecked: false,
      },

      {
        name: '7za.exe',
        device: 'Baratheon',
        path: '\\Device\\HarddiskVolume1\\temp\\7za.exe',
        status: 'scheduled',
        isChecked: false,
      },
    ]);
  }

  setFiles(files) {
    this.files = files;
  }

  get computedFileData() {
    this.setFiles(this.fileSource.getFiles());
    return this.files;
  }

  @action
  toggleSelection(file) {
    file.isChecked = !file.isChecked;
    if (file.isChecked) {
      this.fileSource.add(file);
    } else {
      this.fileSource.remove(file);
    }
  }
}
