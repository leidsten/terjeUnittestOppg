let charCount = 0;
function count(text, countLetter) {
    charCount = 0;
    if(!checkIfNullOrUndefined(countLetter)) return null;

    text = text.toLowerCase();
    countLetter = countLetter.toLowerCase();

    if (checkIfLetter(countLetter)) {
        searchForCharacter(countLetter, text);
    }
    else {
        searchForCharacter(countLetter, text);
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
    return character >= 'a' && character <= 'z' ||
        character >= 'A' && character <= 'Z' ||
        character == 'æ' || character == 'Æ' ||
        character == 'ø' || character == 'Ø' ||
        character == 'å' || character == 'Å';

}
