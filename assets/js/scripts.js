$(document).ready(function() {

	var path_mp3 = 'assets/audio/mp3',
  files = ['test.mp3', 'test2.mp3', 'test3.mp3'],
  i = Math.floor(Math.random()*files.length);
  var url = (path_mp3+files[i]);
  $(".audio-track--mp3").attr('src', url);

  var_path_ogg path = 'assets/audio/ogg',
  files = ['test.ogg', 'test2.ogg', 'test3.ogg'],
  i = Math.floor(Math.random()*files.length);
  var url = (path+files[i]);
  $(".audio-track--ogg").attr('src', url);

});