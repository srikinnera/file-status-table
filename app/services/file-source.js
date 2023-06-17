import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class FileSourceService extends Service {
  @tracked selectedFiles = [];
  @tracked files = [];
  availableFiles = [];

  add(file) {
    this.selectedFiles = [...this.selectedFiles, file];
    this.markFile(file);
  }

  remove(file) {
    this.selectedFiles = this.selectedFiles.filter((f) => f.name !== file.name);
    this.markFile(file);
  }

  selectedCount() {
    return this.selectedFiles.length;
  }

  markFile(file) {
    this.files = this.files.map((f) => {
      if (f.name === file.name) return { ...f, isChecked: file.isChecked };
      else return f;
    });
  }

  setFiles(files) {
    this.files = files;
  }

  getFiles() {
    return this.files;
  }

  getFile(file) {
    return this.files.find((f) => f.name === file.name);
  }

  filesCount() {
    return this.files.length;
  }

  selectAll() {
    this.files = this.files.map((file) => {
      return { ...file, isChecked: true };
    });
    this.selectedFiles = this.files;
  }

  deSelectAll() {
    this.files = this.files.map((file) => {
      return { ...file, isChecked: false };
    });
    this.selectedFiles = [];
  }
}
