import template from './headerPart.html';
import styles from './headerPart.scss';

export default {
  template,
  controller() {
    this.styles = styles;
  }
};
