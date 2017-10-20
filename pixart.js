var $colorInput = $('#color-field');
var $setColorBtn = $('#set-color');

$setColorBtn.on('click', function(event){
  event.preventDefault();
  var color = $colorInput.val();
  $('.brush').css('background', color);
})

for (var i = 1; i <= 10000; i++) {
  $div = $('<div>').addClass("square");
  $('body').append($div);
}

$('body').on('click', '.square', function(event){
  var color = $colorInput.val();
  $(event.target).css('background', color);
});
