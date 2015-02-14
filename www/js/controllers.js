angular.module('starter.controllers', [])

    .controller('AppCtrl', function ($scope, basic, prepositions, adjectives, languageProblems, greetings) {
        $scope.basic = basic.getBasic();
        $scope.prepositions = prepositions.getPrepositions();
        $scope.adjectives = adjectives.getAdjectives();
        $scope.languageProblems = languageProblems.getLanguageProblems();
        $scope.greetings = greetings.getGreetings();
        $scope.shown = false;
        $scope.listen = function listen(message, buttonPrefix, index, lang){
            var url = "http://translate.google.com/translate_tts?ie=UTF-8&q={{message}}&tl={{lang}}";
            var audio = document.getElementById('audio');
            var audioSource = document.getElementById('audioSource');
            var selector = "[data-btn='"+(buttonPrefix + "_" +index + '_'+ lang)+"']";
            var button = document.querySelector(selector);
            var classes = button.className;

            url = url.replace('{{message}}', message).replace('{{lang}}', lang);

            audioSource.src = url;
            audio.addEventListener('play', function onplay(){
                button.className = "button button-positive";
                $scope.listen = function () {};
                audio.removeEventListener('play', onplay);
            });
            audio.addEventListener('ended', function onended() {
                $scope.listen = listen;
                button.className = classes.replace('activated', '');
                audio.removeEventListener('ended', onended);
            });
            audio.load();
            audio.play();
        };
        $scope.toggle = function (item){
            item.toggle = !item.toggle;
        };
    });
