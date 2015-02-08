angular.module('starter.services', [])
    .factory('basic', function () {
        var basic = [
            {
                toggle: false,
                english: 'yes',
                dutch: 'ja'
            },
            {
                toggle: false,
                english: 'no',
                dutch: 'nee'
            },
            {
                toggle: false,
                english: 'maybe',
                dutch: 'alstublieft'
            },
            {
                toggle: false,
                english: 'here you are',
                dutch: 'alstublieft'
            },
            {
                toggle: false,
                english: 'thank you',
                dutch: 'dank u wel'
            },
            {
                toggle: false,
                english: 'thank you very much',
                dutch: 'hartelijk dank'
            },
            {
                toggle: false,
                english: 'you\'re welcome',
                dutch: 'graag gedaan'
            },
            {
                toggle: false,
                english: 'excuse me',
                dutch: 'neemt u mij niet kwalijk'
            },
            {
                toggle: false,
                english: 'I\'m so sorry',
                dutch: 'het spijt me'
            },
            {
                toggle: false,
                english: 'where?',
                dutch: 'waar?'
            },
            {
                toggle: false,
                english: 'where is/are ...?',
                dutch: 'waar is/zjin ...?'
            },
            {
                toggle: false,
                english: 'when?',
                dutch: 'wanneer?'
            },
            {
                toggle: false,
                english: 'what?',
                dutch: 'wat?'
            },
            {
                toggle: false,
                english: 'how?',
                dutch: 'hoe?'
            },
            {
                toggle: false,
                english: 'how much?',
                dutch: 'hoeveel?'
            },
            {
                toggle: false,
                english: 'which?',
                dutch: 'welk(e)?'
            },
            {
                toggle: false,
                english: 'who?',
                dutch: 'wie?'
            },
            {
                toggle: false,
                english: 'why?',
                dutch: 'waarom?'
            },
            {
                toggle: false,
                english: 'what do you call this?',
                dutch: 'hoe heet dit?'
            },
            {
                toggle: false,
                english: 'what does this means?',
                dutch: 'wat betekent dit?'
            },
            {
                toggle: false,
                english: 'it\'s ...',
                dutch: 'het is ...'
            },
            {
                toggle: false,
                english: 'it\'s not ...',
                dutch: 'het is niet ...'
            },
            {
                toggle: false,
                english: 'there is/are ...',
                dutch: 'er is/zjin ...'
            },
            {
                toggle: false,
                english: 'there is/are no...',
                dutch: 'er is/zjin geen...'
            },
            {
                toggle: false,
                english: 'is/are there any ...?',
                dutch: 'is/zjin er ...'
            },
            {
                toggle: false,
                english: 'is/are there no ...?',
                dutch: 'is is/zjin geen...'
            }
        ];
        return {
            getBasic: function (){
                return basic;
            }
        };
    })
    .factory('prepositions', function (){
        var prepositions = [
            {
                toggle: false,
                english: 'across',
                dutch: 'over'
            },
            {
                toggle: false,
                english: 'after',
                dutch: 'na'
            },
            {
                toggle: false,
                english: 'already',
                dutch: 'al'
            },
            {
                toggle: false,
                english: 'always',
                dutch: 'altijd'
            },
            {
                toggle: false,
                english: 'and',
                dutch: 'en'
            },
            {
                toggle: false,
                english: 'anyone',
                dutch: 'iemand'
            },
            {
                toggle: false,
                english: 'at once',
                dutch: 'dadelijk'
            },
            {
                toggle: false,
                english: 'behind',
                dutch: 'achter'
            },
            {
                toggle: false,
                english: 'beneath',
                dutch: 'onder'
            },
            {
                toggle: false,
                english: 'between',
                dutch: 'tussen'
            },
            {
                toggle: false,
                english: 'down',
                dutch: 'beneden'
            },
            {
                toggle: false,
                english: 'downstairs',
                dutch: 'omlaag'
            },
            {
                toggle: false,
                english: 'during',
                dutch: 'tijdens'
            },
            {
                toggle: false,
                english: 'for',
                dutch: 'voor'
            },
            {
                toggle: false,
                english: 'from',
                dutch: 'van'
            },
            {
                toggle: false,
                english: 'here',
                dutch: 'hier'
            },
            {
                toggle: false,
                english: 'home',
                dutch: 'thuis'
            },
            {
                toggle: false,
                english: 'in',
                dutch: 'in'
            },
            {
                toggle: false,
                english: '(to the) left',
                dutch: 'links(af)'
            },
            {
                toggle: false,
                english: 'near',
                dutch: 'dicht bij'
            },
            {
                toggle: false,
                english: 'never',
                dutch: 'nooit'
            },
            {
                toggle: false,
                english: 'next to',
                dutch: 'naast'
            },
            {
                toggle: false,
                english: 'no one, nobody',
                dutch: 'niemand'
            },
            {
                toggle: false,
                english: 'not',
                dutch: 'niet'
            },
            {
                toggle: false,
                english: 'on top of ...',
                dutch: 'op'
            },
            {
                toggle: false,
                english: 'of',
                dutch: 'van'
            },
            {
                toggle: false,
                english: 'or',
                dutch: 'of'
            },
            {
                toggle: false,
                english: 'outside',
                dutch: 'buiten'
            },
            {
                toggle: false,
                english: 'overther',
                dutch: 'daar'
            },
            {
                toggle: false,
                english: '(to the) right',
                dutch: 'rechts(af)'
            },
            {
                toggle: false,
                english: 'since',
                dutch: 'sinds'
            },
            {
                toggle: false,
                english: 'somebody',
                dutch: 'iemand'
            },
            {
                toggle: false,
                english: 'soon',
                dutch: 'spoedig'
            },
            {
                toggle: false,
                english: 'then',
                dutch: 'dan'
            },
            {
                toggle: false,
                english: 'through',
                dutch: 'door'
            },
            {
                toggle: false,
                english: 'to',
                dutch: 'naar'
            },
            {
                toggle: false,
                english: 'until',
                dutch: 'tot'
            },
            {
                toggle: false,
                english: 'up',
                dutch: 'boven'
            },
            {
                toggle: false,
                english: 'upstairs',
                dutch: 'omhoog'
            },
            {
                toggle: false,
                english: 'with',
                dutch: 'met'
            },
            {
                toggle: false,
                english: 'without',
                dutch: 'zonder'
            },
            {
                toggle: false,
                english: 'with pleasure',
                dutch: 'graag'
            }
        ];
        return {
            getPrepositions: function () {
                return prepositions;
            }
        }
    })
    .factory('adjectives', function (){
        var adjectives = [
            {
                toggle: false,
                english: 'bad',
                dutch: 'slecht'
            },
            {
                toggle: false,
                english: 'beautiful',
                dutch: 'mooi'
            },
            {
                toggle: false,
                english: 'better',
                dutch: 'beter'
            },
            {
                toggle: false,
                english: 'cheap',
                dutch: 'goedkoop'
            },
            {
                toggle: false,
                english: 'close by',
                dutch: 'dichtbij'
            },
            {
                toggle: false,
                english: 'closed',
                dutch: 'dicht'
            },
            {
                toggle: false,
                english: 'cold',
                dutch: 'koud'
            },
            {
                toggle: false,
                english: 'delicious',
                dutch: 'heerlijk'
            },
            {
                toggle: false,
                english: 'difficult',
                dutch: 'moeilijk'
            },
            {
                toggle: false,
                english: 'easy',
                dutch: 'gemmakkelijk'
            },
            {
                toggle: false,
                english: 'empty',
                dutch: 'leeg'
            },
            {
                toggle: false,
                english: 'expensive',
                dutch: 'duur'
            },
            {
                toggle: false,
                english: 'far',
                dutch: 'ver'
            },
            {
                toggle: false,
                english: 'free',
                dutch: 'vrij'
            },
            {
                toggle: false,
                english: 'ful',
                dutch: 'vol'
            },
            {
                toggle: false,
                english: 'good',
                dutch: 'goed'
            },
            {
                toggle: false,
                english: 'heavy',
                dutch: 'zwaar'
            },
            {
                toggle: false,
                english: 'hot',
                dutch: 'warm'
            },
            {
                toggle: false,
                english: 'light',
                dutch: 'licht'
            },
            {
                toggle: false,
                english: 'new',
                dutch: 'nieuw'
            },
            {
                toggle: false,
                english: 'occupied',
                dutch: 'bezet'
            },
            {
                toggle: false,
                english: 'old',
                dutch: 'oud'
            },
            {
                toggle: false,
                english: 'open',
                dutch: 'open'
            },
            {
                toggle: false,
                english: 'quick',
                dutch: 'snel'
            },
            {
                toggle: false,
                english: 'right',
                dutch: 'juist'
            },
            {
                toggle: false,
                english: 'slow',
                dutch: 'langzaam'
            },
            {
                toggle: false,
                english: 'ugly',
                dutch: 'lelijk'
            },
            {
                toggle: false,
                english: 'warm',
                dutch: 'warm'
            },
            {
                toggle: false,
                english: 'wrong',
                dutch: 'verkeerd'
            },
            {
                toggle: false,
                english: 'worse',
                dutch: 'slechter'
            },
            {
                toggle: false,
                english: 'young',
                dutch: 'jong'
            }
        ];
        return {
            getAdjectives: function (){
                return adjectives;
            }
        }
    })
    .factory('languageProblems', function (){
        var languageProblems = [
            {
                toggle: false,
                english: 'I don\'t speak Dutch',
                dutch: 'Ik spreek geen Nederlands'
            },
            {
                toggle: false,
                english: 'I speak only a little Dutch',
                dutch: 'Ik spreek maar een beetje Nederlands'
            },
            {
                toggle: false,
                english: 'I don\'t understand you',
                dutch: 'Ik versta u niet'
            },
            {
                toggle: false,
                english: 'Could you speak more slowly?',
                dutch: 'Kunt u wat langzamer praten?'
            },
            {
                toggle: false,
                english: 'Could you repeat that for me?',
                dutch: 'Kunt u dat nog even herhalen?'
            },
            {
                toggle: false,
                english: 'Do you speak English?',
                dutch: 'Spreekt u Engels?'
            },
            {
                toggle: false,
                english: 'Does anyone here speak English?',
                dutch: 'Spreekt hier iemand Engels?'
            },
            {
                toggle: false,
                english: 'I\'m foreign (m/f)',
                dutch: 'Ik ben buitenlander/buitenlandse'
            },
            {
                toggle: false,
                english: 'I\'m English',
                dutch: 'Ik ben Engels'
            },
            {
                toggle: false,
                english: 'I\'m Irish',
                dutch: 'Ik ben Iers'
            },
            {
                toggle: false,
                english: 'How do you say this in Dutch?',
                dutch: 'Hoe zeg je dit in het Nederlands?'
            },
            {
                toggle: false,
                english: 'Dutch is a difficult language',
                dutch: 'Nederlands is een moeilijke taal'
            },
            {
                toggle: false,
                english: 'How do you pronounce this?',
                dutch: 'Hoe spreek je dit uit?'
            },
            {
                toggle: false,
                english: 'I can\'t read this',
                dutch: 'Dit kan ik niet lezen'
            },
            {
                toggle: false,
                english: 'It\'s going to fast for me',
                dutch: 'Het gaat mij te snel'
            },
            {
                toggle: false,
                english: 'Could you spell it for me/write it down?',
                dutch: 'Kunt u het spellen/opschrijven?'
            },
            {
                toggle: false,
                english: 'Could you translate this for me?',
                dutch: 'Kunt u dit voor mij verlaten?'
            }
        ];
        return {
            getLanguageProblems: function (){
                return languageProblems;
            }
        }
    })
    .factory('greetings', function (){
        var greetings = [
            {
                toggle: false,
                english: 'Good morning',
                dutch: 'Goedemorgen'
            },
            {
                toggle: false,
                english: 'Good afternoon',
                dutch: 'Goedemiddag'
            },
            {
                toggle: false,
                english: 'Good evening',
                dutch: 'Goedenavond'
            },
            {
                toggle: false,
                english: 'Good night',
                dutch: 'Goedenacht'
            },
            {
                toggle: false,
                english: 'Sleep well',
                dutch: 'Welterusten'
            },
            {
                toggle: false,
                english: 'Welcome',
                dutch: 'Welcom'
            },
            {
                toggle: false,
                english: 'Goodbye',
                dutch: 'Tot ziens'
            },
            {
                toggle: false,
                english: 'See you later',
                dutch: 'Tot straks'
            },
            {
                toggle: false,
                english: 'See you tomorrow',
                dutch: 'Tot morgen'
            },
            {
                toggle: false,
                english: 'Have a pleasant journey',
                dutch: 'Goede reis'
            },
            {
                toggle: false,
                english: 'This is Mr ...',
                dutch: 'Dit is the heer ...'
            },
            {
                toggle: false,
                english: 'This is Mrs ...',
                dutch: 'Dit is the mevrouw ...'
            },
            {
                toggle: false,
                english: 'How do you do?',
                dutch: 'Hoe maakt ew heht?'
            },
            {
                toggle: false,
                english: 'Fine, thank you',
                dutch: 'Uitstekend, dank u'
            },
            {
                toggle: false,
                english: 'Nice to meet you',
                dutch: 'Aangenaam'
            },
            {
                toggle: false,
                english: 'Nice to meet you',
                dutch: 'Kennis te maken'
            },
            {
                toggle: false,
                english: 'Hi! How are things going? (pop.)',
                dutch: 'Hallo! Hoe gaat het ermee?'
            },
            {
                toggle: false,
                english: 'What\'s your name?',
                dutch: 'Hoe is uw naam?'
            },
            {
                toggle: false,
                english: 'My name is ...',
                dutch: 'Mijn naam is ...'
            },
            {
                toggle: false,
                english: 'This is my husband',
                dutch: 'Dit is mijn man'
            },
            {
                toggle: false,
                english: 'This is my wife',
                dutch: 'Dit is mijn vrouw'
            },
            {
                toggle: false,
                english: 'This is my son',
                dutch: 'Dit is mijn zoon'
            },
            {
                toggle: false,
                english: 'This is my daughter',
                dutch: 'Dit is mijn dochter'
            },
            {
                toggle: false,
                english: 'This is my father',
                dutch: 'Dit is mijn vader'
            },
            {
                toggle: false,
                english: 'This is my mother',
                dutch: 'Dit is mijn moeder'
            },
            {
                toggle: false,
                english: 'This is my friend',
                dutch: 'Dit is mijn vriend'
            },
            {
                toggle: false,
                english: 'This is my friend',
                dutch: 'Dit is mijn vriendin'
            },
            {
                toggle: false,
                english: 'This is my boy-friend',
                dutch: 'Dit is mijn vriend'
            },
            {
                toggle: false,
                english: 'This is my girl-friend',
                dutch: 'Dit is mijn vriendin'
            },
            {
                toggle: false,
                english: 'Where do you come from?',
                dutch: 'Waar komt u vandaan?'
            },
            {
                toggle: false,
                english: 'I\'m from England',
                dutch: 'Ik kom uit Engeland'
            },
            {
                toggle: false,
                english: 'Did you have a pleasant journey?',
                dutch: 'Hebt u een goede reis gehad?'
            },
            {
                toggle: false,
                english: 'Give my regards to ...',
                dutch: 'Doet u de groeten aan ...'
            }
        ];
        return {
            getGreetings: function () {
                return greetings;
            }
        }
    });