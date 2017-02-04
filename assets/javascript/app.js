$('#start').on('click',function() {
	// console.log("You Clicked Me!");
	// $('#subwrapper').remove();
	// $('#start').remove();
 // 	for(var i=0; i<questions.length; i++){
 // 		$('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
 // 		for(var j=0; j<questions[i].answers.length; j++){  //SUB LOOP - HERE	
 // 			$('#subwrapper').append("<input type='checkbox'  name='question-" + i + "'  value='" + questions[i].answers[j] +"' >" + questions[i].answers[j]);
 // 		}
 // 	}
	game.start();
})

$(document).on('click','#end', function(){  //'#END' ?? LINE 81 - BUTTON TAG
	game.done();
})

// -------------------------------------------------------------------------------
// BELOW QUESTIONS [ARRAY] INCLUDE WHOLE BUNCH OF {OBJECTS}.

var questions = [{
	question:"When it's midnight in Boston, what time is it in New York?",
	answers:["Morning", "Afternoon", "Evening", "Midnight"],
	correctAnswer: "Midnight"
}, {
	question:"In 1993 which sport did Michael Jordan give up basketball for?",
	answers:["Football", "Ice Hockey", "Baseball", "Soccer"],
	correctAnswer: "Baseball"
}, {
	question:"From where does the company Samsung originate?",
	answers:["Japan", "USA", "China", "Korea"],
	correctAnswer: "Korea"
}, {
	question:"Which one is NOT of the three countries that make up Scandinavia?",
	answers:["Turkey", "Denmark", "Norway", "Sweden"],
	correctAnswer: "Turkey"
}, {
	question:"Which American President was an actor?",
	answers:["Trump", "Bush", "Ronald", "Obama"],
	correctAnswer: "Ronald"
}, {
	question:"Which one is Disney movie?",
	answers:["Batman", "Frozen", "Kingkong", "Notebook"],
	correctAnswer: "Frozen"
}, {
	question:"What is the currency of Denmark?",
	answers:["Won", "Dollar", "Krone", "Taka"],
	correctAnswer: "Krone"
}, {
	question:"What was the first full-length CGI movie?",
	answers:["A Bug's Life", "Monster Inc", "Toy Story", "The Lion King"],
	correctAnswer: "Toy Story"
}];


// -------------------------------------------------------------------------------
// BELOW {OBJECTS}

var game = {
	correct: 0,
	incorrect: 0,
	counter: 20,
	countdown: function(){  // COUNTDOWN METHOD HERE
		game.counter--;
		$('#counter').html(game.counter);
		if(game.counter<=0){
			console.log("Time is up!");
			game.done();
		}
	},
	start: function(){
		timer = setInterval(game.countdown,1000);
		$('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">20</span> Seconds</h2>');
		$('#start').remove();
	 	for(var i=0; i<questions.length; i++){
	 		$('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
	 		for(var j=0; j<questions[i].answers.length; j++){  //SUB LOOP - HERE	
	 			$('#subwrapper').append("<input type='radio'  name='question-" + i + "'  value='" + questions[i].answers[j] +"' >" + questions[i].answers[j]);
	 		}
	 	}
	 	$('#subwrapper').append('<br><button id="end">DONE</button>');

	},
	done: function(){
	$.each($('input[name="question-0]":checked'),function(){// NEED TO REVIEW HERE!!
		if($(this).val()==questions[0].correctAnswer){ // NEED TO REVIEW HERE!!
			game.correct++;
		} else {
			game.incorrect++;
		}
	});
	$.each($('input[name="question-1]":checked'),function(){
		if($(this).val()==questions[1].correctAnswer){ 
			game.correct++;
		} else {
			game.incorrect++;
		}
	});
	$.each($('input[name="question-2]":checked'),function(){
		if($(this).val()==questions[2].correctAnswer){ 
			game.correct++;
		} else {
			game.incorrect++;
		}
	});
	$.each($('input[name="question-3]":checked'),function(){
		if($(this).val()==questions[3].correctAnswer){ 
			game.correct++;
		} else {
			game.incorrect++;
		}
	});
	$.each($('input[name="question-4]":checked'),function(){
		if($(this).val()==questions[4].correctAnswer){ 
			game.correct++;
		} else {
			game.incorrect++;
		}
	});
	$.each($('input[name="question-5]":checked'),function(){
		if($(this).val()==questions[5].correctAnswer){
			game.correct++;
		} else {
			game.incorrect++;
		}
	});
	$.each($('input[name="question-6]":checked'),function(){
		if($(this).val()==questions[6].correctAnswer){
			game.correct++;
		} else {
			game.incorrect++;
		}
	});
	$.each($('input[name="question-7]":checked'),function(){
		if($(this).val()==questions[7].correctAnswer){
			game.correct++;
		} else {
			game.incorrect++;
		}
	});

	this.result();
	},

	result: function(){
		clearInterval(timer);
		$('#subwrapper h2').remove();

		$('#subwrapper').html("<h2>All done!</h2>");
		$('#subwrapper').append("<h3>Correct Answer: "+this.correct+"</h3>");
		$('#subwrapper').append("<h3>Incorrect Answer: "+this.incorrect+"</h3>");		
		$('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
	}
}


console.log("Test");