$(function(){
	$('#go').click(function(){

		function checkifComplete(){
			if(isComplete==false){
				isComplete=true;
			}else{
				place='second';
			}
		}
		var carWidth=$('#car1').width();
		var raceTrackWidth=$(window).width() - carWidth;
		var raceTime1=Math.floor((Math.random() * 5000) + 1);
		var raceTime2=Math.floor((Math.random() * 5000) + 1);
		var isComplete=false;
		var place='first';
		$('#car1').animate({
             left: raceTrackWidth
		},raceTime1,function(){
			checkifComplete();
			$('#raceInfo1 span').text('Finished in '+place+' place and clocked in at '+raceTime1+' milliseconds!');


		});
		$('#car2').animate({
             left: raceTrackWidth
		},raceTime2,function(){
			checkifComplete();
			$('#raceInfo2 span').text('Finished in '+place+' place and clocked in at '+raceTime2+' milliseconds!');


		});
	});
	$('#reset').click(function(){
		$('.car').css('left','0');
		$('.raceInfo span').text('');

	});

});
