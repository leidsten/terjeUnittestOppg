function count(text, countLetter) {
    let charCount = 0;
   
 if(!checkIfNullOrUndefined(countLetter, text)) return null;
 
    text = text.toLowerCase();
    countLetter = countLetter.toLowerCase();
    for (let character of text) {
        if (character == countLetter) {
            charCount++;
        }
    }
    return charCount;
}

function checkIfNullOrUndefined(countLetter, text) {
    return (countLetter !== null && countLetter !== undefined) 
    &&(text !== null && text !== undefined) ;
}
