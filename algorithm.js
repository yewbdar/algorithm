// CHALLENGE 1 : reverse a string

//e.g reverseString('hello') = 'olleh'


const reverseString = (str) => {
    return str.split('').reverse().join('')
};

// console.log(reverseString('hello'));


//CHALLENGE 2 : longest word
// eg longestWord('hello, may name is yewbdar') === 'yewbdar'

const longestWord = (sen) => {
    //get only character
    let wordChar= sen.match(/[a-z0-9]+/g);

    wordChar.sort((a,b) => b.length - a.length);

    let longestWord;
    longestWord = wordChar.filter(item => item.length === wordChar[0].length);

    if(longestWord.length === 1){
        return wordChar[0];

    }else {
        return longestWord;
    }
    // console.log(longestWord)
};
console.log(longestWord('helloii, my name is yewbdar'));