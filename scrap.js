$(document).ready(function () {
    //Var assignments/HTML elements
    let targetDiv = $('#target');
    let promptContainer = $('#prompt-container');
    let yellowBlock = $('#yellow-block');
    let sentenceArea = $('#sentence');
    let feedback = $('#feedback');
    let targetLetter = $('#target-letter');
    let smallKeyboard = $('#keyboard-lower-container');
    let largeKeyboard = $('#keyboard-upper-container');
    let sentenceCounter = 0;
    let characterCounter = 0;
    let sentences = ['ten ate',  // neite ate nee enet ite ate inet ent eate
    'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean',
    'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let sentence = sentences[sentenceCounter];
    let sentLen = sentence.length - 1;
    let charValue = sentence.charCodeAt(characterCounter);

    //Display first sentence
    sentenceArea.text(sentence);

    //Hide large keyboard at start
    largeKeyboard.css('visibility', 'hidden');

    //Display message at the beginning
    // setTimeout(function () {
    //     promptContainer.text('How fast can you type?').remove();

    // }, 500);

    //Show/Hide keyboards
    $(document).keydown(function (e) {

        if (e.which === 16) {

            largeKeyboard.css('visibility', 'visible');

            smallKeyboard.css('visibility', 'hidden');

        };

    });

    $(document).keyup(function (e) {

        if (e.which === 16) {

            largeKeyboard.css('visibility', 'hidden');

            smallKeyboard.css('visibility', 'visible');

        };

    });


    // let keyPressCount = 0;
    
    //Highlight keyboards key background on key press event
    $(document).keypress(function (e) {
        
        console.log(sentLen);
        console.log(sentence[characterCounter]);
        console.log('sentenceCounter is: ', sentenceCounter);
        console.log(sentence[characterCounter]);
        console.log(charValue);
        console.log(characterCounter);
        
        let key = $("#" + e.which);
        key.css('background-color', 'yellow');
        
        //display target letter
        let keyTextValue = key.text();
        targetLetter.text(keyTextValue);

        $(document).keyup(function (e) {

            key.css('background-color', '');

        });

        let keyValue = e.which;
        if (keyValue === charValue) {
            console.log(keyValue)
            let span = $('<span class="glyphicon-ok"> </span>');
            feedback.append(span);
            characterCounter++;
            charValue = sentence.charCodeAt(characterCounter);
            yellowBlock.animate({ left: "+=17.3px" }, 0);
            console.log(charValue);
            if (characterCounter > sentLen) {
                feedback.remove().text();
                sentenceCounter++;
                sentLen++;
                characterCounter++;
                // sentenceArea.remove().text();
                sentenceArea.text(sentence[sentenceCounter]);
                // sentenceArea = addSentence();
                // sentenceArea.text(sentence[sentenceCounter]);
                console.log(sentenceCounter);
                console.log(characterCounter);
                charValue = sentence.charCodeAt(characterCounter);
                // sentenceArea.remove().text();  //sentence
            };

        } else if (keyValue != charValue) {
            let span = $('<span class="glyphicon-remove"> </span>');
            feedback.append(span);
        }

    });

    // addSentence();
    console.log(sentenceArea);

    // function addSentence() {

    //     sentenceCounter++;
    //     sentence = sentences[sentenceCounter + 1];
    //     sentenceArea.append(sentence);
    
    // };
    
    //     // if (sentenceCounter < 5) {
    //     //     sentenceArea.append(sentence + '<br>');
    //     //     sentenceCounter++;
    //     // } else {
    //     //     return;
    //     // };









});

