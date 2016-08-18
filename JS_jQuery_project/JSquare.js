$(document).ready(function  () {
  for (i=0;i<16;i++) {
      $('tbody').append('<tr></tr>');
  }
  for (i=0;i<16;i++) {
      $('tbody tr').append('<td><div></div></td>');
  }

  $('table').width('320px');

  $('div').mouseenter(function(){
    $(this).css('background-color', 'red');
  });

  $('div').mouseleave(function(){
    $(this).css('background-color', 'blue');
  });
});

function reset(){
    $('table').width('revert');
    var g=prompt('What should the side length (in squares) of the grid be?');
    if ((isNaN(g))||(g==="")){
        g=prompt('Sorry, that wasn\'t a number. What should the side length (in squares) of the grid be?');
    }
    $('tbody').empty();
    for (i=0;i<g;i++) {
        $('tbody').append('<tr></tr>');
    }
    for (i=0;i<g;i++) {
        $('tbody tr').append('<td><div></div></td>');
    }
    $('td div').height(Math.ceil(320/g)+'px');
    $('td div').width(Math.ceil(320/g)+'px');
    $('td div').css('background-color','rgb(255,255,255)');
    $('thead tr:first-child th').replaceWith('<th colspan="'+g+'"><h1>Let\'s create more</h1></th>');
    $('thead tr:last-child th').replaceWith('<th colspan="'+g+'"><button type="button" onclick="reset()">Reset</button></th>');

    $('div').mouseenter(function(){
      $(this).css('background-color', 'red');
    });

    $('div').mouseleave(function(){
      $(this).css('background-color', 'blue');
    });
}
