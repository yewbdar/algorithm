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


//CHALLENGE 3 : PALINDROME
// eg : isPaledrome('racecar') === 'true'

const isPaledrome = ( str) =>{

   let newStr= str.split('').reverse().join('');

  return newStr === str

}

// CHALLENGE 4 : REVERSE AN INTEGER

const reverseInt = (num) => {
     let newNum =  num.toString().split('').reverse().join('');

     return parseInt(newNum) * Math.sign(num)
}

//CHALLENGE 5 : CAPITALIZE LETTERS

// eg capitalizeLatter('i love you') = I Love You

const capitalizeLatter = (str) => {
    let newStr = str.split(' ').map(word => word.substring(0,1).toUpperCase() + word.substring(1));
    return newStr.join(' ');
}

console.log(capitalizeLatter('i love you'));

