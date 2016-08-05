$(document).ready(function() {

	$('.button--fish').click(function() {
		$('.audio--track').trigger('load');
    $('.audio--track').trigger('play');

    // randomly load a track
		var path_mp3 = 'assets/audio/mp3/',
		files = ['fish_01.mp3', 'fish_02.mp3', 'fish_03.mp3', 'fish_04.mp3', 'fish_05.mp3', 'fish_06.mp3', 'fish_07.mp3', 'fish_08.mp3', 'fish_09.mp3', 'fish_10.mp3'],
		i = Math.floor(Math.random()*files.length);
		var url = (path_mp3+files[i]);
		$(".audio--track__mp3").attr('src', url);

		var path_ogg = 'assets/audio/ogg/',
		files = ['fish_01.ogg', 'fish_02.ogg', 'fish_03.ogg', 'fish_04.ogg', 'fish_05.ogg', 'fish_06.ogg', 'fish_07.ogg', 'fish_08.ogg', 'fish_09.ogg', 'fish_10.ogg'],
		i = Math.floor(Math.random()*files.length);
		var url = (path_ogg+files[i]);
		$(".audio--track__ogg").attr('src', url);
  });

});