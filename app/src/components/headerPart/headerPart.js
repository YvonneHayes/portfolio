import template from './headerPart.html';
import styles from './headerPart.scss';

export default {
  template,
  controller() {
    this.styles = styles;

    function turnpink(){
      $('#workTab').mouseover(function (){
        $('#workTab').css('background-color', 'pink');
      })
    };
    turnpink();

  }
};









// $(document).ready(function(){
//   $('#workTab').mouseover(function(){
//     $('#workLine').css('background-color', 'pink');
//   });
// });



// $(document).ready(function(){
//   $('#workTab').one('mouseover', function() {
//     $('#workTab').css('background-color', 'pink');
//   });
// });
//
// $(document).ready(function(){
//   $('#workTab').onclick(function(){
//     $('#workTab').css('background-color', 'orange');
//   });
// });

// var turnPink = function(){
//   $('#workTab').mouseover(function() {
//     $('#workTab').css({'background-color':'pink'});
//   });
// };
//
// turnPink();
