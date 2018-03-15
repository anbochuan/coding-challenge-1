// coding challenge
// building a fun quiz game in the console
// use IIFE to ensure data privacy
(function() {
    // create a 2-D array
    var choices = new Array(['smart', 'BMW-X3', 'Audi-Q7', 'QQ'], ['Hot pot', 'rice', 'noodle', 'soup'], ['ground hog', 'panda', 'koala', 'pooh']);
    // function constructor
    var Question = function (question, choices, correctAnswer) {
        this.question = question;
        this.choices = choices;
        this.correctAnswer = correctAnswer;   
    };
    // write the method into the prototype property
    Question.prototype.displayQuestion = function() {
        // print the question to the console
        console.log(this.question);
        // print all choices of one question
        for(var i = 0; i < this.choices.length; i++) {
           console.log(i + ': ' + this.choices[i]); 
        }
    }
    // write the method into the prototype property
    Question.prototype.check = function(result) {
        if (result === this.correctAnswer) {
            console.log('Correct answer!');
            scores += 1;
            console.log('Your current score is: ' + scores);
            console.log('--------------------------------');
        } else if (result === 'exit') {
                  stop = true;
                  } else  {
            console.log('Wrong answer! Try again :)');
            console.log('--------------------------------');
        }
    }
    // instantiate 3 objects
    var question1 = new Question('Which one is my dreaming car?', choices[0], 2);
    var question2 = new Question('Which one is tuboshu\'s favourate food?', choices[1], 0);
    var question3 = new Question('Who can predict the arrival of spring?', choices[2], 0);

    // put 3 objects into an array
    var quizes = new Array(question1, question2, question3);
    var scores = 0;
    // main game loop
    function nextQuestion() {
        var rand = Math.floor((Math.random() * quizes.length));
        var randomQues = quizes[rand].displayQuestion();
        var result = prompt('Please select the correct answer (just type the number).');
        if (result !== 'exit') {
            quizes[rand].check(parseInt(result)); // parseInt convert string to integer
            nextQuestion(); // it works like a while loop
        } 
    }
    // start running the code
    nextQuestion();
})();