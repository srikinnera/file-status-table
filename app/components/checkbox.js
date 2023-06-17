import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SingleSelectionCheckbox extends Component {
  @action
  clicked(handleClick) {
    handleClick();
  }
}
