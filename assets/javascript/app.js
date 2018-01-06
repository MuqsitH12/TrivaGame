var panel = $('#quiz-area');

//Questions
var questions = [{
	question: "Which word is the correct choice to fill in the blank for Shakira's hit song ______ dont lie",
	answers: ["Lips", "Eyes", "Hips", "Hair"],
	correctAnswer: "Hips"
}, {
	question: "Choose the correct word to complete this lyric'Will the real ________ please stand up?",
	answers:["Tom Brady", "Jay-Z", "Jim Perry", "Slim Shady"],
	correctAnswer: "Slim Shady"
}, {
	question: "Which artist went on to invest and own a portion of the Vitamin Water company?",
	answers: ["Jay-Z", "Kanye West", "Rick Ross", "50 Cent"],
	correctAnswer: "50 Cent"
}, {
	question: "Which boy band released the album 'No Strings Attached'",
	answers: ["Backstreet Boys", "Boyz 2 men", "Nsync", "LMNT"],
	correctAnswer: "Nsync"
}, {
	question: "Which rock band released the song 'Points of Authority'",
	answers: ["Sum41", "Linkin Park", "Limp Bisket", "Seether"],
	correctAnswer: "Linkin Park"
}, {
	question: "Which 2000's album sold over 30 million copies worldwide?",
	answers: ["The Marshal Mathers LP", "No Strings Attached", "Hybrid Theory", "Stankonia"],
	correctAnswer: "The Marshal Mathers LP"
}, {
	question: "What was the name of 50 Cent's hit record '_____ Shop'",
	answers:["Money", "Club", "Candy", "Mechanic"],
	correctAnswer: "Candy"
}];

//Variable for the timer

var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});