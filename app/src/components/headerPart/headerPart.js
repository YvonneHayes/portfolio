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


    },
  ],
};



    // function turnpink(){
    //   $('#workTab').mouseover(function (){
    //     $('#workTab').css('background-color', 'pink');
    //     $('#workTab').css('border-top', '2px solid black');
    //     $('#workTab').css('border-left', '2px solid black');
    //     $('#workTab').css('border-top-left-radius', '20%');
    //     $('#workTab').css('border-right', '2px solid black');
    //   });
    // }
    //
    // function turnwhite(){
    //   $('#workTab').mouseleave(function (){
    //     $('#workTab').css('background-color', 'white');
    //   });
    // }
    //
    // turnpink();
    // turnwhite();
    //
    // function staypink(){
    //   $('#workTab').click(function(){
    //     $('#workTab').css('background-color', 'blue');
    //     function reallystay(){
    //       $('#workTab').mouseleave(function (){
    //         $('#workTab').css('background-color', 'blue');
    //       });
    //     }
    //     reallystay();
    //   });
    // }
    //
    // staypink();


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
