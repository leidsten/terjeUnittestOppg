function count(text, countLetter) {
    let charCount = 0;
   
    if (!checkIfNullOrUndefined(countLetter))return null;
    
    text = text.toLowerCase();
    countLetter = countLetter.toLowerCase();
    for (let character of text) {
        if (character == countLetter) {
            charCount++;
        }
    }
    return charCount;
}

function checkIfNullOrUndefined(countLetter) {
    if (countLetter != null || countLetter != undefined)return true; 
    return false; 
}

// function checkIfNullOrUndefined(countLetter) {
//     return countLetter === null && countLetter === undefined;
// }
