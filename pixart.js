var $colorInput = $('#color-field');
var $setColorBtn = $('#set-color');

for (var i = 1; i <= 10000; i++) {
  $div = $('<div>').addClass("square");
  $('body').append($div);
}

$setColorBtn.on('click', function(){
  event.preventDefault();
  var option = $('input[name=option]:checked').val();
  if (option === "paint-brush") {
    var color = $colorInput.val();
    $('.brush').css('background', color);

    $('body').on('mouseover', '.square', function(event){
      $(event.target).css('background', color);
    });
  } else if (option === "stamp-tool") {
    var poster = $colorInput.val();
    var options = {
      url: "http://www.omdbapi.com",
      method: "get",
      data: {t: poster, apikey: '2f6435d9'}
    }
    $.ajax(options).done(function(response){
      // console.log(response.Poster);
      $('.brush').css('background-image', 'url('+ response.Poster + ')');

      $('body').on('mouseover', '.square', function(event){
        $(event.target).css('background-image', 'url('+ response.Poster + ')');
      });
    });
  }

});
