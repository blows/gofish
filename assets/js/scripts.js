$(document).ready(function() {

	$('.audio--track').trigger('load');

	$('.button--fish').click(function() {
    $('.audio--track').trigger('play');  
  });

  // randomly load a track
	var path_mp3 = 'assets/audio/mp3/',
  files = ['test.mp3', 'test2.mp3', 'test3.mp3'],
  i = Math.floor(Math.random()*files.length);
  var url = (path_mp3+files[i]);
  $(".audio--track__mp3").attr('src', url);

  var path_ogg = 'assets/audio/ogg/',
  files = ['test.ogg', 'test2.ogg', 'test3.ogg'],
  i = Math.floor(Math.random()*files.length);
  var url = (path_ogg+files[i]);
  $(".audio--track__ogg").attr('src', url);

});