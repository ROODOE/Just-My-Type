                                        //Variables for HTML elements
let target = $('#target');
let promptContainer = $('#prompt-container');
let yellowBlock = $('#yellow-block');
let sentence = $('#sentence');
let feedback = $('#feedback');
let targetLetter = $('#target-letter');
let keyboardUpper = $('#keyboard-upper-container');
let keyboardLower = $('#keyboard-lower-container');
let sentenceCounter = 0;
let characterCounter = 0;
let errorCount = 0;
let characterSumCount = 0;

                                    //Took majority of sentence content out for quicker testing
//ato too nOt enot one totA not anot tOO aNot 
//oat tain nate eate tea anne inant nean 
//anot eat nato inate eat anot tain eat 
// ate ite tent tiet ent ine ene ete ene ate
let sentenceArray = ['ten ate neite ate nee enet ite ate inet ent eate ', 'Too ', 'oat itain ', 'itant eate ', 'nee ene.'],
sentenceArrayLength = sentenceArray.length - 1;
let sentenceArrayIndex = sentenceArray[sentenceCounter];

console.log(sentenceArrayIndex);
console.log(sentenceArrayLength);
                                        //Hide Uppercase keyboard from beginning
keyboardUpper.css('visibility', 'hidden');

                                        //Toggle keyboards when SHIFT is pressed
$(document).keydown(function(e) {
    let key = $('#' + e.keyCode);
    
    if(e.keyCode === 16) {
        
        keyboardUpper.css('visibility', 'visible');
        keyboardLower.css('visibility', 'hidden');
        
    };
    $(document).keyup(function(e) {
        
        if(e.keyCode === 16) {
            keyboardUpper.css('visibility', 'hidden');
            keyboardLower.css('visibility', 'visible');
            
        };
    });
});

                                        //Highlight background when a key is pressed
$(document).keypress(function(e) {
    
    let whichKey = $('#' + e.which);
    whichKey.css('backgroundColor', 'yellow');
    
                                        //Un-highlight background when a key is released
    $(document).keyup(function(e) {
        whichKey.css('backgroundColor', '');
    })
    
});

                                        //Display target letter
let characterIndexLetter = sentenceArrayIndex[characterCounter];
let characterIndexNum = sentenceArrayIndex.charCodeAt(characterCounter);
// console.log(characterIndexNum);
targetLetter.html(characterIndexLetter);

                                        //Display current objective sentence
sentence.html(sentenceArrayIndex);

let startNewTimer = new Date();
//Check for correct keystroke and progress through sentence
$(document).keypress(function(e) {
    console.log(startNewTimer);
                                        //Which key you're pressing
    let keyStroke = e.which;
                                        //If match
    if(keyStroke === characterIndexNum) {
                                        //total character count
        characterSumCount++;
                                        //Display check mark
        let markWahlberg = $('<span></span>').attr({'class':'glyphicon glyphicon-ok', 'aria-hidden':'true' });
        feedback.append(markWahlberg);
                                        //Move highlighter to next letter
        yellowBlock.css({left: '+=17.5'}, 0);
                                        // Increment letter and its KeyCode
        characterCounter += 1;
        characterIndexNum = sentenceArrayIndex.charCodeAt(characterCounter);
        characterIndexLetter = sentenceArrayIndex[characterCounter];
                                        //Display next target letter in the current sentence
        targetLetter.html(characterIndexLetter);
                                        //Just logging some stuff
        console.log(characterIndexNum);
        console.log(characterIndexLetter);
                                        //Checking if current sentence is completed, and if so, starting second sentence.
        if(characterCounter === sentenceArrayIndex.length) {
                                        //Clear feedback and reset highlighter
            feedback.empty();
            
            yellowBlock.css({left: ''}, 0);

            characterCounter = 0;
            sentenceCounter++;
            sentenceArrayIndex = sentenceArray[sentenceCounter];
            sentenceArrayLength++;
            sentence.html(sentenceArrayIndex);
            characterIndexNum = sentenceArrayIndex.charCodeAt(characterCounter);
            characterIndexLetter = sentenceArrayIndex[characterCounter];
            targetLetter.html(characterIndexLetter);
            console.log(sentenceArrayIndex.length);
            console.log(sentenceArrayLength);   
         
        } else if(sentenceArrayLength === 8 && characterCounter === sentenceArrayIndex.length - 1) {
            gameOver();
        }
            
    } else if(keyStroke != characterIndexNum) {
        errorCount += 1;
                                            //Display X for wrong character
        let markWrongberg = $('<span>WRONG!! Get it together, seriously..</span>').attr({'class':'glyphicon glyphicon-remove', 'aria-hidden':'true' });
        feedback.append(markWrongberg);
        console.log(characterSumCount);
        
    };
    
                                            //Record time and WPM and ask for restart
    function gameOver() {
        let elapsedTime = new Date() - start;
        console.log(elapsedTime)
        let howLongYouTyped = elapsedTime / 60000;
        console.log(howLongYouTyped)
        let inMinutes = Math.floor(howLongYouTyped);
        console.log(inMinutes);
        let wpm = characterSumCount / 5 / howLongYouTyped;
        console.log(wpm);
        let tryAgain = confirm("You type" + wpm + " words per minute. You made " + errorCount + " mistakes. Would you ike to try again?");
        if(tryAgain == true) {
            location.reload();
        }
    };
    console.log(characterCounter);
    console.log(sentenceArrayIndex.length);
    
});

// end;
// gameOver();

// let seconds = Math.floor(Date.now() / 1000)
// promptContainer.html(elapsedTime);