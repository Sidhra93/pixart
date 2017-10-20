var $colorInput = $('#color-field');
var $setColorBtn = $('#set-color');

$setColorBtn.on('click', function(event){
  event.preventDefault();
  var color = $colorInput.val();
  $('.brush').css('background', color);
})
