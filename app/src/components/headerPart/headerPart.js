import template from './headerPart.html';
import styles from './headerPart.scss';

export default {
  template,
  controller: [
    '$state',
    function controller($state) {
      this.styles = styles;
      this.$state = $state;

      if ($state.includes('work')){
        $('#workTab').css('background-color', 'pink');
        $('#workTab').css('border-top', '2px solid black');
        $('#workTab').css('border-left', '2px solid black');
        $('#workTab').css('border-right', '2px solid black');
        $('#workTab').css('border-top-left-radius', '20%');
        $('#workTab').css('border-top-right-radius', '20%');
      }
      else if ($state.includes('about')) {
        $('#aboutTab').css('background-color', 'orange');
        $('#aboutTab').css('border-top', '2px solid black');
        $('#aboutTab').css('border-left', '2px solid black');
        $('#aboutTab').css('border-right', '2px solid black');
        $('#aboutTab').css('border-top-left-radius', '20%');
        $('#aboutTab').css('border-top-right-radius', '20%');
      }
      else if ($state.includes('contact')) {
        $('#contactTab').css('background-color', 'lightgreen');
        $('#contactTab').css('border-top', '2px solid black');
        $('#contactTab').css('border-left', '2px solid black');
        $('#contactTab').css('border-right', '2px solid black');
        $('#contactTab').css('border-top-left-radius', '20%');
        $('#contactTab').css('border-top-right-radius', '20%');
      }

    },
  ],
};
