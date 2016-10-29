import template from './headerPart.html';
import styles from './headerPart.scss';

export default {
  template,
  controller() {
    this.styles = styles;
  }
};

$(document).ready(function(){
  $('#workTab').mouseover(function(){
    $('#workLine').css('background-color', 'pink');
  });
});

// $(document).ready(function(){
//   $('#workTab').mouseleave(function(){
//     $('#tabs').css('background-color', 'lightsteelblue');
//   });
// });

$(document).ready(function(){
  $('#workTab').one('mouseover', function() {
    $('#workTab').css('background-color', 'pink');
  });
});
