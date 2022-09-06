function count(text, countLetter) {
    let charCount = 0;
   
    if (!checkIfLetterNullOrUndefined(countLetter))return null;
    if(!checkIfTextNullOrUndefined(text)) return null;
    
    text = text.toLowerCase();
    countLetter = countLetter.toLowerCase();
    for (let character of text) {
        if (character == countLetter) {
            charCount++;
        }
    }
    return charCount;
}

function checkIfLetterNullOrUndefined(countLetter) {
    if (countLetter != null || countLetter != undefined)return true; 
    return false; 
}
function checkIfTextNullOrUndefined(text) {
    if (text != null || text != undefined)return true; 
    return false; 
}
// function checkIfNullOrUndefined(countLetter) {
//     return countLetter === null && countLetter === undefined;
// }
