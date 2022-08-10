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
  // return character.toUpperCase() != character.toLowerCase()   -- ditch dette, sjekk ascii
    return character >= 'a' &&  character <= 'z' || character == 'æ' || character == 'ø' || character == 'å';

}


// Hva kan gå galt?
//stor bokstav -V, tall-V, symbol -V, space -V

//