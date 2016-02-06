$(document).ready(function(){

    var questions = [{
            question: 'Which Character Spoke the First line in the Force Awakens',
            answers: ['Poe Dameron', 'Lor San Tekka', 'Finn'],
            correctAnswer: 'Lor San Tekka',
            image: 'img/finn.png'
        }, {
            question: 'What was Kylo Rens Original Name before he Changed It?',
            answers: ['Ben', 'Luke', 'Joe'],
            correctAnswer: 'Ben',
            image: 'img/Kylo-Ren.png'
        }, {
            question: 'Who says thats not how the force works?',
            answers: ['Han Solo', 'Genral Leia', 'Maz Kanata'],
            correctAnswer: 'Han Solo',
            image: 'img/POE.png'
        }, {
            question: 'Which Character is not Mentioned in the Opening Crawl Text?',
            answers: ['Luke', 'Poe', 'Leia'],
            correctAnswer: 'Poe',
            image: 'img/Storm.png'
        }, {
            question: 'In Which Department on the Starkiller Base did Finn Once Work?',
            answers: ['Sanitation', 'Weapons', 'Accounts'],
            correctAnswer: 'Sanitation',
            image: 'img/Kylo-2.png'
        }
    ]

    var imgBg = [
        "img/Kylo-Ren.png",
        "img/POE.png",
        "img/Storm.png",
        "img/Kylo-2.png"
    ],

    i = 0;
    n = imgBg.length;



    var questionNumber = 0;

    var populateAnswers = function() {

        var currentQuestion = questions[questionNumber];

        $('p').text(currentQuestion.question);

        for(var i = 0; i < currentQuestion.answers.length; i++) {
            var rdiobtn = $('<input type= "radio" id="answers'+(i+1)+'" name="selector"/>');
            var answers = $('<label for="answers'+(i+1)+'">'+currentQuestion.answers[i]+'</label>');
            var listAnswer = $('<li></li>');
            listAnswer.append(rdiobtn);
            listAnswer.append(answers);
            $('ul').append(listAnswer);
        }
    };

    var populateBackground = function(){

        $('.background-image').css({backgroundImage: "url(" + imgBg[i++ % n] + ")" });


    };




    populateAnswers();

    $('ul').on('click', 'input', function(){
        var answerChoice = $('label[for="'+this.id+'"]').text();
        //alert(answerChoice);

        if(answerChoice == questions[questionNumber].correctAnswer) {
            alert("Correct");
        }else {
            alert("The Correct answer is " + questions[questionNumber].correctAnswer);
        }

        var currentQuestion = questions[questionNumber];

        $('ul').empty();
        questionNumber++;
        populateAnswers();
        populateBackground();
    });
});
