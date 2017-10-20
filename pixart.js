var $colorInput = $('#color-field');
var $setColorBtn = $('#set-color');
var option =
$('input[name=option]:checked').val()

for (var i = 1; i <= 10000; i++) {
  $div = $('<div>').addClass("square");
  $('body').append($div);
}

// if (option === "paint-brush") {
//   $setColorBtn.on('click', function(event){
//     event.preventDefault();
//     var color = $colorInput.val();
//     $('.brush').css('background', color);
//
    // $('body').on('mouseover', '.square', function(event){
    //   $(event.target).css('background', color);
    // });
//   })
// } else {
//
// }
$setColorBtn.on('click', function(){
  event.preventDefault();
  var poster = $colorInput.val();
  var options = {
    url: "http://www.omdbapi.com",
    method: "get",
    data: {t: poster, apikey: '2f6435d9'}
  }
  $.ajax(options).done(function(response){
    // console.log(response.Poster);
    $('body').on('mouseover', '.square', function(event){
      $(event.target).css("background', 'url('"+ response.Poster +"')");
    });

  })

});
