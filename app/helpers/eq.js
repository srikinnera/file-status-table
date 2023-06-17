import { helper } from '@ember/component/helper';

export default helper(function eq([leftOperand, rightOperand]) {
  return leftOperand === rightOperand;
});
