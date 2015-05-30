(function() {
    var app = angular.module('matchberry', []);
    var questions = [
        {
            number: 1,
            name: 'You feel involved when watching TV soaps.'
        },
        {
            number: 2,
            name: 'You know how to put every minute of your time to good purpose.'
        },
        {
            number: 3,
            name: 'After prolonged socializing you feel you need to get away and be alone.'
        }
    ]

    app.controller('PageController', function(){
        this.step = 1;

        this.selectCard = function(setStep) {
            this.step = setStep;
        }
    })

    app.controller('QuizController', function(){
        this.question = questions;
    })

})();