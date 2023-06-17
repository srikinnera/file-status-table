import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class Header extends Component {
  @service fileSource;
  selectAllChecked = false;

  get selectedFileCount() {
    return this.fileSource.selectedCount();
  }

  setSelectAllChecked(value) {
    this.selectAllChecked = value;
  }

  get isSelectAllIndeterminate() {
    return (
      this.fileSource.selectedCount() > 0 &&
      this.fileSource.selectedCount() < this.fileSource.filesCount()
    );
  }

  get isSelectAllChecked() {
    if (this.fileSource.selectedCount() === 0) {
      this.setSelectAllChecked(false);
    }
    return this.fileSource.selectedCount() === this.fileSource.filesCount();
  }

  @action
  toggleSelectionAllFiles() {
    this.selectAllChecked = !this.selectAllChecked;
    if (this.selectAllChecked) this.fileSource.selectAll();
    else this.fileSource.deSelectAll();
  }
}
