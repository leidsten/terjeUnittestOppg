function count(text, countLetter) {
    text = text.toLowerCase();
    let count = 0;
    if(checkIfLetter(countLetter)){
       countLetter = countLetter.toLowerCase();
        for (let letter of text) {
            if (letter == countLetter) {
                count++;
            }
        }
        return count;

    }
    else return "Can only count letters. Try again.";
}

function checkIfLetter(character){
    // character = character.toLowerCase();
  // return character.toUpperCase() != character.toLowerCase()   -- ditch dette
    return character >= 'a' &&  character <= 'z' || 
    character >= 'A' &&  character <= 'Z' ||
    character == 'æ' || character == 'Æ' || 
    character == 'ø' || character == 'Ø' || 
    character == 'å' || character == 'Å' ;

}


// Hva kan gå galt?
//stor bokstav -V, tall-V, symbol -V, space -V

//