let charCount = 0;
function count(text, countLetter) {
    if(!checkIfNullOrUndefined(countLetter)) return null;
    
    text = text.toLowerCase();
    charCount = 0;
    countLetter = countLetter.toLowerCase();
    if (checkIfLetter(countLetter)) {
        searchForCharacter(countLetter, text)
        console.log("i if")
    }
    else {
        searchForCharacter(countLetter, text)
        console.log("i else")
    }

    return charCount;

}

function checkIfNullOrUndefined(countLetter){
    if(countLetter != null || countLetter != undefined)return true;
    return false;
}

function searchForCharacter(characterToFind, text){
    for (let character of text) {
        if (character == characterToFind) {
            charCount++;
        }
    }
}


function checkIfLetter(character) {
    // character = character.toLowerCase();
    return character >= 'a' && character <= 'z' ||
        character >= 'A' && character <= 'Z' ||
        character == 'æ' || character == 'Æ' ||
        character == 'ø' || character == 'Ø' ||
        character == 'å' || character == 'Å';

}


// Hva kan gå galt?
//stor bokstav -V, tall-V, symbol -V, space -V

//