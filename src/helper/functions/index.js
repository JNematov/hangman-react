export const Mask = (answer) => {

    let m = "";
    for(let i = 0; i < answer.length; i++){
        m += '-';
    }
    return m;
}

export const UnMask = (guess, word, current) => {
    let unMaskedWord = "";
    if(guess === word){
        return word;
    }

    for(let i = 0; i< word.length; i++){
        if(word.at(i) === guess){
            unMaskedWord += guess;
        }else{
            unMaskedWord += current.at(i);
        }
    }
    return unMaskedWord;

}
