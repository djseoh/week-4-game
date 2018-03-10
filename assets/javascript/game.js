$(document).ready(function(){

    //var guessingNumber = Math.floor(Math.random() * 102) + 19;

    //$('#number').text(guessingNumber);

    var socialMedia = ['assets/images/facebook.png', 'assets/images/ig.png', 'assets/images/snap.png', 'assets/images/youtube.png']

    var counter = 0;
    var wins = 0;
    var losses= 0;
    $('#win').text(wins);
    $('#loss').text(losses);
    
    newSocialMedia();
	newGame();

	function newSocialMedia () {
		var numbers = []
			while(numbers.length < 4){
			  var randomnumber = Math.ceil(Math.random()*12)
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					found = true; break
				}
			  }
			  if(!found)numbers[numbers.length]=randomnumber;
			}
		console.log(numbers);		

		for (i = 0; i < numbers.length; i++) {
			var imageSocial = $('<img>');
			imageSocial.attr('data-num', numbers[i]);
			imageSocial.attr('src', socialMedia[i]);
			imageSocial.attr('alt', 'Social Media');
			imageSocial.addClass('socialImage')
			$('#social-media').append(imageSocial);
		}
	}

	function newGame() {

		counter = 0;
		$('#yourScore').text(counter);

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}

		var numberToGuess = randomIntFromInterval(19,120);

        $('#number').text("Number of likes to acquire: " + numberToGuess);
        console.log(numberToGuess);


		$('.socialImage').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));
		   
		    $('#likes-counter').text("Number of your likes: " + counter);

		    if (counter == numberToGuess){
		      $('#status').text('You won!');
		      wins ++;
		      $('#win').text(wins);
		      console.log(wins)
		      $('#social-media').empty();
		      newSocialMedia();
		      newGame();
		        
		    } else if ( counter > numberToGuess){
		        $('#status').text('You lost!')
		        losses ++;
		        $('#loss').text(losses);
		        console.log(losses)
		        $('#social-media').empty();
		        newSocialMedia();
		        newGame();
		    }
		});
	}

});